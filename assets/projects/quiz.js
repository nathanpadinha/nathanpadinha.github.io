$(document).ready( async function() {
    let correctAnswers=0;
    const easyQuestions =[
        'What is the tallest land animal on Earth?',
        'How many colors are there in a rainbow?',
        'What is the capital of France?',
        'Who painted the Mona Lisa?',
        'What is the largest ocean on Earth?',
        'What color is a school bus?',
        'What is the name of the famous dog in the Peanuts comic strip?',
        'What is the name of the currency used in the United States?',
        'What is the name of the process by which plants make their food?',
        'What is the name of the fictional British spy who likes his martinis "shaken, not stirred"?'
    ]
    const easyAnswers =[
        'giraffe',
        '7',
        'paris',
        'leonardo da vinci',
        'pacific',
        'yellow',
        'snoopy',
        'dollar',
        'photosynthesis',
        'james bond'
    ]
    const mediumQuestions =[
        'Who painted the famous artwork "The Starry Night"?',
        'In which year did World War II end?',
        'Which planet is known as the "Red Planet"?',
        'Who wrote the play "Romeo and Juliet"?',
        'What is the name of the currency used in Japan?',
        'What is the capital of Australia?',
        'Who was the first man to walk on the moon?',
        'What is the tallest mountain in the world?',
        'In which year did the Titanic sink?'
    ]
    const mediumAnswers =[
        'vincent van gogh',
        '1945',
        'mars',
        'william shakespeare',
        'yen',
        'canberra',
        'neil armstrong',
        'mount everest',
        '1912'
    ]
    const hardQuestions =[
        'What is the smallest planet in our solar system?',
        'Which scientist is known for formulating the theory of relativity?',
        'Who wrote the novel 1984?',
        'What is the square root of 144?',
        'Which country has the most UNESCO World Heritage Sites?',
        'Who painted the ceiling of the Sistine Chapel?',
        'What is the term for an animal that eats both plants and meat?',
        'What is the rarest blood type?(sign spelled out)',
        'Who was the first woman to win a Nobel Prize?',
        'What is the only mammal capable of true flight? (plural)'
    ]
    const hardAnswers =[
        'mercury',
        'albert einstein',
        'george orwell',
        '12',
        'italy',
        'michelangelo',
        'omnivore',
        'ab negative',
        'marie curie',
        'bats'
    ]


await IntoFunction();
PlayGame();

$("#end-button").on ("click", function(){
    location.reload();
});



/*
Gives Instructions
pre:n/a
post:n/a
*/

async function IntoFunction(){
    const introStatments = [
        "Hello welcome to the Brian Drain!",
        "In this game you are going to answer 10 questions.", 
        "They are going to get harder as they go on.",
        "Remember all of your answers should be all lowercase.",
        "If your answser is a number you should not spell it out.",
        "Good Luck!"
        ]
        await new Promise(resolve => setTimeout(resolve, 125)); //wait .125 seconds || skiping first list item was a timing issue & a delay resolves the issue
        for(let i=0; i < introStatments.length; i++){
            $("#question-box").show(); // show the element before loop start 
            $("#question-box").html(introStatments[i]); 
            await new Promise(resolve => setTimeout(resolve, 3000));//wait 3 seconds
            $("#question-box").hide(); // Hide the element after the delay 
        }
        return true;
}
/*
Gets Q&A
pre:all q&a must be populated
post: returns question, awnser
*/
function GetQuestion(i){
    //Variable declaration
    let randomNum;
    let question="";
    let answer="";
    //random
    randomNum=Math.floor(Math.random() * 10)

    //question diffuculty logic
    if(i <= 3){
        question=easyQuestions[randomNum];
        answer=easyAnswers[randomNum];
    }else if(i > 3 && i < 7){
        question=mediumQuestions[randomNum];
        answer=mediumAnswers[randomNum];
    }else if(i >= 7 && i <= 10){
        question=hardQuestions[randomNum];
        answer=hardAnswers[randomNum];
    }
    return [question,answer];
}
/*
displays question
pre:question must be populated
post:n/a
*/
async function DisplayQuestion(question , i){
    await new Promise(resolve => setTimeout(resolve, 125));
    $("#question-box").show();
    $("#question-box").html("Question " + i + ": " + question);
}
/*
***assistance in the creation of this function was provided by google gemini***
Grabs value in answer-box
pre:n/a
post:returns userAnswer
*/

async function GetUserAnswer() {
    return new Promise(resolve => {
      const submitButton = document.getElementById('submit-button');
      submitButton.addEventListener('click', () => {
        const answerBox = document.getElementById('answer-box');
        const userAnswer = answerBox.value;
        resolve(userAnswer); 
      });
    });
  }

/*
handels answer logic and displays result
pre: userAnswer & answer must be populated
post:n/a
*/
async function DisplayQuestionResults(userAnswer, answer){
    let message;
    if(userAnswer == answer){//changes text
    message = "Thats right the answer was ";
    message += answer;
    correctAnswers++;
    }else{
    message = "Sorry the correct answer was ";
    message += answer;
    }
    alert(message)
    
}
/*
plays full game
pre:n/a
post:n/a
*/
async function PlayGame(){
    for(let i=1; i <= 10; i++){
        let [question, answer] = GetQuestion(i);
        DisplayQuestion(question, i);
        let userAnswer = await GetUserAnswer();
        DisplayQuestionResults(userAnswer, answer);
    }
    await new Promise(resolve => setTimeout(resolve, 125));
    $("#question-box").show();
    $("#question-box").html("Game Over. You got " + correctAnswers + " correct!");
    $("#end-button").html('<div id="reset-button">RESET GAME</div>');
}

});






