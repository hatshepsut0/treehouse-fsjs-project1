// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//defining variables
var message = '';

//function to print quotes to page
function print(message) {
   var outputDiv = document.getElementById('quote-box');
   outputDiv.innerHTML = message;
}

//function to generate random number between 0 and length of array of quotes
function getRandomQuote() {
  var quoteObject = quotes[ Math.floor(Math.random() * quotes.length ) ];
  return quoteObject;
  }

//function to print quote to page
function printQuote() {
  var randomQuote = getRandomQuote();
  message = '<p class="quote">' + randomQuote.quote + '</p>';
  message += '<p class= "source">' + randomQuote.source;
  if (randomQuote.citation !== undefined) {
    message += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year !== undefined) {
    message += '<span class="year">' + randomQuote.year + '</span>';
  }
  message += '</p>';
  print(message);
  message = '';
}
