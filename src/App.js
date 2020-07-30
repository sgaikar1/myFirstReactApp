import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
       <div id="navbar">
        <a href="#" id="gmail">Gmail</a>
        <a href="#" id="images">Images</a>
        <a href="#" id="menu"><img src="https://cdn4.iconfinder.com/data/icons/finite-application/16/grid-9-512.png" width="20px" height="20px"></img></a>
        <a href="#" id="signin">Sign In</a>
    </div>

    <div id="main">
        <a href="#" id="logo"><img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" width="300px" height="100px"></img></a>
        <input type="text" id="search"></input>
        <div id="flexbox">
        <button id="google-search-btn" onClick={getInputValue}>Google Search</button>
        <button id="random-btn">I'm Feeling Lucky</button>   
        </div>
        <p id="google-text">Google offered in: <a href="#" id="english">English</a></p>     
        <a href="#" id="output">Your entered value is: </a>
    </div>

    <div id="footer">
        <a href="#" id="privacy">Privacy</a>
        <a href="#" id="terms">Terms</a>
        <a href="#" id="settings">Settings</a>
    </div>

    </div>
  );
  function getInputValue(){
    var inputVal = document.getElementById("search").value;
    document.getElementById("output").innerHTML = "Your entered value is: "+inputVal
    window.open("https://www.google.com/?query="+inputVal)
}
}

export default App;
