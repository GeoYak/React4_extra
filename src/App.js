import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      unreadMessages: [
        "Call your mom!",
        "New spam email available. All links are definitely safe to click."
      ],
      isLoggedIn: false
    };
  }

  handleLoginToggle = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn
    }));
  };

  render() {
    return (
      <div>
        {this.state.unreadMessages.length > 0 && (
          <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
        )}
        {this.state.isLoggedIn ? (
          <p>Logged in</p>
        ) : (
          <p>Logged out</p>
        )}
        <button onClick={this.handleLoginToggle}>
          {this.state.isLoggedIn ? "LOG OUT" : "LOG IN"}
        </button>
        {!this.state.isLoggedIn && (
          <form>
            <label>
              Username:
              <input type="text" />
            </label>
            <br />
            <label>
              Password:
              <input type="password" />
            </label>
            <br />
            
          </form>
          )}
      </div>
    );
  }
}

export default App;



