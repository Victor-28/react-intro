import React, { useState } from 'react';
import ReactDOM from 'reactdom';

function Webpage (){
    const name = "Wesley Snip";
    const date = new Date ();
    
    return  (
        <> 
     <section>
    <header>
    <h1>hello{name}</h1>
    </header>I firmly believe, 
    <p>the only kind of education there is.” “I don't believe in colleges and universities. 
    I believe in libraries because most students don't have any money.
    </p>
    </section>
    <clock/>
    </> 
    ) 
}
export default Webpage;

function clock (){
    const [time, setTime]=useState(newDate().toLocalTimeString("ng"));

    /*setInterval(() => setTime(new Date)().toLocalTimeString("ng")), 1000);*/
        

     let time = newDate().time,toLocalTimeString ("ng");
   
    
    return <p>It's currently:{time}</p>

    }

/*to make the clock clicking in need STATE
/*VIRTUAL DOM interact with STATE in a way to store a value we want to re-render whan that
value changes*/
/*above is examples of multiple component*/
ReactDOM.render (Webpage , document.getElementById("root"));



function clock ()



