import React from 'react';
import './App.css';

/* You have to use `className` not `class` to add the id, because we are in JavaScript. Not HTML. */
function Tweet(){
    return (
        <div className="tweet">
            <h3>Name</h3>
            <p>This is a random tweet</p>
            <h3>Number of likes</h3>
        </div>
    );
}

export default Tweet;