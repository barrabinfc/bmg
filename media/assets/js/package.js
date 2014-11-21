
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
}).call(this)({"app-ng": function(exports, require, module) {var Settings = function(){
    this.MEDIA_URL  = "{{ MEDIA_URL }}";
    this.STATIC_URL = "{{ STATIC_URL }}";

    this.API_URL = '/photos/json';
    this.API_SUBMIT_PHOTO = '/photos/upload';
    this.API_VERIFY_PHOTO = '/photos/verify';

    this.bg = '#000';
    this.per_page = 16;
    this.scroll_offset = 30;
    this.gutter = 1.0;
    this.vertspace = 1.0;
    this.columnWidth = 150;
    this.delaytime = 100;

    this.update = function(){
        window.update();
    };

    return this;
};

window.wall_el = $('#genitalia-wall');
window.masonry = undefined;

function setup(){

    window.wall_el = $('#genitalia-wall');
    window.sett    = new Settings();

    /*
    window.gui     = new dat.GUI();

    gui.addColor(sett, 'bg');
    //gui.add(sett,'columnWidth',   10,500);
    gui.add(sett,'per_page',   8,96);
    var gktrl = gui.add(sett,'gutter',    0,50);
    var vktrl = gui.add(sett,'vertspace', 0,50);
    gui.add(sett,'delaytime',  30, 1000);
    gui.add(sett,'scroll_offset', 30 );
    gui.add(sett,'update')
    */

    // Fetch all genitalias
    fetch_genitalias_db();

    // create Wall
    window.masonry = new Masonry( wall_el.get(0), {
        columnWidth: 160,
        itemSelector: '.item',
        gutter: window.sett.gutter,
        isFitWidth: true,
    });

    masonry.bindResize();
}

imagesLoaded( wall_el.get(0), function(){
    var newElements = $( newElements );
});

function update(){
    $('.item').css({'margin-bottom': window.sett.vertspace});
    $('body').css({'background-color': window.sett.bg});
    window.masonry.layout();
    masonry.layout();
}





window.gen_db = [];
window.gen_idx = 0;
function fetch_genitalias_db(){
    $.getJSON( window.sett.API_URL, function(data){
        window.gen_db = data;

        window.gen_idx = Math.floor( Math.random() * gen_db.length );
        console.log("Per page is now -> ", window.sett.per_page)
        next_page();
        next_page();
    });
}


function next_page(){
    // Add photos
    var photos = get_genitalias_paginated();
    var i      = 0;
    for(i=0;i < photos.length; i++){

        (function(){
            // Delay every image a little bit
            var c_idx = i;
            var delay_time = i*window.sett.delaytime; //i*70.0 + ((Math.random()*2)-1);

            setTimeout( $.proxy(function(){
                this.add_genitalia(photos[c_idx]);
                this.masonry.layout();
            },this), delay_time ); //+ (( Math.random()*2.0)-1 )*50);
        })(this);
    }
    masonry.layout();
}

function get_genitalias_paginated(){
    page = gen_db.slice(gen_idx, gen_idx + window.sett.per_page );

    gen_idx = (gen_idx + window.sett.per_page) % gen_db.length;
    //gen_idx += per_page;

    return page;

}


function add_genitalia(gen){
    var el = $('<div class="item"></div>');
    var img = $('<img src="' + gen['url_small'] + '">');
    var t = ($(el).append(img)).get(0);

    $(wall_el).append( t );
    masonry.appended( t );
};

function on_end_page(){
    next_page();000
}

$(window).scroll(function () {
   if ($(window).scrollTop() >= $(document).height() - $(window).height() - window.sett.scroll_offset) {
       next_page();
   }
});


// go
$(document).ready( function(){
    console.log("setup");
    setup();
})

}, "package": function(exports, require, module) {(function() {
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
}});
