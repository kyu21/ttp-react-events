import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFolders: true
    };
  }

  handleToggle = () => {
    this.setState({ showFolders: !this.state.showFolders });
  };

  render() {
    let display;
    if (this.state.showFolders) {
      display = (
        <ul>
          <li>File1</li>
          <li>File2</li>
          <li>File3</li>
        </ul>
      );
    }

    return (
      <div className="Home">
        <h1>Home</h1>
        {display}
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    );
  }
}

export default Home;
