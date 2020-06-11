import React from 'react';
import logo from './logo.svg';
import './App.css';
import Car from  "./Car.js"
import Man from  "./Man.js"
function App() {
  return (


    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello World React</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <p>My first React, Am here to learn how you work</p>

          <table>
            <tr>
              <th>Name</th>
            </tr>
            <tr>
              <td>Dave</td>
            </tr>
            <tr>
              <td>Elsa</td>
            </tr>
            <tr>
              <td>Mateo</td>
            </tr>
          </table>

        </p>
        <Car/>
        <Man curious="black man"/>
        <Man curious="courageous enterprise"/>
    
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
