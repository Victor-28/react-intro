import React, {Component} from 'react';
import Garage from " ./Garage.js"
import './App.css';

 class App extends Component{
     state={
         Garage: [

             {

                 id: 1,
                 title: 'scan the car',
                 completed: false
             },

             {
                 id: 2,
                 title: 'control the car',
                 completed: false
             },

             {
                 id: 3,
                 title: 'display car of the week',
                 completed: false

             },

                ]
 }
             render() {
           console.log (this.states.Garage)
             return(
                 <div className="App">
                     <Garage garage={ this.state.garage} />
                 </div>
             );
             }
 }


     export default App;