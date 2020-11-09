

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


$(function() {

  var $form = $('#contact-me');
  $form.on("submit", function(e) {
    var formUrl = $(this).attr('action');

    // We don't want the page to submit and refresh
    e.preventDefault();

    // POST the request to Formbackend (the formUrl value)
    $.ajax({
      url: formUrl,
      type: 'POST',
      headers: {
        'accept': 'application/json',
      },
      // We serialize the form fields
      data: $form.serialize()
    }).done(function(response) {
      // var successElm = $('<div class="bg-green-100 border border-green-200 text-green-500 p-3">');
      // successElm.html(`${response.submission_text}, ${response.values.name}!`);

      // $form.parent().replaceWith(successElm);
      // console.log("enviado");
      $('#aviso_bien').show();
      $form[0].reset();
    }).fail(function() {
      // Happens when something goes wrong
      $('#aviso_error').show();
    }).always(function() {
      // This always happens
    });

  });
});


