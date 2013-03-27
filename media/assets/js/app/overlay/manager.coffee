PhotoUpload = require('overlay/PhotoUpload')
Photobooth = require('overlay/Photobooth')

class OverlayManager
    constructor: (el) ->
        @el = $jQ(el)
        @pages = ['photobooth','mostraoteu']
        @objs   = [new Photobooth(this,@el),new PhotoUpload(this,@el)]
        
        @el.css({width: WIDTH, height: HEIGHT})
        @on = false
        @init = false

    setPage: (new_page) =>
        @init.hide() if(@cpage)
        @cpage = $jQ('#' + new_page)
        
        @cobj = @objs[ @pages.lastIndexOf( [new_page] ) ]        
        if not @init
            @cobj.start()
            @init = true

    show: =>
        @el.fadeIn('fast')
        @cpage.show()
        @on = true
        
    hide: =>
        @el.fadeOut('slow')
        @on = false
        
        @cobj.stop() if @cobj

module.exports = OverlayManager