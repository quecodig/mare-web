/*
Author: Edinson Tique
Web: www.quecodigo.com
Name: animate.js
*/
$(document).ready(function(){
	jQuery(function($) { 
		$('[data=animated]').waypoint(function() {
			$(this).each(function(){
				$(this).animate({opacity: 1},1000);
				var animate = $(this).attr("data-animated");
				$(this).addClass( animate + ' animated' );
			});
		},
		{
			offset: '70%',
			triggerOnce: true
		});
	});
});