# Constants
API_URL = '/photos'
SIZE    = [800,600]

FPS = 60
MAX_FRAME_SKIP = 10
SKIP_TICKS = 1000/FPS

WIDTH = 800
HEIGHT = 600

PHOTO_SIZE =   [25,25]
PHOTO_MARGIN = [5, 5]

class Photo
    constructor: (texture_url) ->
        @geometry = new THREE.PlaneGeometry( PHOTO_SIZE[0], -PHOTO_SIZE[1] , 1 , 1)
        @material = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture(texture_url)})
        @plane    = new THREE.Mesh( @geometry , @material )
        @plane.doubleSided = true
                
#
# Banco Genitalia App
#
class BancoGenital
    constructor: (size)->
        @size   = size
        WIDTH  = @size[0]
        HEIGHT = @size[1]
        
        @rotation_step = 0.05
        
        [@mouseX,@mouseY] = [WIDTH/2,HEIGHT/2]
        @dragging = false
        
        @photoJSONList  = []
        @textureList    = []
        @photos         = []
        
        @cols           = 0
        @rows           = 0
        @c_col          = 0
        @c_row          = 0
        
        @loops = 0
        @nextGameTick = (new Date).getTime()
        
        @scene = new THREE.Scene()        
        @camera = new THREE.OrthographicCamera( 0, 100, 0, 100, -1000, 1000 )
        @scene.add( @camera )
        
        @renderer = new THREE.WebGLRenderer( {antialias: true} )
        @renderer.setSize( WIDTH , HEIGHT )
        @renderer.setClearColorHex(0xEEEEEE, 1.0);
        @renderer.clear()
        
                    
    setup: (photoList) ->
        @photoJSONList    = photoList
        @addPhoto(photo) for photo in @photoJSONList
                
        # Setup Events
        window.addEventListener('resize', @onResize, false)
        document.addEventListener('mousemove', @onMouseMove, false)
        document.addEventListener('mousedown', @onMouseDown, false)
        document.addEventListener('mouseup', @onMouseUp, false)
        
        # Append to page
        $('body').append( @renderer.domElement )

    addPhoto: (photo_json_info) ->
        
        # Check if there's space in this row for this photo 
        if((@c_col*PHOTO_SIZE[0] + @c_col*PHOTO_MARGIN[0]) + PHOTO_SIZE[0] >= WIDTH)
            @c_col = 0
            @c_row++
        
        @c_col++
        
        m_photo = new Photo( photo_json_info.url )
        #m_photo.plane.position.x = START_PADDING[0] + ( @c_col*PHOTO_SIZE[0] + @c_col*PHOTO_MARGIN[0] )
        #m_photo.plane.position.y = START_PADDING[1] + ( @c_row*PHOTO_SIZE[1] + @c_row*PHOTO_MARGIN[1] )
        
        @photos.push( m_photo )
        @scene.add( m_photo.plane )

    # Recalculate position of every photo
    forceRelayout: ->
        numCols = WIDTH/(PHOTO_SIZE[0]+PHOTO_MARGIN[0])
        console.log(numCols)
        n_row = 0
        n_col = 0
        for photo in @photos
            do (photo) ->
                if(n_col > numCols)
                    n_col = 0
                    n_row++
                n_col++
                
                photo.plane.position.x = n_col*PHOTO_SIZE[0] + n_col*PHOTO_MARGIN[0]
                photo.plane.position.y = n_row*PHOTO_SIZE[1] = n_row*PHOTO_SIZE[1]
        
        
    update: ->
#        @cube.rotation.y += (@mouseX-(WIDTH/2))*0.00005;
        
    render: ->
        loops = 0
        
        while( (new Date).getTime() > @nextGameTick and loops < MAX_FRAME_SKIP )
            @update()
            @nextGameTick += SKIP_TICKS
            loops++
        
        @renderer.render( @scene, @camera )
        
    onResize: =>
        [WIDTH,HEIGHT] = [window.innerWidth,window.innerHeight]
        @renderer.setSize( WIDTH, HEIGHT)
        @camera.aspect = WIDTH/HEIGHT
        @camera.updateProjectionMatrix()
        
        @forceRelayout()
        
        
    onMouseMove: (ev) =>
        @mouseX = ev.clientX;
        @mouseY = ev.clientY;
    
    onMouseDown: (ev) ->
        dragging = true
        return
    
    onMouseUp: (ev) ->
        dragging = false
        return
        
    
# Start on documentReady
jQuery ->
    app = new BancoGenital( [window.innerWidth, window.innerHeight] )
    
    gui = new dat.GUI();
    gui.add( app, "rotation_step").min(0.001).max(0.005).step(0.001);
    gui.close();
    
    $.getJSON API_URL , (data) =>
        
        photoBig = data
        #photoBig.push(photo) for photo in data for i in [0..30]
        
        animate = ->
            requestAnimationFrame(animate)
            app.render()
        
        app.setup(photoBig)    
        animate()
        