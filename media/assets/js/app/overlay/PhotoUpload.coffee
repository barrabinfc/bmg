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
            url: window.API_VERIFY_PHOTO,
            paramName: 'photo',

            createImageThumbnails: true,
            thumbnailWidth:  300,
            thumbnailHeight: 450,
            previewTemplate: "<div class\"preview file-preview\"></div>",
            parallelUploads: 1,
            acceptedFiles: 'image/*'
        })

        @dropzone = $jQ('#photo-submit').data('dropzone')

        # Show a sign while Dragging
        #@dropzone.on("addedfile", @createThumb );
        @dropzone.on("dragenter",   @dragEnter )
        @dropzone.on("dragleave",   @dragLeave )
        @dropzone.on("drop",        @dragLeave )

        # Show the thumbnail of picture
        @dropzone.on('thumbnail', @thumbnail )

        # Setup click handlers
        @setupEvents()

    stop: =>
        return

    on_show_complete: =>
        return

    on_hide_complete: =>
        return

    setupEvents: ->
        $jQ('#photo-submit #bt-file').bind 'click', (ev) =>
            @showDialog()

        $jQ('#bt-cancel-photo',@el).on 'click', (ev) =>
            overlay.hide()
            ev.stopPropagation()

        $jQ('#bt-submit-photo').on 'click' , (ev) =>
            return if @upprogress
            if $jQ('#photo-submit').data('dropzone').files.length == 0
                @showDialog()
            @submitPicture()


    # Choose file dialog
    showDialog: (ev) ->
        $jQ('#photo-submit').click()

    # Show a sign while draggning
    dragEnter: (ev) ->
        $jQ('#photo-submit').addClass('drag');
    dragLeave: (ev)  ->
        $jQ('#photo-submit').removeClass('drag');

    # Create thumbs
    createThumb: (file) =>
      fileReader = new FileReader;
      fileReader.onload = =>
        img = new Image;
        img.onload = =>
          canvas = document.createElement "canvas"
          ctx    = canvas.getContext("2d")
          w      = img.width
          h      = img.height

          ctx.drawImage(img, 0, 0, w, h, 0,0, w, h)
          thumb = canvas.toDataURL("image/png")

          @dropzone.emit('thumbnail', file, thumb)

        img.src = fileReader.result;
      fileReader.readAsDataURL(file)


    # Show file preview
    thumbnail: (file,dataUrl) =>
        # Clean message
        $jQ('.message','#photo-submit').hide();

        img = new Image;
        img.src = dataUrl;
        $jQ(img).bind 'click', @showDialog


        if($jQ('img','#photo-submit').length)
            $jQ('img','#photo-submit').attr  {'src': dataUrl}
        else
            $jQ('#photo-submit').append(img)


    submitPicture: (ev) =>

        # Send photo by hand... weirdo
        files = $jQ('#photo-submit').data('dropzone').files
        file  = files[ files.length - 1]

        photo = new FormData()
        photo.append('photo',  file)

        xhr = new XMLHttpRequest()
        xhr.open('POST', window.API_SUBMIT_PHOTO, true);

        that = @
        xhr.onload = (e) =>
            response = xhr.responseText
            response = JSON.parse(response)

            @photoSubmitProgress('end')

            if(response.status == "OK")
                @photoSubmitSuccess(response)
            else
                @photoSubmitError(response)

        xhr.setRequestHeader("Accept", "application/json")
        xhr.setRequestHeader("Cache-Control", "no-cache")
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest")
        xhr.setRequestHeader("X-File-Name", file.name)

        @photoSubmitProgress('start')
        xhr.send(photo)

        return false

    startProgressBar:  =>
        $jQ('#bt-submit-photo').addClass('upprogress')

        window.upinterval = setInterval( =>
            @idx = (@idx + 1)  % @opts.length
            txt  = @opts[@idx]
            $jQ('#bt-submit-photo').text(txt)
        , @delta)
        console.log(window.upinterval)

    stopProgressBar: =>
        clearInterval(window.upinterval)

        $jQ('#bt-submit-photo').text('ok :D')
        setTimeout( ->
            $jQ('#bt-submit-photo').removeClass('upprogress').text('upload')
        , 3000 )

    photoSubmitProgress: (eof) =>
        if eof is 'start'
            @upprogress = true
            @startProgressBar()
        else if eof is 'end'
            @upprogress = false
            @stopProgressBar()

    photoSubmitSuccess: (data) =>
        setTimeout( ->
            overlay.hide(0)
        , 1000 )

    photoSubmitError: (data) =>
        $jQ('#photo-submit').css({'border-color': '#ff0000'})

module.exports = PhotoUploadOvr
