// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//defining variables
var message = '';
var red;
var green;
var blue;
var usedQuotes = [];

var intervalID = window.setInterval(quoteTimer, 20000);
function quoteTimer() {
  printQuote();
}

//function to generate random rgb color and make it the background color
  function randomColor() {
      var red = Math.floor(Math.random() * 256); // range is 0-255
	    var green = Math.floor(Math.random() * 256);
	    var blue = Math.floor(Math.random() * 256);
	    var bgColor = "rgb(" + red + "," + green + "," + blue + ")";
  	document.body.style.background = bgColor;
  }

//function to print quotes to page
function print(message) {
   var outputDiv = document.getElementById('quote-box');
   outputDiv.innerHTML = message;
}

/*function to splice random quote into a new array and return it,
reload main array when all quotes have been viewed,
generate random number between 0 and length of array of quotes*/
function getRandomQuote() {
  if (quotes.length == 0)
    quotes = usedQuotes.splice(0, usedQuotes.length)
  var randomNumber = quotes[ Math.floor(Math.random() * quotes.length) ];
  var splicedQuote = quotes.splice(randomNumber, 1)[0];
  usedQuotes.push(splicedQuote);
  return splicedQuote;
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
  if(randomQuote.tags !== undefined) {
		message += '<p class="tags">' + randomQuote.tags + '</p>';
	}
  message += '</p>';
  print(message);
  message = '';
  randomColor();
  }
