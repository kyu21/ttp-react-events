import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
      </div>
    );
  }
}

export default User;
