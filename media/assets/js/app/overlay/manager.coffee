PhotoUpload = require('overlay/PhotoUpload')
Photobooth = require('overlay/Photobooth')

class OverlayManager
    constructor: (el) ->
        @el = $jQ(el)
        @pages = ['photobooth','mostraoteu']
        @controllers   = [new Photobooth(this,@el),new PhotoUpload(this,@el)]
        
        @el.css({width: WIDTH, height: HEIGHT})
        @on = false
        @init = false
        
        #@cobj = @pages[0]
        #@cpage_name = @pages[0]
        #@cpage = @pages[0]

    getController: (page_name) ->
        return @controllers[ @pages.lastIndexOf( page_name ) ]

    getActiveController: ->
        return @controllers[ @pages.lastIndexOf( @cpage_name ) ]

    setPage: (new_page) =>
        @cpage.hide() if(@cpage)
        @cpage = $jQ('#' + new_page)

        console.log(@cobj);
        
        @cpage_name = new_page
        @cobj = @controllers[ @pages.lastIndexOf( new_page ) ]
        if not @init
            @cobj.start()
            @init = true

    show: =>
        @el.fadeIn('fast', @cobj.on_show_complete)
        @cpage.show()
        @on = true
        
    hide: =>
        if(@cobj)
            @el.fadeOut('slow', @cobj.on_hide_complete )
        else
            @el.fadeOut('slow')

        @on = false
        
        @cobj.stop() if @cobj

module.exports = OverlayManager
