import React, { Component } from 'react';
import axios from "axios";
import Users from './components/users';
import fetch from 'isomorphic-fetch'

    class App extends Component {
      
      state = {
        users: []
      }
     
     componentDidMount() {
        fetch('https://still-ridge-83597.herokuapp.com/users.json')
        .then(res => res.json())
        .then((data) => {
          this.setState({ users: data })
        })
        .catch(console.log)
      }
      
    render() {
        return (
          <Users users={this.state.users} />
        )
      }
  }

  export default App
