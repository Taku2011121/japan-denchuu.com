/////////////// FullPage Function////////////////
$(document).ready(function() {
    $('#FullPage').fullpage({
        scrollingSpeed: 1100,
        navigationPosition: 'right',
        loopBottom: true,
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		menu: '#menu'
    });
});

///////////////// parts desc. ///////////////

$(function() {
	// closebutton
	$("#close-parts").click(function() {
		$("#parts-menu,#supporter-menu,#pole-menu,#trance-menu,#gaisi-menu").fadeOut();
	});
	// menu
	$("#supporter, #pole, #trance, #gaisi").click(function() {
		$("#parts-menu").fadeIn();
	});

	

	
	
	$("#supporter").click(function() {
		$("#supporter-menu").fadeIn();
	});
	$("#pole").click(function() {
		$("#pole-menu").fadeIn();
	});
	$("#trance").click(function() {
		$("#trance-menu").fadeIn();
	});
	$("#gaisi").click(function() {
		$("#gaisi-menu").fadeIn();
	});
	
});


/////////////// gallery ////////////////
$(function(){
$('.gal-parent').magnificPopup({
  delegate: 'a', 
  type: 'image',
  gallery: { 
    enabled:true
  }
  });
});



/////////////// navigation ////////////////
$(function() {
	$("#btn").click(function() {
		$("#overlay").fadeIn();
	});
	
	$("#close").click(function() {
			$("#overlay").fadeOut();
	});
	$(".close").click(function() {
			$("#overlay").fadeOut();
	});
	
});


//////////////// map ////////////////
//  map-menu 
$(function() {       
	$("#map-button").click(function() {
		$("#map-menu,#map,#capture").fadeIn();
		google.maps.event.trigger(map,'resize');
    	map.setCenter(latlng);
	});
	
	$("#map-close").click(function() {
			$("#map-menu,#map,#capture").fadeOut();
	});
});


var map;
var src = 'http://japan-denchuu.com/etc/map.kmz';

function initMap() {
	map = new google.maps.Map(document.getElementById('map'),{
	 	center: new google.maps.LatLng(35.69354, 139.70234),
	 	zoom: 16, 
		disableDefaultUI: true
 	});
 	loadKmlLayer(src, map); 
 }

function loadKmlLayer(src, map) { 
	var kmlLayer = new google.maps.KmlLayer(src, {
		suppressInfoWindows: true, 
		preserveViewport: true, 
		map: map 
	});
	google.maps.event.addListener(kmlLayer, 'click', function(event) { 
		var content = event.featureData.infoWindowHtml; 
		var testimonial = document.getElementById('capture'); 
		testimonial.innerHTML = content;
	});
}

google.maps.event.addDomListener(window, 'resize', function(){
  map.panTo(latlng);
});

