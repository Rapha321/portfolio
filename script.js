console.log("connected")

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

  // when shout button is clicked on contact section, hide form and display a message
  // $("#submit").click(function() {
    // $("#contact-form").hide();
    // alert("Got your message. Thanks ya!")

  //   'api:YOUR_API_KEY' \
  //   https://api.mailgun.net/v3/YOUR_DOMAIN_NAME/messages \
  //   -F from='Excited User <mailgun@YOUR_DOMAIN_NAME>' \
  //   -F to=YOU@YOUR_DOMAIN_NAME \
  //   -F to=bar@example.com \
  //   -F subject='Hello' \
  //   -F text='Testing some Mailgun awesomeness!'
  // })


})