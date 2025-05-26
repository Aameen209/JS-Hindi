# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 - Color Changer

```javascript
console.log("hitesh") // Logs the string "hitesh" to the console for debugging

// Selects all elements with class "button" and returns a NodeList
const buttons = document.querySelectorAll('.button'); 

// Selects the <body> element of the page
const body = document.querySelector('body'); 

// Loop through each button in the NodeList
buttons.forEach(function (button) {
  console.log(button); // Log each button element to the console

  // Add an event listener to listen for "click" events on each button
  button.addEventListener('click', function (e) {
    console.log(e); // Logs the event object
    console.log(e.target); // Logs the element that was clicked

    // Check the ID of the clicked button and set the background color accordingly
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id; // Set background to grey
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id; // Set background to white
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id; // Set background to blue
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id; // Set background to yellow
    }
  });
});



```

## project 2 - BMI Generator

```javascript
const form = document.querySelector('form'); // Selects the form element

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

// Add event listener to form when it's submitted
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevents the page from reloading on form submit

  // Get the user's input values for height and weight and convert them to integers
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results'); // Element to display results

  // Check if the height input is invalid
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`; // Show error
  } 
  // Check if the weight input is invalid
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`; // Show error
  } 
  else {
    // Calculate BMI using the formula: weight / (height in meters)^2
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); // .toFixed(2) limits to 2 decimal places

    //show the result
    results.innerHTML = `<span>${bmi}</span>`; // Display calculated BMI
  }
});


```

## project 3 Digital Clock

```javascript
const clock = document.getElementById('clock'); // Selects the element where time will be shown

// const clock = document.querySelector('#clock')

// Set an interval to update the time every 1 second (1000 milliseconds)
setInterval(function () {
  let date = new Date(); // Create a new Date object with current time

  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString(); // Display the current time in HH:MM:SS format
}, 1000); // Runs the function every second



```

## project 4 Guess the number


```javascript

// Generate a random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt'); // Submit button
const userInput = document.querySelector('#guessField'); // Input field for guesses
const guessSlot = document.querySelector('.guesses'); // Shows previous guesses
const remaining = document.querySelector('.lastResult'); // Shows remaining attempts
const lowOrHi = document.querySelector('.lowOrHi'); // Shows message if guess is low/high
const startOver = document.querySelector('.resultParas'); // Container for new game

const p = document.createElement('p'); // Create new paragraph element

let prevGuess = []; // Array to store previous guesses
let numGuess = 1; // Counter for guesses

let playGame = true; // Flag to control game state

// Add event listener only if the game is active
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form from submitting
    const guess = parseInt(userInput.value); // Get and convert user's guess
    console.log(guess);
    validateGuess(guess); // Call function to validate guess
  });
}

// Validates user's guess and provides feedback
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number'); // Show alert if not a number
  } else if (guess < 1) {
    alert('PLease enter a number more than 1'); // Show alert if too low
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100'); // Show alert if too high
  } else {
    prevGuess.push(guess); // Save guess to array

    if (numGuess === 11) { // Max attempts reached
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`); // Show game over
      endGame(); // End game
    } else {
      displayGuess(guess); // Show guess on screen
      checkGuess(guess); // Compare guess with target
    }
  }
}

// Checks if guess is correct or gives hints
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`); // User guessed correctly
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`); // Guess too low
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`); // Guess too high
  }
}

// Displays the guess on the screen
function displayGuess(guess) {
  userInput.value = ''; // Clear input field
  guessSlot.innerHTML += `${guess}, `; // Add guess to guess history
  numGuess++; // Increase guess count
  remaining.innerHTML = `${11 - numGuess} `; // Show remaining guesses
}

// Displays a message to user (correct, too low, too high)
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`; // Insert message in HTML
}

// Ends the current game and shows "Start New Game" button
function endGame() {
  userInput.value = ''; // Clear input
  userInput.setAttribute('disabled', ''); // Disable input field
  p.classList.add('button'); // Style the paragraph
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`; // Add restart button
  startOver.appendChild(p); // Append to page
  playGame = false; // Stop the game
  newGame(); // Prepare for new game
}

// Handles new game reset
function newGame() {
  const newGameButton = document.querySelector('#newGame'); // Select new game button
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1); // Generate new number
    prevGuess = []; // Reset guesses
    numGuess = 1; // Reset counter
    guessSlot.innerHTML = ''; // Clear guess display
    remaining.innerHTML = `${11 - numGuess} `; // Reset remaining guesses
    userInput.removeAttribute('disabled'); // Enable input
    startOver.removeChild(p); // Remove "new game" button
    playGame = true; // Reactivate game
  });
}


```


# Project 5- Keyboard Event Display
```javascript
const insert = document.getElementById('insert'); // Selects element to display key info

// Adds event listener to window for key press
window.addEventListener('keydown', (e) => {
  // Replace inner HTML with a table showing key details
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td> <!-- Show 'Space' if spacebar -->
      <td>${e.keyCode}</td> <!-- Show numeric keycode of key -->
      <td>${e.code}</td> <!-- Show code identifier -->
    </tr>
    
  </table>
    </div>
  `;
});


```

# Project 6-Random Color

```javascript
//generate a random color

const insert = document.getElementById('insert'); // Selects element to display key info

// Adds event listener to window for key press
window.addEventListener('keydown', (e) => {
  // Replace inner HTML with a table showing key details
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td> <!-- Show 'Space' if spacebar -->
      <td>${e.keyCode}</td> <!-- Show numeric keycode of key -->
      <td>${e.code}</td> <!-- Show code identifier -->
    </tr>
    
  </table>
    </div>
  `;
});


```