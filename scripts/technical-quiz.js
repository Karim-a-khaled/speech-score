let allQT = [
  {
    question:
      "1. What is the output of the following code?\n\nconsole.log(2 + '2');",
    options: ["22", "4", "NaN", "Error"],
    answer: "22",
  },
  {
    question:
      "2. What is the correct way to check if the variable 'x' is NOT equal to 5?",
    options: ["x !== 5", "x =! 5", "x <> 5", "x != 5"],
    answer: "x !== 5",
  },
  {
    question: "3. Which method is used to add elements to the end of an array?",
    options: ["push()", "pop()", "concat()", "join()"],
    answer: "push()",
  },
  {
    question:
      "4. What is the result of the following expression?\n\ntypeof(null);",
    options: ["object", "null", "undefined", "string"],
    answer: "object",
  },
  {
    question:
      "5. What is the correct way to write an if statement in JavaScript?",
    options: ["if (x == 5)", "{ if x == 5 }", "if x = 5", "if x == 5 then"],
    answer: "if (x == 5)",
  },
  {
    question:
      "6. Which built-in method removes the last element from an array and returns it?",
    options: ["shift()", "pop()", "slice()", "splice()"],
    answer: "pop()",
  },
  {
    question:
      "7. What is the output of the following code?\n\nconsole.log(3 + 2 + '7');",
    options: ["327", "12", "NaN", "57"],
    answer: "57",
  },
  {
    question: "8. How do you define a function in JavaScript?",
    options: [
      "function myFunction()",
      "def myFunction()",
      "myFunction = function()",
      "function = myFunction()",
    ],
    answer: "function myFunction()",
  },
  {
    question: "9. Which operator is used to concatenate strings in JavaScript?",
    options: ["+", "-", "*", "&"],
    answer: "+",
  },
  {
    question:
      "10. What is the result of the following expression?\n\nBoolean('false')",
    options: ["true", "false", "NaN", "TypeError"],
    answer: "true",
  },
];

let submitButton = document.getElementById("submitExam");
let questionsContainer = document.getElementById("questionsContainer");
let resultContainer = document.getElementById("resultContainer");
let qListT = [];
let currentQuestionIndex = 0;
let timerContainer = document.getElementById("timerContainer");
let timerInterval;
let examDuration = 5 * 60; // Duration in seconds (5 minutes)

submitButton.addEventListener("click", handleSubmit);

// Check if there's a saved exam state in session storage
let savedExamState = sessionStorage.getItem("examState");
if (savedExamState) {
  let parsedExamState = JSON.parse(savedExamState);
  qListT = parsedExamState.qListT;
  currentQuestionIndex = parsedExamState.currentQuestionIndex;
  showQuestion(currentQuestionIndex);
  fillSavedAnswers(); // Fill the saved answers on page load
} else {
  handleStart(); // Randomize the questions
}

// startTimer();

function handleSubmit() {
  stopTimer();
  let score = calculateScore();
  saveResult(score);
  showResult(score);
  showQuestionAndAnswer();
  showScore(score);
  sessionStorage.removeItem("examStateT"); // Clear the saved exam state after submitting
}

function handleStart() {
  // Check if qListT already has 5 questions
  if (qListT.length === 5) {
    showQuestion(currentQuestionIndex);
    return;
  }

  let remainingQuestions = allQT.filter((question) => {
    // Filter out questions that are already in qListT
    return !qListT.some((q) => q.question === question.question);
  });

  // Randomly select remaining questions until qListT has 5 questions
  while (qListT.length < 5 && remainingQuestions.length > 0) {
    let randomNum = Math.floor(Math.random() * remainingQuestions.length);
    let selectedQuestion = remainingQuestions[randomNum];
    selectedQuestion.selectedOptions = []; // Initialize selected options array
    qListT.push(selectedQuestion);
    remainingQuestions.splice(randomNum, 1); // Remove the selected question from remainingQuestions
  }

  // showQuestion(currentQuestionIndex);
  // saveExamState(); // Save the current exam state in session storage
}

function saveExamState() {
  let examState = {
    qListT: qListT,
    currentQuestionIndex: currentQuestionIndex,
  };
  sessionStorage.setItem("examStateT", JSON.stringify(examState));
}

function startTimer() {
  let minutes = Math.floor(examDuration / 60);
  let seconds = examDuration % 60;
  timerContainer.textContent = formatTime(minutes) + ":" + formatTime(seconds);
  timerInterval = setInterval(() => {
    examDuration--;
    minutes = Math.floor(examDuration / 60);
    seconds = examDuration % 60;
    timerContainer.textContent =
      formatTime(minutes) + ":" + formatTime(seconds);
    if (examDuration <= 0) {
      stopTimer();
      handleSubmit();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

// handleStart();
submitButton.addEventListener("click", handleSubmit);

function handleSubmit() {
  let score = calculateScore();
  saveResult(score);
  showResult(score);
  showQuestionAndAnswer();
  showScore(score);
}

function calculateScore() {
  let score = 0;
  for (let i = 0; i < qListT.length; i++) {
    let question = qListT[i];
    let selectedOptions = question.selectedOptions;
    if (
      selectedOptions.length === 1 &&
      selectedOptions[0] === question.answer
    ) {
      score++;
    }
  }
  return score;
}

function showQuestion(index) {
  let question = qListT[index];
  let optionsHTML = "";
  for (let j = 0; j < question.options.length; j++) {
    let option = question.options[j];
    let isChecked = question.selectedOptions.includes(option) ? "checked" : "";
    optionsHTML += `
        <div>
            <label>
            <input type="radio" name="answer${index}" value="${option}" ${isChecked}>
            ${option}
            </label>
        </div>
        `;
  }
  let questionHTML = `
    <div>
        <p>Question ${index + 1}: ${question.question}</p>
        ${optionsHTML}
    </div>
    `;
  questionsContainer.innerHTML = questionHTML;

  // Add previous and next buttons
  let navigationHTML = `
    <br><br><br><br>
    <div class="text-center">
        <button class="btn btn-outline-dark mt-1" onclick="previousQuestion()">Previous</button>
        <span>${index + 1} / ${qListT.length}</span>
        <button class="btn btn-outline-dark mt-1" onclick="nextQuestion()">Next</button>
    </div>
    `;
  questionsContainer.innerHTML += navigationHTML;
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
  }
}

function nextQuestion() {
  if (currentQuestionIndex < qListT.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  }
}

function saveResult(score) {
  localStorage.setItem("examResultT", score);
}

function showResult(score) {
  questionsContainer.innerHTML = `
    <div id="resultContainer">
      <h3>Your score is: ${score}/5</h3>
    </div>
  `;
}

function showQuestionAndAnswer() {
  let questionAndAnswerHTML = `
    <h3>Question and Answer Summary:</h3>
    <ol>`;
  for (let i = 0; i < qListT.length; i++) {
    let question = qListT[i];
    let answer = question.answer;
    let selectedOptions =
      question.selectedOptions.length > 0 ? question.selectedOptions[0] : "-";
    questionAndAnswerHTML += `
        <li>
            <strong>Question ${i + 1}:</strong> ${question.question}<br>
            <strong>Answer:</strong> ${answer}<br>
            <strong>Your Selection:</strong> ${selectedOptions}
        </li>`;
  }
  questionAndAnswerHTML += "</ol>";
  questionsContainer.innerHTML += questionAndAnswerHTML;
}

function showScore(score) {
  let scoreHTML = `
    <div id="scoreContainer">
        <h3>Your Score: ${score}/5</h3>
    </div>
    `;
  resultContainer.innerHTML = scoreHTML;
}

// Event listener to track selected options for each question
questionsContainer.addEventListener("change", function (event) {
  const target = event.target;
  if (target.tagName === "INPUT") {
    const questionIndex = parseInt(target.name.substring(6)); // Extract the question index from the input name
    const question = qListT[questionIndex];
    question.selectedOptions = [target.value]; // Update the selected options array for the question
    saveExamState(); // Save the current exam state in session storage
  }
});

function fillSavedAnswers() {
  let currentQuestion = qListT[currentQuestionIndex];
  let inputElements = document.getElementsByName(
    `answer${currentQuestionIndex}`
  );
  for (let i = 0; i < inputElements.length; i++) {
    let inputElement = inputElements[i];
    if (currentQuestion.selectedOptions.includes(inputElement.value)) {
      inputElement.checked = true;
    }
  }
}

// questions page

if (localStorage.getItem("userFinishT") == null) {
  startTimer();
  showQuestion(currentQuestionIndex);
  saveExamState();
  handleStart();
  localStorage.setItem("userFinishT", true);
} else {
  //     questionsContainer.innerHTML= `<div id="scoreContainer">
  //     <h3>Your Score: ${score}/5</h3>
  // </div>`
  questionsContainer.innerHTML = "";
  let score = calculateScore();
  saveResult(score);
  showResult(score);
  showQuestionAndAnswer();
}