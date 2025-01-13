/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

const URL = "https://jsonplaceholder.typicode.com/todos/1";

function Parent(){
  const [ counter, setCounter ] = useState(0);
  const [ title, setTitle ] = useState("[Title not ready]");
  console.log("[ RENDER ] Parent. State is:" , title);
  // useEffect(CALLBACK_FUNCTION, [DEPENDENCIES]);

  // NEVER Update state unconditionally:
  // setCounter(Math.random());
  
  useEffect(function runOnlyOnce(){
    console.log("[ SIDE EFFECT ] Parent");
    fetch(URL)
    .then( response => {
      return response.json();
    })
    .then( json =>{
      console.log(json.title); // We got the data safely
      // => Pass the data to state, so that we initiate Update cycle: render phase => commit phase
      setTitle(json.title + Math.random()); // React re-renders ONLY when state is different from previous state value(s)
      // setTitle(json.title + Math.random()); 
    });
  }, [counter] /* <= Our explicit break */ );
  // Empty deps [] means run ONLY ONCE the side effect.

  return (
    <React.Fragment>
      <h2 onClick={()=>{
        setCounter(counter + 1);
      }}>Parent (counter:{counter})</h2>
      <h2>{title}</h2>
      <Child id={1} />
      {/* <Child id={2} /> */}
    </React.Fragment>
  )
}

function Child(props){
  console.log(`  [ RENDER ] Child ${props.id}`);
  useEffect(()=>{
    console.log(`  [ SIDE EFFECT ] Child ${props.id}`);
  })
  return (
    <h3>Child {props.id}</h3>
  )
}

function App() {
  // console.log("[ RENDER ] App");
  return (
    <>
      <div>
        <h1>App</h1> 
        <Parent />
      </div>
    </>
  )
}

export default App
