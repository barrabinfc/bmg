# Constants
API_URL = '/photos'

WIDTH = 0
HEIGHT = 0
                
#
# Banco Genitalia App
#
class BancoGenital
    constructor: (size) =>
        @size   = size
        WIDTH   = @size[0]
        HEIGHT  = @size[1]    
        @rotation_step = 0.05
        
        [@mouseX,@mouseY] = [WIDTH/2,HEIGHT/2]
        @dragging = false
        
        @photoJSONList  = []
        @photosDOMList  = []
        
        @container = $('<div id="bancogenital-container" claass="row-fluid"></div>')

    setup: (photoList) =>
        @photoJSONList    = photoList
        @createDOMPhoto(photo) for photo in @photoJSONList
                
        # Setup Events
        window.addEventListener('resize', @onResize, false)
        document.addEventListener('mousemove', @onMouseMove, false)
        document.addEventListener('mousedown', @onMouseDown, false)
        document.addEventListener('mouseup', @onMouseUp, false)
        
        $('.photo').on('click', @onPhotoClick)
        
        # Append to page
        $('body').append( @container )

    createDOMPhoto: (photo_info) =>
        klass = opts[new Math.random()*opts.length];
        dom_el = $("<div id='photo_#{photo_info.id}' class='photo #{klass}'><img src='#{photo_info.url}'/></div>")
        @container.append( dom_el )
        
    onPhotoClick: (ev) =>
        $(ev.target).zoomTarget();
        ev.stopPropagation()
        
    onResize: =>
        [WIDTH,HEIGHT] = [window.innerWidth,window.innerHeight]
                
    onMouseMove: (ev) =>
        @mouseX = ev.clientX;
        @mouseY = ev.clientY;
    
    onMouseDown: (ev) =>
        dragging = true
        return
    
    onMouseUp: (ev) =>
        dragging = false
        return
        
    
# Start on documentReady
jQuery ->
    app = new BancoGenital( [window.innerWidth, window.innerHeight] )
    
    gui = new dat.GUI();
    gui.add( app, "rotation_step").min(0.001).max(0.005).step(0.001);
    gui.close();
    
    #$.getJSON API_URL , (data) =>        
    #    app.setup(data)
    data = [{'url': 'http://placehold.it/260x180', 'id': 0}, {'url': 'http://placehold.it/260x180', 'id': 1}, {'url': 'http://placehold.it/260x180', 'id': 2}, {'url': 'http://placehold.it/260x180', 'id': 3}, {'url': 'http://placehold.it/260x180', 'id': 4}, {'url': 'http://placehold.it/260x180', 'id': 5}, {'url': 'http://placehold.it/260x180', 'id': 6}, {'url': 'http://placehold.it/260x180', 'id': 7}, {'url': 'http://placehold.it/260x180', 'id': 8}, {'url': 'http://placehold.it/260x180', 'id': 9}, {'url': 'http://placehold.it/260x180', 'id': 10}, {'url': 'http://placehold.it/260x180', 'id': 11}, {'url': 'http://placehold.it/260x180', 'id': 12}, {'url': 'http://placehold.it/260x180', 'id': 13}, {'url': 'http://placehold.it/260x180', 'id': 14}, {'url': 'http://placehold.it/260x180', 'id': 15}, {'url': 'http://placehold.it/260x180', 'id': 16}, {'url': 'http://placehold.it/260x180', 'id': 17}, {'url': 'http://placehold.it/260x180', 'id': 18}, {'url': 'http://placehold.it/260x180', 'id': 19}, {'url': 'http://placehold.it/260x180', 'id': 20}, {'url': 'http://placehold.it/260x180', 'id': 21}, {'url': 'http://placehold.it/260x180', 'id': 22}, {'url': 'http://placehold.it/260x180', 'id': 23}, {'url': 'http://placehold.it/260x180', 'id': 24}, {'url': 'http://placehold.it/260x180', 'id': 25}, {'url': 'http://placehold.it/260x180', 'id': 26}, {'url': 'http://placehold.it/260x180', 'id': 27}, {'url': 'http://placehold.it/260x180', 'id': 28}, {'url': 'http://placehold.it/260x180', 'id': 29}]
    app.setup data