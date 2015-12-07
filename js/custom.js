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

/*   Love trees   */

function showFacts(i) {
   document.querySelector(".tree_facts").style.display = "block";

   var facts = document.querySelectorAll(".tree_facts li");
   facts[i].style.visibility = "visible";
}

var leaves = document.querySelectorAll(".leaves li");
var i;

for (i = 0; i < leaves.length; i++) {
  leaves[i].leafNr = i;
  leaves[i].addEventListener("click", function(){
    showFacts(this.leafNr);
  });
}

/*   Forest gone   */

$(".forest_gone p").click(function() {

  if ($(this).hasClass("year_2015")) {
      $(".img_skog").attr("src", "img/skog_15.png");
  }
});

/*   Football field   */

//Visa om rätt eller fel svar + visa rätt svar

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

//slide up the section on click

$(".deforestation a").click(function(event) {
  event.preventDefault();
  $(".deforestation").slideUp("slow");
  $(".preserve-forest").css("display", "block");
});


/*    Save trees     */

// Flip pictures on mouseover

function flipCards() {
  console.log(this.firstChild);
  var flipItem = this.firstChild;
  flipItem.className = "flip-cards center-block flip";
}

var flipTurnItem = document.querySelectorAll(".flip_turn")
var j;

for (j = 0; j < flipTurnItem.length; j++) {
  flipTurnItem[j].addEventListener("mouseover", flipCards);
}
