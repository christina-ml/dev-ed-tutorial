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
    { name: "Ramsay Bolton", message: "If you think this has a happy ending you haven't been paying attention." },
    { name: "Tywin Lannister", message: "Any man who must say 'I am the king' is no true king." },
    { name: "Daenerys Targaryen", message: "All men must die, but we are not men." },
  ]);

  /*
  - Map over the `users` with JSX, so use parentheses instead of curly brackets
  - Can set a class to the Tweet, and get the rest of the info from the State. such as `user.name`
  */
  return(
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
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
