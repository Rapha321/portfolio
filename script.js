console.log("connected")

$(document).ready(function() {  // to make sure that the DOM of the page is ready to manipulate.


  // When the user scrolls down 200px from the top of the document, show the button
  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
      $('.arrow-up').fadeIn();
    } else{
      $('.arrow-up').fadeOut();
    }
  });

  // when top arrow button is clicked, scrolled to the top
  $(".arrow-up").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
  });

  // $("#resume").click(function() {
  //   $('html, main').innerHTML = url("")
  // })
})