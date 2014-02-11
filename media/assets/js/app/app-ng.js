var Settings = function(){
    this.MEDIA_URL  = "{{ MEDIA_URL }}";
    this.STATIC_URL = "{{ STATIC_URL }}";

    this.API_URL = '/photos/json';
    this.API_SUBMIT_PHOTO = '/photos/upload';
    this.API_VERIFY_PHOTO = '/photos/verify';

    this.bg = '#000';
    this.per_page = 16;
    this.scroll_offset = 30;
    this.gutter = 2;
    this.vertspace = 5;
    this.columnWidth = 150;
    this.delaytime = 100;

    this.update = function(){
        window.update();
    };

    return this;
};

window.wall_el = $('#genitalia-wall');
window.masonry = undefined;

function setup(){

    window.wall_el = $('#genitalia-wall');
    window.sett    = new Settings();
    window.gui     = new dat.GUI();

    console.log(window.sett);
    gui.addColor(sett, 'bg');
    //gui.add(sett,'columnWidth',   10,500);
    gui.add(sett,'per_page',   8,96);
    var gktrl = gui.add(sett,'gutter',    0,50);
    var vktrl = gui.add(sett,'vertspace', 0,50);
    gui.add(sett,'delaytime',  30, 1000);
    gui.add(sett,'scroll_offset', 30 );
    gui.add(sett,'update')

    // Fetch all genitalias
    fetch_genitalias_db();

    // create Wall
    window.masonry = new Masonry( wall_el.get(0), {
        columnWidth: 160,
        itemSelector: '.item',
        gutter: window.sett.gutter,
        isFitWidth: true,
    });

    masonry.bindResize();
}

imagesLoaded( wall_el.get(0), function(){
    var newElements = $( newElements );
});

function update(){
    $('.item').css({'margin-bottom': window.sett.vertspace});
    $('body').css({'background-color': window.sett.bg});
    window.masonry.layout();
    masonry.layout();
}





window.gen_db = [];
window.gen_idx = 0;
function fetch_genitalias_db(){
    $.getJSON( window.sett.API_URL, function(data){
        window.gen_db = data;

        window.gen_idx = Math.floor( Math.random() * gen_db.length );
        console.log("Per page is now -> ", window.sett.per_page)
        next_page();
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
            var delay_time = i*window.sett.delaytime; //i*70.0 + ((Math.random()*2)-1);

            setTimeout( $.proxy(function(){
                this.add_genitalia(photos[c_idx]);
                this.masonry.layout();
            },this), delay_time ); //+ (( Math.random()*2.0)-1 )*50);
        })(this);
    }
    masonry.layout();
}

function get_genitalias_paginated(){
    page = gen_db.slice(gen_idx, gen_idx + window.sett.per_page );

    gen_idx = (gen_idx + window.sett.per_page) % gen_db.length;
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
    next_page();000
}

$(window).scroll(function () {
   if ($(window).scrollTop() >= $(document).height() - $(window).height() - window.sett.scroll_offset) {
       next_page();
   }
});


// go
$(document).ready( function(){
    console.log("setup");
    setup();
})

