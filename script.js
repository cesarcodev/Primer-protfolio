// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('./sw.js')
//     .then(reg => console.log('Registro de SW exitoso', reg))
//     .catch(err => console.warn('Error al tratar de registrar el sw', err))
// }


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

// window.addEventListener("load", function(){
// 	const loader = document.querySelector(".loader");
// 	loader.className += " hidden";
// });