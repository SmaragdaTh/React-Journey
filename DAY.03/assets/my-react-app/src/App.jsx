import "./App.css";
import { useState } from "react";

// 'initial' is missing in props validationeslintreact/prop-types
function Counter(props){
  console.log("Counter()", props.initial);

  // Array destructuring (ES6)
  // const [ stateGetter, stateSetter ] = useState(initialValue?);
  // stateSetter is usually the name of the getter, prefixed with use:
  // [ profile, setProfile ], [ list, setList ]
  // stateGetter is STRICTLY READONLY
  // NEVER counter = 43;
  const [ counter, setCounter ] = useState(props.initial);
  const [ anotherCounter, setAnotherCounter ] = useState(Math.random());
  // More state variables
  const [ ok, setOK ] = useState(false);

  function clickHandler(){
    console.log("clickHandler()", counter);
    setCounter( counter + 1 );
    // counter = counter + 1; // NEVER
    // counter++ // NEVER
    // counter += 1 // NEVER
  }

  return (
    <div className="counter" onClick={clickHandler}>
      {counter}
    </div>
  )
}

function App() {
  console.log("App()");
  return (
    <section>
      <h1>Hello World</h1>
      <Counter initial={0} />
      <Counter initial={0} />
      <Counter initial={0} />
    </section>
  )
}

export default App
