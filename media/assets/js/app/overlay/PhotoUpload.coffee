class PhotoUploadOvr
    constructor: (@parent, @el) ->
        
    start: => 
        # Setup dropzone
        $jQ('#photo-submit',@el).dropzone({
            url: window.API_VERIFY_PHOTO,
            paramName: 'photo',
            createImageThumbnails: false,
            thumbnailWidth:  310,
            thumbnailHeight: 460,
            previewTemplate: "",
            parallelUploads: 1,
            acceptedFiles: 'image/*'
        });

        @dropzone = $jQ('#photo-submit').data('dropzone')
        
        # Show a sign while Dragging
        @dropzone.on("dragenter", @dragEnter );
        @dropzone.on("dragleave", @dragLeave );
        @dropzone.on("drop", @dragLeave );
        
        # Show the thumbnail of picture
        @dropzone.on('thumbnail', @thumbnail )
        
        # Setup click handlers
        @setupEvents()


    stop: =>
        return

    on_show_complete: =>
        console.log("Uepa, show")
        return;

    on_hide_complete: =>
        console.log("Uepa, hide!")
        return;
    
    setupEvents: ->
        #$jQ('#photo-submit #bt-file').bind 'click', (ev) ->
        #    console.log("Hello World")
        #    $jQ('#photo-submit').click();

            
        $jQ('#bt-cancel-photo',@el).on 'click', (ev) ->
            overlay.hide()
            ev.stopPropagation()
        
        $jQ('#bt-submit-photo').on 'click' , @submitPicture 




    # Show a sign while draggning
    dragEnter: (ev) ->
        $jQ('#photo-submit').addClass('drag');
    dragLeave: (ev)  ->
        $jQ('#photo-submit').removeClass('drag');


    # Show file preview
    thumbnail: (file,dataUrl) ->
        # Clean message
        $jQ('div','#photo-submit').remove();

        img = new Image;
        img.src = dataUrl;

        if($jQ('img','#photo-submit').length)
            $jQ('img','#photo-submit').attr( {'src': dataUrl});
        else
            $jQ('#photo-submit').append(img);


    submitPicture: (ev) ->
        # Send photo by hand... weirdo
        files = $jQ('#photo-submit').data('dropzone').files
        file  = files[ files.length - 1];

        photo = new FormData()
        photo.append('photo',  file)

        xhr = new XMLHttpRequest()
        xhr.open('POST', window.API_SUBMIT_PHOTO, true);

        that = @
        xhr.onload = (e) =>
            response = xhr.responseText;

            if(xhr.getResponseHeader("content-type").indexOf("application/json"))
                response = JSON.parse(response)

            if(response['status'] == 'OK')          that.photoSubmitSuccess(response)
            else                                    that.photoSubmitError(response)

        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.setRequestHeader("X-File-Name", file.name);

        xhr.send(photo);

        return false


    photoSubmitSuccess: (data)->
        console.log(data);
        overlay.hide()


    photoSubmitError: (data) ->
        console.log(data);
    

module.exports = PhotoUploadOvr