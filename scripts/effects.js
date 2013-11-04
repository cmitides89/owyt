$(document).ready(function(){
// 	$(".fag").css({marginLeft:'-999px'}).animate(
// 		{marginLeft: '0px'},{duration: 2000, queue:false});
// 	$(".jamey").css({marginRight:'-999px'}).animate(
// 		{marginRight:'0px'},{duration:2000, queue: false});
// 	// $('#overlay').animate({ opacity: 1, 
// 	// }, 5000, function(){
// 	// 		// done fading.
// 	// });
				//js modal //
	onclick=function overlay(){
		el= document.getElementById("overlay-modal");
		el.style.visibility = (el.style.visibility == "visible")? "hidden":"visible";
	};

 });