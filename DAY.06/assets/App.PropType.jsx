// prop-types setup: Step 1) npm install and import:
import PropTypes from "prop-types";
// PropTypes is mainly used with .jsx projects
// TypeScript projects using .tsx, have their own type checking

// ESLint: 'title' is missing in props validationeslintreact/prop-types
function Widget(props){
  
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <p>Likes: {props.likes}</p>
    </div>
  );
}
// prop-types setup: Step 2) define propTypes
Widget.propTypes = {
  // prop-types setup: Step 3) declare prop names
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  likes: PropTypes.number
}

function Counter(props){
  return <p>{props.counter}</p>
}
Counter.propTypes = {
  counter: PropTypes.number
}

function App() {
  return (
    <>
      <div>
        <h1>App</h1> 
        <Widget title="A" subtitle="A1" likes={2} />
        <Widget title="B" likes={1} />
      </div>
    </>
  )
}

export default App