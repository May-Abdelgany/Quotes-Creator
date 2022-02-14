function getQuote() {
  var quotes = [
    {
      quoteName: `"Be yourself; everyone else is already taken."`,
      quoteAuthor: `-- Oscar Wilde`
    },
    {
      quoteName: `"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."`,
      quoteAuthor: `-- J.K. Rowling, Harry Potter and the Goblet of Fire`
    },
    {
      quoteName: `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,
      quoteAuthor: `-- Albert Einstein`
    },
    {
      quoteName: `"So many books, so little time."`,
      quoteAuthor: `-- Frank Zappa`
    }
    ,
    {
      quoteName: `"A room without books is like a body without a soul."`,
      quoteAuthor: `-- Marcus Tullius Cicero`
    },
    {
      quoteName: `"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."`,
      quoteAuthor: `-- Bernard M. Baruch`
    }
  ]

  var randomElement = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteName").innerHTML = randomElement.quoteName;
  document.getElementById("quoteAuthor").innerHTML = randomElement.quoteAuthor;
  const actionButton = document.getElementById('button');
  actionButton.style.backgroundColor = "green";
}