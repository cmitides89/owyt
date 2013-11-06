$(document).ready(function(){
	setTimeout(function(){
		$(".fag").css({marginLeft:'-999px'}).animate(
			{marginLeft: '0px'},{duration: 2700, queue:false});
		$(".jamey").css({left:'999px'}).animate(
			{left:'606px'},{duration:2700, queue: false});
		$(".jamey2").css({left:'999px'}).animate(
			{left:'606px'},{duration:2700, queue: false});
		$(".rip-date").css({left:'999px'}).animate(
			{left:'375px'}, {duration:2700, queue: false});
		$('#overlay').animate({ opacity: 1, }, 5300, function(){
				// done fading.
		});
		$(".fag").css({color:'#191919'});
	}, 3500);
									//j mother fucking query modal //
	// onclick=function overlay(){
	// 	el= document.getElementById("overlay-modal");
	// 	el.style.visibility = (el.style.visibility == "visible")? "hidden":"visible";
	// };
	 // $("body").click(function(event){
  //       alert("This is the x coordinate: "+event.pageX);
  //       alert("This is the y coordinate: "+event.pageY);
  //   });
	 // $(".second-image").mouseenter(function(evt){

	 // });
	$(".buttons").click(function(){
		$("#overlay-modal").show();
		console.log("fuck off");
	});
	$("#overlay-modal").click(function(){
		$("#overlay-modal").hide();
	});
 });
var i = 1;
$(document).scroll(function(){
	if($(window).scrollTop() >= 1100 && $(window).scrollTop() <= 1150 && i === 1){
		setTimeout(function(){
		$(".slut").css({marginLeft:'-999px'}).animate({marginLeft:'0px'}, {duration: 2000, queue:false});
		$("#first-p").css({left:'999px'}).animate({left:'513px'}, {duration: 2000, queue:false});
		$("#second-p").css({left:'999px'}).animate({left:'462px'}, {duration: 2000, queue:false});
		$("#third-p").css({left:'999px'}).animate({left:'499px'}, {duration: 2000, queue:false});
		$("#fourth-p").css({left:'999px'}).animate({left:'620px'}, {duration: 2000, queue:false});
		$("#fifth-p").css({left:'999px'}).animate({left:'461px'}, {duration: 2000, queue:false});
		$("#sixth-p").css({left:'999px'}).animate({left:'458px'}, {duration: 2000, queue:false});
		$("#seventh-p").css({left:'999px'}).animate({left:'531px'}, {duration: 2000, queue:false});
		$("#eighth-p").css({left:'999px'}).animate({left:'679px'}, {duration: 2000, queue:false});
		$("#ninth-p").css({left:'999px'}).animate({left:'600px'}, {duration: 2000, queue:false});
		$(".rip-date2").css({left:'999px'}).animate({left:'782px'}, {duration: 2000, queue: false});
		$('#overlay2').animate({ opacity: 1, }, 2000, function(){
				// done fading.
		});
		$(".slut").css({color:'#191919'});
	}, 500);
                i++;
	}
});