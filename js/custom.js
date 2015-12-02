// $(".forest_second").hide();
// $(".forest_second").fadeIn(2000);


$(".forest_gone p").click(function() {
    //if (this.className == "first-year" ) {
    if ($(this).hasClass("first-year")) {
      $(".img_skog").attr("src", "img/skog_65.png");
    }

    else if ($(this).hasClass("second-year")) {
      $(".img_skog").attr("src", "img/skog_15.png");
    }
});
