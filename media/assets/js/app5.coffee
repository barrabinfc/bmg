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
        
        @coordinates = []
        @grid = []
        [@minx,@miny,@maxx,@maxy] = [0,0,0,0]
        @rangex = [-500, 500]
        @rangey = [-500, 500]
        [@tile_w,@tile_h] = [150, 225]
        [@startx,@starty] = [0,0]
        
        @viewport = $jQ(viewport)
        @wall     = $jQ('#wall')
        
        @moved = 0        
        
    setup: (photoList) =>
        @photoJSONList    = photoList

        @imgCounter = Math.floor( Math.random() * (@photoJSONList.length - 1) )
        
        # Setup Events
        window.addEventListener('resize', @onResize, false)
        
        @coordinates = @calculateCoordinates()
        
        #preload content
        
        bb = @setBoundingBox()
        @maxx = bb.maxx
        @maxy = bb.maxy
        @minx = bb.minx
        @miny = bb.miny
        
        
        #mywall = new Wall("wall", {
        #                "draggable":true,
        #                "width":130,
        #                "height":160,
        #                "inertia": true,
        #                "printCoordinates":true,
        #                "rangex":[-300,300],
        #                "rangey":[-300,300],
        #                callOnUpdate:  (items) => @createDOMPhotos(items) })
                    
        # Init Wall
        #mywall.initWall();
        
        @wall.click (ev) =>
            ev.stopPropagation()
            @moved = 0
        
        @wall.mousedown( @onMouseDown )
        @wall.mouseup( @onMouseUp )
        @wall.mousemove( @onMouseMove )
        
        @wall.css({'left': @startx*@tile_w, 'top': @starty*@tile_h})
        
        items = @updateWall()
        @createDOMPhotos( items )
    
    createDOMPhotos: (items) =>
        
        console.log("Creating #{items.length} photos...")
        for item in items            
            if(@imgCounter >= @photoJSONList.length-1)
                @imgCounter = 0
            else
                @imgCounter++
            
            currPhoto = @photoJSONList[@imgCounter]
            
            $jQ(item.node).text("")
            img = $("<img>")
            img.attr('src',currPhoto.url_small).appendTo(item.node)
            #img.appendTo(item.node)
            
            $jQ(img).data('photo_info', currPhoto)
            $jQ(img).on('click', @onPhotoClick)
        
    onMouseDown: (ev) =>
        ev.stopPropagation()
        @mousedown = true

        @startDragX = ev.pageX;
        @startDragY = ev.pageY;
        
        #@startDragTime = new Date();
        @xPos = ev.pageX;
        @yPos = ev.pageY;
        
        @startLeft   = @wall.offset().left
        @startTop    = @wall.offset().top
        @_width       = @wall.outerWidth()
        @_height      = @wall.outerWidth()
        
        console.log("Down")
        
                
    onMouseUp: (ev) =>
        ev.stopPropagation()       
        console.log("Up")

        # This means the user just clicked, not dragged!
        if not dragging
            @onMouseSingleClick
            @dragging = false
            
        @mousedown = false 
    
    onMouseMove: (ev) =>        
        return if not @mousedown
        
        @xPos = ev.pageX
        @yPos = ev.pageY
        @deltaX = @startDragX - @xPos
        @deltaY = @startDragY - @yPos
        
        if(Math.abs(@deltaX) > 2 or Math.abs(@deltaY) > 2)
            @dragging = true
        
        @wall.css({'left': @startLeft - @deltaX, 'top': @startTop - @deltaY})
        
        #@createDOMPhotos( @updateWall() )
        
    onPhotoClick: (ev) =>
        console.log "Photo Click"
        if @dragging
            return

        #if not @inZoom
        #    $jQ(ev.@wall).attr('src', $jQ(ev.@wall).data('photo_info').url)
        #    $jQ(ev.@wall).zoomTo({@wallSize: 0.75, duration: 600})
        #    @inZoom = true
        #else
        #    @inZoom = false
        #    $jQ('body').zoomTo({@wallSize: 0.75, duration: 600})
    
        ev.stopPropagation()

    onResize: =>
        [WIDTH,HEIGHT] = [window.innerWidth, window.innerHeight]
        $jQ(@viewport).css({width: WIDTH, height: HEIGHT})
        
        items = @updateWall()
        @createDOMPhotos( items )


    calculateCoordinates: =>
        [indice,coordinates] = [0, [] ]
        for r in [@rangey[0]..@rangey[1]]
            for c in [@rangex[0]..@rangex[1]]                
                coordinates[indice] = {"c": c, "r": r};
                if(c==0&&r==0)
                    @id = indice
                indice++
        return coordinates
    
    setBoundingBox: =>
        vp_coordinate = @viewport.offset()
        
        [vp_w,vp_h]         = [@viewport.outerWidth(true), @viewport.outerHeight(true)]
        [vp_cols,vp_rows]   = [Math.ceil(vp_w / @tile_w), Math.ceil(vp_h / @tile_h) ]
        
        [maxx,maxy] = [Math.abs(@rangex[0]) * @tile_w, Math.abs(@rangey[0]) * @tile_h ]
        [minx,miny] = [(Math.abs(@rangex[1]) * @tile_w) + vp_w ,
                       (Math.abs(@rangey[1]) * @tile_h) + vp_h ]
        
        return {"minx": minx, "miny": miny, "maxx": maxx, "maxy": maxy}    
        
    updateWall: =>
        newItems = []
        vp_coordinate = @viewport.offset()
        wall_coordinate = @wall.offset()
        
        [vp_w ,vp_h] = [@viewport.outerWidth(true), @viewport.outerHeight(true)]
        [vp_cols,vp_rows] = [ Math.ceil(vp_w / @tile_w), Math.ceil(vp_h / @tile_h) ]

        pos =  
            'left': wall_coordinate.left - vp_coordinate.left
            'top': wall_coordinate.top - vp_coordinate.top
               
        # Calc visible elemnts
        vis_left_col = Math.ceil( -pos.left / @tile_w ) - 1
        vis_top_row  = Math.ceil( -pos.top / @tile_h) - 1

        console.log vp_cols , vp_rows
        for i in [vis_left_col..vis_left_col+vp_cols]
            for j in [vis_top_row..vis_top_row+vp_rows]
                if (@grid[i] is undefined)
                    @grid[i] = {};
                
                if (this.grid[i][j] is undefined) 
                    item = @appendTile(i, j)
                    newItems.push(item) if( item.node isnt undefined ) 
        
        # Update viewport info.
        wall_width  = @wall.outerWidth(true)
        wall_height = @wall.outerHeight(true)
        wall_cols = Math.ceil(wall_width  / @tile_w);
        wall_rows = Math.ceil(wall_height / @tile_h);

        return newItems;
        
    appendTile: (i,j) =>
        @grid[i][j] = true
        
        # Tile Size
        range_col = @rangex
        range_row = @rangey
        return {} if(i < range_col[0] or range_col[1] < i)
        return {} if(j < range_row[0] or range_row[1] < j)
        
        [x,y] = [i*@tile_w, j*@tile_h]
        e = $('<div>').appendTo(@wall)
        e.addClass('tile').css(
                             'position': 'absolute',
                             'left': x,
                             'top': y,
                             'width': @tile_w,
                             'height': @tile_h )
        
        return {"node": e, "x": j, "y": i}
                
        
# Start on documentReady
#$.noConflict()

app = null
$jQ = jQuery
$jQ ->
    app = new BancoGenital( '#viewport', [window.innerWidth, window.innerHeight] )

    $jQ.getJSON API_URL , (data) =>
        x = []
        x.push(obj) for obj in data
        app.setup x