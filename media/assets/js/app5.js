(function() {
  var $jQ, API_URL, BancoGenital, HEIGHT, WIDTH, app, _ref;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  API_URL = '/photos';
  _ref = [1024, 768], WIDTH = _ref[0], HEIGHT = _ref[1];
  BancoGenital = (function() {
    function BancoGenital(viewport, size) {
      this.appendTile = __bind(this.appendTile, this);
      this.updateWall = __bind(this.updateWall, this);
      this.setBoundingBox = __bind(this.setBoundingBox, this);
      this.calculateCoordinates = __bind(this.calculateCoordinates, this);
      this.onResize = __bind(this.onResize, this);
      this.onPhotoClick = __bind(this.onPhotoClick, this);
      this.onMouseMove = __bind(this.onMouseMove, this);
      this.onMouseUp = __bind(this.onMouseUp, this);
      this.onMouseDown = __bind(this.onMouseDown, this);
      this.createDOMPhotos = __bind(this.createDOMPhotos, this);
      this.setup = __bind(this.setup, this);
      var _ref2, _ref3, _ref4;
      this.size = size;
      WIDTH = this.size[0];
      HEIGHT = this.size[1];
      this.photoJSONList = [];
      this.photosDOMList = [];
      this.inZoom = false;
      this.coordinates = [];
      this.grid = [];
      _ref2 = [0, 0, 0, 0], this.minx = _ref2[0], this.miny = _ref2[1], this.maxx = _ref2[2], this.maxy = _ref2[3];
      this.rangex = [-500, 500];
      this.rangey = [-500, 500];
      _ref3 = [150, 225], this.tile_w = _ref3[0], this.tile_h = _ref3[1];
      _ref4 = [0, 0], this.startx = _ref4[0], this.starty = _ref4[1];
      this.viewport = $jQ(viewport);
      this.wall = $jQ('#wall');
      this.moved = 0;
    }
    BancoGenital.prototype.setup = function(photoList) {
      var bb, items;
      this.photoJSONList = photoList;
      this.imgCounter = Math.floor(Math.random() * (this.photoJSONList.length - 1));
      window.addEventListener('resize', this.onResize, false);
      this.coordinates = this.calculateCoordinates();
      bb = this.setBoundingBox();
      this.maxx = bb.maxx;
      this.maxy = bb.maxy;
      this.minx = bb.minx;
      this.miny = bb.miny;
      this.wall.click(__bind(function(ev) {
        ev.stopPropagation();
        return this.moved = 0;
      }, this));
      this.wall.mousedown(this.onMouseDown);
      this.wall.mouseup(this.onMouseUp);
      this.wall.mousemove(this.onMouseMove);
      this.wall.css({
        'left': this.startx * this.tile_w,
        'top': this.starty * this.tile_h
      });
      items = this.updateWall();
      return this.createDOMPhotos(items);
    };
    BancoGenital.prototype.createDOMPhotos = function(items) {
      var currPhoto, img, item, _i, _len, _results;
      console.log("Creating " + items.length + " photos...");
      _results = [];
      for (_i = 0, _len = items.length; _i < _len; _i++) {
        item = items[_i];
        if (this.imgCounter >= this.photoJSONList.length - 1) {
          this.imgCounter = 0;
        } else {
          this.imgCounter++;
        }
        currPhoto = this.photoJSONList[this.imgCounter];
        $jQ(item.node).text("");
        img = $("<img>");
        img.attr('src', currPhoto.url_small).appendTo(item.node);
        _results.push($jQ(img).data('photo_info', currPhoto));
      }
      return _results;
    };
    BancoGenital.prototype.onMouseDown = function(ev) {
      ev.stopPropagation();
      this.mousedown = true;
      this.startDragX = ev.pageX;
      this.startDragY = ev.pageY;
      this.xPos = ev.pageX;
      this.yPos = ev.pageY;
      this.startLeft = this.wall.offset().left;
      this.startTop = this.wall.offset().top;
      this._width = this.wall.outerWidth();
      this._height = this.wall.outerWidth();
      return console.log("Down");
    };
    BancoGenital.prototype.onMouseUp = function(ev) {
      ev.stopPropagation();
      console.log("Up");
      if (!dragging) {
        this.onMouseSingleClick;
        this.dragging = false;
      }
      return this.mousedown = false;
    };
    BancoGenital.prototype.onMouseMove = function(ev) {
      if (!this.mousedown) {
        return;
      }
      this.xPos = ev.pageX;
      this.yPos = ev.pageY;
      this.deltaX = this.startDragX - this.xPos;
      this.deltaY = this.startDragY - this.yPos;
      if (Math.abs(this.deltaX) > 2 || Math.abs(this.deltaY) > 2) {
        this.dragging = true;
      }
      return this.wall.css({
        'left': this.startLeft - this.deltaX,
        'top': this.startTop - this.deltaY
      });
    };
    BancoGenital.prototype.onPhotoClick = function(ev) {
      console.log("Photo Click");
      if (this.dragging) {
        return;
      }
      return ev.stopPropagation();
    };
    BancoGenital.prototype.onResize = function() {
      var items, _ref2;
      _ref2 = [window.innerWidth, window.innerHeight], WIDTH = _ref2[0], HEIGHT = _ref2[1];
      $jQ(this.viewport).css({
        width: WIDTH,
        height: HEIGHT
      });
      items = this.updateWall();
      return this.createDOMPhotos(items);
    };
    BancoGenital.prototype.calculateCoordinates = function() {
      var c, coordinates, indice, r, _ref2, _ref3, _ref4, _ref5, _ref6;
      _ref2 = [0, []], indice = _ref2[0], coordinates = _ref2[1];
      for (r = _ref3 = this.rangey[0], _ref4 = this.rangey[1]; _ref3 <= _ref4 ? r <= _ref4 : r >= _ref4; _ref3 <= _ref4 ? r++ : r--) {
        for (c = _ref5 = this.rangex[0], _ref6 = this.rangex[1]; _ref5 <= _ref6 ? c <= _ref6 : c >= _ref6; _ref5 <= _ref6 ? c++ : c--) {
          coordinates[indice] = {
            "c": c,
            "r": r
          };
          if (c === 0 && r === 0) {
            this.id = indice;
          }
          indice++;
        }
      }
      return coordinates;
    };
    BancoGenital.prototype.setBoundingBox = function() {
      var maxx, maxy, minx, miny, vp_cols, vp_coordinate, vp_h, vp_rows, vp_w, _ref2, _ref3, _ref4, _ref5;
      vp_coordinate = this.viewport.offset();
      _ref2 = [this.viewport.outerWidth(true), this.viewport.outerHeight(true)], vp_w = _ref2[0], vp_h = _ref2[1];
      _ref3 = [Math.ceil(vp_w / this.tile_w), Math.ceil(vp_h / this.tile_h)], vp_cols = _ref3[0], vp_rows = _ref3[1];
      _ref4 = [Math.abs(this.rangex[0]) * this.tile_w, Math.abs(this.rangey[0]) * this.tile_h], maxx = _ref4[0], maxy = _ref4[1];
      _ref5 = [(Math.abs(this.rangex[1]) * this.tile_w) + vp_w, (Math.abs(this.rangey[1]) * this.tile_h) + vp_h], minx = _ref5[0], miny = _ref5[1];
      return {
        "minx": minx,
        "miny": miny,
        "maxx": maxx,
        "maxy": maxy
      };
    };
    BancoGenital.prototype.updateWall = function() {
      var i, item, j, newItems, pos, vis_left_col, vis_top_row, vp_cols, vp_coordinate, vp_h, vp_rows, vp_w, wall_cols, wall_coordinate, wall_height, wall_rows, wall_width, _ref2, _ref3, _ref4, _ref5;
      newItems = [];
      vp_coordinate = this.viewport.offset();
      wall_coordinate = this.wall.offset();
      _ref2 = [this.viewport.outerWidth(true), this.viewport.outerHeight(true)], vp_w = _ref2[0], vp_h = _ref2[1];
      _ref3 = [Math.ceil(vp_w / this.tile_w), Math.ceil(vp_h / this.tile_h)], vp_cols = _ref3[0], vp_rows = _ref3[1];
      pos = {
        'left': wall_coordinate.left - vp_coordinate.left,
        'top': wall_coordinate.top - vp_coordinate.top
      };
      vis_left_col = Math.ceil(-pos.left / this.tile_w) - 1;
      vis_top_row = Math.ceil(-pos.top / this.tile_h) - 1;
      console.log(vp_cols, vp_rows);
      for (i = vis_left_col, _ref4 = vis_left_col + vp_cols; vis_left_col <= _ref4 ? i <= _ref4 : i >= _ref4; vis_left_col <= _ref4 ? i++ : i--) {
        for (j = vis_top_row, _ref5 = vis_top_row + vp_rows; vis_top_row <= _ref5 ? j <= _ref5 : j >= _ref5; vis_top_row <= _ref5 ? j++ : j--) {
          if (this.grid[i] === void 0) {
            this.grid[i] = {};
          }
          if (this.grid[i][j] === void 0) {
            item = this.appendTile(i, j);
            if (item.node !== void 0) {
              newItems.push(item);
            }
          }
        }
      }
      wall_width = this.wall.outerWidth(true);
      wall_height = this.wall.outerHeight(true);
      wall_cols = Math.ceil(wall_width / this.tile_w);
      wall_rows = Math.ceil(wall_height / this.tile_h);
      return newItems;
    };
    BancoGenital.prototype.appendTile = function(i, j) {
      var e, range_col, range_row, x, y, _ref2;
      this.grid[i][j] = true;
      range_col = this.rangex;
      range_row = this.rangey;
      if (i < range_col[0] || range_col[1] < i) {
        return {};
      }
      if (j < range_row[0] || range_row[1] < j) {
        return {};
      }
      _ref2 = [i * this.tile_w, j * this.tile_h], x = _ref2[0], y = _ref2[1];
      e = $('<div>').appendTo(this.wall);
      e.addClass('tile').css({
        'position': 'absolute',
        'left': x,
        'top': y,
        'width': this.tile_w,
        'height': this.tile_h
      });
      return {
        "node": e,
        "x": j,
        "y": i
      };
    };
    return BancoGenital;
  })();
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
