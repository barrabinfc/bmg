
(function(/*! Stitch !*/) {
  if (!this.require) {
    var modules = {}, cache = {}, require = function(name, root) {
      var path = expand(root, name), module = cache[path], fn;
      if (module) {
        return module.exports;
      } else if (fn = modules[path] || modules[path = expand(path, './index')]) {
        module = {id: path, exports: {}};
        try {
          cache[path] = module;
          fn(module.exports, function(name) {
            return require(name, dirname(path));
          }, module);
          return module.exports;
        } catch (err) {
          delete cache[path];
          throw err;
        }
      } else {
        throw 'module \'' + name + '\' not found';
      }
    }, expand = function(root, name) {
      var results = [], parts, part;
      if (/^\.\.?(\/|$)/.test(name)) {
        parts = [root, name].join('/').split('/');
      } else {
        parts = name.split('/');
      }
      for (var i = 0, length = parts.length; i < length; i++) {
        part = parts[i];
        if (part == '..') {
          results.pop();
        } else if (part != '.' && part != '') {
          results.push(part);
        }
      }
      return results.join('/');
    }, dirname = function(path) {
      return path.split('/').slice(0, -1).join('/');
    };
    this.require = function(name) {
      return require(name, '');
    }
    this.require.define = function(bundle) {
      for (var key in bundle)
        modules[key] = bundle[key];
    };
  }
  return this.require.define;
}).call(this)({"app4": function(exports, require, module) {(function() {
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
      var _this = this;

      this.photoJSONList = photoList;
      this.imgCounter = Math.floor(Math.random() * (this.photoJSONList.length - 1));
      window.addEventListener('resize', this.onResize, false);
      this.wall = new Wall("wall", {
        "draggable": true,
        "width": 155,
        "height": 230,
        "inertia": true,
        "inertiaSpeed": 0.92,
        "printCoordinates": false,
        "rangex": [-300, 300],
        "rangey": [-300, 300],
        callOnUpdate: function(items) {
          return _this.createDOMPhotos(items);
        },
        callOnMouseDown: this.onWallMouseDown,
        callOnMouseUp: this.onWallMouseUp,
        callOnMouseDragged: this.onWallMouseDragged
      });
      return this.wall.initWall();
    };

    App.prototype.createDOMPhotos = function(items) {
      var _this = this;

      return items.each(function(e, i) {
        var currPhoto, img;

        if (PHOTO_TILING === 'random') {
          _this.imgCounter = Math.floor(Math.random() * _this.photoJSONList.length);
        } else if (PHOTO_TILING === 'sequential') {
          _this.imgCounter = (_this.photoJSONList.length - 1 + _this.imgCounter++) % _this.photoJSONList.length;
        }
        currPhoto = _this.photoJSONList[_this.imgCounter];
        $jQ(e.node).text("");
        img = new Element("img[src='" + currPhoto.url_small + "']");
        img.inject(e.node).fade("hide").fade("in");
        $jQ(img).data('photo_info', currPhoto);
        return $jQ(img).mouseup(_this.onPhotoClick);
      });
    };

    App.prototype.onWallMouseDown = function(e) {
      if (this.inZoom) {
        return e.stop();
      }
    };

    App.prototype.onWallMouseUp = function(e) {
      return this.dragged = false;
    };

    App.prototype.onWallMouseDragged = function(delta, e) {
      if (Math.abs(delta[0]) > 5 || Math.abs(delta[1]) > 5) {
        this.dragged = true;
      }
      if (this.inZoom) {
        return e.stop();
      }
    };

    App.prototype.onPhotoClick = function(ev) {
      if (this.dragged) {
        return;
      }
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
      $jQ('#close-icon').offset(pos).show();
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

}).call(this);
}, "index": function(exports, require, module) {(function() {
  var App, OverlayManager, init;

  OverlayManager = require('overlay/manager');

  App = require('app4');

  init = function() {
    var banco, menu, overlay,
      _this = this;

    overlay = new OverlayManager('#overlay');
    overlay.hide();
    banco = new App('#viewport', [window.innerWidth, window.innerHeight]);
    menu = $jQ('#menu');
    menu.show();
    $jQ.getJSON(API_URL, function(data) {
      return banco.setup(data);
    });
    $jQ('#menu-mostraoteu').on('click', function(ev) {
      if (overlay.on) {
        overlay.hide();
      } else {
        overlay.setPage('photobooth');
        overlay.show();
      }
      return ev.stopPropagation();
    });
    window.overlay = overlay;
    window.banco = banco;
    window.menu = menu;
    return window.$jQ = $jQ;
  };

  module.exports.init = init;

}).call(this);
}, "overlay/PhotoUpload": function(exports, require, module) {(function() {
  var PhotoboothOvr,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  PhotoboothOvr = (function() {
    function PhotoboothOvr(parent, el) {
      this.parent = parent;
      this.el = el;
      this.stop = __bind(this.stop, this);
      this.start = __bind(this.start, this);
    }

    PhotoboothOvr.prototype.start = function() {
      var dropzone;

      $jQ('#photo-submit', this.el).dropzone({
        url: window.API_VERIFY_PHOTO,
        paramName: 'photo',
        createImageThumbnails: true,
        thumbnailWidth: 300,
        thumbnailHeight: 450,
        previewTemplate: "",
        parallelUploads: 1
      });
      dropzone = $jQ('#photo-submit').data('dropzone');
      dropzone.on("dragenter", this.dragEnter);
      dropzone.on("dragleave", this.dragLeave);
      dropzone.on("drop", this.dragLeave);
      dropzone.on('thumbnail', this.thumbnail);
      return this.setupEvents();
    };

    PhotoboothOvr.prototype.stop = function() {};

    PhotoboothOvr.prototype.setupEvents = function() {
      $jQ('#bt-cancel-photo', this.el).on('click', function(ev) {
        overlay.hide();
        return ev.stopPropagation();
      });
      return $jQ('#bt-submit-photo').on('click', this.submitPicture);
    };

    PhotoboothOvr.prototype.dragEnter = function(ev) {
      return $jQ('#photo-submit').addClass('drag');
    };

    PhotoboothOvr.prototype.dragLeave = function(ev) {
      return $jQ('#photo-submit').removeClass('drag');
    };

    PhotoboothOvr.prototype.thumbnail = function(file, dataUrl) {
      var img;

      $jQ('div', '#photo-submit').remove();
      img = new Image;
      img.src = dataUrl;
      if (($jQ('img', '#photo-submit').length)) {
        return $jQ('img', '#photo-submit').attr({
          'src': dataUrl
        });
      } else {
        return $jQ('#photo-submit').append(img);
      }
    };

    PhotoboothOvr.prototype.submitPicture = function(ev) {
      var file, files, photo, xhr,
        _this = this;

      files = $jQ('#photo-submit').data('dropzone').files;
      file = files[files.length - 1];
      photo = new FormData();
      photo.append('photo', file);
      xhr = new XMLHttpRequest();
      xhr.open('POST', window.API_SUBMIT_PHOTO, true);
      xhr.onload = function(e) {
        var response;

        response = xhr.responseText;
        if (xhr.getResponseHeader("content-type").indexOf("application/json")) {
          response = JSON.parse(response);
        }
        if ((response['status'] === 'OK')(_this.photoSubmitSuccess(response))) {

        } else {
          return _this.photoSubmitError(response);
        }
      };
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Cache-Control", "no-cache");
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.setRequestHeader("X-File-Name", file.name);
      xhr.send(photo);
      return false;
    };

    PhotoboothOvr.prototype.photoSubmitSuccess = function(data) {
      console.log(data);
      return overlay.hide();
    };

    PhotoboothOvr.prototype.photoSubmitError = function(data) {
      return console.log(data);
    };

    return PhotoboothOvr;

  })();

  module.exports = PhotoboothOvr;

}).call(this);
}, "overlay/Photobooth": function(exports, require, module) {(function() {
  var PhotoUploadOvr,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  PhotoUploadOvr = (function() {
    function PhotoUploadOvr(parent, el) {
      this.parent = parent;
      this.el = el;
      this.stop = __bind(this.stop, this);
      this.start = __bind(this.start, this);
    }

    PhotoUploadOvr.prototype.start = function() {
      var dropzone;

      $jQ('#photo-submit', this.el).dropzone({
        url: window.API_VERIFY_PHOTO,
        paramName: 'photo',
        createImageThumbnails: true,
        thumbnailWidth: 300,
        thumbnailHeight: 450,
        previewTemplate: "",
        parallelUploads: 1
      });
      dropzone = $jQ('#photo-submit').data('dropzone');
      dropzone.on("dragenter", this.dragEnter);
      dropzone.on("dragleave", this.dragLeave);
      dropzone.on("drop", this.dragLeave);
      dropzone.on('thumbnail', this.thumbnail);
      return this.setupEvents();
    };

    PhotoUploadOvr.prototype.stop = function() {};

    PhotoUploadOvr.prototype.setupEvents = function() {
      $jQ('#bt-cancel-photo', this.el).on('click', function(ev) {
        overlay.hide();
        return ev.stopPropagation();
      });
      return $jQ('#bt-submit-photo').on('click', this.submitPicture);
    };

    PhotoUploadOvr.prototype.dragEnter = function(ev) {
      return $jQ('#photo-submit').addClass('drag');
    };

    PhotoUploadOvr.prototype.dragLeave = function(ev) {
      return $jQ('#photo-submit').removeClass('drag');
    };

    PhotoUploadOvr.prototype.thumbnail = function(file, dataUrl) {
      var img;

      $jQ('div', '#photo-submit').remove();
      img = new Image;
      img.src = dataUrl;
      if (($jQ('img', '#photo-submit').length)) {
        return $jQ('img', '#photo-submit').attr({
          'src': dataUrl
        });
      } else {
        return $jQ('#photo-submit').append(img);
      }
    };

    PhotoUploadOvr.prototype.submitPicture = function(ev) {
      var file, files, photo, xhr,
        _this = this;

      files = $jQ('#photo-submit').data('dropzone').files;
      file = files[files.length - 1];
      photo = new FormData();
      photo.append('photo', file);
      xhr = new XMLHttpRequest();
      xhr.open('POST', window.API_SUBMIT_PHOTO, true);
      xhr.onload = function(e) {
        var response;

        response = xhr.responseText;
        if (xhr.getResponseHeader("content-type").indexOf("application/json")) {
          response = JSON.parse(response);
        }
        if ((response['status'] === 'OK')(_this.photoSubmitSuccess(response))) {

        } else {
          return _this.photoSubmitError(response);
        }
      };
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Cache-Control", "no-cache");
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.setRequestHeader("X-File-Name", file.name);
      xhr.send(photo);
      return false;
    };

    PhotoUploadOvr.prototype.photoSubmitSuccess = function(data) {
      console.log(data);
      return overlay.hide();
    };

    PhotoUploadOvr.prototype.photoSubmitError = function(data) {
      return console.log(data);
    };

    return PhotoUploadOvr;

  })();

  module.exports = PhotoUploadOvr;

}).call(this);
}, "overlay/manager": function(exports, require, module) {(function() {
  var OverlayManager, PhotoUpload, Photobooth,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  PhotoUpload = require('overlay/PhotoUpload');

  Photobooth = require('overlay/Photobooth');

  OverlayManager = (function() {
    function OverlayManager(el) {
      this.hide = __bind(this.hide, this);
      this.show = __bind(this.show, this);
      this.setPage = __bind(this.setPage, this);      this.el = $jQ(el);
      this.pages = ['photobooth', 'mostraoteu'];
      this.objs = [new Photobooth(this, this.el), new PhotoUpload(this, this.el)];
      this.el.css({
        width: WIDTH,
        height: HEIGHT
      });
      this.on = false;
      this.init = false;
    }

    OverlayManager.prototype.setPage = function(new_page) {
      if (this.cpage) {
        this.init.hide();
      }
      this.cpage = $jQ('#' + new_page);
      this.cobj = this.objs[this.pages.lastIndexOf([new_page])];
      if (!this.init) {
        this.cobj.start();
        return this.init = true;
      }
    };

    OverlayManager.prototype.show = function() {
      this.el.fadeIn('fast');
      this.cpage.show();
      return this.on = true;
    };

    OverlayManager.prototype.hide = function() {
      this.el.fadeOut('slow');
      this.on = false;
      if (this.cobj) {
        return this.cobj.stop();
      }
    };

    return OverlayManager;

  })();

  module.exports = OverlayManager;

}).call(this);
}});
