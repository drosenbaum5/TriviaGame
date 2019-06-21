var correctGuesses;
var incorrectGuesses;
var timer = 34;
var interval_Id;
// var triviaQuestions = { firstQuestion : "Who attempted to assassinate Commander Adama in the season 1 finale?",
//                         secondQuestion S: }


var questionOne = "<u><h1>Who attempted to assassinate Commander Adama?</h1></u>";
var answers = ["Lee Adama", "Caprica Six", "Sharon", "Colonel Tigh"]




//Start the timer when the title button is clicked
    $(document).ready(function(){
          $("#title-button").click(function() {
          $("#title-button").replaceWith(questionOne);  
        
          timerStart();
          callNewQuestions();
          
          
       
          
        });
      });
    

 
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
 function callNewQuestions () {
 
      
            addQuestion();
            callNewAnswer1();
            callNewAnswer2();
            callNewAnswer3();
            callNewAnswer4();

   function addQuestion () {

      $("#questions").replaceWith("Hello world!");
   }

   function callNewAnswer1 () {

      $("#answer-one").replaceWith("<h3>" + answers[0] + "</h3>") 
   }
      //inserts new question 2
   function callNewAnswer2 () {

      $("#answer-two").replaceWith("<h3>" + answers[1] + "</h3>") 
   }
       //inserts new question 3
   function callNewAnswer3 () {

      $("#answer-three").replaceWith("<h3>" + answers[2] + "</h3>") 
   }
      //inserts new question 4
   function callNewAnswer4 () {

      $("#answer-four").replaceWith("<h3>" + answers[3] + "</h3>") 
   }

   
   
}
 