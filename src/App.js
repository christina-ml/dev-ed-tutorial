/* Create a component - A file that holds all the logic. Html, styling, logic. */
import React from 'react';
import Tweet from './Tweet';

/*
Create component by writing a function
*/
function App(){
  return(
    <div className="app">
      <Tweet name="Dev ED" message="This is a random tweet"/>
      <Tweet name="John Snow" message="I am the true king" />
      <Tweet name="Traversy Media" message="700k my dudes" />
      <Tweet name="Mosh" message="My new course is available" />
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