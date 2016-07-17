(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var App,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

window.zoomSettings = {
  targetsize: 0.9,
  preservescroll: true,
  closeclick: true
};

App = (function() {
  function App(viewport, size) {
    this.onResize = bind(this.onResize, this);
    this.zoomOut = bind(this.zoomOut, this);
    this.zoomIn = bind(this.zoomIn, this);
    this.viewPhoto = bind(this.viewPhoto, this);
    this.onPhotoClick = bind(this.onPhotoClick, this);
    this.moveToCenter = bind(this.moveToCenter, this);
    this.onScrollStart = bind(this.onScrollStart, this);
    this.createDOMPhotos = bind(this.createDOMPhotos, this);
    this.setup = bind(this.setup, this);
    var ref, ref1, ref2;
    this.size = size;
    ref = [this.size[0], this.size[1]], this.WIDTH = ref[0], this.HEIGHT = ref[1];
    ref1 = [120, 180], this.item_width = ref1[0], this.item_height = ref1[1];
    ref2 = [0, 0], this.rows_in_screen = ref2[0], this.cols_in_screen = ref2[1];
    this.photoJSONList = [];
    this.photosDOMList = [];
    this.inZoom = false;
    this.dragged = false;
    this.container = $jQ(viewport);
    this.onResize();
  }

  App.prototype.setup = function(photoList, loading_cb, loaded_cb) {
    var loadingImages;
    this.photoJSONList = photoList;
    this.imgCounter = Math.floor(Math.random() * (this.photoJSONList.length - 1));
    window.addEventListener('resize', $jQ.debounce(300, this.onResize), false);

    /*
    $jQ('#wall').on('mouseup', '.tile', (ev,e ) =>
        @onPhotoClick(ev,e) if not @dragged
    )
     */
    $jQ(document).on('mousewheel', this.onScrollStart.bind(this));
    this.wall = new Wall("wall", {
      "draggable": true,
      "scrollable": false,
      "width": this.item_width,
      "height": this.item_height,
      "speed": 800,
      "inertia": true,
      "inertiaSpeed": 0.9,
      "printCoordinates": false,
      "rangex": [-100, 100],
      "rangey": [-100, 100],
      callOnMouseUp: (function(_this) {
        return function(ev) {};
      })(this),
      callOnMouseDown: (function(_this) {
        return function(ev) {};
      })(this),
      callOnMouseDragged: $jQ.debounce(300, (function(_this) {
        return function(pos, ev) {
          var xDir, yDir;
          xDir = pos[0] > 0 && 1 || -1;
          yDir = pos[1] > 0 && 1 || -1;
          return true;
        };
      })(this)),
      callOnMouseClick: (function(_this) {
        return function(ev) {
          if (_this.wall.getMovement()) {
            return;
          }
          return _this.onPhotoClick(ev);
        };
      })(this),
      callOnUpdate: (function(_this) {
        return function(items) {
          if (items.length === 0) {
            return;
          }
          return _this.createDOMPhotos(items);
        };
      })(this)
    });
    this.wall.initWall();
    loading_cb = loading_cb != null ? loading_cb : $jQ.noop;
    loaded_cb = loaded_cb != null ? loaded_cb : $jQ.noop;
    return loadingImages = $jQ('#wall').imagesLoaded().always(function(instance, images) {
      return loaded_cb(instance, images);
    }).progress(function(instance, images) {
      return loading_cb(instance, images);
    });
  };

  App.prototype.createDOMPhotos = function(items) {
    return items.each((function(_this) {
      return function(e, i) {
        var currPhoto, img;
        if (PHOTO_TILING === 'random') {
          _this.imgCounter = Math.floor(Math.random() * _this.photoJSONList.length);
        } else if (PHOTO_TILING === 'sequential') {
          _this.imgCounter = (_this.photoJSONList.length - 1 + _this.imgCounter++) % _this.photoJSONList.length;
        }
        currPhoto = _this.photoJSONList[_this.imgCounter];
        img = new Element("img[src='" + currPhoto.url_small + "']");
        img.inject(e.node);
        $jQ(e.node).imagesLoaded(function(elem, cb) {
          return $jQ(img).addClass('loaded');
        });
        return $jQ(img).data('photo_info', currPhoto);
      };
    })(this));
  };

  App.prototype.onScrollStart = function(e) {
    var finX, finY, xspeed, yspeed;
    xspeed = e.deltaX * e.deltaFactor;
    yspeed = e.deltaY * e.deltaFactor;
    finX = this.wall.wall.getStyle("left").toInt() + (xspeed * -1);
    finY = this.wall.wall.getStyle("top").toInt() + yspeed;
    this.wall.wall.setStyle("left", finX);
    this.wall.wall.setStyle("top", finY);
    this.wall.moved++;
    this.wall.options.callOnUpdate(this.wall.updateWall());
    e.stopPropagation();
    return false;
  };

  App.prototype.moveToCenter = function(pos) {
    var basePos, diff, middle;
    basePos = this.wall.getCoordinatesFromId(this.wall.getActiveItem());
    middle = [basePos.c + this.cols_in_screen / 2.0, basePos.r + this.rows_in_screen / 2.0].map(Math.floor);
    diff = [middle[0] - pos.c, middle[1] - pos.r];
    return this.wall.moveTo(basePos.c - diff[0], basePos.r - diff[1]);
  };

  App.prototype.onPhotoClick = function(ev, e) {
    var _pos, info, pos, tile;
    this.cTarget = $jQ(ev.target);
    if (this.cTarget.is('img')) {
      this.cTarget = this.cTarget.parent();
    }
    info = $jQ('img', this.cTarget).data('photo_info');
    tile = this.cTarget;
    _pos = tile.attr('rel').split('x').map(Number);
    pos = {
      c: _pos[0],
      r: _pos[1]
    };
    this.moveToCenter(pos);
    return this.viewPhoto(this.cTarget);
  };

  App.prototype.viewPhoto = function(photo) {
    window.overlay.setPage('photoview', photo);
    return window.overlay.show();
  };

  App.prototype.zoomIn = function(photo_el) {
    this.prevTarget = this.cTarget;
    this.inZoom = true;
    $jQ(photo_el).attr('src', $jQ(photo_el).data('photo_info').url);
    $jQ(photo_el).imagesLoaded((function(_this) {
      return function() {
        return _this.wall.normalizePosition();
      };
    })(this));
    return $jQ(photo_el).zoomTo(window.zoomSettings);
  };

  App.prototype.zoomOut = function() {
    this.inZoom = false;
    return $jQ('body').zoomTo(window.zoomSettings);
  };

  App.prototype.onResize = function() {
    var ref, ref1;
    ref = [window.innerWidth, window.innerHeight], this.WIDTH = ref[0], this.HEIGHT = ref[1];
    ref1 = [this.WIDTH / this.item_width, this.HEIGHT / this.item_height].map(Math.floor), this.cols_in_screen = ref1[0], this.rows_in_screen = ref1[1];
    $jQ(this.container).css({
      width: this.WIDTH,
      height: this.HEIGHT
    });
    $jQ('#overlay').css({
      width: this.WIDTH,
      height: this.HEIGHT
    });
    if (this.wall) {
      return this.wall.options.callOnUpdate(this.wall.updateWall());
    }
  };

  return App;

})();

module.exports = App;


},{}],2:[function(require,module,exports){
var App, Loader, OverlayManager, init;

App = require('./app4.coffee');

OverlayManager = require('./overlay/manager.coffee');

Loader = require('./loader.coffee');

init = function() {
  var banco, menu, mloader, onLoadProgress, onLoadedComplete, overlay, prefetch;
  ga('send', 'timing', 'JS Loading Time', 'jsloadtime', Math.round(performance.now()));
  overlay = new OverlayManager('#overlay');
  overlay.hide();
  mloader = new Loader('#loading');
  mloader.loading();
  banco = new App('#viewport', [window.innerWidth, window.innerHeight]);
  menu = $jQ('#menu');
  menu.show();
  prefetch = 30;
  onLoadProgress = function(instance, img) {
    if (img.length > prefetch) {
      return onLoadedComplete(instance, img);
    }
  };
  onLoadedComplete = function(instance, img) {
    var timeSinceLoad;
    if (window.performance) {
      timeSinceLoad = Math.round(performance.now());
      ga('send', 'timing', 'Images loading Time', 'imgloadtime', timeSinceLoad);
    }
    return mloader.complete();
  };
  $jQ.getJSON(API_URL, (function(_this) {
    return function(data) {
      ga('send', 'timing', 'JSON loading Time', 'jsonloadtime', Math.round(performance.now()));
      return banco.setup(data, onLoadProgress, onLoadedComplete);
    };
  })(this));
  $jQ('#menu-mostraoteu').on('click', function(ev) {
    if (overlay.on) {
      overlay.hide();
    } else {
      overlay.setPage('mostraoteu');
      overlay.show();
    }
    ev.stopPropagation();
    return false;
  });
  window.loader = mloader;
  window.overlay = overlay;
  window.banco = banco;
  window.menu = menu;
  return window.$jQ = $jQ;
};

module.exports.init = init;

window.WIDTH = window.innerWidth;

window.HEIGHT = window.innerHeight;

window.PHOTO_TILING = 'sequential';

$.fx.speeds._default = 500;

document.addEventListener('DOMContentLoaded', function() {
  window.$jQ = $;
  $.noConflict();
  return init();
});


},{"./app4.coffee":1,"./loader.coffee":3,"./overlay/manager.coffee":7}],3:[function(require,module,exports){
var Loader,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Loader = (function() {
  function Loader(el) {
    this.complete = bind(this.complete, this);
    this.loading = bind(this.loading, this);
    this.el = $jQ(el);
  }

  Loader.prototype.loading = function() {
    return $jQ(this.el).css({
      opacity: 0.8
    }).show().queue((function(_this) {
      return function() {
        _this.loadingAnimation();
        return $jQ(_this.el).transition({
          opacity: 1
        }).dequeue();
      };
    })(this));
  };

  Loader.prototype.loadingAnimation = function() {
    var cycle, i;
    cycle = ['.....', ':....', '.:...', '..:..', ':..:.', '.:..:', ':.:..', '::.:.', '.::.:', '..::.', '...::', '....:'];
    i = 0;
    return this.load_id = setInterval((function(_this) {
      return function() {
        i = (++i) % cycle.length;
        return $jQ(_this.el).children('p').text(cycle[i]);
      };
    })(this), 1000 / 4);
  };

  Loader.prototype.complete = function() {
    clearInterval(this.load_id);
    return $jQ(this.el).transition({
      opacity: 0
    }).queue((function(_this) {
      return function() {
        return $jQ(_this.el).hide().dequeue();
      };
    })(this));
  };

  return Loader;

})();

module.exports = Loader;


},{}],4:[function(require,module,exports){
var PhotoUploadOvr,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

PhotoUploadOvr = (function() {
  function PhotoUploadOvr(parent, el) {
    this.parent = parent;
    this.el = el;
    this.photoSubmitError = bind(this.photoSubmitError, this);
    this.photoSubmitSuccess = bind(this.photoSubmitSuccess, this);
    this.photoSubmitComplete = bind(this.photoSubmitComplete, this);
    this.thumbnail = bind(this.thumbnail, this);
    this.drop = bind(this.drop, this);
    this.on_hide_complete = bind(this.on_hide_complete, this);
    this.on_show_complete = bind(this.on_show_complete, this);
    this.render = bind(this.render, this);
    this.stop = bind(this.stop, this);
    this.start = bind(this.start, this);
    this.init = false;
    this.delta = 1000.0 / 4;
    this.opts = ['8=>         ', '8==>        ', '8===>       ', '8=====>     ', '8=======>  o', '8======>    ', '8===>       ', '8==>        ', '8>          '];
    this.idx = 0;
    window.upinterval = null;
  }

  PhotoUploadOvr.prototype.start = function(page_data) {
    this.dropzone = new Dropzone('#photo-submit', {
      url: window.API_SUBMIT_PHOTO,
      paramName: 'photo',
      createImageThumbnails: true,
      thumbnailWidth: 300,
      thumbnailHeight: 450,
      previewTemplate: "<div class\"preview file-preview\"></div>",
      parallelUploads: 1,
      maxFilesize: 2,
      acceptedFiles: 'image/*',
      autoProcessQueue: true
    });
    this.dropzone.on("dragenter", this.dragEnter);
    this.dropzone.on("dragleave", this.dragLeave);
    this.dropzone.on("drop", this.drop);
    this.dropzone.on('thumbnail', this.thumbnail);
    this.dropzone.on('success', this.photoSubmitSuccess);
    this.dropzone.on('error', this.photoSubmitError);
    this.dropzone.on('complete', this.photoSubmitComplete);
    return this.setupEvents();
  };

  PhotoUploadOvr.prototype.stop = function() {};

  PhotoUploadOvr.prototype.render = function(page_data) {};

  PhotoUploadOvr.prototype.on_show_complete = function() {};

  PhotoUploadOvr.prototype.on_hide_complete = function() {};

  PhotoUploadOvr.prototype.setupEvents = function() {};

  PhotoUploadOvr.prototype.showDialog = function(ev) {
    return $jQ('#photo-submit').click();
  };

  PhotoUploadOvr.prototype.dragEnter = function(ev) {
    return $jQ('#photo-submit').addClass('drag');
  };

  PhotoUploadOvr.prototype.dragLeave = function(ev) {
    return $jQ('#photo-submit').removeClass('drag');
  };

  PhotoUploadOvr.prototype.drop = function() {
    $jQ('.info').html('');
    $jQ('#photo-submit').css({
      'border-color': '#ffffff'
    });
    return this.dragLeave();
  };

  PhotoUploadOvr.prototype.thumbnail = function(file, dataUrl) {
    var img;
    img = new Image;
    img.src = dataUrl;
    $jQ(img).bind('click', this.showDialog);
    if (($jQ('img', '#photo-submit').length)) {
      $jQ('img', '#photo-submit').attr({
        'src': dataUrl
      });
    } else {
      $jQ('#photo-submit').append(img);
    }
    $jQ('.dz-message').html('');
    return ga('send', 'event', 'upload', 'thumbnail');
  };

  PhotoUploadOvr.prototype.photoSubmitComplete = function(file, data) {
    $jQ('.info').html();
    return $jQ('#photo-submit').css({
      'border-color': '#ffffff'
    });
  };

  PhotoUploadOvr.prototype.photoSubmitSuccess = function(file, data) {
    $jQ('.info').removeClass('label-warning').addClass('label-success').html(" Thanks ! Obrigado ! Merci !  Arigatō ! أوبريغادو 👏 👏 ");
    ga('send', 'event', 'upload', 'complete');
    return setTimeout(function() {
      if (overlay.on) {
        return overlay.hide(0);
      }
    }, 5000);
  };

  PhotoUploadOvr.prototype.photoSubmitError = function(file, data) {
    var msg;
    msg = data;
    if (data.hasOwnProperty('error')) {
      msg = data['error'];
    }
    ga('send', 'event', 'upload', 'error', msg);
    $jQ('.info').removeClass('label-success').addClass('label-warning').html('💩 ' + msg);
    return $jQ('#photo-submit').css({
      'border-color': '#ff0000'
    });
  };

  return PhotoUploadOvr;

})();

module.exports = PhotoUploadOvr;


},{}],5:[function(require,module,exports){
var PhotoView,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

PhotoView = (function() {
  function PhotoView(parent, el1) {
    this.parent = parent;
    this.el = el1;
    this.initComplete = bind(this.initComplete, this);
    this.render = bind(this.render, this);
    this.previous = bind(this.previous, this);
    this.next = bind(this.next, this);
    this.setActiveItem = bind(this.setActiveItem, this);
    this.show = bind(this.show, this);
    this.stop = bind(this.stop, this);
    this.start = bind(this.start, this);
    console.log("photview:Constructor");
    this.init = false;
    this.id = 0;
    this.info = {};
    this.tile = false;
    this.pos = {
      c: 0,
      r: 0
    };
    this.nextId = this.prevId = 0;
    this.nextPhoto = this.prevPhoto = {};
  }

  PhotoView.prototype.start = function(page_data) {
    console.log('photoview:start');
    window.photoview = true;
    this.photoview = true;
    $jQ('.next', this.el).bind('click', this.next);
    return $jQ('.previous', this.el).bind('click', this.previous);
  };

  PhotoView.prototype.stop = function() {
    return console.log("photoview:stop");
  };

  PhotoView.prototype.show = function() {
    return console.log("photoview:show");
  };

  PhotoView.prototype.setActiveItem = function(el) {
    var _pos;
    this.tile = el;
    this.info = $jQ('img', this.tile).data('photo_info');
    _pos = this.tile.attr('rel').split('x').map(Number);
    this.pos = {
      c: _pos[0],
      r: _pos[1]
    };
    this.nextPos = {
      c: this.pos.c + 1,
      r: this.pos.r
    };
    this.prevPos = {
      c: this.pos.c - 1,
      r: this.pos.r
    };
    this.nextTile = $jQ('div[rel=' + this.nextPos.c + 'x' + this.nextPos.r + ']', window.banco.wall.wall);
    this.prevTile = $jQ('div[rel=' + this.prevPos.c + 'x' + this.prevPos.r + ']', window.banco.wall.wall);
    this.nextPhoto = $jQ('img', this.nextTile).data('photo_info');
    this.prevPhoto = $jQ('img', this.prevTile).data('photo_info');
    $jQ('.media.left > .photo', this.el).attr({
      src: this.prevPhoto.url
    });
    $jQ('.media.center > .photo', this.el).attr({
      src: this.info.url
    });
    return $jQ('.media.right > .photo', this.el).attr({
      src: this.nextPhoto.url
    });
  };

  PhotoView.prototype.next = function(ev) {
    var left;
    console.log('next:click');
    left = $jQ('.media.left');
    $jQ('.media.center').removeClass('center').addClass('left');
    $jQ('.media.right').removeClass('right').addClass('center');
    left.removeClass('left').addClass('right');
    window.banco.wall.moveToNext();
    this.setActiveItem(this.nextTile);
    return ev.stopPropagation();
  };

  PhotoView.prototype.previous = function(ev) {
    var right;
    console.log('previous:click');
    right = $jQ('.media.right');
    $jQ('.media.center').removeClass('center').addClass('right');
    $jQ('.media.left').removeClass('left').addClass('center');
    right.removeClass('right').addClass('left');
    window.banco.wall.moveToPrev();
    this.setActiveItem(this.prevTile);
    return ev.stopPropagation();
  };

  PhotoView.prototype.render = function(tile) {
    console.log("photoview:render");
    return this.setActiveItem(tile);
  };

  PhotoView.prototype.initComplete = function(ev) {
    return console.log("photoview:init");
  };

  return PhotoView;

})();

module.exports = PhotoView;


},{}],6:[function(require,module,exports){
var PhotoboothOvr,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

PhotoboothOvr = (function() {
  function PhotoboothOvr(parent, el) {
    this.parent = parent;
    this.el = el;
    this.stop = bind(this.stop, this);
    this.previewCanceled = bind(this.previewCanceled, this);
    this.previewComplete = bind(this.previewComplete, this);
    this.uploadedError = bind(this.uploadedError, this);
    this.uploadedSuccessful = bind(this.uploadedSuccessful, this);
    this.initComplete = bind(this.initComplete, this);
    this.embedComplete = bind(this.embedComplete, this);
    this.render = bind(this.render, this);
    this.stop = bind(this.stop, this);
    this.start = bind(this.start, this);
    this.init = false;
  }

  PhotoboothOvr.prototype.start = function() {
    swfobject.switchOffAutoHideShow();
    swfobject.registerObject("openbooth", "9");
    window.openbooth_options = {
      'enableSound': true,
      'enableFlash': true,
      'enableSettingsButton': true,
      'bandwidth': 0,
      'photoQuality': 100,
      'photoWidth': 459,
      'photoHeight': 344,
      'cameraWidth': 459,
      'cameraHeight': 344,
      'cameraFPS': 25,
      'timerTimeout': 3,
      'timerX': 198,
      'timerY': 250,
      'timerAlpha': 0.6,
      'callbacks': {
        'initComplete': this.initComplete,
        'uploadSuccessful': this.uploadSuccessfull,
        'onError': this.uploadError,
        'previewComplete': this.previewComplete,
        'previewCanceled': this.previewCanceled,
        'videoStart': false,
        'noVideoDevices': false,
        'uploadComplete': false
      },
      'placeholders': {
        'load': '/images/openbooth_allow_dev.jpg',
        'save': '/images/openbooth_saving_dev.jpg',
        'noVideoDevices': '/images/openbooth_nocameras_dev.jpg'
      }
    };
    window.openbooth = swfobject.getObjectById('openbooth');
    return this.openbooth = window.openbooth;
  };

  PhotoboothOvr.prototype.stop = function() {};

  PhotoboothOvr.prototype.render = function(page_data) {};

  PhotoboothOvr.prototype.embedComplete = function() {
    console.log("Embed complete, calling openbooth.init()");
    console.log(this.openbooth);
    this.openbooth.init(window.openbooth_options);
    this.openbooth.camInit();
    return console.log("Called. Waiting for init");
  };

  PhotoboothOvr.prototype.initComplete = function(ev) {
    console.log("Init completed");
    this.openbooth.camInit();
  };

  PhotoboothOvr.prototype.uploadedSuccessful = function(ev) {};

  PhotoboothOvr.prototype.uploadedError = function(ev) {};

  PhotoboothOvr.prototype.previewComplete = function(ev) {};

  PhotoboothOvr.prototype.previewCanceled = function(ev) {};

  PhotoboothOvr.prototype.stop = function() {};

  return PhotoboothOvr;

})();

module.exports = PhotoboothOvr;


},{}],7:[function(require,module,exports){
var OverlayManager, PhotoUpload, PhotoView, Photobooth,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

PhotoUpload = require('./PhotoUpload.coffee');

Photobooth = require('./Photobooth.coffee');

PhotoView = require('./PhotoView.coffee');


/*

    A single overlay , with multiple pages.
    Only one active page per time.

    @cpage = DOM element
    @cobj  = Page Controller

    PageController.start = on first appeareance
    PageController.stop  = on hidden
    PageController.render = on *every* appeareance
 */

OverlayManager = (function() {
  function OverlayManager(el) {
    this.hide = bind(this.hide, this);
    this.show = bind(this.show, this);
    this.setPage = bind(this.setPage, this);
    this.el = $jQ(el);
    this.pages = ['mostraoteu', 'photoview'];
    this.controllers = [new PhotoUpload(this, this.el), new PhotoView(this, this.el)];
    this.el.css({
      width: WIDTH,
      height: HEIGHT
    });
    this.on = false;
    this.init = false;
    $jQ('.overlay').on('click', (function(_this) {
      return function(e) {
        var tgt;
        tgt = $jQ(e.target).attr('class');
        if (tgt === "infoscreen" || tgt === "photoview") {
          return _this.hide();
        }
      };
    })(this));
    $jQ('#mostraoteu').hide();
    $jQ('#photoview').hide();
  }

  OverlayManager.prototype.getController = function(page_name) {
    return this.controllers[this.pages.lastIndexOf(page_name)];
  };


  /* Return active controller class */

  OverlayManager.prototype.getActiveController = function() {
    return this.controllers[this.pages.lastIndexOf(this.cpage_name)];
  };


  /* Change current active page */

  OverlayManager.prototype.setPage = function(new_page, page_data) {
    if (page_data == null) {
      page_data = {};
    }
    if (this.cpage) {
      this.cpage.hide();
    }
    this.cpage = $jQ('#' + new_page);
    this.cpage_name = new_page;
    this.cobj = this.controllers[this.pages.lastIndexOf(new_page)];
    if (!this.cobj.init) {
      this.cobj.start(page_data);
      this.cobj.init = true;
    }
    return this.cobj.render(page_data);
  };


  /* Show overlay */

  OverlayManager.prototype.show = function() {
    $jQ('#menu-mostraoteu').addClass('closebtn');
    this.el.addClass('visible');
    this.cpage.show();
    return this.on = true;
  };


  /* Hide overlay */

  OverlayManager.prototype.hide = function(e) {
    this.el.removeClass('visible');
    this.on = false;
    if (this.cobj) {
      this.cobj.stop();
    }
    return $jQ('#menu-mostraoteu').removeClass('closebtn');
  };

  return OverlayManager;

})();

module.exports = OverlayManager;


},{"./PhotoUpload.coffee":4,"./PhotoView.coffee":5,"./Photobooth.coffee":6}]},{},[2]);
