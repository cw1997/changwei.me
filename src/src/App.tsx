import React from 'react';
import './App.sass';

function App() {
  return (
    <div className="App">
      <header>昌维的网站</header>
      <a href="http://changwei.me">changwei.me</a>
      <button onClick={(event) => alert(1)}>test</button>
    </div>
  );
}

export default App;
