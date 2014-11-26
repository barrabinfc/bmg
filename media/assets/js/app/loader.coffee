class Loader
    constructor: (el) ->
        @el    = $jQ(el)

    loading: ->
        $jQ(@el).css({opacity: 0.8}).show().queue( ->
            $jQ(this).transition({opacity: 1}).dequeue()
        )

    complete: =>
        $jQ(@el).transition({opacity: 0}).queue( ->
            $jQ(this).hide().dequeue()
        )

module.exports = Loader
