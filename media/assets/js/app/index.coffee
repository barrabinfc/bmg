#
App             = require('./app4.coffee')
OverlayManager  = require('./overlay/manager.coffee')

Loader          = require('./loader.coffee')

init = ->
    ga('send','timing','JS Loading Time','jsloadtime', Math.round( performance.now() ) );

    # Show the /etc/motd
    overlay = new OverlayManager('#overlay')
    overlay.hide()

    # Mloader
    mloader = new Loader('#loading')
    mloader.loading()

    # Start the genitalia wall
    banco = new App( '#viewport', [window.innerWidth, window.innerHeight] )

    #overlay.hide()
    menu  = $jQ('#menu')
    menu.show()

    prefetch = 30
    onLoadProgress = (instance, img) ->
        if (img.length > prefetch)
            onLoadedComplete(instance,img)

    # Plz wait 600 ms before finishing
    onLoadedComplete = (instance, img) ->
        if(window.performance)
          timeSinceLoad = Math.round( performance.now() )
          ga('send','timing','Images loading Time','imgloadtime', timeSinceLoad )

        # Hide loading screen
        mloader.complete()

    # Get genitalia pictures, and start feeding it!
    $jQ.getJSON API_URL , (data) =>
        ga('send','timing','JSON loading Time','jsonloadtime', Math.round(performance.now()))
        banco.setup data, onLoadProgress, onLoadedComplete

    ###############
    # User Events #
    ###############
    $jQ('#menu-mostraoteu').on 'click', (ev) ->
                            if(overlay.on)
                                overlay.hide()
                            else
                                overlay.setPage('mostraoteu')
                                overlay.show()

                            ev.stopPropagation()
                            return false

    # GLOBAL VARj
    window.loader  = mloader
    window.overlay = overlay
    window.banco   = banco
    window.menu    = menu
    window.$jQ     = $jQ


module.exports.init = init

window.WIDTH  = window.innerWidth
window.HEIGHT = window.innerHeight
window.PHOTO_TILING = 'sequential'

$.fx.speeds._default = 500

document.addEventListener 'DOMContentLoaded', ->
    window.$jQ = $
    $.noConflict()

    init()
