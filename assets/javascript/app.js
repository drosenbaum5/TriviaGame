
//Global Variables
var correctGuesses = 0;
var incorrectGuesses = 0;
var timer = 34;
var interval_Id;
var round = 1;


var images = [

   'assets/images/airlock.gif',
   'assets/good-hungting.gif',   

];

var questionSet = [{

   question1: "Who attempted to assassinate Commander William Adama?",
   choices: ["Lee Adama", "Caprica Six", "Sharon", "Colonel Tigh"],
   answer: 2,
}, 
 {
    question2: "Which Battlestar did Lee Adama command in Season 3?",
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


//Start the timer when the title button is clicked. Call all other necessary functions to begin game.
    function gameStart() {
   $(document).ready(function(){
          
          $("#title-button").click(function() {
          $("#title-button").replaceWith("<h1>" + questionSet[0].question1 + "</h1>");   
          $("#answer-box").show();
          marginTop()
          timerStart();
          callNewQuestions();
          answerButtonPresses();
          
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

  
     //inserts answer 1 based on global var round value
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
      //inserts answer 2 based on global var round value
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
       //inserts answer 3 based on global var round value
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
      //inserts answer 4 based on global var round value
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



 //Mother function for answer button presses
 function answerButtonPresses() {
    
 //Nested function calls to pass data when mother function is called
    answerButton1()
    answerButton2()
    answerButton3()
    answerButton4()


   
 
   function answerButton1 () {
  
      
  document.getElementById('question-button1').onclick = function () {
    
   stop()
    if (round !== 4) {
      
      incorrectGuesses++
      displayLossImage()
      console.log(incorrectGuesses)
    }
      else{
        
        correctGuesses++
        displayWinImage()
        console.log(correctGuesses)  
      }
  }
}

function answerButton2 () {

   document.getElementById('question-button2').onclick = function () {
    
   stop() 
    if (round !== 2) {
      incorrectGuesses++
      console.log("button pressed"); 
      displayLossImage()

    }
       else {
      correctGuesses++
      console.log(correctGuesses)
      displayWinImage()

       }
 
   }
 }

 function answerButton3 () {

   document.getElementById('question-button3').onclick = function () {
     
   stop() 
    if (round !== 1) {
      
      incorrectGuesses++;
      displayLossImage()
      console.log("button pressed");
      console.log(incorrectGuesses);  
    
   

    }
     else {
       
       correctGuesses++;
       displayWinImage()
       console.log(correctGuesses);
     }
 
   }
 }

 function answerButton4 () {

   document.getElementById('question-button4').onclick = function () {
   
   stop() 
    if (round !== 3) {

      
      incorrectGuesses++;
      displayLossImage()
      console.log(incorrectGuesses)
     }

     else {
      
      correctGuesses++;
      displayWinImage()
      console.log(correctGuesses)
     }
     
    console.log("button pressed");  
 
   }
 }

}


//function for displaying image upon loss
function displayLossImage() {
   $("#answerbox").html("<img src='assets/images/airlock.gif'/>");
   // setTimeout(displayImage, 4000);
 }


 //function for displaying image on win
 function displayWinImage () {
   $("#answerbox").html("<img src='assets/images/good-hunting.gif'/>");
   // setTimeout(displayImage, 4000);
 }


//  function displayImage() {
//    $('#answerbox').html('<img src=' + images[0] + " width='400px'>");
//  }