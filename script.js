
// Login Page Javascript //

function func(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == 'peyzhixun@gmail.com' && password == 'Badminton2023')
    {
        alert("Success")
        window.location.assign("index.html")
    }
   else
   {
        alert("Wrong entry")
   }
}

function validateForm() { 
    var email = document.forms["loginForm"]["Email"].value;
    var password = document.forms["loginForm"]["Password"].value;

    if (email === "" && password === "") {
        alert("Please enter both email and password.");
        
        return false;
    } else if (email === "") {
        alert("Please enter your email.");
        
        return false;
    } else if (password === "") {
        alert("Please enter your password.");

        return false;
    }    
    return false;
}

function checkUsernameLength()
{
    var username = document.getElementById("email").value;
    var feedback = document.getElementById("usernameFeedback");
    if (username.length < 6)
    {
        feedback.innerText = "Username should be at least 6 characters.";
    }
    else
    {
        feedback.innerText = "Username is long enough.";
    }
}

function validateForm() { 
    var email = document.forms["loginForm"]["Email"].value;
    var password = document.forms["loginForm"]["Password"].value;
    var passwordFeedback = document.getElementById("passwordFeedback");

    if (email === "" && password === "") {
        alert("Please enter both email and password.");
        return false;
    } else if (email === "") {
        alert("Please enter your email.");
        return false;
    } else if (password === "") {
        alert("Please enter your password.");
        return false;
    } else {
        if (!password.match(/[0-9]/)) {
            // Password does not contain at least one number
            passwordFeedback.textContent = "Password must contain at least one number.";
            return false;
            
        }
        if (!password.match(/[A-Za-z]/)) {
            // Password does not contain at least one letter
            passwordFeedback.textContent = "Password must contain at least one letter.";
            return false;
        }
        else{
        // Clear the feedback when password is valid
        passwordFeedback.textContent = "Password is strong.";
        return false;
        }
    }
}


// Quiz Javascript //
const _question = document.getElementById('question');
const _options = document.querySelector('.quiz-options');
const _checkBtn = document.getElementById('check-answer');
const _playAgainBtn = document.getElementById('play-again');
const _result = document.getElementById('result');
const _correctScore = document.getElementById('correct-score');
const _totalQuestion = document.getElementById('total-question');

let correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 10;
let currentQuestionIndex = 0;

let questions = [] ;
/*const categories = {
    "Sports": 'https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple',
    "Geography": 'https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple',
    "Animals": 'https://opentdb.com/api.php?amount=10&category=27'
};

let questions = {
    "Sports": [],
    "Geography": [],
    "Animals": []
};
*/

// load question from API
async function loadQuestion(){
    if (questions.length === 0) {  // Fetch questions only once
        const APIUrl = 'https://opentdb.com/api.php?amount=10';
        const result = await fetch(APIUrl);
        const data = await result.json();
        questions = data.results;
    }

    if (currentQuestionIndex < questions.length) {
        _result.innerHTML = "";
        showQuestion(questions[currentQuestionIndex]);  // Show the current question
    } else {
        restartQuiz();
    }
}

/*async function loadQuestion(){
let selectedCategory = document.getElementById('categoryDropdown').value;
if (!questions[selectedCategory] || questions[selectedCategory].length === 0) {
    const APIUrl = categories[selectedCategory];
    const result = await fetch(APIUrl);
    const data = await result.json();
    questions[selectedCategory] = data.results;
}

if (currentQuestionIndex < questions[selectedCategory].length) {
    _result.innerHTML = "";
    showQuestion(questions[selectedCategory][currentQuestionIndex]);
} else {
    restartQuiz();
}
}
*/


function eventListeners(){
    _checkBtn.addEventListener('click', checkAnswer);
    _playAgainBtn.addEventListener('click', restartQuiz);
}

document.addEventListener('DOMContentLoaded', function(){
    loadQuestion();
    eventListeners();
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
});

// display question and options
function showQuestion(data){
    _checkBtn.disabled = false;
    correctAnswer = data.correct_answer;
    let incorrectAnswer = data.incorrect_answers;
    let optionsList = incorrectAnswer;
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
    
    // console.log(correctAnswer);

    
    _question.innerHTML = `${data.question} <br> <span class = "category"> ${data.category} </span>`;
    _options.innerHTML = `
        ${optionsList.map((option, index) => `
            <li> ${index + 1}. <span>${option}</span> </li>
        `).join('')}
    `;
    selectOption();
}


// options selection
function selectOption(){
    _options.querySelectorAll('li').forEach(function(option){
        option.addEventListener('click', function(){
            if(_options.querySelector('.selected')){
                const activeOption = _options.querySelector('.selected');
                activeOption.classList.remove('selected');
            }
            option.classList.add('selected');
        });
    });
}

// answer checking
function checkAnswer(){
    _checkBtn.disabled = true;
    if(_options.querySelector('.selected')){
        let selectedAnswer = _options.querySelector('.selected span').textContent;
        if(selectedAnswer == HTMLDecode(correctAnswer)){
            correctScore++;
            _result.innerHTML = `<p><i class = "fas fa-check"></i>Correct Answer!</p>`;
        } else {
            _result.innerHTML = `<p><i class = "fas fa-times"></i>Incorrect Answer!</p> <small><b>Correct Answer: </b>${HTMLDecode(correctAnswer)}</small>`;
        }
    } else {
        _result.innerHTML = `<p><i class = "fas fa-question"></i>Please select an option!</p>`;
        _checkBtn.disabled = false;
        return; // Prevent advancing to the next question if no option is selected
    }
    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            endQuiz();
        }
    }, 1000); 
    checkCount();
}

// to convert html entities into normal text of correct answer if there is any
function HTMLDecode(textString) {
    let doc = new DOMParser().parseFromString(textString, "text/html");
    return doc.documentElement.textContent;
}


function checkCount(){
    askedCount++;
    setCount();
    if(setCount == totalQuestion){
        setTimeout(function(){
            _result.innerHTML += `<p>Your score is ${correctScore}.</p>`;
            _playAgainBtn.style.display = "block";
            _checkBtn.style.display = "none";
        }, 1000);
        
        _result.innerHTML += `<p>Your score is ${correctScore}.</p>`;
        _playAgainBtn.style.display = "block";
        _checkBtn.style.display = "none";
    } else {
        setTimeout(function(){
            loadQuestion();
        }, 1000);
    }

}


function setCount(){
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
    const _currentQuestion = document.getElementById('current-question');
    _currentQuestion.textContent = askedCount;
}




function restartQuiz() {
    // Reset the state variables
    correctScore = 0;
    askedCount = 0;
    currentQuestionIndex = 0;
    
    // Optionally clear the existing questions to fetch new ones
    questions = []; 

    // Reset UI elements
    _playAgainBtn.style.display = "none";
    _checkBtn.style.display = "block";
    _checkBtn.disabled = false;
    _result.innerHTML = ""; // Clear any messages or results

    // Update the score and question count displays
    setCount();

    // Reload the questions
    loadQuestion(); 
}


function endQuiz() {
    // Display the final score
    _result.innerHTML = `Quiz complete! Your score is ${correctScore} out of ${totalQuestion}.`;

    // Show the "Play Again" button and hide the "Check Answer" button
    _playAgainBtn.style.display = "block";
    _checkBtn.style.display = "none";
}















