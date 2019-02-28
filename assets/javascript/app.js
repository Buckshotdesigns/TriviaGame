

// have the game rules displayed with a sart game button

$("#start-game").on("click", function() {

// once user has clicked the start game button the button and the instructions disappear

$("#start-game").remove();
$("#game-instructions").remove();
timer();
loadQuestion();

});

// this is the countdown variable
var number = 20;
// variable for the timer
var intervalId;
var running = false;
// variable for the questions tally
var correct = 0;
var incorrect = 0;
var unanswered = 0;


// have the timer running at the top of the screen set to 30 seconds with previous variable
 function timer() {
    // this variable is defined here so it pops up on the screen immediately
    $("#game-timer").text("Time Remaining:   ");
    // starts the timer running 
    if(!running) {

        intervalId = setInterval(decrement, 1000);
        running = true;
        
    }
   
 };

//  starts the countdown of the timer
 function decrement() {
    // this variable is defined again so the countdown number starts
    $("#game-timer").text("Time Remaining:   " + number );
    number --;
   
    if (number <= 0) {

        //  Alert the user that time is up with the correct answer and tallys an unanswered question

        $(".time-remaining").remove();
        $("#game-timer").text("Times Up!!!!!");
        var correctAnswer = questions[counter].correctAnswer
        $("#correct-incorrect").text("Correct Answer!!! " + questions[counter].answers[correctAnswer] );
        unanswered ++;
        stop();
        gameSet();
      }

};

function stop() {
// Stops the timer from running 
    running = false;
    clearInterval(intervalId);
};

// display questions with four possible answers, correct answer array value and a gif to display

var questions = 
[
    {question: "Name the building from Die Hard where the movie takes place ?",
    answers: ["A: The Wal-Mart Plaza", "B: Naruto Matisyahu building", "C: Nakatomi Plaza", "D: Who cares where's Steve Urkel"],
    correctAnswer: 2,
    image: "EWoFA9qDgYL04",
},
    {question: "What is the Actors name who plays Clubber Lang in Rocky III ?",
    answers: [" A: John McClain", "B: Samuel L. Jackson", "C: Lady Gaga", "D: Mr. T"],
    correctAnswer: 3,
    image: "14ocCma2bidOCI",
 },
    {question: "What was the name of the kids character in Terminator 2 ? ",
    answers: ["A: Sunny Bono", "B: John Carpenter", "C: John Conner", "D: Sarah Conner"],
    correctAnswer: 2,
    image: "zKNmLSyXrqL9m",
},
    {question: "In the Fifth Element what was the Dj's chararcter name played by Chris Tucker ?",
    answers: ["A: Ruby Rhod", "B: DJ Roc", "C: The Chemical Brothers", "D: Korben Dallas"],
    correctAnswer: 0,
    image: "xmOIAJu82q5LW",
},
    {question: "Governor Schwarzenegger and Governor Jesse Ventura both starred in which two films ?",
    answers: ["A: Terminator 1 and 2", "B: Predator and the Running Man", "C: Predator 1 and 2", "D: None of the Above"],
    correctAnswer: 1,
    image: "Uno27COfoYlH2",
},
    {question: "In all of the Rambo movies what is Rambo's first name ?",
    answers: ["A: Gerald ", "B: John", "C: Machine Gun", "D: Susan"],
    correctAnswer: 1,
    image: "TBOvwBGkQShnq",
},
    {question: "In the movie Hackers what was the main characters real hacker handle ?",
    answers: ["A: Crash and Burn ", "B: Acid Burn", "C: Cookie Monster", "D: Zero Cool"],
    correctAnswer: 3,
    image: "13AN8X7jBIm15m",
},
    {question: "In the Matrix Trilogy Keanu Reeves character Neo is also referred to as ?",
    answers: ["A: The one who kicks everyone's ass ", "B: Party Monster", "C: He who should not be named", "D: The One"],
    correctAnswer: 3,
    image: "BMuWMPmykHL6E",
},
    {question: "In the Blade Trilogy Wesley Snipes plays Blade but the vampires in the movie refer to him as what ?",
    answers: ["A: Daywalker ", "B: A Nuisance", "C: Whistler", "D: The Blood God"],
    correctAnswer: 0,
    image: "RFjc4YkvfkSnC",
},
    {question: "Sylvestor Stallone and Wesley Snipes Star in the Expendables and what other Action Movie ?",
    answers: ["A: Rambo ", "B: Rocky III", "C: Demolition Man", "D: Passenger 57"],
    correctAnswer: 2,
    image: "l3BCEsVRbLUCk",
    }
];

// This variable is to go through the questions 
var counter = 0;
// This function loads each question on to the page and empties when done 
function loadQuestion(){

        $("#place-image").empty();
        $("#correct-incorrect").empty();
        
        // starts the timer when the question loads
        timer();
        // adds the question to the page
        $("#game-question").text(questions[counter].question);
        
        // loop to display the possible answers to the page with the array attributes
        for (var j = 0; j < questions[counter].answers.length; j++){
           
            var newAnswerDiv = $("<h4>" + questions[counter].answers[j] + "</h4>");
            newAnswerDiv.addClass("answer-class");
            newAnswerDiv.attr("data-value",j)
            $("#game-answers").append(newAnswerDiv);

        };
        // checks which answer is clicked and stores the attribute value
        $(".answer-class").on("click",function () {

            var optionClicked = $(this).attr("data-value");
            optionClicked = parseInt(optionClicked);
            // checks the attribute value to see if it is the correct answer
            if (optionClicked == questions[counter].correctAnswer){
               
                correctAnswer = questions[counter].correctAnswer

                $("#correct-incorrect").text("Correct Answer!!! " + questions[counter].answers[correctAnswer] );
                correct ++;
                gameSet();
                
            }
            // tells you if the answer clicked is not the correct answer
            else {

                var correctAnswer = questions[counter].correctAnswer
                $("#correct-incorrect").text("Wrong Answer!!! The correct answer is  " + questions[counter].answers[correctAnswer] );
                incorrect ++;
                gameSet();
                
            }
        });

};
// this function determines the gif and question counter
function gameSet (){
    // api info for giphy
    $(".answer-class").remove();
    var imageCode = questions[counter].image;
    var queryURL = "https://api.giphy.com/v1/gifs/"+ imageCode +"?api_key=OKuVGjgT0V7r20tpzmToIqOjeggIVUYM";

    // retrieve api data to return corresponding gif
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      
      var myImage = response.data.images.downsized.url;
      
      $("#place-image").append('<img src=' + myImage + ' style="width:300px;height:225px;">');
      stop();
    });

    // stop();
    counter ++;
    // ends game when we are out of questions
    if (counter >= questions.length) {

       setTimeout(endGame, 1000 * 4);
    // continues through questions and resets timer
    } else {
    
        setTimeout(loadQuestion, 1000 * 4);
        number = 20;
    }
};

// this brings up the end of the game info with tallys for answers and displays reset game button
function endGame (){
    stop();
    $(".time-remaining").remove();
    $("#place-image").empty();
    $("#correct-incorrect").empty();
    $("#game-question").empty();

    $("#game-timer").text("Game Over! How did you do?");
    $("#correct-answer").text("You got " + correct + " correct, Good Job!");
    $("#incorrect-answer").text("You got " + incorrect + " wrong, those were tough!");
    $("#no-answer").text("You didn't answer " + unanswered + " questions.");
    $("#place-image").append("<button type='button' class='btn btn-primary'id='restart-game'>Restart Game</button>");
};
// restarts game after restart game button is clicked 
$("#place-image").on("click", function() {
    
    counter = 0;
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    number = 20;
    $(".end-of-game").empty();
    $("#restart-game").remove();
    loadQuestion();
});

