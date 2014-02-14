
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
    this.gutter = 2;
    this.vertspace = 5;
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
    window.gui     = new dat.GUI();

    console.log(window.sett);
    gui.addColor(sett, 'bg');
    //gui.add(sett,'columnWidth',   10,500);
    gui.add(sett,'per_page',   8,96);
    var gktrl = gui.add(sett,'gutter',    0,50);
    var vktrl = gui.add(sett,'vertspace', 0,50);
    gui.add(sett,'delaytime',  30, 1000);
    gui.add(sett,'scroll_offset', 30 );
    gui.add(sett,'update')

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

}, "app4": function(exports, require, module) {(function() {
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
}, "index": function(exports, require, module) {(function() {
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
}, "overlay/PhotoUpload": function(exports, require, module) {(function() {
  var PhotoUploadOvr,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  PhotoUploadOvr = (function() {
    function PhotoUploadOvr(parent, el) {
      this.parent = parent;
      this.el = el;
      this.photoSubmitError = __bind(this.photoSubmitError, this);
      this.photoSubmitSuccess = __bind(this.photoSubmitSuccess, this);
      this.submitPicture = __bind(this.submitPicture, this);
      this.thumbnail = __bind(this.thumbnail, this);
      this.createThumb = __bind(this.createThumb, this);
      this.on_hide_complete = __bind(this.on_hide_complete, this);
      this.on_show_complete = __bind(this.on_show_complete, this);
      this.stop = __bind(this.stop, this);
      this.start = __bind(this.start, this);
    }

    PhotoUploadOvr.prototype.start = function() {
      $jQ('#photo-submit', this.el).dropzone({
        url: window.API_VERIFY_PHOTO,
        paramName: 'photo',
        createImageThumbnails: true,
        thumbnailWidth: 300,
        thumbnailHeight: 450,
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

    PhotoUploadOvr.prototype.on_show_complete = function() {
      console.log("Uepa, show");
    };

    PhotoUploadOvr.prototype.on_hide_complete = function() {
      console.log("Uepa, hide!");
    };

    PhotoUploadOvr.prototype.setupEvents = function() {
      $jQ('#photo-submit #bt-file').bind('click', (function(_this) {
        return function(ev) {
          console.log(_this);
          console.log("send it");
          return _this.showDialog();
        };
      })(this));
      $jQ('#bt-cancel-photo', this.el).on('click', (function(_this) {
        return function(ev) {
          overlay.hide();
          return ev.stopPropagation();
        };
      })(this));
      return $jQ('#bt-submit-photo').on('click', this.submitPicture);
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
      $jQ('div', '#photo-submit').remove();
      img = new Image;
      img.src = dataUrl;
      if (($jQ('img', '#photo-submit').length)) {
        $jQ('img', '#photo-submit').attr({
          'src': dataUrl
        });
        return $jQ('img', '#photo-submit').bind('click', this.showDialog);
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
          if (xhr.getResponseHeader("content-type").indexOf("application/json")) {
            response = JSON.parse(response);
          }
          if (response['status'] === 'OK') {
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
      xhr.send(photo);
      return false;
    };

    PhotoUploadOvr.prototype.photoSubmitSuccess = function(data) {
      return overlay.hide();
    };

    PhotoUploadOvr.prototype.photoSubmitError = function(data) {
      return $jQ('#photo-submit').css({
        'border-color': '#ff0000'
      });
    };

    return PhotoUploadOvr;

  })();

  module.exports = PhotoUploadOvr;

}).call(this);
}, "overlay/Photobooth": function(exports, require, module) {(function() {
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
      console.log(this.cobj);
      this.cpage_name = new_page;
      this.cobj = this.controllers[this.pages.lastIndexOf(new_page)];
      if (!this.init) {
        this.cobj.start();
        return this.init = true;
      }
    };

    OverlayManager.prototype.show = function() {
      this.el.fadeIn('fast', this.cobj.on_show_complete);
      this.cpage.show();
      return this.on = true;
    };

    OverlayManager.prototype.hide = function() {
      if (this.cobj) {
        this.el.fadeOut('slow', this.cobj.on_hide_complete);
      } else {
        this.el.fadeOut('slow');
      }
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
