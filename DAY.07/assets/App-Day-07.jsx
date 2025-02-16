import Suggestion from "./App.Suggestions.Challenge.FINAL"
import { useState, useRef, useEffect } from "react";

function App() {
  const [ state, setState ] = useState(0);
  const someRefValue = useRef(0); // Use Refs as variables that retain their value across re-renders
  const paragraph1 = useRef(null); // Use Refs to access HTML elements (as references)
  const paragraph2 = useRef(null);
  // State Setter forms:
  // A) setState( VALUE ); // CAUTION: Object references (Array, Object, Function, Set, etc.)

  // const list = [ 10,20,30 ];
  // const twin = list;
  // list.push(40); [ 10,20,30,40 ]
  // setState(list); // Same Object Reference (won't re-render)
  // setState([...list]); // Different Objects (will re-render)
  // STUDY: Test this in action.
  console.log(1, paragraph1, paragraph2);

  useEffect(()=>{
    console.log(2, paragraph1, paragraph2)
    // WATCH OUT FOR missing .current:
    paragraph1.current.style.background = "red"
    paragraph2.current.style.background = "green"
  })

  // B) 
  return (
    <>
      <div>
        <h1>App {state}</h1> 
        <h2>Ref: {someRefValue.current}</h2>
        <p ref={paragraph1}>Some paragraph</p>
        <p ref={paragraph2}>Another paragraph</p>
        <button onClick={()=> {
          setState(state + 1)
          someRefValue.current++;
        }}>Update</button>
        {/* Coding challenge: */}
        <Suggestion />
      </div>
    </>
  )
}

export default App
