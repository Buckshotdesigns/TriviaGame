

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
       
        stop();
        
       
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
    {question: "Name the building from Die Hard where the movie takes place",
    answers: ["A: The Wal-Mart Plaza", "B: Naruto Matisyahu building", "C: Nakatomi Plaza", "D: Who cares where's Steve Urkel"],
    correctAnswer: 2,
    image: "assets/images/nakatomi.png",
},
    {question: "What is the Actors name who plays Clubber Lang in Rocky",
    answers: [" John McClain", "Samuel L. Jackson", "Lady Gaga", "Mr. T"],
    correctAnswer: 3,
    image: "assets/images/mrt.jpg",
},
    {question: "What was the name of the kids character in Terminator 2 ? ",
    answers: ["Sunny Bono", "John Carpenter", "John Conner", "Sarah Conner"],
    correctAnswer: 2,
    image: "assets/images/terminator-2.jpg",
},
    {question: "This is question number 4",
    answers: ["Answer 1 ", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: 2,
    image: "",
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
                $("#place-image").html('<img src="./' + questions[counter].image +'" style="width:300px;height:300px;">');
                counter ++;
                stop();
                
                setTimeout(loadQuestion, 1000 * 5);
                console.log(setTimeout);
                number = 30;
                $(".answer-class").remove();
                

                
            }
            else {

                correctAnswer = questions[counter].correctAnswer
                $("#correct-incorrect").text("Wrong Answer!!! The correct answer is  " + questions[counter].answers[correctAnswer] );
                $("#place-image").html('<img src="./' + questions[counter].image +'" alt="nakatomi plaza" style="width:250px;height:250px;">');
                counter++ ;
                stop();
                
                setTimeout(loadQuestion, 1000 * 5);
                console.log(setTimeout);
                number = 30;
                $(".answer-class").remove();
                
                
            }
        });
};
// when user clicks the answer it needs to display correct or incorrect

// the correct answer will display underneath 

// after answer is selected the timer will give you 5 seconds before loading next question

// next question is loaded 

// when game is complete show correct, incorrect and unanswered questions

// have a button to reload the game 
