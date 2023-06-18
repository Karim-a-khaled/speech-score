const englishQuestions = [
  {
  question: "What is the difference between 'affect' and 'effect'?",
  options: ["Affect is a verb, while effect is a noun.", "Effect is a verb, while affect is a noun.", "Both are adjectives with different meanings.", "Both are prepositions with different meanings."],
  answer: "Affect is a verb, while effect is a noun."
  },
  {
  question: "What is the origin of the word 'etymology'?",
  options: ["Latin", "Greek", "French", "Germanic"],
  answer: "Greek"
  },
  {
  question: "What is a homophone?",
  options: ["A word that sounds the same as another word but has a different spelling and meaning.", "A word that is spelled the same as another word but has a different pronunciation and meaning.", "A word that has multiple meanings.", "A word that has the same meaning as another word."],
  answer: "A) A word that sounds the same as another word but has a different spelling and meaning."
  },
  {
  question: "What are some common idioms used in English?",
  options: ["'Break a leg'", "The ball is in your court", "All of the above", "The cat's out of the bag"],
  answer: "'All of the above'"
  },
  {
  question: "What is the difference between 'who' and 'whom'?",
  options: ["'Who' is used as the subject of a sentence, while 'whom' is used as an object.", "'Whom' is used as the subject of a sentence, while 'who' is used as an object.", "Both are interchangeable.", "'Whom' is used to refer to animals or things, while 'who' is used to refer to people."],
  answer: "'Who' is used as the subject of a sentence, while 'whom' is used as an object."
  },
  {
  question: "What is the plural of 'octopus'?",
  options: ["Octopuses", "Octopi", "Octopodes", "Octopodes or octopuses are both correct."],
  answer: "Octopuses"
  },
  {
  question: "What is the Oxford comma and why is it controversial?",
  options: ["It is a comma used before the conjunction 'and' in a list of three or more items.", "It is a comma used after the conjunction 'and' in a list of three or more items.", "It is a comma used before the last item in a list of three or more items.", "It is a comma used to separate clauses in a complex sentence."],
  answer: "It is a comma used before the last item in a list of three or more items."
  },
  {
  question: "What is the difference between 'its' and 'it's'?",
  options: ["'Its' is a possessive pronoun, while 'it's' is a contraction of 'it is'.", "'It's' is a possessive pronoun, while 'its' is a contraction of 'it is'.", "Both have the same meaning.", "'Its' is a contraction of 'it has', while 'it's' is a possessive pronoun."],
  answer: "'Its' is a possessive pronoun, while 'it's' is a contraction of 'it is'."
  },
  {
  question: "What is the difference between 'few' and 'a few'?",
  options: ["'Few' is used to indicate a small quantity, while 'a few' is used to indicate a slightly larger quantity.", "'A few' is used to indicate a small quantity, while 'few' is used to indicate a slightly larger quantity.", "Both have the same meaning.", "'Few' is used to indicate a large quantity, while 'a few' is used to indicate a very small quantity."],
  answer: "'Few' is used to indicate a small quantity, while 'a few' is used to indicate a slightly larger quantity."
  },
  {
  question: "What is the difference between 'advice' and 'advise'?",
  options: ["'Advice' is a verb, while 'advise' is a noun.", "'Advice' is a noun, while 'advise' is a verb.", "Both are nouns with different meanings.", "Both are verbs with different meanings."],
  answer: "'Advice' is a noun, while 'advise' is a verb."
  },
  {
  question: "What is a palindrome?",
  options: ["A word that has multiple meanings depending on the context.", "A word that is spelled the same backwards as forwards.", "A word that sounds the same as another word but has a different spelling and meaning.", "A word that is spelled the same as another word but has a different pronunciation and meaning."],
  answer: "A word that is spelled the same backwards as forwards."
  },
  {
  question: "What is the difference between 'imply' and 'infer'?",
  options: ["'Imply' is used to indicate a suggestion or hint, while 'infer' is used to draw a conclusion or make an educated guess.", "'Infer' is used to indicate a suggestion or hint, while 'imply' is used to draw a conclusion or make an educated guess.", "Both are synonyms with the same meaning.", "'Imply' is used to refer to people, while 'infer' is used to refer to things."],
  answer: "'Imply' is used to indicate a suggestion or hint, while 'infer' is used to draw a conclusion or make an educated guess."
  }
  ];
  let container = document.querySelector('#container')
  let questionContainer = document.querySelector('.question')
  let display = document.querySelector('.timer')
  let submitBtn = document.createElement('button')
  submitBtn.className = 'submit-btn'
  submitBtn.textContent = 'Submit'

  function startTimer(duration, display) {
    let timer = duration;
    let minutes, seconds;
  
    let countdown = setInterval(function() {
      minutes = Math.floor(timer / 60);
      seconds = timer % 60;
  
      // Add leading zeros if needed
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      // Display the time remaining
      display.textContent = minutes + ":" + seconds;
  
      if (--timer < 0) {
        // Timer has reached zero, do something
        clearInterval(countdown);
        alert("Timer has ended!");
      }
    }, 1000);
  }
  let countdownDuration = 60 * 1; // 5 minutes in seconds

  // 5 random questions generated
  function generatingQuestions(englishQuestions){
  let questionsArr = []
  let answersArr = []
  let optionsArr = []
  let i = 0
  while(i < 1){
      let randomNumber = Math.floor(Math.random() * englishQuestions.length)
      if(questionsArr.indexOf(englishQuestions[randomNumber].question) == -1){
        questionsArr.push(englishQuestions[randomNumber].question)
        // console.log(questionsArr)
        answersArr.push(englishQuestions[randomNumber].answer)
        // console.log(answersArr)
        optionsArr.push(englishQuestions[randomNumber].options)
        // console.log(optionsArr)
        i++
      }
      displayeQuestions(questionsArr,optionsArr,answersArr,)
    }
  }

function displayeQuestions(questions,options,answer){
  for(let i = 0; i < questions.length; i++){
    let div = document.createElement('div')
    let questionsLabel = document.createElement('h2')
    questionsLabel.innerText = questions[i]
    div.appendChild(questionsLabel)
    questionContainer.appendChild(div)
    console.log(options)
      for(let i = 0; i < options.length; i++){
        let label = document.createElement('label')
        let theOptions = document.createElement('input')
        theOptions.type = 'radio'
        label.style.display = 'block'
        label.appendChild(theOptions)
        label.appendChild(document.createTextNode(options));
        div.appendChild(label)
      }
  }
  questionContainer.appendChild(submitBtn)
}

generatingQuestions(englishQuestions)
startTimer(countdownDuration, display);
