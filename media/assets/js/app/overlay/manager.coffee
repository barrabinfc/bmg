PhotoUpload = require('./PhotoUpload.coffee')
Photobooth = require('./Photobooth.coffee')
PhotoView   = require('./PhotoView.coffee')

###

    A single overlay , with multiple pages.
    Only one active page per time.

    @cpage = DOM element
    @cobj  = Page Controller

    PageController.start = on first appeareance
    PageController.stop  = on hided
    PageController.render = on *every* appeareance
###
class OverlayManager
    constructor: (el) ->
        @el = $jQ(el)
        @pages = ['photobooth','mostraoteu','photoview']
        @controllers   = [new Photobooth(this,@el), new PhotoUpload(this,@el), new PhotoView(this,@el)]

        @el.css({width: WIDTH, height: HEIGHT})
        @on = false
        @init = false

        $jQ('.overlay').on('click', $jQ.debounce( 300, @hide ) );
        $jQ('.overlay-close').on('click', $jQ.debounce( 300, @hide ) )

        $jQ('#photobooth').hide();
        $jQ('#mostraoteu').hide();
        $jQ('#photoview').hide();


    getController: (page_name) ->
        return @controllers[ @pages.lastIndexOf( page_name ) ]


    ### Return active controller class ###
    getActiveController: ->
        return @controllers[ @pages.lastIndexOf( @cpage_name ) ]

    ### Change current active page ###
    setPage: (new_page, page_data={}) =>
        @cpage.hide()       if(@cpage)
        @cpage = $jQ('#' + new_page)

        @cpage_name = new_page
        @cobj = @controllers[ @pages.lastIndexOf( new_page ) ]
        if not @init
            @cobj.start( page_data )
            @init = true

        @cobj.render( page_data )

    ### Show overlay ###
    show: =>
        $jQ('#menu-mostraoteu').addClass('closebtn')
        @el.addClass('visible');
        #@el.show().transition({opacity: 1})
        @cpage.show()
        @on = true

    ### Hide overlay ###
    hide: =>
        @el.removeClass('visible')

        @on = false
        @cobj.stop() if @cobj

        $jQ('#menu-mostraoteu').removeClass('closebtn')


module.exports = OverlayManager
