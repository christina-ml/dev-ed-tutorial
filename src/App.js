/* Create a component - A file that holds all the logic. Html, styling, logic. */
import React from 'react';
import Hello from './sayHello';

/*
Create component by writing a function
*/
function App(){
  return(
    <div>
      <h1>This is the app component</h1>
      <Hello />
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