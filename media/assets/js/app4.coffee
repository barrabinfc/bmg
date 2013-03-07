# Constants
API_URL = '/photos/json'
API_SUBMIT_PHOTO = '/photos/upload'
API_VERIFY_PHOTO = '/photos/verify'

[WIDTH,HEIGHT] = [window.innerWidth,window.innerHeight];
SESSIONS       = ['startmessage','wall','mostraoteu','about']

[session,overlay,banco,menu] = [null,null,null,null]

PHOTO_TILING = 'sequential'     # or sequential

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
                        "printCoordinates":false,
                        "rangex":[-300,300],
                        "rangey":[-300,300],
                        callOnUpdate:  (items) => @createDOMPhotos(items),
                        callOnMouseDown:    @onMouseDown,
                        callOnMouseUp:      @onMouseUp,
                        callOnMouseDragged: @onMouseDragged })

        # Init Wall
        @wall.initWall();



    createDOMPhotos: (items) =>
        items.each( (e,i) =>
            
            if PHOTO_TILING == 'random'
                @imgCounter = Math.floor( Math.random() * @photoJSONList.length )
            else if PHOTO_TILING == 'sequential'
                @imgCounter = (@photoJSONList.length-1 + @imgCounter++) % @photoJSONList.length
            
            currPhoto = @photoJSONList[@imgCounter]

            $jQ(e.node).text("")
            img = new Element("img[src='#{currPhoto.url_small}']")
            img.inject(e.node).fade("hide").fade("in");
            
            $jQ(img).data('photo_info', currPhoto)
            $jQ(img).mouseup(@onPhotoClick)
        )
        
    onMouseDown: (e) =>
        if @inZoom
            e.stop()
        
        return
        
    onMouseUp: (e) =>
        @dragged = false
    
    onMouseDragged: (delta,e) =>
        if(Math.abs(delta[0]) > 5 or Math.abs(delta[1]) > 5)
            @dragged = true
        
        if @inZoom
            e.stop()

    # Someone clicked on the photo.
    onPhotoClick: (ev) =>
        # Dont zoom if dragging
        return if @dragged

        @cTarget = $jQ(ev.target)
        if not @inZoom
            @zoomIn( @cTarget )
        else            
            if @cTarget.attr('src') == @prevTarget.attr('src')
                @zoomOut()
            else
                @zoomIn( @cTarget )

    zoomIn: (photo_el) =>
        @prevTarget = @cTarget
        @inZoom = true
        
        pos = $jQ(photo_el).offset()
        pos.left = pos.left - 40;
        pos.top = pos.top - 40;
        
        $jQ('#close-icon').offset( pos ).show();
        
        #clone = $jQ(photo_el).clone()
        #clone.attr('src', $jQ(photo_el).data('photo_info').url)
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
        $jQ(@container).css({width: WIDTH, height: HEIGHT});
        $jQ('#overlay').css({width: WIDTH, height: HEIGHT});



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
        @cpage.show()
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
    overlay = new Overlay('#overlay')
    overlay.setPage('startmessage')
    overlay.hide()

    # Start the genitalia wall
    banco = new BancoGenital( '#viewport', [window.innerWidth, window.innerHeight] )
    menu  = $jQ('#menu')
    menu.show()

    # Get genitalia pictures, and start feeding it!
    $jQ.getJSON API_URL , (data) =>
        banco.setup data

    ###############
    # User Events #
    ###############
    $jQ('#enter-site').on 'click', (ev) ->
                            overlay.hide()
                            menu.show()

    $jQ('#menu-mostraoteu').on 'click', (ev) ->
                            if(session == 'mostraoteu')
                                overlay.hide()
                            else
                                overlay.setPage('mostraoteu')
                                overlay.show()

                            ev.stopPropagation()
                            return false

    $jQ('#bt-cancel-photo').on 'click', (ev) ->
            overlay.hide()

            ev.stopPropagation()
            return false 


    $jQ('#photo-submit').dropzone({
        url: API_VERIFY_PHOTO,
        paramName: 'photo',
        createImageThumbnails: true,
        thumbnailWidth: 300,
        thumbnailHeight: 450,
        previewTemplate: "",
        parallelUploads: 1,
    });

    dropzone = $jQ('#photo-submit').data('dropzone')
    dragEnter = (ev) ->
        $jQ('#photo-submit').addClass('drag');

    dragLeave = (ev)  ->
        $jQ('#photo-submit').removeClass('drag');

    dropzone.on("dragenter", dragEnter );
    dropzone.on("dragleave", dragLeave );
    dropzone.on("drop", dragLeave );

    # Show file preview
    dropzone.on "thumbnail", (file,dataUrl) ->
        # Clean message
        $jQ('div','#photo-submit').remove();

        img = new Image;
        img.src = dataUrl;

        if($jQ('img','#photo-submit').length)
            $jQ('img','#photo-submit').attr( {'src': dataUrl});
        else
            $jQ('#photo-submit').append(img);

    photoSubmitSuccess = (data)->
        console.log(data);
        overlay.hide()

    photoSubmitError = (data) ->
        console.log(data);

    # Send photo by hand... weirdo
    $jQ('#bt-submit-photo').on 'click', (ev) ->
        files = $jQ('#photo-submit').data('dropzone').files
        file  = files[ files.length - 1];

        photo = new FormData()
        photo.append('photo',  file)

        xhr = new XMLHttpRequest()
        xhr.open('POST', API_SUBMIT_PHOTO, true);
        xhr.onload = (e) ->
            response = xhr.responseText;

            if(xhr.getResponseHeader("content-type").indexOf("application/json"))
                response = JSON.parse(response)

            if(response['status'] == 'OK')          photoSubmitSuccess(response)
            else                                    photoSubmitError(response)

        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.setRequestHeader("X-File-Name", file.name);

        xhr.send(photo);

        return false


    # GLOBAL VARS
    window.overlay = overlay
    window.banco   = banco
    window.menu    = menu
    window.session = session
    window.$jQ     = $jQ
