import React from "react";

if (process.env.BROWSER) {
  require("./Hello.sass");
}

class Hello extends React.Component {
  render() {
    return (
      <div className="Hello">
        <p>Hello, {this.props.name}!</p>
      </div>
    );
  }
}

export default Hello;
