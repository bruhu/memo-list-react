// rce -> shortcut for this
import React, { Component } from "react";
import "./styles/ItemsList.css";

export class ItemsList extends Component {
  render() {
    return (
      <ul>
        {/* we need to use a key for a list of child elements inside a parent*/}
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default ItemsList;
