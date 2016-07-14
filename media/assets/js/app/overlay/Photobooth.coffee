class PhotoboothOvr
    constructor: (@parent, @el) ->

    start: =>
        swfobject.switchOffAutoHideShow()
        swfobject.registerObject("openbooth","9")

        window.openbooth_options = {
            'enableSound': true, # Camera sounds
            'enableFlash': true, # Camera Flash effect
            'enableSettingsButton': true, # Flash settings button (only appears when hovering over video)
            'bandwidth': 0, # Max Bandwidth (0 = unlimited)

            'photoQuality' : 100, # JPEG Photo quality (0 - 100)
            'photoWidth'  : 459, # Photo width
            'photoHeight'  : 344, # Photo height

            'cameraWidth'  : 459, # Camera source width (tip: should be in increments of 320)
            'cameraHeight' : 344, # Camera source height (tip: should be in increments of 240)
            'cameraFPS'   : 25, # Camera source frames per second

            'timerTimeout' : 3, # Camera timer length
            'timerX'    : 198, # Camera timer X position on video
            'timerY'    : 250, # Camera timer Y position on video
            'timerAlpha'  : 0.6, # Camera timer opacity (0 - 1)

            'callbacks'   : {
                'initComplete'   : @initComplete, # Fired when Flash finished initializing the init() function
                'uploadSuccessful' : @uploadSuccessfull, # Fired when an upload was successful
                'onError'      : @uploadError, # Fired when there was an upload error

                'previewComplete'  : @previewComplete, # Fired when a snapshot was taken
                'previewCanceled'  : @previewCanceled, # Fired when a snapshot was dismissed

                'videoStart'    : false, # Fired when a video source started
                'noVideoDevices'  : false, # Fired when no video sources were detected
                'uploadComplete'  : false  # Fired when an upload function was completed
            },

            'placeholders' : {
                'load'     : '/images/openbooth_allow_dev.jpg',  # Placeholder image: Before video started
                'save'     : '/images/openbooth_saving_dev.jpg', # Placeholder image: While image is uploaded
                'noVideoDevices': '/images/openbooth_nocameras_dev.jpg' # Placeholder image: When no video devices were detected
            }
        }

        window.openbooth = swfobject.getObjectById('openbooth')
        @openbooth = window.openbooth

        #

    stop: =>
      return

    render: (page_data) =>
      return

    embedComplete: =>
        console.log("Embed complete, calling openbooth.init()")
        console.log @openbooth
        @openbooth.init( window.openbooth_options )
        @openbooth.camInit();
        console.log("Called. Waiting for init")

    initComplete: (ev) =>
        console.log("Init completed")
        @openbooth.camInit();
        return

    uploadedSuccessful: (ev) =>
        return

    uploadedError: (ev) =>
        return

    previewComplete: (ev) =>
        return

    previewCanceled: (ev) =>
        return

    stop: =>
        return


module.exports = PhotoboothOvr
