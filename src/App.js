import React from 'react';
import './App.css';

import Joke from './components/Joke.js'



// https://official-joke-api.appspot.com/random_joke

function App() {
  return (
    <div className="App">
      <Joke />
    </div>
  );
}

export default App;