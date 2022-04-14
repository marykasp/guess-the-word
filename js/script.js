const guesses = document.querySelector(".guessed-letters");
const guessBtn = document.querySelector(".guess");
const input = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");
const word = "magnolia";
const guessedLetters = []


// ************** FUNCTIONS **************
const createPlaceholder = function(word) {
  let placeholder = ""
  word.split("").forEach(function(letter) {
    placeholder += ('●')
  })

  // update the text of the word in progress element
  wordInProgress.innerText = placeholder
}

createPlaceholder(word);

const wonGame = function(progessWord) {
  progessWord = progessWord.join("").toLowerCase();
  if(progessWord === word) {
    message.classList.add("win");
    message.innerText = `You guessed the correct word ${progessWord}. Congrats! 🎉`
  }
}

const updateWordInProgess = function(guessedLetters) {
  let progessWord = [];
  let wordUpper = word.toUpperCase();
  let wordArray = wordUpper.split("");
  // check if each letter in guessed letters is in the word array
  wordArray.forEach(function(letter) {
    if(guessedLetters.includes(letter)) {
      progessWord.push(letter)
    } else {
      progessWord.push('●')
    }
  })

  wordInProgress.innerText = progessWord.join("");
  wonGame(progessWord)
}

// validate user guess - 1 letter & A-Z letter
const validateInput = function(input) {
  const acceptedLetter = /[a-zA-Z]/

  // check if input is empty
  // if not valid the message will update and undefined will be returned
  if(input === "") {
    message.innerText = "Please enter a letter from A to Z"
  } else if(input.length > 1) {
    message.innerText = "Please enter only 1 letter"
  } else if(!(input.match(acceptedLetter))) {
    message.innerText = "Please enter a letter from A to Z"
  } else {
    return input
  }
}

// add letter to guessedLetters array if not already guessed, display a message if not
const makeGuess = function(letter) {
  letter = letter.toUpperCase();
  if(guessedLetters.includes(letter)) {
    message.innerText = `You already guessed ${letter} before. Try again!`
  } else {
    // add unique guess to guessedLetters array
    guessedLetters.push(letter);
    // display the guess to the user
    displayGuesses();
    // update the progess
    updateWordInProgess(guessedLetters)
  }
  console.log(guessedLetters)
}

// Show guessed letters
const displayGuesses = function() {
  guesses.innerHTML = "";
  // iterate over guessedLetters and add each letter as a list item
  guessedLetters.forEach(function (letter) {
    // create a new list item for each letter
    let listItem = document.createElement("li");
    listItem.innerText = letter;
    guesses.append(listItem);
  })
}

// ************** EVENT LISTENERS **************
guessBtn.addEventListener("click", function(e) {
  // prevent form from submitting
  e.preventDefault();
  let guess = input.value;
  console.log(guess);
  // empty value of input
  input.value = "";
  // empty text of message element
  message.innerText = "";
  // check if input guess is valid, if so return letter
  const validatedInput = validateInput(guess);

  // pass validtatedInput to makeGuess function
  makeGuess(validatedInput);
})


