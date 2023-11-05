const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')

let timerInterval; // Declare a timer interval variable
let timerStarted = false


quoteInputElement.addEventListener('input', () => {
  if (!timerStarted) {
    // Start the timer when the user starts typing
    timerInterval = startTimer();
    timerStarted = true;
  }

  const arrayQuote = quoteDisplayElement.querySelectorAll('span')
  const arrayValue = quoteInputElement.value.split('')

  let correct = true
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index]
    if (character == null) {
      characterSpan.classList.remove('correct')
      characterSpan.classList.remove('incorrect')
      correct = false
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add('correct')
      characterSpan.classList.remove('incorrect')
    } else {
      characterSpan.classList.remove('correct')
      characterSpan.classList.add('incorrect')
      correct = false
    }
  })

  // when finished typing the quote, clear text
  if (correct) {
    quoteInputElement.value = ""

    // Calculate and display WPM
    const timeElapsed = getTimerTime() // Get the time in seconds
    const wordsTyped = arrayQuote.length // Count words
    const wpm = (wordsTyped/5/timeElapsed)*60 // Calculate WPM
    quoteInputElement.value = `WPM: ${wpm}` // Display WPM
    
  }
})

async function getRandomQuote(maxLength) {

    // Fetch the JSON file containing your quotes
  const response = await fetch('./english.json');
  const data = await response.json();

  // Filter quotes based on the length criterion
  const eligibleQuotes = data.quotes.filter(quote => quote.length < maxLength);

  // If there are eligible quotes, select a random one
  if (eligibleQuotes.length > 0) {
    const randomIndex = Math.floor(Math.random() * eligibleQuotes.length);
    return eligibleQuotes[randomIndex].text;
  } else {
    return "No eligible quotes found.";
  }
}

// display the quote on the page
async function renderNewQuote() {

  const quote = await getRandomQuote(100)
  quoteDisplayElement.innerHTML = ''

  quote.split('').forEach(character => {
    const characterSpan = document.createElement('span')
    characterSpan.innerText = character
    quoteDisplayElement.appendChild(characterSpan)
  })

  quoteInputElement.value = null
  startTimer()
  timerStarted = false

  nextQuoteButton.disabled = false
}

// timer stuff
let startTime
function startTimer() {

  startTime = new Date()

  setInterval(() => {
    timer.innerText = getTimerTime()
  }, 1000)
}

//more timer stuff
function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000)
}



// add call to a new test button
const nextQuoteButton = document.getElementById('restartButton')

nextQuoteButton.addEventListener('click', () => {
  renderNewQuote();
  quoteInputElement.focus()
})

// Function to initialize the page with an initial quote
async function initializePage() {
  renderNewQuote();
  nextQuoteButton.disabled = true; // Disable the "Next Quote" button initially
}

// Add an event listener to run the initialization function when the page loads
document.addEventListener('DOMContentLoaded', initializePage);