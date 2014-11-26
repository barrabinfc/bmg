(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var App,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

App = (function() {
  function App(viewport, size) {
    this.onResize = __bind(this.onResize, this);
    this.zoomOut = __bind(this.zoomOut, this);
    this.zoomIn = __bind(this.zoomIn, this);
    this.onPhotoClick = __bind(this.onPhotoClick, this);
    this.onWallMouseDragged = __bind(this.onWallMouseDragged, this);
    this.onWallMouseUp = __bind(this.onWallMouseUp, this);
    this.onWallMouseDown = __bind(this.onWallMouseDown, this);
    this.createDOMPhotos = __bind(this.createDOMPhotos, this);
    this.setup = __bind(this.setup, this);
    var HEIGHT, WIDTH, _ref;
    this.size = size;
    _ref = [this.size[0], this.size[1]], WIDTH = _ref[0], HEIGHT = _ref[1];
    this.photoJSONList = [];
    this.photosDOMList = [];
    this.inZoom = false;
    this.container = $jQ(viewport);
    this.onResize();
  }

  App.prototype.setup = function(photoList) {
    this.photoJSONList = photoList;
    this.imgCounter = Math.floor(Math.random() * (this.photoJSONList.length - 1));
    window.addEventListener('resize', $jQ.debounce(100, this.onResize), false);
    $jQ('#wall').on('dblclick', '.tile', this.onPhotoClick);
    this.wall = new Wall("wall", {
      "draggable": true,
      "width": 115,
      "height": 170,
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
      })(this),
      callOnMouseDown: this.onWallMouseDown,
      callOnMouseUp: this.onWallMouseUp,
      callOnMouseDragged: this.onWallMouseDragged
    });
    return this.wall.initWall();
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
        return $jQ(img).data('photo_info', currPhoto);
      };
    })(this));
  };

  App.prototype.onWallMouseDown = function(e) {
    this.dragged = false;
  };

  App.prototype.onWallMouseUp = function(e) {
    return false;
  };

  App.prototype.onWallMouseDragged = function(delta, e) {
    if (Math.abs(delta[0]) > 5 || Math.abs(delta[1]) > 5) {
      this.dragged = true;
      return true;
    }
    return false;
  };

  App.prototype.onPhotoClick = function(ev, e) {
    this.cTarget = $jQ(ev.target);
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
    var pos;
    this.prevTarget = this.cTarget;
    this.inZoom = true;
    pos = $jQ(photo_el).offset();
    pos.left = pos.left - 40;
    pos.top = pos.top - 40;
    $jQ(photo_el).attr('src', $jQ(photo_el).data('photo_info').url);
    return $jQ(photo_el).zoomTo({
      targetSize: 0.75,
      duration: 600
    });
  };

  App.prototype.zoomOut = function() {
    this.inZoom = false;
    return $jQ('body').zoomTo({
      targetSize: 0.75,
      duration: 600
    });
  };

  App.prototype.onResize = function() {
    var HEIGHT, WIDTH, _ref;
    _ref = [window.innerWidth, window.innerHeight], WIDTH = _ref[0], HEIGHT = _ref[1];
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
var App, Loader, OverlayManager, init, onFlashready;

App = require('./app4.coffee');

OverlayManager = require('./overlay/manager.coffee');

Loader = require('./loader.coffee');

init = function() {
  var banco, menu, mloader, overlay;
  overlay = new OverlayManager('#overlay');
  overlay.hide();
  mloader = new Loader('#loading');
  mloader.loading();
  banco = new App('#viewport', [window.innerWidth, window.innerHeight]);
  menu = $jQ('#menu');
  menu.show();
  $jQ.getJSON(API_URL, (function(_this) {
    return function(data) {
      return banco.setup(data);
    };
  })(this));
  setTimeout(function() {
    return mloader.complete();
  }, 5000);
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

window.API_URL = '/photos/json';

window.API_SUBMIT_PHOTO = '/photos/upload';

window.API_VERIFY_PHOTO = '/photos/verify';

window.WIDTH = window.innerWidth;

window.HEIGHT = window.innerHeight;

window.PHOTO_TILING = 'random';

document.addEventListener('DOMContentLoaded', function() {
  window.$jQ = $;
  $.noConflict();
  return init();
});


/*
 This function cannot be renamed.
 OpenBooth will always automatically call "onFlashReady" upon initializing itself.
 */

onFlashready = function() {
  console.log("Openbooth loaded");
  return setTimeout(function() {
    return window.overlay.getController('photobooth').embedComplete();
  }, 500);
};



},{"./app4.coffee":1,"./loader.coffee":3,"./overlay/manager.coffee":6}],3:[function(require,module,exports){
var Loader,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Loader = (function() {
  function Loader(el) {
    this.complete = __bind(this.complete, this);
    this.el = $jQ(el);
  }

  Loader.prototype.loading = function() {
    return $jQ(this.el).css({
      opacity: 0.8
    }).show().queue(function() {
      return $jQ(this).transition({
        opacity: 1
      }).dequeue();
    });
  };

  Loader.prototype.complete = function() {
    return $jQ(this.el).transition({
      opacity: 0
    }).queue(function() {
      return $jQ(this).hide().dequeue();
    });
  };

  return Loader;

})();

module.exports = Loader;



},{}],4:[function(require,module,exports){
var PhotoUploadOvr,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

PhotoUploadOvr = (function() {
  function PhotoUploadOvr(parent, el) {
    this.parent = parent;
    this.el = el;
    this.photoSubmitError = __bind(this.photoSubmitError, this);
    this.photoSubmitSuccess = __bind(this.photoSubmitSuccess, this);
    this.photoSubmitProgress = __bind(this.photoSubmitProgress, this);
    this.stopProgressBar = __bind(this.stopProgressBar, this);
    this.startProgressBar = __bind(this.startProgressBar, this);
    this.submitPicture = __bind(this.submitPicture, this);
    this.thumbnail = __bind(this.thumbnail, this);
    this.createThumb = __bind(this.createThumb, this);
    this.on_hide_complete = __bind(this.on_hide_complete, this);
    this.on_show_complete = __bind(this.on_show_complete, this);
    this.stop = __bind(this.stop, this);
    this.start = __bind(this.start, this);
    this.delta = 1000.0 / 4;
    this.opts = ['8=>         ', '8==>        ', '8===>       ', '8=====>     ', '8=======>  o', '8======>    ', '8===>       ', '8==>        ', '8>          '];
    this.idx = 0;
    window.upinterval = null;
  }

  PhotoUploadOvr.prototype.start = function() {
    $jQ('#photo-submit', this.el).dropzone({
      url: window.API_VERIFY_PHOTO,
      paramName: 'photo',
      createImageThumbnails: true,
      thumbnailWidth: 300,
      thumbnailHeight: 450,
      previewTemplate: "<div class\"preview file-preview\"></div>",
      parallelUploads: 1,
      acceptedFiles: 'image/*'
    });
    this.dropzone = $jQ('#photo-submit').data('dropzone');
    this.dropzone.on("dragenter", this.dragEnter);
    this.dropzone.on("dragleave", this.dragLeave);
    this.dropzone.on("drop", this.dragLeave);
    this.dropzone.on('thumbnail', this.thumbnail);
    return this.setupEvents();
  };

  PhotoUploadOvr.prototype.stop = function() {};

  PhotoUploadOvr.prototype.on_show_complete = function() {};

  PhotoUploadOvr.prototype.on_hide_complete = function() {};

  PhotoUploadOvr.prototype.setupEvents = function() {
    $jQ('#photo-submit #bt-file').bind('click', (function(_this) {
      return function(ev) {
        return _this.showDialog();
      };
    })(this));
    $jQ('#bt-cancel-photo', this.el).on('click', (function(_this) {
      return function(ev) {
        overlay.hide();
        return ev.stopPropagation();
      };
    })(this));
    return $jQ('#bt-submit-photo').on('click', (function(_this) {
      return function(ev) {
        if (_this.upprogress) {
          return;
        }
        if ($jQ('#photo-submit').data('dropzone').files.length === 0) {
          _this.showDialog();
        }
        return _this.submitPicture();
      };
    })(this));
  };

  PhotoUploadOvr.prototype.showDialog = function(ev) {
    return $jQ('#photo-submit').click();
  };

  PhotoUploadOvr.prototype.dragEnter = function(ev) {
    return $jQ('#photo-submit').addClass('drag');
  };

  PhotoUploadOvr.prototype.dragLeave = function(ev) {
    return $jQ('#photo-submit').removeClass('drag');
  };

  PhotoUploadOvr.prototype.createThumb = function(file) {
    var fileReader;
    fileReader = new FileReader;
    fileReader.onload = (function(_this) {
      return function() {
        var img;
        img = new Image;
        img.onload = function() {
          var canvas, ctx, h, thumb, w;
          canvas = document.createElement("canvas");
          ctx = canvas.getContext("2d");
          w = img.width;
          h = img.height;
          ctx.drawImage(img, 0, 0, w, h, 0, 0, w, h);
          thumb = canvas.toDataURL("image/png");
          return _this.dropzone.emit('thumbnail', file, thumb);
        };
        return img.src = fileReader.result;
      };
    })(this);
    return fileReader.readAsDataURL(file);
  };

  PhotoUploadOvr.prototype.thumbnail = function(file, dataUrl) {
    var img;
    $jQ('.message', '#photo-submit').hide();
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

  PhotoUploadOvr.prototype.submitPicture = function(ev) {
    var file, files, photo, that, xhr;
    files = $jQ('#photo-submit').data('dropzone').files;
    file = files[files.length - 1];
    photo = new FormData();
    photo.append('photo', file);
    xhr = new XMLHttpRequest();
    xhr.open('POST', window.API_SUBMIT_PHOTO, true);
    that = this;
    xhr.onload = (function(_this) {
      return function(e) {
        var response;
        response = xhr.responseText;
        response = JSON.parse(response);
        _this.photoSubmitProgress('end');
        if (response.status === "OK") {
          return _this.photoSubmitSuccess(response);
        } else {
          return _this.photoSubmitError(response);
        }
      };
    })(this);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.setRequestHeader("X-File-Name", file.name);
    this.photoSubmitProgress('start');
    xhr.send(photo);
    return false;
  };

  PhotoUploadOvr.prototype.startProgressBar = function() {
    $jQ('#bt-submit-photo').addClass('upprogress');
    window.upinterval = setInterval((function(_this) {
      return function() {
        var txt;
        _this.idx = (_this.idx + 1) % _this.opts.length;
        txt = _this.opts[_this.idx];
        return $jQ('#bt-submit-photo').text(txt);
      };
    })(this), this.delta);
    return console.log(window.upinterval);
  };

  PhotoUploadOvr.prototype.stopProgressBar = function() {
    clearInterval(window.upinterval);
    $jQ('#bt-submit-photo').text('ok :D');
    return setTimeout(function() {
      return $jQ('#bt-submit-photo').removeClass('upprogress').text('upload');
    }, 3000);
  };

  PhotoUploadOvr.prototype.photoSubmitProgress = function(eof) {
    if (eof === 'start') {
      this.upprogress = true;
      return this.startProgressBar();
    } else if (eof === 'end') {
      this.upprogress = false;
      return this.stopProgressBar();
    }
  };

  PhotoUploadOvr.prototype.photoSubmitSuccess = function(data) {
    return setTimeout(function() {
      return overlay.hide(0);
    }, 1000);
  };

  PhotoUploadOvr.prototype.photoSubmitError = function(data) {
    return $jQ('#photo-submit').css({
      'border-color': '#ff0000'
    });
  };

  return PhotoUploadOvr;

})();

module.exports = PhotoUploadOvr;



},{}],5:[function(require,module,exports){
var PhotoboothOvr,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

PhotoboothOvr = (function() {
  function PhotoboothOvr(parent, el) {
    this.parent = parent;
    this.el = el;
    this.stop = __bind(this.stop, this);
    this.previewCanceled = __bind(this.previewCanceled, this);
    this.previewComplete = __bind(this.previewComplete, this);
    this.uploadedError = __bind(this.uploadedError, this);
    this.uploadedSuccessful = __bind(this.uploadedSuccessful, this);
    this.initComplete = __bind(this.initComplete, this);
    this.embedComplete = __bind(this.embedComplete, this);
    this.start = __bind(this.start, this);
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
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

PhotoUpload = require('./PhotoUpload.coffee');

Photobooth = require('./Photobooth.coffee');

OverlayManager = (function() {
  function OverlayManager(el) {
    this.hide = __bind(this.hide, this);
    this.show = __bind(this.show, this);
    this.setPage = __bind(this.setPage, this);
    this.el = $jQ(el);
    this.pages = ['photobooth', 'mostraoteu'];
    this.controllers = [new Photobooth(this, this.el), new PhotoUpload(this, this.el)];
    this.el.css({
      width: WIDTH,
      height: HEIGHT
    });
    this.on = false;
    this.init = false;
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
        var _ref;
        $jQ(this).hide().dequeue();
        return (_ref = this.cobj) != null ? typeof _ref.on_hide_complete === "function" ? _ref.on_hide_complete() : void 0 : void 0;
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
      return this.cobj.stop();
    }
  };

  return OverlayManager;

})();

module.exports = OverlayManager;



},{"./PhotoUpload.coffee":4,"./Photobooth.coffee":5}]},{},[2]);
