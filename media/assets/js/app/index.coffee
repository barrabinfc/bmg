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

    # Get genitalia pictures, and start feeding it!
    $jQ.getJSON API_URL , (data) =>
        banco.setup data

    setTimeout( ->
        mloader.complete()
    , 5000)

    ###############
    # User Events #
    ###############
    $jQ('#menu-mostraoteu').on 'click', (ev) ->
                            if(overlay.on)
                                overlay.hide()
                            else
                                overlay.setPage('mostraoteu')
                                #overlay.setPage('photobooth')
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



window.API_URL = '/photos/json'
window.API_SUBMIT_PHOTO = '/photos/upload'
window.API_VERIFY_PHOTO = '/photos/verify'

window.WIDTH  = window.innerWidth
window.HEIGHT = window.innerHeight
window.PHOTO_TILING = 'random'

document.addEventListener 'DOMContentLoaded', ->
    window.$jQ = $
    $.noConflict()

    init()




###
 This function cannot be renamed.
 OpenBooth will always automatically call "onFlashReady" upon initializing itself.
###
onFlashready = -> 
    console.log("Openbooth loaded")
    setTimeout( ->
        window.overlay.getController('photobooth').embedComplete()
    , 500 )
