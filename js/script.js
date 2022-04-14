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
const updateProgessWord = function(word) {
  let progessWord = "";
  // console.log(word)
  word.split("").forEach(function(letter) {
    progessWord += "●"
  })

  // update wordInProgess element
  wordInProgress.innerText = progessWord;
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
updateProgessWord(word);
