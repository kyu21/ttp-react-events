import React, { Component } from "react";

class Info extends Component {
  render() {
    const { firstName, lastName, setInput } = this.props;
    return (
      <div>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <button onClick={() => setInput(true)}>Edit</button>
      </div>
    );
  }
}

export default Info;
