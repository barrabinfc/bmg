var MEDIA_URL  = "{{ MEDIA_URL }}";
var STATIC_URL = "{{ STATIC_URL }}";

window.API_URL = '/photos/json';
window.API_SUBMIT_PHOTO = '/photos/upload';
window.API_VERIFY_PHOTO = '/photos/verify';

window.WIDTH  = window.innerWidth;
window.HEIGHT = window.innerHeight;
window.PHOTO_TILING = 'sequential';

window.wall_el = $('#genitalia-wall');
window.masonry = undefined;


function setup(){

    // Fetch all genitalias
    fetch_genitalias_db();

    // create Wall
    window.wall_el = $('#genitalia-wall');
    window.masonry = new Masonry( wall_el.get(0), {
        columnWidth: 150,
        itemSelector: '.item',
        gutter: 20,
        isFitWidth: true
    });

    masonry.bindResize();

}

//imagesLoaded( wall_el.get(0), function(){
    ////var newElements = $( newElements );
//});





window.gen_db = [];
window.gen_idx = 0;
window.per_page = 16;
function fetch_genitalias_db(){
    console.log("Fetching genitalias...");
    $.getJSON( API_URL, function(data){
        gen_db = data;

        gen_idx = Math.floor( Math.random() * gen_db.length );
        next_page();
    });
}


function next_page(){
    // Add photos
    var photos = get_genitalias_paginated();
    var i      = 0;
    for(i=0;i < photos.length; i++){

        (function(){
            // Delay every image a little bit
            var c_idx = i;
            var delay_time = i*300.0; //i*70.0 + ((Math.random()*2)-1);

            setTimeout( $.proxy(function(){
                this.add_genitalia(photos[c_idx]);
                this.masonry.layout();
            },this), delay_time ); //+ (( Math.random()*2.0)-1 )*50);
        })(this);
    }
    masonry.layout();
}

function get_genitalias_paginated(){
    page = gen_db.slice(gen_idx, gen_idx + per_page );

    gen_idx = (gen_idx + per_page) % gen_db.length;
    //gen_idx += per_page;

    return page;

}


function add_genitalia(gen){
    var el = $('<div class="item"></div>');
    var img = $('<img src="' + gen['url_small'] + '">');
    var t = ($(el).append(img)).get(0);

    $(wall_el).append( t );
    masonry.appended( t );
};

function on_end_page(){
    next_page();
}

var SCROLL_OFFSET = 30;
$(window).scroll(function () {
   if ($(window).scrollTop() >= $(document).height() - $(window).height() - SCROLL_OFFSET ) {
       next_page();
   }
});

// go
$(document).ready( function(){
    setup();
})

