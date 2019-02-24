

// have the game rules displayed 

// start the game by clicking a button that says start


$("#start-game").on("click", function() {

    // once user has clicked the start game button the button and the instructions disappear

$("#start-game").remove();
$("#game-instructions").remove();
run();

});


var number = 30;
var intervalId;

// have the timer running at the top of the screen set to 30 seconds 
 function run() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
 };
 function decrement() {
    
    number --;
    $("#game-timer").html("<h2> Time Remaining:  " + number + "</h2>");

    if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }

};

function stop(){

    clearInterval(intervalId);
};
// display question number one with four possible answers

var questions = [{question: "name the building from Die Hard where the movie takes place",
    answers: ["The Wal-Mart Plaza", "Naruto Matisyahu building", "Nakatomi Plaza", "Who cares where's Steve Urkel"],
    correctAnswer: "Nakatomi Plaza",
    image: "",
}];

// when user clicks the answer it needs to display correct or incorrect

// the correct answer will display underneath 

// after answer is selected the timer will give you 5 seconds before loading next question

// next question is loaded 

// when game is complete show correct, incorrect and unanswered questions

// have a button to reload the game 
