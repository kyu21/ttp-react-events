import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.firstName,
      lastName: props.lastName
    };
  }

  updateFirstName = e => {
    this.setState({ firstName: e.target.value });
  };

  updateLastName = e => {
    this.setState({ lastName: e.target.value });
  };

  handleSubmit = () => {
    const { updateName, setInput } = this.props;
    const { firstName, lastName } = this.state;
    updateName(firstName, lastName);
    setInput(false);
  };

  handleCancel = () => {
    this.props.setInput(false);
  };

  render() {
    const { firstName, lastName } = this.state;
    return (
      <div>
        <form>
          <p>First Name:</p>
          <input
            name="firstName"
            value={firstName}
            onChange={this.updateFirstName}
          ></input>
          <p>Last Name:</p>
          <input
            name="lastName"
            value={lastName}
            onChange={this.updateLastName}
          ></input>
          <br></br>
          <br></br>
          <button onClick={this.handleSubmit}>Submit</button>
          <button onClick={this.handleCancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default Input;
