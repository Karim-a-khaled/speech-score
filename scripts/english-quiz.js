const englishQuestions = [
  {
  question: "What is the difference between 'affect' and 'effect'?",
  options: ["A) Affect is a verb, while effect is a noun.", "B) Effect is a verb, while affect is a noun.", "C) Both are adjectives with different meanings.", "D) Both are prepositions with different meanings."],
  answer: "A) Affect is a verb, while effect is a noun."
  },
  {
  question: "What is the origin of the word 'etymology'?",
  options: ["A) Latin", "B) Greek", "C) French", "D) Germanic"],
  answer: "B) Greek"
  },
  {
  question: "What is a homophone?",
  options: ["A) A word that sounds the same as another word but has a different spelling and meaning.", "B) A word that is spelled the same as another word but has a different pronunciation and meaning.", "C) A word that has multiple meanings.", "D) A word that has the same meaning as another word."],
  answer: "A) A word that sounds the same as another word but has a different spelling and meaning."
  },
  {
  question: "What are some common idioms used in English?",
  options: ["A) 'Break a leg'", "B) 'The ball is in your court'", "C) 'All of the above'", "D) 'The cat's out of the bag'"],
  answer: "C) 'All of the above'"
  },
  {
  question: "What is the difference between 'who' and 'whom'?",
  options: ["A) 'Who' is used as the subject of a sentence, while 'whom' is used as an object.", "B) 'Whom' is used as the subject of a sentence, while 'who' is used as an object.", "C) Both are interchangeable.", "D) 'Whom' is used to refer to animals or things, while 'who' is used to refer to people."],
  answer: "A) 'Who' is used as the subject of a sentence, while 'whom' is used as an object."
  },
  {
  question: "What is the plural of 'octopus'?",
  options: ["A) Octopuses", "B) Octopi", "C) Octopodes", "D) Octopodes or octopuses are both correct."],
  answer: "A) Octopuses"
  },
  {
  question: "What is the Oxford comma and why is it controversial?",
  options: ["A) It is a comma used before the conjunction 'and' in a list of three or more items.", "B) Itis a comma used after the conjunction 'and' in a list of three or more items.", "C) It is a comma used before the last item in a list of three or more items.", "D) It is a comma used to separate clauses in a complex sentence."],
  answer: "C) It is a comma used before the last item in a list of three or more items."
  },
  {
  question: "What is the difference between 'its' and 'it's'?",
  options: ["A) 'Its' is a possessive pronoun, while 'it's' is a contraction of 'it is'.", "B) 'It's' is a possessive pronoun, while 'its' is a contraction of 'it is'.", "C) Both have the same meaning.", "D) 'Its' is a contraction of 'it has', while 'it's' is a possessive pronoun."],
  answer: "A) 'Its' is a possessive pronoun, while 'it's' is a contraction of 'it is'."
  },
  {
  question: "What is the difference between 'few' and 'a few'?",
  options: ["A) 'Few' is used to indicate a small quantity, while 'a few' is used to indicate a slightly larger quantity.", "B) 'A few' is used to indicate a small quantity, while 'few' is usedto indicate a slightly larger quantity.", "C) Both have the same meaning.", "D) 'Few' is used to indicate a large quantity, while 'a few' is used to indicate a very small quantity."],
  answer: "A) 'Few' is used to indicate a small quantity, while 'a few' is used to indicate a slightly larger quantity."
  },
  {
  question: "What is the difference between 'advice' and 'advise'?",
  options: ["A) 'Advice' is a verb, while 'advise' is a noun.", "B) 'Advice' is a noun, while 'advise' is a verb.", "C) Both are nouns with different meanings.", "D) Both are verbs with different meanings."],
  answer: "B) 'Advice' is a noun, while 'advise' is a verb."
  },
  {
  question: "What is a palindrome?",
  options: ["A) A word that has multiple meanings depending on the context.", "B) A word that is spelled the same backwards as forwards.", "C) A word that sounds the same as another word but has a different spelling and meaning.", "D) A word that is spelled the same as another word but has a different pronunciation and meaning."],
  answer: "B) A word that is spelled the same backwards as forwards."
  },
  {
  question: "What is the difference between 'imply' and 'infer'?",
  options: ["A) 'Imply' is used to indicate a suggestion or hint, while 'infer' is used to draw a conclusion or make an educated guess.", "B) 'Infer' is used to indicate a suggestion or hint, while 'imply' is used to draw a conclusion or make an educated guess.", "C) Both are synonyms with the same meaning.", "D) 'Imply' is used to refer to people, while 'infer' is used to refer to things."],
  answer: "A) 'Imply' is used to indicate a suggestion or hint, while 'infer' is used to draw a conclusion or make an educated guess."
  }
  ];

  let container = document.querySelector('#container')
  // let submitBtn = document.querySelector('.submit')

// 5 random questions generated
function generatingQuestions(englishQuestions){
  let questionsArr = []
  let answersArr = []
  let optionsArr = []
  let i = 0
  while(i < 5){
      let randomNumber = Math.floor(Math.random() * englishQuestions.length)
      if(questionsArr.indexOf(englishQuestions[randomNumber].question) == -1){
        questionsArr.push(englishQuestions[randomNumber].question)
        answersArr.push(englishQuestions[randomNumber].answer)
        optionsArr.push(englishQuestions[randomNumber].options)
        i++
      }
      
    }
    displayeQuestions(questionsArr,answersArr,optionsArr)
  }


function displayeQuestions(questions,options,answer){
  for(let question of questions){
    let div = document.createElement('div')
    div.className = `question-${questions.indexOf(question) + 1} questions`
    let questionsLabel = document.createElement('h3')
    questionsLabel.innerText = question
    div.appendChild(questionsLabel)
    container.appendChild(div)

    for(let option of options){
      let theOptions = document.createElement('input')
      theOptions.style.display = 'block'
      theOptions.innerText = option
      theOptions.type = 'radio'
      div.appendChild(theOptions)
    }
  }

}

generatingQuestions(englishQuestions)
