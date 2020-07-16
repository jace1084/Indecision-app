import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import './IndecisionApp.css';


class IndecisionApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
  }
console.log("IndecisionApp is running");

}

    render() { 

      var app = {
        title: "Indecision App",
        subTitle: "Put your life in the hands of a computer"
      }

      var listItems = {
        itemOne: "One",
        itemTwo: "Two",
        itemThree: "Three"
      };
        var template = (
        <div>
          <h1>{app.title}</h1>
          <p>{app.subTitle}</p>
          <ol>
            <li className = "listItem">{listItems.itemOne}</li>
            <li className = "listItem">{listItems.itemTwo}</li>
            <li className = "listItem">{listItems.itemThree}</li>
          </ol>
        </div> // This is a Wrapper div  
        );

        var user = {
          name: "Chris Neitro",
          age: 38,
          location: "San Fracisco"
        };
        // var userName = "Chris Neitro";
        // var userAge = 38;
        // var userLocation = "San Francisco";

        var templateTwo = (
          <div>
            <h1>{user.name.toUpperCase() + "!"}</h1>
            <p>Age:{user.age}</p>
            <p>Location: {user.location.toUpperCase()}</p>
          </div>
        );

  return (
    
    <div className="App">
        <div>{template}</div>
      
    </div>
  )
}
}


export default IndecisionApp;

