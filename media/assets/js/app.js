(function() {
  var API_URL, BancoGenital, FPS, HEIGHT, MAX_FRAME_SKIP, PHOTO_MARGIN, PHOTO_SIZE, Photo, SIZE, SKIP_TICKS, WIDTH;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  API_URL = '/photos';
  SIZE = [800, 600];
  FPS = 60;
  MAX_FRAME_SKIP = 10;
  SKIP_TICKS = 1000 / FPS;
  WIDTH = 800;
  HEIGHT = 600;
  PHOTO_SIZE = [25, 25];
  PHOTO_MARGIN = [5, 5];
  Photo = (function() {
    function Photo(texture_url) {
      this.geometry = new THREE.PlaneGeometry(PHOTO_SIZE[0], -PHOTO_SIZE[1], 1, 1);
      this.material = new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture(texture_url)
      });
      this.plane = new THREE.Mesh(this.geometry, this.material);
      this.plane.doubleSided = true;
    }
    return Photo;
  })();
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
      this.textureList = [];
      this.photos = [];
      this.cols = 0;
      this.rows = 0;
      this.c_col = 0;
      this.c_row = 0;
      this.loops = 0;
      this.nextGameTick = (new Date).getTime();
      this.scene = new THREE.Scene();
      this.camera = new THREE.OrthographicCamera(0, 100, 0, 100, -1000, 1000);
      this.scene.add(this.camera);
      this.renderer = new THREE.WebGLRenderer({
        antialias: true
      });
      this.renderer.setSize(WIDTH, HEIGHT);
      this.renderer.setClearColorHex(0xEEEEEE, 1.0);
      this.renderer.clear();
    }
    BancoGenital.prototype.setup = function(photoList) {
      var photo, _i, _len, _ref;
      this.photoJSONList = photoList;
      _ref = this.photoJSONList;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        photo = _ref[_i];
        this.addPhoto(photo);
      }
      window.addEventListener('resize', this.onResize, false);
      document.addEventListener('mousemove', this.onMouseMove, false);
      document.addEventListener('mousedown', this.onMouseDown, false);
      document.addEventListener('mouseup', this.onMouseUp, false);
      return $('body').append(this.renderer.domElement);
    };
    BancoGenital.prototype.addPhoto = function(photo_json_info) {
      var m_photo;
      if ((this.c_col * PHOTO_SIZE[0] + this.c_col * PHOTO_MARGIN[0]) + PHOTO_SIZE[0] >= WIDTH) {
        this.c_col = 0;
        this.c_row++;
      }
      this.c_col++;
      m_photo = new Photo(photo_json_info.url);
      this.photos.push(m_photo);
      return this.scene.add(m_photo.plane);
    };
    BancoGenital.prototype.forceRelayout = function() {
      var n_col, n_row, numCols, photo, _i, _len, _ref, _results;
      numCols = WIDTH / (PHOTO_SIZE[0] + PHOTO_MARGIN[0]);
      console.log(numCols);
      n_row = 0;
      n_col = 0;
      _ref = this.photos;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        photo = _ref[_i];
        _results.push((function(photo) {
          if (n_col > numCols) {
            n_col = 0;
            n_row++;
          }
          n_col++;
          photo.plane.position.x = n_col * PHOTO_SIZE[0] + n_col * PHOTO_MARGIN[0];
          return photo.plane.position.y = n_row * (PHOTO_SIZE[1] = n_row * PHOTO_SIZE[1]);
        })(photo));
      }
      return _results;
    };
    BancoGenital.prototype.update = function() {};
    BancoGenital.prototype.render = function() {
      var loops;
      loops = 0;
      while ((new Date).getTime() > this.nextGameTick && loops < MAX_FRAME_SKIP) {
        this.update();
        this.nextGameTick += SKIP_TICKS;
        loops++;
      }
      return this.renderer.render(this.scene, this.camera);
    };
    BancoGenital.prototype.onResize = function() {
      var _ref;
      _ref = [window.innerWidth, window.innerHeight], WIDTH = _ref[0], HEIGHT = _ref[1];
      this.renderer.setSize(WIDTH, HEIGHT);
      this.camera.aspect = WIDTH / HEIGHT;
      this.camera.updateProjectionMatrix();
      return this.forceRelayout();
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
    var app, gui;
    app = new BancoGenital([window.innerWidth, window.innerHeight]);
    gui = new dat.GUI();
    gui.add(app, "rotation_step").min(0.001).max(0.005).step(0.001);
    gui.close();
    return $.getJSON(API_URL, __bind(function(data) {
      var animate, photoBig;
      photoBig = data;
      animate = function() {
        requestAnimationFrame(animate);
        return app.render();
      };
      app.setup(photoBig);
      return animate();
    }, this));
  });
}).call(this);
