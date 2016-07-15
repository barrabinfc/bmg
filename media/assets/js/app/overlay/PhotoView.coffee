class PhotoView
    constructor: (@parent, @el) ->
      console.log("photview:Constructor" )
      console.log(@el);

    start: (page_data) =>
        window.photoview = true
        @photoview = true

        $jQ('.next',@el).bind('click', @next)
        $jQ('.previous',@el).bind('click',@previous)


    stop: =>
        console.log("photoview:stop")

    next: (ev) =>
      return ev.stopPropagation();

    previous: (ev) =>
      return ev.stopPropagation();

    render: (photo) =>
        console.log("render", photo);

        $jQ('.media.center > .photo',@el).attr({src: photo.info.url})


    initComplete: (ev) =>
        console.log("photoiew:init")

module.exports = PhotoView
