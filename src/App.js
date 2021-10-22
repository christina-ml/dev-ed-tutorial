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
 /*
 - This is where the API call would go, but we're not going to do that.
 - Creating an array of objects. (Imagine that you would get this from an API)
 */
  const [users, setUsers] = useState([
    { name: "Ed", message: "Hello there" },
    { name: "John", message: "I am John Snow" },
    { name: "traversy", message: "I am awesome" },
  ]);


  /* Can add a ternary operator in the className */
  /* Map over the `users` with JSX, so use parentheses instead of curly brackets */
  return(
    <div className="app">
      {users.map(user => (
        <Tweet />
      ))}
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