import React from 'react';
import './App.css';

/* You have to use `className` not `class` to add the id, because we are in JavaScript. Not HTML. */
function Tweet(props){
    return (
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <h3>Number of likes</h3>
        </div>
    );
}

export default Tweet;