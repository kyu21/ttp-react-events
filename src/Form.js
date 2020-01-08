import React, { Component } from "react";
import Info from "./Info";
import Input from "./Input";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      showInput: false
    };
  }

  updateName = (firstName, lastName) => {
    this.setState({ firstName: firstName, lastName: lastName });
  };

  setInput = input => {
    this.setState({ showInput: input });
  };

  render() {
    const { firstName, lastName, showInput } = this.state;
    let display;

    if (showInput) {
      display = (
        <Input
          firstName={firstName}
          lastName={lastName}
          updateName={this.updateName}
          setInput={this.setInput}
        ></Input>
      );
    } else {
      display = (
        <Info
          firstName={firstName}
          lastName={lastName}
          setInput={this.setInput}
        ></Info>
      );
    }
    return <div>{display}</div>;
  }
}

export default Form;
