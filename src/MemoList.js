import React, { Component } from "react";
import "./MemoList.css";
import ItemsList from "./ItemsList";

export class MemoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // what we type in the input field will be stored in text
      text: "",
      // items is where we will store what is written once we click the add button
      items: []
    };
  }
  // handleChange is now a new method of this class
  handleChange = event => {
    console.log(event.target.value);
    this.setState({ text: event.target.value });
  };

  handleSubmit = event => {
    console.log("Submitting the form");
    // preventDefault will stop the constant reload
    event.preventDefault();

    const newItem = {
      // built-in object of JS date now - will write a unique id
      id: Date.now(),
      //because we saved the text from the input in the state
      text: this.state.text
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ""
    }));
    // callback function ttht takes the state, does something for the items and then we empty the state (w/ text:'') to prevent saving something multiple times - reset what we typed
    //setState is not really enough in this case bc we want to concatenate stuff
  };

  render() {
    return (
      <div>
        <h3>My plan:</h3>
        {/* new props in itemslist that will be the props so we pass them from component to component */}
        <ItemsList items={this.state.items} />
        {/* onSubmit will trigger a function */}
        <form onSubmit={this.handleSubmit}>
          {/* arrow function in onChange determines that console log will only be triggered when this component experiences a change */}
          {/* we can create a function directly here to define what happens when we type */}
          <input
            type="text"
            id="listItem"
            onChange={this.handleChange}
            value={this.state.text}
          />
          {/* we put value in input so it saves it to the state - the value will always represent the state - I type something, it saves to the state and then it is represented in the value here, it is like a loop */}
          <button>
            Add #{this.state.items.length + 1}
            {/* We want to count how many items we have - +1 is there to add the next one and not the ones we have */}
          </button>
        </form>
      </div>
    );
  }
}

export default MemoList;
