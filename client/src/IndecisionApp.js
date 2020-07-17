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
  

};
 


    render() { 

      var app = {
        title: "Indecision App",
        subTitle: "Put your life in the hands of a computer",
        options: ["One", "Two"]
        
      }

      var listItems = {
        itemOne: "One",
        itemTwo: "Two",
        itemThree: "Three"
      };
        var template = (
        <div>
          <h1>{app.title}</h1>
          {app.subTitle && <p>{app.subTitle}</p>}
          <p>{app.options.length > 0 ? "Here are your options" : "You don't have any Options"}</p>
          
          <ol>
            <li className = "listItem">Item One</li>
            <li className = "listItem">Item Two</li>
          </ol>
        </div> // This is a Wrapper div  
        );

        var user = {
          name: "Jason",
          age: 35,
          location: "San Fracisco"
        };
        // var userName = "Chris Neitro";
        // var userAge = 38;
        // var userLocation = "San Francisco";

       function getLocation(location) {
          if (location){
            return <p>Location: {location}</p>;
          }else{
            throw Error("Undefined")
          }
        };

        var templateTwo = (
          <div>
            <h1>{user.name ? user.name : "Anon"}</h1>
            {(user.age >= 18) && <p>Age:{user.age}</p>}
           
            {getLocation(user.location.toUpperCase())}
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

