# Constants
API_URL = '/photos/json'
API_SUBMIT_PHOTO = '/photos/upload'
API_VERIFY_PHOTO = '/photos/verify'

DEBUG = true

[WIDTH,HEIGHT] = [window.innerWidth,window.innerHeight];
SESSIONS       = ['startmessage','wall','mostraoteu','about']

[session,overlay,banco,menu] = [null,null,null,null]
photobooth = undefined

PHOTO_TILING = 'sequential'     # or sequential

class GenitaliaItem
    constructor: (data, pos) ->
        @el = $jQ("<div id='#{data.id}' attr-pos='#{pos[0]}-#{pos[1]}' class='wall-item'><img src='#{data.url_small}'></div>");
        @img = $jQ('img',@el)
        @el.hide();
        
        # Create a placeholder for the full image
        @full_res_img = @img.clone()
        @el.append( @full_res_img )
        
        console.log("Loaded img at #{data.url_small}")
        
        # When the image is loaded, set hover effects and events
        @img.imagesLoaded =>
            console.log("Loaded img at #{data.url_small}")
            @el.fadeIn(1000)
            
            # Register ev's
            $jQ(@el).click (ev) =>
                
                console.log("clicked");
                
                # Load a full resolution image
                @full_res_img = @img.clone()
                @full_res_img.src = data.url                
                @el.append( @full_res_img )
                
                @full_res_img.imagesLoaded =>
                    
                    console.log("Loaded full res" , @full_res_img)
                    @img.fadeOut(500)
                    @full_res_img.fadeIn(500)

        
        
        #@img.hide(500)
        @getPos()

    getPos: ->
        @pos = @el.offset()
        @w = @el.width()
        @h = @el.height()
        
        @coords = 
            x1: @pos.left,       y1: @pos.top, 
            x2: @pos.left + @w,  y2: @pos.top + @h,
            cx: @pos.left + (@w / 2) , 
            cy: @pos.top + (@h / 2) 
        
        return @coords
        
    setPos: (pos) ->
        @el.offset( pos.left , pos.top )
        
#
# Banco Genitalia App
#
class BancoGenital
    constructor: (viewport,size) ->
        @size   = size
        [WIDTH,HEIGHT] = [ @size[0], @size[1] ]
        @tile_size = [150 , 225]

        @photoJSONList  = []
        @inZoom         = false
        
        @last_col =  @last_row = 0
        
        @container = $jQ(viewport)
        @onResize()
        
    setup: (photoList) =>
        @photoJSONList    = photoList
        @imgCounter = Math.floor( Math.random() * (@photoJSONList.length - 1) )
        
        if DEBUG
            @imgCounter = 0
        
        # Setup Events
        $jQ(window).resize @onResize
        
        # We add 2 pages photos, initially
        for page in [1..2]
            @addPageOfPhoto()

    addItem: (item, row, col) ->
        it = new GenitaliaItem( item , [row,col] )
        $jQ('#wall').append( it.el )
    
    addPageOfPhoto: ->
        # Append a full page of photos to the bottom
        for c_row in [1..@rows]
            @last_row = @last_row + 1
            @last_col = 0
            for c_col in [1..@columns]
                @last_col = @last_col + 1
                @addItem( @getPhotoData() )
                
        # Setup zoom again
        $jQ('.wall-item').zoomTarget()

    getPhotoData: (row,col) =>
        if PHOTO_TILING == 'random'
            @imgCounter = Math.floor( Math.random() * @photoJSONList.length )
        else if PHOTO_TILING == 'sequential'
            @imgCounter = (@photoJSONList.length-1 + @imgCounter++) % @photoJSONList.length
        
        currPhoto = @photoJSONList[@imgCounter]
                
        return currPhoto
    
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
        
        #$jQ('#zoom-icon').offset( pos ).show();
        
        #clone = $jQ(photo_el).clone()
        #clone.attr('src', $jQ(photo_el).data('photo_info').url)
        #clone.appendTo( $jQ(photo_el).parent() )
        
        $jQ(photo_el).attr('src', $jQ(photo_el).data('photo_info').url )

        #$jQ(photo_el).attr('src', $jQ(photo_el).data('photo_info').url)
        #$jQ(photo_el).zoomTo({targetSize: 0.75, duration: 600})
        $jQ(photo_el).zoomTo({targetSize: 0.60, duration: 600})

        #items = @wall.updateWall()
        #@createDOMPhotos(items)

    zoomOut: =>
        @inZoom = false
        $jQ('body').zoomTo({targetSize: 0.75, duration: 600})        

    onResize: =>
        [WIDTH,HEIGHT] = [window.innerWidth, window.innerHeight]
        
        $jQ(@container).css({width: WIDTH, height: HEIGHT});
        $jQ('#wall').css({width: WIDTH, height: HEIGHT});
        $jQ('#overlay').css({width: WIDTH, height: HEIGHT});
        
        $jQ('.infoscreen').css({position: 'absolute', \
                                left: (WIDTH  - $jQ('.infoscreen').outerWidth()) / 2,
                                top:  (HEIGHT - $jQ('.infoscreen').outerHeight()) / 2 })

        # Recalculate rows/columns
        @columns = Math.ceil( WIDTH / @tile_size[0] ) - 1;
        @rows    = Math.ceil( HEIGHT / @tile_size[1] ) - 1;
        
        if DEBUG
            console.log("COLUMNS/ROWS: #{@columns} / #{@rows}")



class Overlay
    constructor: (el) ->
        @el = $jQ(el)
        @pages = ['choose-upload','mostraoteu-upload','mostraoteu-photobooth']

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

class GenitalPhotobooth
    constructor: (el) ->
        @el = $jQ(el)
        
        @options = 
            enableSound: true # Camera sounds
            enableFlash: true # Camera Flash effect
            enableSettingsButton: true # Flash settings button (only appears when hovering over video)
            bandwidth: 0  # Max Bandwidth (0 = unlimited) **
            contentType: "application/octet-stream"  # Uploader Content Type (only used for normal uploads)
            photoQuality: 100 # JPEG Photo quality (0 - 100) **
            photoWidth: 459 # Photo width **
            photoHeight: 344 # Photo height **
            cameraWidth: 640 # Camera source width (tip: for best quality keep increments of 320) **
            cameraHeight: 480 # Camera source height (tip: for best quality keep increments of 240) **
            cameraFPS: 25 # Camera source frames per second **
            timerTimeout: 3 # Camera timer length
            timerX: 198 # Camera timer X position on video **
            timerY: 250 # Camera timer Y position on video **
            timerAlpha: 0.6 # Camera timer opacity (0 - 1) **
        
        # Set swfobject on the page
        swfobject.switchOffAutoHideShow()
        swfobject.registerObject("openbooth")
        
        @openbooth = swfobject.getObjectById("openbooth")
        @openbooth.init()
            

# 'callbacks'             :   {
#     'initComplete'          : 'onInitComplete', # Fired when Flash finished initializing the init() function
#     'uploadSuccessful'      : 'onUploadSuccessful', # Fired when an upload was successful
#     'onError'               : 'onError', # Fired when there was an upload error
# 
#     'previewComplete'       : 'onPreviewComplete', # Fired when a snapshot was taken
#     'previewCanceled'       : 'onPreviewCanceled', # Fired when a snapshot was dismissed
# 
#     'videoStart'            : false, # Fired when a video source started
#     'noVideoDevices'        : false, # Fired when no video sources were detected
#     'uploadComplete'        : false  # Fired when an upload function was completed
# },
# 
# 'placeholders'          :   {
#     'load'                  : '/images/openbooth_allow_dev.jpg',  # Placeholder image: Before video started
#     'save'                  : '/images/openbooth_saving_dev.jpg', # Placeholder image: While image is uploaded
#     'noVideoDevices'        : '/images/openbooth_nocameras_dev.jpg' # Placeholder image: When no video devices were detected
# }
#openbooth.init(options);

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
                            if(session == 'choose-upload')
                                overlay.hide()
                            else
                                overlay.setPage('choose-upload')
                                overlay.show()

                            ev.stopPropagation()
                            return false

    $jQ('#bt-cancel-photo').on 'click', (ev) ->
            overlay.hide()

            ev.stopPropagation()
            return false 


    $jQ('#simple-upload').on 'click', (ev) ->
        overlay.setPage('mostraoteu-upload')
        overlay.show()
        ev.stopPropagation()
        return false;
        
    $jQ('#simple-phototaker').on 'click' , (ev) ->
        overlay.setPage('mostraoteu-photobooth')
        overlay.show();
        
        photobooth = (photobooth or new GenitalPhotobooth('#mostraoteu-photobooth'))
        photobooth.start()
        
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
















`
// Grayscale w canvas method
	function grayscale(src){
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		var imgObj = new Image();
		imgObj.src = src;
		canvas.width = imgObj.width;
		canvas.height = imgObj.height; 
		ctx.drawImage(imgObj, 0, 0); 
		var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
		for(var y = 0; y < imgPixels.height; y++){
			for(var x = 0; x < imgPixels.width; x++){
				var i = (y * 4) * imgPixels.width + x * 4;
				var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
				imgPixels.data[i] = avg; 
				imgPixels.data[i + 1] = avg; 
				imgPixels.data[i + 2] = avg;
			}
		}
		ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
		return canvas.toDataURL();
    }
`