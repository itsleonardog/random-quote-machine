import { useEffect, useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {

  const [quoteInfo, setQuoteInfo] = useState({})

  useEffect(() => {
    getQuote();
  }, [])

  const getQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then((data) => {
        setQuoteInfo({
          text: data.content,
          author: data.author
        })
      });
  }

  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">{quoteInfo.text}</p>
        <p id="author">- {quoteInfo.author}</p>
        <button id="new-quote" onClick={getQuote}>New Quote</button>
        <a id="tweet-quote" href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text" + quoteInfo.text}><i class="fa-brands fa-square-x-twitter fa-2x"></i></a>
      </div>
    </div>
  );
}

export default App;
