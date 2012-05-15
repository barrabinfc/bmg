(function() {
  var API_URL, BancoGenital, HEIGHT, WIDTH;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  API_URL = '/photos';
  WIDTH = 0;
  HEIGHT = 0;
  BancoGenital = (function() {
    function BancoGenital(size) {
      this.onMouseMove = __bind(this.onMouseMove, this);
      this.onResize = __bind(this.onResize, this);
      var _ref;
      this.size = size;
      WIDTH = this.size[0];
      HEIGHT = this.size[1];
      this.rotation_step = 0.05;
      _ref = [WIDTH / 2, HEIGHT / 2], this.mouseX = _ref[0], this.mouseY = _ref[1];
      this.dragging = false;
      this.photoJSONList = [];
      this.photosDOMList = [];
      this.container = $('<div id="bancogenital-container" claass="row-fluid"></div>');
    }
    BancoGenital.prototype.setup = function(photoList) {
      var photo, _i, _len, _ref;
      this.photoJSONList = photoList;
      _ref = this.photoJSONList;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        photo = _ref[_i];
        this.createDOMPhoto(photo);
      }
      window.addEventListener('resize', this.onResize, false);
      document.addEventListener('mousemove', this.onMouseMove, false);
      document.addEventListener('mousedown', this.onMouseDown, false);
      document.addEventListener('mouseup', this.onMouseUp, false);
      return $('body').append(this.container);
    };
    BancoGenital.prototype.createDOMPhoto = function(photo_info) {
      var dom_el;
      dom_el = $("<div id='photo_" + photo_info.id + "' class='photo span3'><img src='" + photo_info.url + "'/></div>");
      return this.container.append(dom_el);
    };
    BancoGenital.prototype.onResize = function() {
      var _ref;
      return _ref = [window.innerWidth, window.innerHeight], WIDTH = _ref[0], HEIGHT = _ref[1], _ref;
    };
    BancoGenital.prototype.onMouseMove = function(ev) {
      this.mouseX = ev.clientX;
      return this.mouseY = ev.clientY;
    };
    BancoGenital.prototype.onMouseDown = function(ev) {
      var dragging;
      dragging = true;
    };
    BancoGenital.prototype.onMouseUp = function(ev) {
      var dragging;
      dragging = false;
    };
    return BancoGenital;
  })();
  jQuery(function() {
    var app, data, gui;
    app = new BancoGenital([window.innerWidth, window.innerHeight]);
    gui = new dat.GUI();
    gui.add(app, "rotation_step").min(0.001).max(0.005).step(0.001);
    gui.close();
    data = [
      {
        'url': 'http://placehold.it/260x180',
        'id': 0
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 1
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 2
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 3
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 4
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 5
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 6
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 7
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 8
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 9
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 10
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 11
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 12
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 13
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 14
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 15
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 16
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 17
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 18
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 19
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 20
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 21
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 22
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 23
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 24
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 25
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 26
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 27
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 28
      }, {
        'url': 'http://placehold.it/260x180',
        'id': 29
      }
    ];
    return app.setup(data);
  });
}).call(this);
