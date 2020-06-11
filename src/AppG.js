import React, {Component} from 'react';
import Garage from " ./Garage.js"
import './App.css';

 class App extends Component{
     state={
         Garage: [
             {
                 id: 1,
                 name: 'Nissan Qashqui',
                 completed: false
             },

             {
                 id: 2,
                 title: 'Toyota Rav4',
                 completed: false
             },

             {
                 id: 3,
                 title: 'Honda CRV',
                 completed: false
             },
             
             {
                 id: 4,
                 title: 'Mazda CX-5',
                 completed: false
             },

             {
                 id: 5,
                 title: 'Subaru Forester',
                 completed: false
             },

             {   id:6, 
                 title: 'Mitsubishi Outlander',
                 completed: false

             }

             {
                id:7,
                title: 'Nissan Juke',
                completed: false
             }



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