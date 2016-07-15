#
# Banco Genitalia App
#

window.zoomSettings = {
    targetsize: 0.9,
    preservescroll: true,
    closeclick: true
}

class App
    constructor: (viewport,size) ->
        @size   = size
        [@WIDTH,@HEIGHT] = [ @size[0], @size[1]]
        [@item_width, @item_height ] = [ 120, 180 ];
        [@rows_in_screen,@cols_in_screen] = [ 0, 0 ];

        @photoJSONList  = []
        @photosDOMList  = []
        @inZoom         = false
        @dragged        = false

        @container = $jQ(viewport)
        @onResize()

    setup: (photoList, loading_cb, loaded_cb) =>
        @photoJSONList    = photoList

        @imgCounter = Math.floor( Math.random() * (@photoJSONList.length - 1) )

        # Setup Events
        window.addEventListener('resize', $jQ.debounce( 300, @onResize ), false)
        ###
        $jQ('#wall').on('mouseup', '.tile', (ev,e ) =>
            @onPhotoClick(ev,e) if not @dragged
        )
        ###
        #$jQ(document).on('mousewheel', @onScrollStart.bind(this))
        #$jQ(document).on('mousewheel DOMMouseScroll', @onScrollStop)

        # start wall
        @wall = new Wall("wall", {
                        "draggable": true,
                        "scrollable": true,
                        "width":    @item_width,
                        "height":   @item_height,
                        "speed":    800,
                        "inertia":  true,
                        "autoposition": true,
                        "inertiaSpeed": 0.8,
                        "printCoordinates": false,
                        "rangex":   [-100,100],
                        "rangey":   [-100,100],

                        callOnMouseUp: (ev) =>
                          console.log("mouseUp");
                          #$jQ('#wall').css({transform: 'perspective(1200px) ' +
                          #                              'rotateY(0deg)' +
                          #                              'rotateX(0deg);' });
                          return

                        callOnMouseDown: (ev) =>
                          return

                        callOnMouseDragged: $jQ.debounce(300, (pos, ev) =>
                          xDir = (pos[0] > 0 && 1 || -1);
                          yDir = (pos[1] > 0 && 1 || -1);
                          #$jQ('#wall').css({transform: 'perspective(1200px) ' +
                          #                              'rotateY('+(xDir*5)+'deg)' +
                          #                              'rotateX('+(yDir*5)+'deg);'});
                          return
                        )

                        callOnMouseClick: (ev) =>
                          if @wall.getMovement()
                            return

                          @onPhotoClick(ev);


                        callOnUpdate:  (items) =>
                            return if items.length == 0
                            @createDOMPhotos( items )
                        })

        @wall.initWall()

        # Callbacks for loading
        loading_cb    = loading_cb ? $jQ.noop
        loaded_cb     = loaded_cb ? $jQ.noop

        loadingImages = $jQ('#wall').imagesLoaded() \
        .always( (instance, images) ->
            loaded_cb( instance, images )
        ) \
        .progress( (instance, images) ->
            loading_cb( instance, images )
        )


    # Called when there are photo tiles to be created.
    createDOMPhotos: (items) =>
        items.each( (e,i) =>

            if PHOTO_TILING == 'random'
                @imgCounter = Math.floor( Math.random() * @photoJSONList.length )
            else if PHOTO_TILING == 'sequential'
                @imgCounter = (@photoJSONList.length-1 + @imgCounter++) % @photoJSONList.length

            currPhoto = @photoJSONList[@imgCounter]

            img = new Element("img[src='#{currPhoto.url_small}']")
            #img.addClass('appear');
            img.inject(e.node)

            $jQ(e.node).imagesLoaded( (elem,cb)->
                $jQ(img).addClass('loaded') #.addClass("appear");
            )

            $jQ(img).data('photo_info', currPhoto)
        )

    onScrollStart: (e) =>
      xspeed = e.deltaX * e.deltaFactor;
      yspeed = e.deltaY * e.deltaFactor;
      finX = @wall.wall.getStyle("left").toInt() + (xspeed*-1);
      finY = @wall.wall.getStyle("top").toInt() + yspeed;

      @wall.wall.setStyle("left", finX)
      @wall.wall.setStyle("top", finY)

      @wall.moved++;
      @wall.options.callOnUpdate(@wall.updateWall())
      e.stopPropagation();

      return false;

    # Someone clicked on the photo.
    onPhotoClick: (ev,e) =>
        # Dont zoom if dragging
        @cTarget = $jQ(ev.target)
        if(@cTarget).is('div')
          @cTarget = @cTarget.children()

        # Get photo data
        info = $jQ(@cTarget).data('photo_info');

        # Get photo position (row/col)
        center = () =>
          tile = @cTarget.parent()
          pos  = tile.attr('rel').split('x').map( Number );

          # Get middle wall position
          basePos = @wall.getCoordinatesFromId( @wall.getActiveItem() )
          middle = [basePos.c + @cols_in_screen/3.0,
                    basePos.r + @rows_in_screen/2.0].map( Math.floor );

          # Get delta diff. from photo position to the middle
          diff = [middle[0] - pos[0], middle[1] - pos[1]];

          # Now move deltaDiff from the base (activeItem)
          @wall.moveTo( basePos.c - diff[0], basePos.r - diff[1] )



        # show the overlay
        center()
        @viewPhoto({info: info, el: @cTarget})

        ###
        if not @inZoom
            @zoomIn( @cTarget )
        else
            if @cTarget.attr('src') == @prevTarget.attr('src')
                @zoomOut()
            else
                @zoomIn( @cTarget )
        ###

    viewPhoto: (photo) =>
        console.log("Clicked at: ", photo);
        window.overlay.setPage('photoview', photo)
        window.overlay.show()

    zoomIn: (photo_el) =>
        @prevTarget = @cTarget
        @inZoom = true

        $jQ(photo_el).attr('src', $jQ(photo_el).data('photo_info').url )
        $jQ(photo_el).imagesLoaded( =>
            @wall.normalizePosition()
        )

        $jQ(photo_el).zoomTo(window.zoomSettings)
        #$jQ(photo_el).zoomTo({targetSize: 0.75, duration: 600 })

    zoomOut: =>
        @inZoom = false
        $jQ('body').zoomTo(window.zoomSettings)

    onResize: =>
        [@WIDTH,@HEIGHT]                    = [window.innerWidth, window.innerHeight];
        [@cols_in_screen, @rows_in_screen]  = [@WIDTH/@item_width, @HEIGHT/@item_height].map( Math.floor );

        $jQ(@container).css({width: @WIDTH, height: @HEIGHT});
        $jQ('#overlay').css({width: @WIDTH, height: @HEIGHT});

        if(@wall)
          @wall.options.callOnUpdate(@wall.updateWall());
        


module.exports = App
