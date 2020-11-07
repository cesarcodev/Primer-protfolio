

$(document).ready(function(){
	$(".nav_boton").on('click', function(event) {
		event.preventDefault();
		$("#navegacion").animate({
        height: "toggle",
      });

      	if ($('#equis').is(':visible')) {
		    $('#equis').hide();
		    $('#barra').show();
		} else {
		    $('#equis').show();
		    $('#barra').hide();
		}
	});
});

window.addEventListener("load", function(){
	const loader = document.querySelector(".loader");
	loader.className += " hiddenLoader";
});