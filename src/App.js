import React, { Component } from 'react';
import axios from "axios";

    class App extends Component {
      
      state = {
        issues: []
      }
      
      componentDidMount() {
        axios
          .get("https://still-ridge-83597.herokuapp.com/users.json")
          .then(response => {
    
            // create an array of contacts only with relevant data
            const newUsers = response.data.map(c => {
              return {
                id: c.id,
                name: c.name
              };
            });
    
            // create a new "State" object without mutating 
            // the original State object. 
            const newState = Object.assign({}, this.state, {
              contacts: newUsers
            });
    
            // store the new state object in the component's state
            this.setState(newState);
          })
          .catch(error => console.log(error));
     }
      
    render() {
      return (
        <div className="App">

          <UsersList issues={this.state.issues} />
        </div>
      );
    }
  }

  export default App;
