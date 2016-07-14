class PhotoView
    constructor: (@parent, @el) ->
      console.log("photview:Constructor" )
      console.log(@el);

    start: (page_data) =>
        window.photoview = true
        @photoview = true

        console.log("photoview:start")

    stop: =>
        console.log("photoview:stop")

    next: (ev) =>
      return ev.stopPropagation();

    previous: (ev) =>
      return ev.stopPropagation();

    render: (page_data) =>
        console.log("render", page_data);

        $jQ('.photo',@el).attr({src: page_data.info.url})
        $jQ('.next',@el).bind('click', @next)
        $jQ('.previous',@el).bind('click',@previous)


    initComplete: (ev) =>
        console.log("photoiew:init")

module.exports = PhotoView
