(function() {
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
        callOnUpdate: (function(_this) {
          return function(items) {
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
          $jQ(e.node).text("");
          img = new Element("img[src='" + currPhoto.url_small + "']");
          img.inject(e.node).fade("hide").fade("in");
          $jQ(img).data('photo_info', currPhoto);
          return $jQ(img).mouseup(_this.onPhotoClick);
        };
      })(this));
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

(function() {
  var App, OverlayManager, init;

  OverlayManager = require('overlay/manager');

  App = require('app4');

  init = function() {
    var banco, menu, overlay;
    overlay = new OverlayManager('#overlay');
    overlay.hide();
    banco = new App('#viewport', [window.innerWidth, window.innerHeight]);
    menu = $jQ('#menu');
    menu.show();
    $jQ.getJSON(API_URL, (function(_this) {
      return function(data) {
        return banco.setup(data);
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
    window.overlay = overlay;
    window.banco = banco;
    window.menu = menu;
    return window.$jQ = $jQ;
  };

  module.exports.init = init;

}).call(this);
