

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

    if (number <= 0) {
        //  Alert the user that time is up.
        $("game-timer").remove();
        $("game-timer").text("<h2> Times Up!!!!!" + "</h2>");
        alert("Time Up!");

        clearInterval(intervalId);
      }

};

// display questions with four possible answers, correct answer array value and an image to display

var questions = 
[
    {question: "Name the building from Die Hard where the movie takes place",
    answers: ["A: The Wal-Mart Plaza", "B: Naruto Matisyahu building", "C: Nakatomi Plaza", "D: Who cares where's Steve Urkel"],
    correctAnswer: 2,
    image: "",
},
    {question: "What is the Actors name who plays Clubber McClane in Rocky",
    answers: [" John McClain", "Samuel L. Jackson", "Lady Gaga", "Mr. T"],
    correctAnswer: 3,
    image: "",
},
    {question: "This is question number 3",
    answers: ["Answer 1 ", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: 2,
    image: "",
},
    {question: "This is question number 4",
    answers: ["Answer 1 ", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: 2,
    image: "",
    },

];

var counter = 0;

function loadQuestion(){
    

        $("#game-question").text(questions[counter].question);
        

        for (var j = 0; j < questions[counter].answers.length; j++){
           
            var newAnswerDiv = $("<h4>" + questions[counter].answers[j] + "</h4>");
            newAnswerDiv.addClass("answer-class");
            newAnswerDiv.attr("data-value",j)
            $("#game-answers").append(newAnswerDiv);

        };

        $(".answer-class").on("click",function () {

            var optionClicked = $(this).attr("data-value");
            optionClicked = parseInt(optionClicked);
            console.log("you clicked " + optionClicked);

            if (optionClicked == questions[counter].correctAnswer){

                console.log(questions[counter].correctAnswer);

                alert("correct answer");
                counter ++;
                $(".answer-class").remove();
                loadQuestion();
            }
            else {
                alert("wrong answer");
                counter++ ;
                $(".answer-class").remove();
                loadQuestion();
            }
        });
};
// when user clicks the answer it needs to display correct or incorrect

// the correct answer will display underneath 

// after answer is selected the timer will give you 5 seconds before loading next question

// next question is loaded 

// when game is complete show correct, incorrect and unanswered questions

// have a button to reload the game 
