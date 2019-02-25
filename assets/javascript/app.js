

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
var running = false;
var correct = 0;
var incorrect = 0;
var unanswered = 0;


// have the timer running at the top of the screen set to 30 seconds with previous variable
 function timer() {
    
    if(!running) {

        intervalId = setInterval(decrement, 1000);
        running = true;
    }
   
 };

//  starts the countdown of the timer
 function decrement() {

    $("#game-timer").html("<h2 class= time-remaining> Time Remaining:  " + number + "</h2>");
    number --;
   
    if (number <= 0) {
        //  Alert the user that time is up.
        $(".time-remaining").remove();
        $("#game-timer").text("Times Up!!!!!");
        var correctAnswer = questions[counter].correctAnswer
        $("#correct-incorrect").text("Correct Answer!!! " + questions[counter].answers[correctAnswer] );

        stop();
        gameSet();
        
       
      }

};

function stop() {

    running = false;
    clearInterval(intervalId);
    number = 0;
    

};

// display questions with four possible answers, correct answer array value and an image to display

var questions = 
[
    {question: "Name the building from Die Hard where the movie takes place ?",
    answers: ["A: The Wal-Mart Plaza", "B: Naruto Matisyahu building", "C: Nakatomi Plaza", "D: Who cares where's Steve Urkel"],
    correctAnswer: 2,
    image: "assets/images/nakatomi.png",
},
    {question: "What is the Actors name who plays Clubber Lang in Rocky III ?",
    answers: [" A: John McClain", "B: Samuel L. Jackson", "C: Lady Gaga", "D: Mr. T"],
    correctAnswer: 3,
    image: "assets/images/mrt.jpg",
},
    {question: "What was the name of the kids character in Terminator 2 ? ",
    answers: ["A: Sunny Bono", "B: John Carpenter", "C: John Conner", "D: Sarah Conner"],
    correctAnswer: 2,
    image: "assets/images/terminator-2.jpg",
},
    {question: "In the Fifth Element what was the Dj's chararcter name played by Chris Tucker ?",
    answers: ["A: Ruby Rhod", "B: DJ Roc", "C: The Chemical Brothers", "D: Korben Dallas"],
    correctAnswer: 0,
    image: "assets/images/5th-element.jpg",
},
    {question: "Govenor Schwarzenegger and Govenor Jesse Ventura both starred in which two films ?",
    answers: ["A: Terminator 1 and 2", "B: Predator and the Running Man", "C: Predator 1 and 2", "D: None of the Above"],
    correctAnswer: 1,
    image: "assets/images/running-man.jpg",
},
    {question: "In all of the Rambo movies what is Rambo's first name ?",
    answers: ["A: Gerald ", "B: John", "C: Machine Gun", "D: Susan"],
    correctAnswer: 1,
    image: "assets/images/Rambo.jpg",
},
    {question: "In the movie Hackers what was the main characters real hacker handle ?",
    answers: ["A: Crash and Burn ", "B: Acid Burn", "C: Cookie Monster", "D: Zero Cool"],
    correctAnswer: 3,
    image: "assets/images/hackers.jpg",
},
    {question: "In the Matrix Trilogy Keanu Reeves character Neo is also referred to as ?",
    answers: ["A: The one who kicks everyone's ass ", "B: Party Monster", "C: He who should not be named", "D: The Chosen One"],
    correctAnswer: 3,
    image: "assets/images/matrix.png",
},
    {question: "In the Blade Trilogy Wesley Snipes plays Blade but the vampires in the movie refer to him as what ?",
    answers: ["A: Daywalker ", "B: A Nuisance", "C: Whistler", "D: The Blood God"],
    correctAnswer: 0,
    image: "assets/images/blade.png",
},
    {question: "Sylvestor Stallone and Wesley Snipes Star in the Expenables and what other Action Movie ?",
    answers: ["A: Rambo ", "B: Rocky III", "C: Demolition Man", "D: Passenger 57"],
    correctAnswer: 2,
    image: "assets/images/demolition-man.jpg",
    },
];

var counter = 0;

function loadQuestion(){

        $("#place-image").empty();
        $("#correct-incorrect").empty();
        
        
        timer();

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

               
                correctAnswer = questions[counter].correctAnswer

                $("#correct-incorrect").text("Correct Answer!!! " + questions[counter].answers[correctAnswer] );

                gameSet();
                
            }
            else {

                var correctAnswer = questions[counter].correctAnswer
                $("#correct-incorrect").text("Wrong Answer!!! The correct answer is  " + questions[counter].answers[correctAnswer] );

                gameSet();
                
            }
        });

};

function gameSet (){

            
    $("#place-image").html('<img src="./' + questions[counter].image +'" style="width:300px;height:300px;">');
    counter ++;
    stop();
    setTimeout(loadQuestion, 1000 * 5);
    number = 30;
    $(".answer-class").remove();
};
// when user clicks the answer it needs to display correct or incorrect

// the correct answer will display underneath 

// after answer is selected the timer will give you 5 seconds before loading next question

// next question is loaded 

// when game is complete show correct, incorrect and unanswered questions

// have a button to reload the game 
