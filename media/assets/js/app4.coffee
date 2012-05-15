# Constants
API_URL = '/photos'

[WIDTH,HEIGHT] = [1024,768];
                
#
# Banco Genitalia App
#
class BancoGenital
    constructor: (viewport,size) ->
        @size   = size
        WIDTH   = @size[0]
        HEIGHT  = @size[1]   
                
        @photoJSONList  = []
        @photosDOMList  = []
        @inZoom         = false
        
        @container = $jQ(viewport)
        @onResize()
        
    setup: (photoList) =>
        @photoJSONList    = photoList
        
        @imgCounter = Math.floor( Math.random() * (@photoJSONList.length - 1) )
        
        # Setup Events
        window.addEventListener('resize', @onResize, false)
        
        mywall = new Wall("wall", {
                        "draggable":true,
                        "width":130,
                        "height":160,
                        "inertia": true,
                        "printCoordinates":true,
                        "rangex":[-300,300],
                        "rangey":[-300,300],
                        callOnUpdate:  (items) => @createDOMPhotos(items) })
                    
        # Init Wall
        mywall.initWall();
        
        $jQ.zoomooz.setup({duration: 500, nativeanimation: true})
    
    createDOMPhotos: (items) =>
        items.each( (e,i) =>
            if(@imgCounter >= @photoJSONList.length-1)
                @imgCounter = 0
            else
                @imgCounter++
            
            currPhoto = @photoJSONList[@imgCounter]
            
            $jQ(e.node).text("")
            img = new Element("img[src='#{currPhoto.url_small}']")
            img.inject(e.node).fade("hide").fade("in");
            
            $jQ(img).data('photo_info', currPhoto)
            $jQ(img).on('click', @onPhotoClick)
        )
    
    onPhotoClick: (ev) =>
        console.log(" inZoom bef -> #{@inZoom}")
        if not @inZoom
            $jQ(ev.target).attr('src', $jQ(ev.target).data('photo_info').url)
            $jQ(ev.target).zoomTo({targetSize: 0.75, duration: 600})
            @inZoom = true
        else
            @inZoom = false
            $jQ('body').zoomTo({targetSize: 0.75, duration: 600})
        
        ev.stopPropagation()

    onResize: =>
        [WIDTH,HEIGHT] = [window.innerWidth, window.innerHeight]
        $jQ(@container).css({width: WIDTH, height: HEIGHT})


# Start on documentReady
$.noConflict()

app = null
$jQ = jQuery
$jQ ->
    app = new BancoGenital( '#viewport', [window.innerWidth, window.innerHeight] )

    $jQ.getJSON API_URL , (data) =>
        x = []
        x.push(obj) for obj in data
        app.setup x