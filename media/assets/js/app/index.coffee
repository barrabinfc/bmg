OverlayManager  = require('overlay/manager')
App             = require('app4')

init = ->
    # Show the /etc/motd
    overlay = new OverlayManager('#overlay')
    #overlay.hide()
    
    # Start the genitalia wall
    banco = new App( '#viewport', [window.innerWidth, window.innerHeight] )

    overlay.hide()
    menu  = $jQ('#menu')
    menu.show()

    # Get genitalia pictures, and start feeding it!
    $jQ.getJSON API_URL , (data) =>
        banco.setup data

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

    # GLOBAL VARS
    window.overlay = overlay
    window.banco   = banco
    window.menu    = menu
    window.$jQ     = $jQ

module.exports.init = init
