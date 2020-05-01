console.log("cane");


$(document).ready(function() {
  $("#header2").hide();
  $(window).scroll(function() {

    var scrollTop = $(this).scrollTop();

    console.log("sto scrollando", scrollTop);

    if (scrollTop > 140) {
      // $( "#book" ).slideDown( "slow", function())
      $("#header2").show();
      $("#header2").slideDown("slow");

    } else {
      $("header").show();
      $("#header2").hide();
    }
  });
  function animation() {

  }
});
