(function() {
  var $jQ, API_URL, BancoGenital, HEIGHT, WIDTH, app, _ref;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  API_URL = '/photos';
  _ref = [1024, 768], WIDTH = _ref[0], HEIGHT = _ref[1];
  BancoGenital = (function() {
    function BancoGenital(viewport, size) {
      this.onResize = __bind(this.onResize, this);
      this.onPhotoClick = __bind(this.onPhotoClick, this);
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
      var mywall;
      this.photoJSONList = photoList;
      this.imgCounter = Math.floor(Math.random() * (this.photoJSONList.length - 1));
      window.addEventListener('resize', this.onResize, false);
      mywall = new Wall("wall", {
        "draggable": true,
        "width": 130,
        "height": 160,
        "inertia": true,
        "printCoordinates": true,
        "rangex": [-300, 300],
        "rangey": [-300, 300],
        callOnUpdate: __bind(function(items) {
          return this.createDOMPhotos(items);
        }, this)
      });
      mywall.initWall();
      return $jQ.zoomooz.setup({
        duration: 500,
        nativeanimation: true
      });
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
        return $jQ(img).on('click', this.onPhotoClick);
      }, this));
    };
    BancoGenital.prototype.onPhotoClick = function(ev) {
      console.log(" inZoom bef -> " + this.inZoom);
      if (!this.inZoom) {
        $jQ(ev.target).attr('src', $jQ(ev.target).data('photo_info').url);
        $jQ(ev.target).zoomTo({
          targetSize: 0.75,
          duration: 600
        });
        this.inZoom = true;
      } else {
        this.inZoom = false;
        $jQ('body').zoomTo({
          targetSize: 0.75,
          duration: 600
        });
      }
      return ev.stopPropagation();
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
