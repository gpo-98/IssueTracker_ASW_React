import React, { Component } from 'react';
import axios from "axios";
//import Users from './components/users';
import Issues from './components/issues';
import fetch from 'isomorphic-fetch'

    class App extends Component {
      
      /*state = {
        users: []
      }
     
     componentDidMount() {
        fetch('https://still-ridge-83597.herokuapp.com/users.json')
        .then(res => res.json())
        .then((data) => {
          this.setState({ users: data })
        })
        .catch(console.log)
      }*/
      
      state = {
        issues: []
      }
     
      
      componentDidMount() {
        fetch("https://still-ridge-83597.herokuapp.com/microposts.json", {
          method: 'GET',
          headers: {  
            'X-Mashape-Key': 'required',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          }
        })   
        .then(response => response.json())
        .then((responseData) => {
          this.setState({ issues: responseData});
        })
        .catch(console.log);
      }
      
    render() {
        return (
          //<Users users={this.state.users} />
          <Issues issues={this.state.issues} />
        )
      }
  }

  export default App
