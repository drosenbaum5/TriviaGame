var correctGuesses;
var incorrectGuesses;


var seconds = Math.floor((distance % (1000 * 60)) / 1000);

function gameStart() {
    document.getElementById("timer").innerHTML = seconds;

}