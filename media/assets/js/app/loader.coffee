class Loader
    constructor: (el) ->
        @el    = $jQ(el)

    loading: =>
        $jQ(@el).css({opacity: 0.8}).show().queue( =>
            @loadingAnimation()
            $jQ(@el).transition({opacity: 1}).dequeue()
        )

    loadingAnimation: ->
        cycle = ['Loading /¯\\_/', 'Loading _/¯\\_', 'Loading \\_/¯\\', \
                 'Loading /¯\\_/', 'Loading _/¯\\_', 'Loading \\_/¯\\', \
                 'Loading /¯\\_/', 'Loading _/¯\\_', 'Loading \\_/¯\\', ]
        i = 0
        @load_id = setInterval( =>
            i = (++i) % cycle.length
            $jQ(@el).children('p').text( cycle[i] )
        , 1000/4 )

    complete: =>
        clearInterval(@load_id)
        $jQ(@el).transition({opacity: 0}).queue( =>
            $jQ(@el).hide().dequeue()
        )

module.exports = Loader
