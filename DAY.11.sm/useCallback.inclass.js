import React, { useState, useCallback } from "react";
console.clear();

function Inner(props) {
  console.log("Inner()::render", props.data);
  return (
    <>
      <p>Inner {props.data}</p>
      <button onClick={props.fn}>Silly</button>
    </>
  );
}
const MemoInner = React.memo(Inner);

const fnA = () => 42;
const fnB = () => 42;
// console.log("Are they true?", fnA === fnB, [1] === [1], {} === {} );
const fnC = fnB;
// console.log("fnC === fnB", fnB === fnC);

const sillyFn = () => {
  console.log("Silly!");
};

export default function App() {
  console.log("App()::render");
  const [counter, setCounter] = useState(1);
  const [likes, setLikes] = useState(0);

  const sillierFn = () => {
    console.log("Parent Likes: ", likes); // Stale state value
  }; // Re-declared on each render. New Function Object.

  // useCallback( FUNCTION, [DEPENDENCIES] ) => Memoized FUNCTION
  // const memoSillierFn = useCallback(sillierFn, []);
  // const memoSillierFn = useCallback(sillierFn);
  const memoSillierFn = useCallback(sillierFn, [likes]); // useCallback re-executes when [DEPS] values change

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter * 2)}>Update</button>
      <button onClick={() => setLikes(likes + 1)}>Likes {likes}</button>

      {/* A) Will always render as parent Component re-renders */}
      {/* <Inner data="1" fn={sillyFn} /> */}

      {/* B) Will only render once,then stop */}
      {/* PrevPops > "1.2" === NextProps > "1.2" === true */}
      {/* <MemoInner data="1.2" fn={sillyFn} /> */}

      {/* C) Will always render */}
      {/* <MemoInner data="1.3" debug={Math.random()} /> */}

      {/* E) Will always render as sillierFn is redeclared on each render */}
      {/* <MemoInner data="3" fn={sillierFn} /> */}

      {/* F) Will render only when the dependencies of memoSillierFn change */}
      {/* Watch for stale values when memoSillierFn is not including deps! */}
      <MemoInner data="4" fn={memoSillierFn} />
    </>
  );
}
