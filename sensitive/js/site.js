jQuery(function(){
    jQuery('input[type=button]').addClass('btn');
    jQuery('input[type=submit]').addClass('btn btn-inverse');  
    jQuery('#nav-single a').addClass('btn btn-info');

    if(jQuery(window).width()>=800){
        jQuery('#topmenu .dropdown').hover(function() {
            jQuery(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();

        }, function() {
            jQuery(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();

        });
        jQuery('#topmenu .dropdown > a').click(function(){
            location.href = this.href;
        });} else {
        jQuery('.dropdown').click(function(e){
            e.preventDefault();
            jQuery(this).find('.dropdown-menu').first().stop(true, true).slideToggle();
        });
    }

    var map = null;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (p) {
        initMap([p.coords.longitude, p.coords.latitude]);
      }, function (error) {
        initMap();
      });
    } else {
      initMap();
    }

    function initMap(center) {
      var mapCont = jQuery('.navbar-wrapper');
      mapCont.prepend('<div class="geomap" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0;">');

      map = jQuery(".geomap").geomap({
        center: center || [-71.0597732, 42.3584308],
        zoom: 7
      });

      jQuery( ".osm" ).geomap("opacity", .5);
    }

});
