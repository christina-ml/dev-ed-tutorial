/* Create a component - A file that holds all the logic. Html, styling, logic. */
import React, {useState} from 'react';
import Tweet from './Tweet';

/*
Create component by writing a function
*/
function App(){
  /*
  - Based on our state, our HTML is going to change.
  - If we want to get data from an API, we want to save that in a state.
  */
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  /* Add an object here of all the things the user has */
  const [user, setUser] = useState({
    name: 'Ed',
    age: 35,
    posts: ['my first post', 'my lovely summer']
  });

  const increment = () => {
    setCount(count + 1);
  }

  return(
    <div className="app">
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
    </div>
  )
}

export default App;

/*
- Create a component
- Export it
- in our index.js we have import React from 'react'; 3.4K again
- and a import ReactDOM, and a ReactDOM.render(<App />) compoment; and then getElementById on 'root'
This isn't HTML, it's JSX which is essentially just JavaScript
*/


/*
Deleted the Tweet, and will get back to it later.

      <Tweet name="Dev ED" message="This is a random tweet"/>
      <Tweet name="John Snow" message="I am the true king" />
      <Tweet name="Traversy Media" message="700k my dudes" />
      <Tweet name="Mosh" message="My new course is available" />
*/