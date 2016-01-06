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
    this.onPhotoClick = bind(this.onPhotoClick, this);
    this.onScrollStart = bind(this.onScrollStart, this);
    this.createDOMPhotos = bind(this.createDOMPhotos, this);
    this.setup = bind(this.setup, this);
    var HEIGHT, WIDTH, ref;
    this.size = size;
    ref = [this.size[0], this.size[1]], WIDTH = ref[0], HEIGHT = ref[1];
    this.photoJSONList = [];
    this.photosDOMList = [];
    this.inZoom = false;
    this.container = $jQ(viewport);
    this.onResize();
  }

  App.prototype.setup = function(photoList, loading_cb, loaded_cb) {
    var loadingImages;
    this.photoJSONList = photoList;
    this.imgCounter = Math.floor(Math.random() * (this.photoJSONList.length - 1));
    window.addEventListener('resize', $jQ.debounce(100, this.onResize), false);
    $jQ('#wall').on('mouseup', '.tile', (function(_this) {
      return function(ev, e) {
        if (!_this.dragged) {
          return _this.onPhotoClick(ev, e);
        }
      };
    })(this));
    $jQ(document).on('mousewheel', this.onScrollStart.bind(this));
    this.wall = new Wall("wall", {
      "draggable": false,
      "scrollable": true,
      "width": 120,
      "height": 180,
      "speed": 800,
      "inertia": true,
      "inertiaSpeed": 0.93,
      "printCoordinates": false,
      "rangex": [-100, 100],
      "rangey": [-100, 100],
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

  App.prototype.onPhotoClick = function(ev, e) {
    this.cTarget = $jQ(ev.target);
    if (this.cTarget.is('div')) {
      this.cTarget = this.cTarget.children();
    }
    if (!this.inZoom) {
      return this.zoomIn(this.cTarget);
    } else {
      if (this.cTarget.attr('src') === this.prevTarget.attr('src')) {
        return this.zoomOut();
      } else {
        return this.zoomIn(this.cTarget);
      }
    }
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
    var HEIGHT, WIDTH, ref;
    ref = [window.innerWidth, window.innerHeight], WIDTH = ref[0], HEIGHT = ref[1];
    $jQ(this.container).css({
      width: WIDTH,
      height: HEIGHT
    });
    return $jQ('#overlay').css({
      width: WIDTH,
      height: HEIGHT
    });
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
  overlay = new OverlayManager('#overlay');
  overlay.hide();
  mloader = new Loader('#loading');
  mloader.loading();
  banco = new App('#viewport', [window.innerWidth, window.innerHeight]);
  menu = $jQ('#menu');
  menu.show();
  prefetch = 12;
  onLoadProgress = function(instance, img) {
    if (img.length > prefetch) {
      return onLoadedComplete(instance, img);
    }
  };
  onLoadedComplete = function(instance, img) {
    return setTimeout(mloader.complete, 600);
  };
  $jQ.getJSON(API_URL, (function(_this) {
    return function(data) {
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


/*
 This function cannot be renamed.
 OpenBooth will always automatically call "onFlashReady" upon initializing itself.
onFlashready = ->
    setTimeout( ->
        window.overlay.getController('photobooth').embedComplete()
    , 500 )
 */


},{"./app4.coffee":1,"./loader.coffee":3,"./overlay/manager.coffee":6}],3:[function(require,module,exports){
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
    cycle = ['.:.:.', ':.:.:', '.:.:.'];
    i = 0;
    return this.load_id = setInterval((function(_this) {
      return function() {
        i = (++i) % cycle.length;
        return $jQ(_this.el).children('p').text(cycle[i]);
      };
    })(this), 1000 / 8);
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
    this.stop = bind(this.stop, this);
    this.start = bind(this.start, this);
    this.delta = 1000.0 / 4;
    this.opts = ['8=>         ', '8==>        ', '8===>       ', '8=====>     ', '8=======>  o', '8======>    ', '8===>       ', '8==>        ', '8>          '];
    this.idx = 0;
    window.upinterval = null;
  }

  PhotoUploadOvr.prototype.start = function() {
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

  PhotoUploadOvr.prototype.on_show_complete = function() {
    console.log('Hello upload', this.dropzone);
  };

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
      return $jQ('img', '#photo-submit').attr({
        'src': dataUrl
      });
    } else {
      return $jQ('#photo-submit').append(img);
    }
  };

  PhotoUploadOvr.prototype.photoSubmitComplete = function(file, data) {};

  PhotoUploadOvr.prototype.photoSubmitSuccess = function(file, data) {
    $jQ('.info').removeClass('label-warning').addClass('label-success').html(" Thanks ! Obrigado ! Merci !  Arigatō ! أوبريغادو 👏 👏 ");
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
    $jQ('.info').removeClass('label-success').addClass('label-warning').html('💩 ' + msg);
    return $jQ('#photo-submit').css({
      'border-color': '#ff0000'
    });
  };

  return PhotoUploadOvr;

})();

module.exports = PhotoUploadOvr;


},{}],5:[function(require,module,exports){
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
    this.start = bind(this.start, this);
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


},{}],6:[function(require,module,exports){
var OverlayManager, PhotoUpload, Photobooth,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

PhotoUpload = require('./PhotoUpload.coffee');

Photobooth = require('./Photobooth.coffee');

OverlayManager = (function() {
  function OverlayManager(el) {
    this.hide = bind(this.hide, this);
    this.show = bind(this.show, this);
    this.setPage = bind(this.setPage, this);
    this.el = $jQ(el);
    this.pages = ['photobooth', 'mostraoteu'];
    this.controllers = [new Photobooth(this, this.el), new PhotoUpload(this, this.el)];
    this.el.css({
      width: WIDTH,
      height: HEIGHT
    });
    this.on = false;
    this.init = false;
    $jQ('.overlay-close').on('click', this.hide);
  }

  OverlayManager.prototype.getController = function(page_name) {
    return this.controllers[this.pages.lastIndexOf(page_name)];
  };

  OverlayManager.prototype.getActiveController = function() {
    return this.controllers[this.pages.lastIndexOf(this.cpage_name)];
  };

  OverlayManager.prototype.setPage = function(new_page) {
    if (this.cpage) {
      this.cpage.hide();
    }
    this.cpage = $jQ('#' + new_page);
    this.cpage_name = new_page;
    this.cobj = this.controllers[this.pages.lastIndexOf(new_page)];
    if (!this.init) {
      this.cobj.start();
      return this.init = true;
    }
  };

  OverlayManager.prototype.show = function() {
    $jQ('#menu-mostraoteu').addClass('closebtn');
    this.el.show().transition({
      opacity: 1
    });
    this.cpage.show();
    return this.on = true;
  };

  OverlayManager.prototype.hide = function() {
    if (this.cobj) {
      this.el.transition({
        opacity: 0
      }).queue(function() {
        var ref;
        $jQ(this).hide().dequeue();
        return (ref = this.cobj) != null ? typeof ref.on_hide_complete === "function" ? ref.on_hide_complete() : void 0 : void 0;
      });
    } else {
      this.el.transition({
        opacity: 0
      }).queue(function() {
        return $jQ(this).hide().dequeue();
      });
    }
    this.on = false;
    if (this.cobj) {
      this.cobj.stop();
    }
    return $jQ('#menu-mostraoteu').removeClass('closebtn');
  };

  return OverlayManager;

})();

module.exports = OverlayManager;


},{"./PhotoUpload.coffee":4,"./Photobooth.coffee":5}]},{},[2]);
