$(document).ready(function(){
	setTimeout(function(){
		$(".fag").css({marginLeft:'-999px'}).animate(
			{marginLeft: '0px'},{duration: 2700, queue:false});
		$(".jamey").css({marginLeft:'999px'}).animate(
			{marginLeft:'290px'},{duration:2700, queue: false});
		$(".jamey2").css({marginLeft:'999px'}).animate(
			{marginLeft:'290px'},{duration:2700, queue: false});
		$(".rip-date").css({marginLeft:'999px'}).animate(
			{marginLeft:'65px'}, {duration:2700, queue: false});
		$('#overlay').animate({ opacity: 1, }, 5300, function(){
				// done fading.
		});
		$(".fag").css({color:'#191919'});
	}, 3500);
//j mother fucking query modal //
	$(".buttons").click(function(){
		$("#overlay-modal").show();
	});
	$(document).mousedown(function(e){
			var clicked = $(e.target);
		if (clicked.is('.inner-modal') || clicked.parents().is('.inner-modal')){
				return;
			} else { $('#overlay-modal').hide();
		}
	});
 });
// add margins depending on screen size//
 var bestsize = 1445;
 var width = $('.first-image').width();
 // if ($('.first-image').width() >= bestsize ){
	// $('.first-image').css({margin: "0 auto"});
 // });
// $(window).resize(function(){
// if( width >= bestsize){
// 	$('.first-image').css({margin : '0 auto'});

// }
// else {
// 	$('.first-image').css({margin :' 0 0 -1px 0'});

// }
// });
// if ()
// 1445

// slut animation//
var i = 1;
$(document).scroll(function(){
	if($(window).scrollTop() >= 1100 && $(window).scrollTop() <= 1150 && i === 1){
		setTimeout(function(){
		$(".slut").css({marginLeft:'-999px'}).animate({marginLeft:'39px'}, {duration: 2000, queue:false});
		$("#reb1").css({marginLeft:'999px'}).animate({marginLeft:'175px'}, {duration: 2000, queue:false});
		$("#reb2").css({marginLeft:'999px'}).animate({marginLeft:'175px'}, {duration: 2000, queue:false});
		$("#reb3").css({marginLeft:'999px'}).animate({marginLeft:'204px'}, {duration: 2000, queue:false});
		$(".rip-date2").css({left:'999px'}).animate({left:'451px'}, {duration: 2000, queue: false});
		$('#overlay2').animate({ opacity: 1, }, 2000, function(){
				// done fading.
		});
		$(".slut").css({color:'#191919'});
	}, 500);
                i++;
	}
});