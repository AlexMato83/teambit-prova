console.log("cane");


$(document).ready(function() {

  $(window).scroll(function() {

    var scrollTop = $(this).scrollTop();

    console.log("sto scrollando", scrollTop);

    if (scrollTop > 70) {
      console.log("fai qualcosa");
    } else {
      console.log("nascondo");
    }
  });
});
