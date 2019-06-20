var correctGuesses;
var incorrectGuesses;
var timer = 16;
var interval_Id;
// var triviaQuestions = { firstQuestion : "Who attempted to assassinate Commander Adama in the season 1 finale?",
//                         secondQuestion S: }





//Start the timer when the title button is clicked
    $(document).ready(function(){
          $("#title-button").click(function() {
          $("#title-button").replaceWith("");  
          displayQuestions();
          timerStart();
          callNewQuestion();
          
          
       
          
        });
      });
    
function displayQuestions() {

   $("#questions").show();
}
 
//Sets interval for timer to count back by 1 second
function timerStart() {

  interval_Id = setInterval(decrement, 1000);
}

//Decrements displayed time. If timer reaches 0, timer stops.
function decrement () {
 timer--
 $("#timer").html("<p>" + timer + "</p>");

 if(timer === 0){
 
  stop();
 } 
}

//function to stop the timer when it hits 0
function stop() {

  clearInterval(interval_Id);
}


//main function for calling new question and answers
 function callNewQuestion () {
 
      $("#questions").replaceWith("Hello world!");
            
            callNewAnswer1();
            callNewAnswer2();
            callNewAnswer3();
            callNewAnswer4();


   function callNewAnswer1 () {

      $("#answer-one").replaceWith("<h3>Does this work?</h3>") 
   }
      //inserts new question 2
   function callNewAnswer2 () {

      $("#answer-two").replaceWith("<h3>Does this work?</h3>") 
   }
       //inserts new question 3
   function callNewAnswer3 () {

      $("#answer-three").replaceWith("<h3>Does this work?</h3>") 
   }
      //inserts new question 4
   function callNewAnswer4 () {

      $("#answer-four").replaceWith("<h3>Does this work?</h3>") 
   }

   
   
}
 