# Constants
API_URL = '/photos'

[WIDTH,HEIGHT] = [window.innerWidth,window.innerHeight];
SESSIONS       = ['startmessage','wall','mostraoteu','about']

#
# Banco Genitalia App
#
class BancoGenital
    constructor: (viewport,size) ->
        @size   = size
        [WIDTH,HEIGHT] = [ @size[0], @size[1]]

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
        
        @wall = new Wall("wall", {
                        "draggable":true,
                        "width":155,
                        "height":230,
                        "inertia": true,
                        "inertiaSpeed": 0.92,
                        "printCoordinates":true,
                        "rangex":[-300,300],
                        "rangey":[-300,300],
                        callOnUpdate:  (items) => @createDOMPhotos(items),
                        callOnMouseDown: @onMouseDown,
                        callOnMouseUp: @onMouseUp,
                        callOnMouseDragged: @onMouseDragged })

        # Init Wall
        @wall.initWall();



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
            $jQ(img).mouseup(@onPhotoClick)
        )
        
    onMouseDown: (e) =>
        

    onMouseUp: (e) =>
        @dragged = false
        #ev.stopPropagation()
    
    onMouseDragged: (delta,e) =>
        if(Math.abs(delta[0]) > 5 || Math.abs(delta[1]) > 5)            
            @dragged = true

    onPhotoClick: (ev) =>
        return if @dragged

        @cTarget = $jQ(ev.target)
        if not @inZoom
            @zoomIn( @cTarget )
            @lastTarget = @cTarget
        else
            if @cTarget.attr('url') == @lastTarget.attr('url')
                @zoomOut()
            else
                @zoomIn( @cTarget )
                @lastTarget = @cTarget

        #ev.stopPropagation()

    zoomIn: (photo_el) =>
        @inZoom = true
        #clone = $jQ(photo_el).clone()
        #clone.attr('src', $jQ(photo_el).data('photo_info').url)
        #clone.data('photo_info', $jQ(photo_el).data('photo_info'))

        #clone.appendTo( $jQ(photo_el).parent() )
        $jQ(photo_el).attr('src', $jQ(photo_el).data('photo_info').url )

        #$jQ(photo_el).attr('src', $jQ(photo_el).data('photo_info').url)
        #$jQ(photo_el).zoomTo({targetSize: 0.75, duration: 600})
        $jQ(photo_el).zoomTo({targetSize: 0.75, duration: 600})

        #items = @wall.updateWall()
        #@createDOMPhotos(items)

    zoomOut: =>
        @inZoom = false
        $jQ('body').zoomTo({targetSize: 0.75, duration: 600})        

    onResize: =>
        [WIDTH,HEIGHT] = [window.innerWidth, window.innerHeight]
        $jQ(@container).css({width: WIDTH, height: HEIGHT})



class Overlay
    constructor: (el) ->
        @el = $jQ(el)
        @pages = ['startmessage','mostraoteu']

        @el.css({width: WIDTH, height: HEIGHT})
        @on = false

    setPage: (new_page) =>
        @cpage.hide() if(@cpage)
        @cpage = $jQ('#' + new_page)

        session = new_page

    show: =>
        @el.fadeIn('fast')
        @on = true

    hide: =>
        @el.fadeOut('slow')
        @on = false
        session = 'wall'

# Start on documentReady
$.noConflict()

$jQ = jQuery
$jQ ->

    # Show the /etc/motd
    session = 'startmessage'
    overlay = new Overlay('#overlay')
    overlay.setPage('startmessage')
    overlay.show()

    # Start the genitalia wall
    banco = new BancoGenital( '#viewport', [window.innerWidth, window.innerHeight] )
    menu  = $jQ('#menu')

    # Get genitalia pictures, and start feeding it!
    $jQ.getJSON API_URL , (data) =>
        x = []
        x.push(obj) for obj in data

        banco.setup x

    ###############
    # User Events #
    ###############
    $jQ('#enter-site').on 'click', (ev) ->
                            overlay.hide()
                            menu.show()

    #$jQ('#menu-mostraoteu').airport(['MOSTRA O TEU!','MOTRA A SUA!'])

    $jQ('#menu-mostraoteu').on 'click', (ev) ->
                            if(session == 'mostraoteu')
                                overlay.hide()
                            else
                                overlay.setPage('mostraoteu')
                                overlay.show()

                            ev.stopPropagation()
                            return false


    # GLOBAL VARS
    window.overlay = overlay
    window.banco   = banco
    window.menu    = menu
    window.session = session
    window.$jQ     = $jQ
