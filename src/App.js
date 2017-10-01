import React, { Component } from "react";
import logo from "./logo.svg";
import Video from "./Video";
import "./App.css";

class App extends Component {
  test() {
    return "World";
  }
  render() {
    const hi = "Hello";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Render prop video player</h1>
        </header>
        <p className="App-intro">
          Testing render props with a video component.
        </p>
        <Video
          renderProp={state => (
            <div>
              <h3>
                Now have access to parent context {hi} {this.test()}
              </h3>
              <div> Current Time: {state.currentTime} </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
