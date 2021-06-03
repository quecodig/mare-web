$(document).ready(function() {
	$("#loader").hide();
	/*-------------Menu Scroll-----------*/
	var $win = $(window);
	// definir mediente $pos la altura en píxeles desde el borde superior de la ventana del navegador y el elemento
	var $pos = $('header.menu').offset().top;
	//var $alt = $('header.menu').height();
	//$('header.menu').css('height', $alt);
	/*$win.scroll(function () {
		if ($win.scrollTop() <= $pos){
			$('header.menu').removeClass('fixed');
		}else {
			$('header.menu').addClass('fixed');
		}
	});
	
	$('a.toggle').on("click", function(e){
		e.preventDefault();
		$("#menu_toggle").slideToggle();
	});*/
});
$(function(){
	$('a.link[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&& location.hostname == this.hostname) {
				var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				targetOffset = targetOffset - 30;
				$('html,body').animate({scrollTop: targetOffset}, 1000);
				return false;
			}
		}
	});

	/*$("#mce-MMERGE2-year").change(function(e){
		e.preventDefault();
		var birth = $(this).val(),
			date = 2018;
		var calc = date - birth;
		console.log(calc)
		if(calc <= 18){
			$("#manager").css("display", "block");
		}else{
			$("#manager").css("display", "none");
		}
	});*/

	/*$("#mc-embedded-subscribe-form").submit(function(e){
		e.preventDefault();
		var form = $(this).attr("action"),
			formulario = $(this).serialize();
		$.ajax({
			type:"POST",
			dataType:'html',
			url:form,
			data:formulario,
			success:function(respuesta){
				$("#mc_embed_signup").html(respuesta);
			},
			error:function(respuesta){
				alert("error");
			}
		});
	});*/

	$("#contact_form").submit(function(e){
		e.preventDefault();
		var form = $(this).attr("action"),
			formulario = $(this).serialize();
		$.ajax({
			type:"POST",
			dataType:'html',
			url:form,
			data:formulario,
			beforeSend:function(){
				$("#loader").show();
			},
			success:function(respuesta){
				$("#loader").hide();
				if(respuesta.action === "true"){
					alert("Mensaje enviado correctamente.")
				}else{
					alert("Error al enviar el mensaje, escribenos a info@icmare.com")
				}
			},
			error:function(respuesta){
				$("#loader").hide();
				alert("error");
			}
		});
	});

	$('.gallery .items').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Cargando la imagen #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">La imagen #%curr%</a> no pudo ser cargada.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>Por MARE Colombia 2018</small>';
			}
		}
	});

	$('.slider.multiple-items').slick({
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$("#mc-embedded-subscribe-form").submit(function(e){
		e.preventDefault();
		var form = $(this).serialize(),
			action = $(this).attr("action");
		$.ajax({
			type: "POST",
			url: action,
			data: form,
			dataType: "json",
			success: function(html){
				if(html.action === 'true'){
					$("#loader").hide();
					alert('!Registo Exitoso¡');
					$.ajaxSetup({ cache: false });
					$("input[name=MMERGE0]").val(" ");
					$("input[name=MMERGE1]").val(" ");
					$("input[name=MMERGE2]").val(" ");
					$("input[name=MMERGE3]").val(" ");
					$("#mc-embedded-subscribe-form").hide();
					$("#mc-embedded-subscribe-display").show();
				}else if(html.action === 'false1'){
					$("#loader").hide();
					alert('Error el formulario se envio, pero hubo problemas al enviar email de confirmación.');
				}else{
					$("#loader").hide();
					alert('Error al registrar el formulario, Intenta nuevamente <br> o contactanos a webmaster@quecodigo.com');
				}
			},
			beforeSend: function(html){
				$("#loader").show();
			}
		});
		return false;
	});
});