class PhotoUploadOvr
    constructor: (@parent, @el) ->
        @delta    = 1000.0/4
        @opts  = [ '8=>         ',
                  '8==>        ',
                  '8===>       ',
                  '8=====>     ',
                  '8=======>  o',
                  '8======>    ',
                  '8===>       ',
                  '8==>        ',
                  '8>          ']
        @idx  = 0
        window.upinterval  = null

    start: =>
        # Setup dropzone
        $jQ('#photo-submit',@el).dropzone({
            url: window.API_SUBMIT_PHOTO,
            paramName: 'photo',

            createImageThumbnails: true,
            thumbnailWidth:  300,
            thumbnailHeight: 450,
            previewTemplate: "<div class\"preview file-preview\"></div>",
            parallelUploads: 1,
            maxFilesize: 2,
            acceptedFiles: 'image/*',
            autoProcessQueue: false,
        })

        @dropzone = $jQ('#photo-submit').data('dropzone')

        # Show a sign while Dragging
        #@dropzone.on("addedfile", @createThumb );
        @dropzone.on("dragenter",   @dragEnter )
        @dropzone.on("dragleave",   @dragLeave )
        @dropzone.on("drop",        @drop )

        # Show the thumbnail of picture
        @dropzone.on('thumbnail', @thumbnail )
        @dropzone.on('success', @photoSubmitSuccess )
        @dropzone.on('error', @photoSubmitError )
        @dropzone.on('complete', @photoSubmitComplete)

        # Setup click handlers
        @setupEvents()

    stop: =>
        return

    on_show_complete: =>
        console.log( 'Hello upload', @dropzone )
        return

    on_hide_complete: =>
        return

    setupEvents: ->
        return

    # Choose file dialog
    showDialog: (ev) ->
        $jQ('#photo-submit').click()

    # Show a sign while draggning
    dragEnter: (ev) ->
        $jQ('#photo-submit').addClass('drag');
    dragLeave: (ev)  ->
        $jQ('#photo-submit').removeClass('drag');

    drop: () =>
      # Clean message/border
      $jQ('.info').html('');
      $jQ('#photo-submit').css({'border-color': '#ffffff'})

      @dragLeave()


    # Show file preview
    thumbnail: (file,dataUrl) =>
        img = new Image;
        img.src = dataUrl;
        $jQ(img).bind 'click', @showDialog

        if($jQ('img','#photo-submit').length)
            $jQ('img','#photo-submit').attr  {'src': dataUrl}
        else
            $jQ('#photo-submit').append(img)

    photoSubmitComplete: (file,data ) =>
        return
        #$jQ('.info').html( );
        #$jQ('#photo-submit').css({'border-color': '#ffffff'})

    photoSubmitSuccess: (file, data) =>
        $jQ('.info').removeClass('label-warning').addClass('label-success')
                    .html( " Thanks ! Obrigado ! Merci !  Arigatō ! أوبريغادو 👏 👏 " );

        setTimeout( ->
            if(overlay.on)
              overlay.hide(0)
        , 5000 )

    photoSubmitError: (file, data) =>
        try
          json_response = JSON.parse(data)
        catch error
          json_response = {'error': data}

        $jQ('.info').removeClass('label-success').addClass('label-warning')
                    .html( '💩 ' + json_response.error );
        $jQ('#photo-submit').css({'border-color': '#ff0000'})

module.exports = PhotoUploadOvr
