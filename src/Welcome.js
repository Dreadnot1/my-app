import React from 'react';

//Defines a functional component that takes a props object
function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>
    //returns a jsx element to display a personalized greeting
}

export default Welcome;