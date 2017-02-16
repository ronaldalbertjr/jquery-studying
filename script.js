$(document).ready(function(){

	$('div.p').append("<p>Good Bye</p>");
	$('div.p').prepend("<p>Hello</p>");
	$('div.p').after("<div><p> Isso esta depois do outro div </p></div>");
	$('div.p').before("<div><p> Isso esta antes do outro div </p></div>")


	$('div.click-me').mouseenter(function(){
		var $target = $(this);
		$target.fadeTo('fast', 1);
	});

	$('div.click-me').mouseleave(function(){
		var $target = $(this);
		$target.fadeTo('fast', 0.5);
	});

	$('div.click-me').click(function(){
		var $target = $(this);
		$target.hide();
	});

	$('.pull-me').click(function(){
		 $(".panel").slideToggle("slow");
	});

});