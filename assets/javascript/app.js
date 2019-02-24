

// have the game rules displayed with a sart game button

$("#start-game").on("click", function() {

    // once user has clicked the start game button the button and the instructions disappear

$("#start-game").remove();
$("#game-instructions").remove();
timer();
loadQuestion();

});


var number = 30;
var intervalId;

// have the timer running at the top of the screen set to 30 seconds 
 function timer() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
 };

//  starts the countdown of the timer
 function decrement() {
    
    number --;
    $("#game-timer").html("<h2> Time Remaining:  " + number + "</h2>");

    if (number === 0) {
        //  Alert the user that time is up.
        alert("Time Up!");
        clearInterval(intervalId);
      }

};

// display question number one with four possible answers

var questions = [{question: "Name the building from Die Hard where the movie takes place",
    answers: ["The Wal-Mart Plaza", "Naruto Matisyahu building", "Nakatomi Plaza", "Who cares where's Steve Urkel"],
    correctAnswer: "Nakatomi Plaza",
    image: "",
}];

function loadQuestion(){

    for (var i = 0; i < questions.length; i++) {

        $("#game-question").text(questions[i].question);
        console.log(questions[i].question);
        gameAnswers = $("<p>");

        $("#game-answers").append(questions[i].answers);
        console.log(questions[i].answers);

    };

    



};
// when user clicks the answer it needs to display correct or incorrect

// the correct answer will display underneath 

// after answer is selected the timer will give you 5 seconds before loading next question

// next question is loaded 

// when game is complete show correct, incorrect and unanswered questions

// have a button to reload the game 
