import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

function App() {

  // CHALLENGE: Check whether the component has unmounted and was remounted
  // (instead of re-rendered). Say goodbye on unmount!

  const [state,setState] = useState(0);
  console.log("App()");
  const typedEl = useRef(null);
  // console.log(typedEl);
  const counter = useRef(0);
  console.log(counter.current);
  
  useEffect(()=>{

    console.log("Side effect");

    let typed;

    if ( counter.current === 0 ){
      // Let's skip the first render:
      counter.current = 1;

    } else {

      console.log("Side effect::code");
      // https://github.com/mattboldt/typed.js?tab=readme-ov-file#reactjs-usage
      typed = new Typed(typedEl.current, {
        strings: [
          'Welcome to <strong>React</strong>',
          'Sentence Two',
          'Another sentence'
        ],
        typeSpeed: 50,
      });
      return function cleanUp(){
        typed.destroy();
      }

    }

  });

  return (
    <div>
      <h1>App</h1> 
      <button onClick={()=> setState(state+1)}>Update State</button>
      <h2>Awesome React App</h2>
      <span id="typed" ref={typedEl}></span>
    </div>
  )
}

export default App
