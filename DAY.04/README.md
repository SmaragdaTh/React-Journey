# Day 04

  - **Topics**:
    - Hooks (in a nutshell):
        - Functions that start with use*
        - Can be used (executed) ONLY WITHIN Components OR custom Hooks
        - Were created to give the same power to Functional Components (as Class-based Components)
    - React Component Lifecycle
      - Study the [diagram of the Lifecycle](https://wavez.github.io/react-hooks-lifecycle/)
      - Study [Render & Commit](https://react.dev/learn/render-and-commit) from the docs.
    - `useEffect()`
      - Study: [useEffect @ react.dev](https://react.dev/reference/react/useEffect)
    - Study: [React.Fragments](https://react.dev/reference/react/Fragment)

  **Further study & practice**:

  - Study: `useLayoutEffect()`
    - https://blog.logrocket.com/react-useeffect-vs-uselayouteffect-hooks-examples/
    - https://www.youtube.com/watch?v=wU57kvYOxT4

  - Practice: see if you can use one of these APIs to fetch some book data using `useEffect` and display them in your Book React app.
    - https://isbndb.com/blog/book-api/

## References & Resources

  - React rules:
    - When a Component renders, all nested Components are also rendered.
    - React compares previous state with current (new) state and re-renders only when they are different.

  - [JSON Placeholder](https://jsonplaceholder.typicode.com)
    - Sample JSON endpoint: `https://jsonplaceholder.typicode.com/todos/1`
    - Sample JSON endpoint with delay: `https://jsonplaceholder.typicode.com/todos/1?_delay=5000`

  - [Water.css](https://watercss.kognise.dev/)
    - Just add water: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">`