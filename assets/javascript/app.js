var correctGuesses;
var incorrectGuesses;
var timer = 16;
var interval_Id;
// var triviaQuestions = { firstQuestion : "Who attempted to assassinate Commander Adama in the season 1 finale?",
//                         secondQuestion S: }


//Start the timer when the title button is clicked
$("#title-button").click(timerStart);

//Sets interval for timer to count back from 16. First number displayed is 15.
function timerStart() {

  interval_Id = setInterval(decrement, 1000);
}


function decrement () {
 timer--
 $("#timer").html("<p>" + timer + "</p>");

 if(timer === 0){
 
  stop();
 } 
}

function stop() {

  clearInterval(interval_Id);
}

 
 