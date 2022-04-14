const guessedLetters = document.querySelector(".guessed-letters");
const guessBtn = document.querySelector(".guess");
const input = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");
const word = "magnolia"


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

// ************** EVENT LISTENERS **************
guessBtn.addEventListener("click", function(e) {
  // prevent form from submitting
  e.preventDefault();
  let guess = input.value;
  console.log(guess);
  // empty value of input
  input.value = "";
})
updateProgessWord(word);
