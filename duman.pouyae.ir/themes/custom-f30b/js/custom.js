if (typeof $ == 'undefined')
	var $ = jQuery;

$(function(){
	$('.header-search-button').click(function(e) {
		$('.search-overlay').fadeIn();
		$('body').css({"overflow": "hidden"});
		e.preventDefault();
	});
	$('.search-close').click(function(e) {
		$('.search-overlay').fadeOut();
		$('body').css({"overflow": "auto"});
		e.preventDefault();
	});
});