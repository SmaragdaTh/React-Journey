// useRef => React Hook
import { useRef, useState } from "react";

// state === 1
// analyticsValue = { current: 12 }

const premiumCount = 1000;
const goldLimit = 105;
let poorAnalyticsValue = 0;

let poorValue = 0;

function Widget(){

  const richValue = useRef(0);
  
  return <div onClick={()=>{
    console.log("Widget click", poorValue, richValue);
    poorValue += 1;
    richValue.current += 1;
    console.log("Widget click after", poorValue, richValue);
  }}>Widget {poorValue} / {richValue.current}</div>
}

function App() {

  console.log("App()");

  const [ state, setState ] = useState(100); // One time, on initial mount
  const analyticsValue = useRef(10); // Define initial value
  // Rule: to access the value of a Ref, we must use the .current property
  // const analyticsValue = { current: 10 }
  // typeof analyticsValue === "object"
  // Ref .current is a Read + Write property
  // Changing the Ref values does NOT trigger a re-render

  // DERIVED STATE: 
  let percentage = Math.round(( state / premiumCount ) * 100);
  percentage += "%";
  const isGoldAccount = state > goldLimit;

  console.log(
    "State:", state,
    "Ref:", analyticsValue.current,
    "Var:", poorAnalyticsValue
  )

  return (
    <>
      <div>
        <h1>App {state}</h1> 
        <Widget />
        <Widget />
        <Widget />
        <p>You have reached: {percentage}</p>
        { isGoldAccount && <p>You became gold! Congrats!</p>}
        {/* <p>Ref value: {analyticsValue.current}</p> */}
        <button onClick={()=> 
          setState( state + 1)
        }>
          Update State
        </button>
        <button onClick={()=>{
          console.log("Ref click()");
          poorAnalyticsValue = poorAnalyticsValue + 1;
          analyticsValue.current = analyticsValue.current + 1;
          console.log("Ref click() after",
            poorAnalyticsValue,
            analyticsValue.current,
          );
          
        }}>
          Update Ref
        </button>
      </div>
    </>
  )
}

export default App
