var correctGuesses;
var incorrectGuesses;
var timer = 34;
var interval_Id;
var round = 1;

// var questionOne = "<u><h1>Who attempted to assassinate Commander Adama?</h1></u>";
// var answers = ["Lee Adama", "Caprica Six", "Sharon", "Colonel Tigh"]

var questionSet = [{

   question1: "Who attempted to assassinate Commander William Adama?",
   choices: ["Lee Adama", "Caprica Six", "Sharon", "Colonel Tigh"],
   answer: 2,
}, 
 {
    question2: "Which Battlestar did Lee Adama Captain in Season 3?",
    choices: ["Galactica", "Pegasus,", "Atlantia", "Gemini"],
    answer: 1,
 },
  
 {
    question3: "Which of the following is a member of the final five?",
    choices: ["Lt. Felix Gaeta", "Dr. Gauis Baltar,", "Col. Saul Tigh", "Leobon"],
    answer: 2,

 },
 
 { 
    question4: "Who was ressurected in the season three finale?",
    choices: ["Capt. Kara Thrace", "Admiral Cain", "President Aidar", "Capt. Helo"],
    answer:  0,
 
 }]
 




gameStart()


//Start the timer when the title button is clicked
    function gameStart() {
   $(document).ready(function(){
          
          $("#title-button").click(function() {
          $("#title-button").replaceWith("<h1>" + questionSet[0].question1 + "</h1>");   
          $("#answer-box").show();
          marginTop()
          timerStart();
          callNewQuestions();
          
          });
      });
    }

    $(document).ready(function() {
       $("answer-one").click(function() {

   });   
});   

function marginTop() {
   document.getElementById("game-title").style.marginTop = "150px";
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
 function callNewQuestions () {
 
      //calls four nested functions upon CallNewQuestions() function call
      callNewAnswer1();
      callNewAnswer2();
      callNewAnswer3();
      callNewAnswer4();

  
     //inserts answer 1
   function callNewAnswer1 () {
      if(round === 1) {
       $("#answer-one").replaceWith("<h3>" + questionSet[0].choices[0] + "</h3>") 
      }
       else if(round === 2) {
         $("#answer-one").replaceWith("<h3>" + questionSet[1].choices[0] + "</h3>")

       }
        else if(round === 3) {
          $("#answer-one").replaceWith("<h3>" + questionSet[2].choices[0] + "</h3>")
       }
         else if(round === 4) {
           $("#answer-one").replaceWith("<h3>" + questionSet[3].choices[0] + "</h3>")

       }
   }
      //inserts answer 2
   function callNewAnswer2 () {
      if(round === 1) {
       $("#answer-two").replaceWith("<h3>" + questionSet[0].choices[1] + "</h3>") 
      }
       else if(round === 2) {
         $("#answer-one").replaceWith("<h3>" + questionSet[1].choices[1] + "</h3>")
      }
        else if(round === 3) {
         $("#answer-one").replaceWith("<h3>" + questionSet[2].choices[1] + "</h3>")
      }
         else if(round === 4) {
          $("#answer-one").replaceWith("<h3>" + questionSet[3].choices[1] + "</h3>")
      }
   }
       //inserts answer 3
   function callNewAnswer3 () {
      if(round === 1) {
       $("#answer-three").replaceWith("<h3>" + questionSet[0].choices[2]  + "</h3>") 
      }
       else if(round === 2) {
         $("#answer-one").replaceWith("<h3>" + questionSet[1].choices[2] + "</h3>")
      }
        else if(round === 3) {
         $("#answer-one").replaceWith("<h3>" + questionSet[2].choices[2] + "</h3>")
      }
         else if(round === 4) {
          $("#answer-one").replaceWith("<h3>" + questionSet[3].choices[2] + "</h3>")
      }
   }
      //inserts answer 4
   function callNewAnswer4 () {
      if(round === 1) {
       $("#answer-four").replaceWith("<h3>" + questionSet[0].choices[3]  + "</h3>") 
      }
      else if(round === 2) {
         $("#answer-one").replaceWith("<h3>" + questionSet[1].choices[3] + "</h3>")
      }
        else if(round === 3) {
         $("#answer-one").replaceWith("<h3>" + questionSet[2].choices[3] + "</h3>")
        }
         else if(round === 4) {
          $("#answer-one").replaceWith("<h3>" + questionSet[3].choices[3] + "</h3>")
      }
   }
 }
