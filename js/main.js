$( function() {
	$.vegas( 'slideshow', {
		delay: 6000,
		backgrounds: [
			{ src: 'images/IMG_5210.jpg', fade: 3000 },
			{ src: 'images/IMG_5226-1024x682.jpg', fade: 3000 },
			{ src: 'images/IMG_6336.jpg', fade: 3000 },
			{ src: 'images/IMG_82542.jpg', fade: 3000 },
			{ src: 'images/DSCN2335.jpg', fade: 3000 },
			{ src: 'images/hub33.jpg', fade: 3000 },
			{ src: 'images/IMG_5220.jpg', fade: 3000 },
			{ src: 'images/IMG_6363.jpg', fade: 3000 }
		]
	})('overlay', {
		src:'img/overlays/06.png'
	});
} );

// script prettyphoto 
  $(document).ready(function(){
    $("a[data-rel^='prettyPhoto']").prettyPhoto({ social_tools: false ,deeplinking: false
    });
  }); 
  
      $(document).ready(function() {
        $('form#subscribe').submit(function() {
          $('form#subscribe .error').remove();
          var hasError = false;
          $('.requiredField').each(function() {
            if($.trim($(this).val()) == '') {
              var labelText = $(this).prev('label').text();
              $(this).parent().append('<span class="error label label-warning">'+labelText+'.</span>');
              $(this).addClass('inputError');
              hasError = true;
            } else if($(this).hasClass('email')) {
              var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
              if(!emailReg.test($.trim($(this).val()))) {
                var labelText = $(this).prev('label').text();
                $(this).parent().append('<span class="error label label-warning">Sorry! You\'ve entered an invalid '+labelText+'.</span>');
                $(this).addClass('inputError');
                hasError = true;
              }
            }
          });
          if(!hasError) {
            var formInput = $(this).serialize();
            //$.post($(this).attr('action'),formInput, function(data){
            //  $('form#subscribes').slideUp("fast", function() {
            //    $(this).before('<p class="tick label label-default"><strong>Thanks!</strong> Your email has been delivered!</p>');
            //  });
            //});
              $.ajax({
                  type: "POST",
                  url: 'sendemail.php',
                  data: formInput,
                  success: function (data) {
                      console.log(data);
                      $('form#subscribes').slideUp("fast");
                      $('#successMessage').show();
                      $('#email-subscribe').val('');
                      setTimeout(function () {
                          $('#successMessage').hide();
                      }, 5000);

                      //$(this).before('<p class="tick label label-default"><strong>Thanks!</strong> Your message has been delivered!</p>');
                  }
              });
          }
          
          return false; 
        });
        
      });
      //-->!]]>


$(function() {
	$('.down a').bind('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500,'easeInOutExpo');
		event.preventDefault();
	});
});
$(function() {
	$('.up a').bind('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500,'easeInOutExpo');
		event.preventDefault();
	});
});
