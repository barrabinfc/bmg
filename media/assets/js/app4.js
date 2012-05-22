(function() {
  var $jQ, API_URL, BancoGenital, HEIGHT, WIDTH, app, _ref;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  API_URL = '/photos';
  _ref = [1024, 768], WIDTH = _ref[0], HEIGHT = _ref[1];
  BancoGenital = (function() {
    function BancoGenital(viewport, size) {
      this.onResize = __bind(this.onResize, this);
      this.zoomOut = __bind(this.zoomOut, this);
      this.zoomIn = __bind(this.zoomIn, this);
      this.zoomOut2 = __bind(this.zoomOut2, this);
      this.zoomIn2 = __bind(this.zoomIn2, this);
      this.onPhotoClick = __bind(this.onPhotoClick, this);
      this.onMouseDragged = __bind(this.onMouseDragged, this);
      this.onMouseUp = __bind(this.onMouseUp, this);
      this.onMouseDown = __bind(this.onMouseDown, this);
      this.createDOMPhotos = __bind(this.createDOMPhotos, this);
      this.setup = __bind(this.setup, this);      this.size = size;
      WIDTH = this.size[0];
      HEIGHT = this.size[1];
      this.photoJSONList = [];
      this.photosDOMList = [];
      this.inZoom = false;
      this.container = $jQ(viewport);
      this.onResize();
    }
    BancoGenital.prototype.setup = function(photoList) {
      this.photoJSONList = photoList;
      this.imgCounter = Math.floor(Math.random() * (this.photoJSONList.length - 1));
      window.addEventListener('resize', this.onResize, false);
      this.wall = new Wall("wall", {
        "draggable": true,
        "width": 155,
        "height": 230,
        "inertia": true,
        "inertiaSpeed": 0.95,
        "printCoordinates": true,
        "rangex": [-300, 300],
        "rangey": [-300, 300],
        callOnUpdate: __bind(function(items) {
          return this.createDOMPhotos(items);
        }, this),
        callOnMouseDown: this.onMouseDown,
        callOnMouseUp: this.onMouseUp,
        callOnMouseDragged: this.onMouseDragged
      });
      return this.wall.initWall();
    };
    BancoGenital.prototype.createDOMPhotos = function(items) {
      return items.each(__bind(function(e, i) {
        var currPhoto, img;
        if (this.imgCounter >= this.photoJSONList.length - 1) {
          this.imgCounter = 0;
        } else {
          this.imgCounter++;
        }
        currPhoto = this.photoJSONList[this.imgCounter];
        $jQ(e.node).text("");
        img = new Element("img[src='" + currPhoto.url_small + "']");
        img.inject(e.node).fade("hide").fade("in");
        $jQ(img).data('photo_info', currPhoto);
        return $jQ(img).mouseup(this.onPhotoClick);
      }, this));
    };
    BancoGenital.prototype.onMouseDown = function(e) {
      return console.log("down");
    };
    BancoGenital.prototype.onMouseUp = function(e) {
      console.log("up");
      if (!this.dragged) {
        console.log("Single Click");
      }
      return this.dragged = false;
    };
    BancoGenital.prototype.onMouseDragged = function(delta, e) {
      if (Math.abs(delta[0]) > 5 || Math.abs(delta[1]) > 5) {
        return this.dragged = true;
      }
    };
    BancoGenital.prototype.onPhotoClick = function(ev) {
      if (this.dragged) {
        return;
      }
      this.cTarget = $jQ(ev.target);
      if (!this.inZoom) {
        this.zoomIn(this.cTarget);
        return this.lastTarget = this.cTarget;
      } else {
        if (this.cTarget.attr('url') === this.lastTarget.attr('url')) {
          return this.zoomOut();
        } else {
          this.zoomIn(this.cTarget);
          return this.lastTarget = this.cTarget;
        }
      }
    };
    BancoGenital.prototype.zoomIn2 = function(photo_el) {
      return this.inZoom = true;
    };
    BancoGenital.prototype.zoomOut2 = function(photo_el) {
      return this.inZoom = false;
    };
    BancoGenital.prototype.zoomIn = function(photo_el) {
      var items;
      this.inZoom = true;
      $jQ(photo_el).attr('src', $jQ(photo_el).data('photo_info').url);
      $jQ(photo_el).zoomTo({
        targetSize: 0.75,
        duration: 600
      });
      items = this.wall.updateWall();
      return this.createDOMPhotos(items);
    };
    BancoGenital.prototype.zoomOut = function() {
      this.inZoom = false;
      return $jQ('body').zoomTo({
        targetSize: 0.75,
        duration: 600
      });
    };
    BancoGenital.prototype.onResize = function() {
      var _ref2;
      _ref2 = [window.innerWidth, window.innerHeight], WIDTH = _ref2[0], HEIGHT = _ref2[1];
      return $jQ(this.container).css({
        width: WIDTH,
        height: HEIGHT
      });
    };
    return BancoGenital;
  })();
  $.noConflict();
  app = null;
  $jQ = jQuery;
  $jQ(function() {
    app = new BancoGenital('#viewport', [window.innerWidth, window.innerHeight]);
    return $jQ.getJSON(API_URL, __bind(function(data) {
      var obj, x, _i, _len;
      x = [];
      for (_i = 0, _len = data.length; _i < _len; _i++) {
        obj = data[_i];
        x.push(obj);
      }
      return app.setup(x);
    }, this));
  });
}).call(this);
