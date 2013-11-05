$(document).ready(function(){
	setTimeout(function(){
		$(".fag").delay(5000).css({marginLeft:'-999px'}).animate(
			{marginLeft: '0px'},{duration: 2000, queue:false});
		$(".jamey").css({left:'999px'}).animate(
			{left:'606px'},{duration:2000, queue: false});
		$(".jamey2").css({left:'999px'}).animate(
			{left:'606px'},{duration:2000, queue: false});
		$(".rip-date").css({left:'999px'}).animate(
			{left:'375px'}, {duration:2000, queue: false});
		$('#overlay').animate({ opacity: 1, }, 5000, function(){
				// done fading.
		});
		$(".fag").css({color:'#191919'});
	}, 5000);
				//js modal //
	// onclick=function overlay(){
	// 	el= document.getElementById("overlay-modal");
	// 	el.style.visibility = (el.style.visibility == "visible")? "hidden":"visible";
	// };

 });