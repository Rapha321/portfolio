const smtp = require('./smtp');


$(document).ready(function() {  // to make sure that the DOM of the page is ready to manipulate.


  // When the user scrolls down 200px from the top of the document, show the button
  $(window).scroll(function() {
    if($(this).scrollTop() > 200) {
      $('.arrow-up').fadeIn();
    } else{
      $('.arrow-up').fadeOut();
    }
  });

  // when top arrow button is clicked, scrolled to the top
  $(".arrow-up").click(function() {
    $('html ,body').animate({scrollTop : 0},800);
  });


  // when button is clicked on contact section, hide form and display a message
  // $("#form-submit").click(function() {
  //   let email = document.querySelector("#form-email").value
  //   let message = document.querySelector("#form-message").value
  //     Email.send({
  //       Host : "smtp.elasticemail.com",
  //       Username : "rafalbern@outlook.com",
  //       Password : stmp.STMP_TOKEN,
  //       To : 'rafalbern@outlook.com',
  //       From : email,
  //       Subject : "Message from Raphael's Portfolio",
  //       Body : message
  //     }).then(
  //       message => alert("Thank you for connecting! I will get back to you asap :)")
  //     );
  //     document.querySelector("#contact-form").reset()
  // });



})