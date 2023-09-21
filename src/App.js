import { useEffect } from 'react';
import './App.css';

function App() {
  // https://api.quotable.io/random

  useEffect(() => {

  })

  return (
    <div className="App">
      <div id="quote-box">
        <p id="text"></p>
        <p id="author"></p>
        <button id="new-quote">New Quote</button>
        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">Tweet Quote</a>
      </div>
    </div>
  );
}

export default App;
