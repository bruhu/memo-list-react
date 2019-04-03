import React, { Component } from "react";
import Logo from "./Logo";
import Title from "./Title";
import MemoList from "./MemoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <Title />
          <MemoList />
        </header>
      </div>
    );
  }
}

export default App;
