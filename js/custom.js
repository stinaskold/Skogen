// $(".forest_second").hide();
// $(".forest_second").fadeIn(2000);

/*   Start   */

// // $(window).scroll(function() {
// //  $(".start").slideUp("slow");
// //  $(".container-fluid").slideDown("slow");
// // });

// $(".container-fluid").hide();



$(".start a, .start").click(function(event) {
 event.preventDefault();
 $(".start").slideUp("slow");
 $(".container-fluid").slideDown("slow");
});



/*   Forest gone   */

$(".forest_gone p").click(function() {
    //if (this.className == "first-year" ) {
    if ($(this).hasClass("first-year")) {
      $(".img_skog").attr("src", "img/skog_65.png");
    }

    else if ($(this).hasClass("second-year")) {
      $(".img_skog").attr("src", "img/skog_15.png");
      $(".first-year").css("visibility", "visible");
    }
});

/*   Football field   */

$(".alternatives a").click(function(event) {

    event.preventDefault();

    var rightAnswer = $("<p>Rätt</p>").addClass("answer right-answer");
    var wrongAnswer = $("<p>Fel</p>").addClass("answer wrong-answer");
    var paragraph36 = $("<p>36</p>").addClass("paragraph36").hide();

    if ( $(this).text() == "36" ) {
      //om rätt = om det tredje a-elementet är klickat, this === text(36)
        //göm knapparna
       //paragraf med texten "Rätt", append till
       //paragraf med texten "36"(fadar in)
       $(this).parent().hide();
       $(".football-field .text").append(rightAnswer).append(paragraph36);
       $(paragraph36).fadeIn(2000);
    }
    else {
      //om fel else
        //paragraf med texten "Fel"
        //paragraf med texten "36"(fadar in)
       $(this).parent().hide();
       $(".football-field .text").append(wrongAnswer).append(paragraph36);
       $(paragraph36).fadeIn(2000);
    }

  //byt bild
   //img-elementet som ligger i section .football-field byter src
   $(".football-field img").hide().attr("src", "img/football-field-2.png");
   $(".football-field img").fadeIn(2000);
});

/*    Deforestation     */

//slide up the section on scroll

$(".deforestation a").click(function(event) {
  event.preventDefault();
  $(".deforestation").slideUp("slow");
  $(".preserve-forest").css("display", "block");
});
