#
# Banco Genitalia App
#


class App
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
                        "width":    155,
                        "height":   230,
                        "inertia": true,
                        "inertiaSpeed": 0.92,
                        "printCoordinates":false,
                        "rangex":   [-300,300],
                        "rangey":   [-300,300],
                        callOnUpdate:  (items) => @createDOMPhotos(items),
                        callOnMouseDown:    @onWallMouseDown,
                        callOnMouseUp:      @onWallMouseUp,
                        callOnMouseDragged: @onWallMouseDragged })

        # Init Wall
        @wall.initWall();


    # Called when there are photo tiles to be created.
    createDOMPhotos: (items) =>
        #console.log("Items len is -->", items.length )
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
        
    onWallMouseDown: (e) =>
        if @inZoom
            e.stop()

    onWallMouseUp: (e) =>
        @dragged = false
    
    onWallMouseDragged: (delta,e) =>
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

module.exports = App
