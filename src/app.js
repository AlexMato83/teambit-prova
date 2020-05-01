console.log("cane");


$(document).ready(function() {
  $("#header2").hide();
  $(window).scroll(function() {

    var scrollTop = $(this).scrollTop();

    console.log("sto scrollando", scrollTop);

    if (scrollTop > 240) {
      

      $("#header2").slideDown();

    } else {

      $("#header2").slideUp();
    }
  });
  function animation() {

  }
});
