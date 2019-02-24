

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

var questions = 
[
    {question: "Name the building from Die Hard where the movie takes place",
    answers: ["A: The Wal-Mart Plaza", "B: Naruto Matisyahu building", "C: Nakatomi Plaza", "D: Who cares where's Steve Urkel"],
    correctAnswer: "C: Nakatomi Plaza",
    image: "",
},
    {question: "What is the Actors name who plays Clubber McClane in Rocky",
    answers: [" John McClain", "Samuel L. Jackson", "Lady Gaga", "Mr. T"],
    correctAnswer: "Mr. T",
    image: "",
},
    {question: "This is question number 3",
    answers: ["Answer 1 ", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: "Answer 3",
    image: "",
},
    {question: "This is question number 4",
    answers: ["Answer 1 ", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: "Answer 3",
    image: "",
    },

];

function loadQuestion(){
    
        console.log(questions[0].question);

        $("#game-question").text(questions[0].question);
        

        for (var j = 0; j < questions[0].answers.length; j++){

            console.log (questions[0].answers[j]);
           
            var newAnswerDiv = $("<h4>" + questions[0].answers[j] + "</h4>");
            $("#game-answers").append(newAnswerDiv);
        };

};
// when user clicks the answer it needs to display correct or incorrect

// the correct answer will display underneath 

// after answer is selected the timer will give you 5 seconds before loading next question

// next question is loaded 

// when game is complete show correct, incorrect and unanswered questions

// have a button to reload the game 
