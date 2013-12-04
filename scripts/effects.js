$(document).ready(function(){
	setTimeout(function(){
		$(".fag").css({marginLeft:'-999px'}).animate(
			{marginLeft: '0px'},{duration: 2700, queue:false});
		$(".jamey").css({marginLeft:'999px'}).animate(
			{marginLeft:'279px'},{duration:2700, queue: false});
		$(".jamey2").css({marginLeft:'999px'}).animate(
			{marginLeft:'279px'},{duration:2700, queue: false});
		$(".rip-date").css({marginLeft:'999px'}).animate(
			{marginLeft:'-3px'}, {duration:2700, queue: false});
		$('#overlay').animate({ opacity: 1, }, 5300, function(){
				// done fading.
		});
		$(".fag").css({color:'#191919'});
	}, 2000);
//j mother fucking query modal //
	$(".buttons, .join").click(function(){
		$("#overlay-modal").fadeIn();
		return false;
	});
	$("button").hover( function(){
		$("button").css({"background-color":"white","color":"black"});
	}, function() {
		$("button").css({"background-color":"black","color":"white"});

	}
	);

	// var i = 1;
	$(document).scroll(function(){
	// 		if($(window).scrollTop() >= 892 && $(window).scrollTop() <= 3000){
	// 				$(".inner-modal").css({marginTop: "475px"});
	// 		}
	// 	});
	// $(document).scroll(function(){
	// 		if($(window).scrollTop() >= 454 && $(window).scrollTop() <= 531){
	// 				$(".inner-modal").css({marginTop: "520px"});
	// 		}
	// 	});
	// $(document).scroll(function(){
	// 		if($(window).scrollTop() >= 532 && $(window).scrollTop() <= 890){
	// 				$(".inner-modal").css({marginTop: "834px"});
	// 		}



		$(".inner-modal").css({
				marginTop: $(window).scrollTop()+40+"px", 
				height: $(window).height()
			});
		});

	$(document).mousedown(function(e){
			var clicked = $(e.target);
		if (clicked.is('.x')){
				return;
			} else { $('#overlay-modal').hide();
		}
	});
 });



		// $("body").click(function(event){
		// 	alert("this is the x coord: " +event.pageX); 
		// 	alert("this is the y coord: " +event.pageY);
		// });

		
// slut animation//
var i = 1;
$(document).scroll(function(){
	if($(window).scrollTop() >= 1091 && $(window).scrollTop() <= 1112 && i === 1){
		setTimeout(function(){
			$(".rip-date2").css({marginLeft: "0px"}, {queue: false});
		$(".slut").css({marginLeft:'-999px'}).animate({marginLeft:'39px'}, {duration: 2000, queue:false});
		$("#reb1").css({marginLeft:'999px'}).animate({marginLeft:'175px'}, {duration: 2000, queue:false});
		$("#reb2").css({marginLeft:'999px'}).animate({marginLeft:'175px'}, {duration: 2000, queue:false});
		$("#reb3").css({marginLeft:'999px'}).animate({marginLeft:'179px'}, {duration: 2000, queue:false});
		$(".rip-date2").css({left:'999px'}).animate({left:'451px'}, {duration: 2000, queue: false});
		$('#overlay2').animate({ opacity: 1, }, 2000, function(){
				// done fading.
		});
		$(".slut").css({color:'#191919'});
	}, 10);
                i++;
	}
});