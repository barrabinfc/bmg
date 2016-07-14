#
App             = require('./app4.coffee')
OverlayManager  = require('./overlay/manager.coffee')

Loader          = require('./loader.coffee')

init = ->
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

    prefetch = 50
    onLoadProgress = (instance, img) ->
        if (img.length > prefetch)
            onLoadedComplete(instance,img)

    # Plz wait 600 ms before finishing
    onLoadedComplete = (instance, img) ->
        console.log('loader complete')
        setTimeout( mloader.complete , 600 )

    # Get genitalia pictures, and start feeding it!
    $jQ.getJSON API_URL , (data) =>
        banco.setup data, onLoadProgress, onLoadedComplete


    ###############
    # User Events #
    ###############
    $jQ('#menu-mostraoteu').on 'click', (ev) ->
                            console.log("click ", ev)
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




###
 This function cannot be renamed.
 OpenBooth will always automatically call "onFlashReady" upon initializing itself.
onFlashready = ->
    setTimeout( ->
        window.overlay.getController('photobooth').embedComplete()
    , 500 )
###
