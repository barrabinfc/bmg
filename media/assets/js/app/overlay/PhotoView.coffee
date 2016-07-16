class PhotoView
    constructor: (@parent, @el) ->
      console.log("photview:Constructor" )
      @id = 0
      @info = {}
      @tile = false
      @pos  = {c: 0, r: 0}
      @nextId = @prevId = 0
      @nextPhoto = @prevPhoto = {}

    start: (page_data) =>
        console.log('photoview:start')
        window.photoview = true
        @photoview = true

        $jQ('.next',@el).bind('click', @next)
        $jQ('.previous',@el).bind('click',@previous)

    stop: =>
        console.log("photoview:stop")

    show: =>
        console.log("photoview:show")

    setActiveItem: (el) =>
        @tile =  el
        @info =  $jQ('img',@tile).data('photo_info');

        _pos  = @tile.attr('rel').split('x').map( Number )
        @pos   = {c: _pos[0], r: _pos[1]}

        @nextPos = {c: @pos.c+1, r: @pos.r}
        @prevPos = {c: @pos.c-1, r: @pos.r}

        @nextTile = $jQ('div[rel='+@nextPos.c+'x'+@nextPos.r+']' , window.banco.wall.wall)
        @prevTile = $jQ('div[rel='+@prevPos.c+'x'+@prevPos.r+']', window.banco.wall.wall)

        @nextPhoto = $jQ('img',@nextTile).data('photo_info');
        @prevPhoto = $jQ('img',@prevTile).data('photo_info');

        $jQ('.media.left > .photo',@el).attr({src: @prevPhoto.url})
        $jQ('.media.center > .photo',@el).attr({src: @info.url})
        $jQ('.media.right > .photo',@el).attr({src: @nextPhoto.url})

    next: (ev) =>

      # Turn carrousel on
      left = $jQ('.media.left')
      $jQ('.media.center').removeClass('center').addClass('left');
      $jQ('.media.right').removeClass('right').addClass('center');
      left.removeClass('left').addClass('right');

      window.banco.wall.moveToNext();
      @setActiveItem( @nextTile )

      return ev.stopPropagation();

    previous: (ev) =>

      right = $jQ('.media.right')
      $jQ('.media.center').removeClass('center').addClass('right');
      $jQ('.media.left').removeClass('left').addClass('center');
      right.removeClass('right').addClass('left');

      window.banco.wall.moveToPrev();
      @setActiveItem( @prevTile )

      return ev.stopPropagation();

    render: (tile) =>
        console.log("photoview:render")
        @setActiveItem(tile)

    initComplete: (ev) =>
        console.log("photoiew:init")

module.exports = PhotoView
