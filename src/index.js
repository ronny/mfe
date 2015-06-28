import React from "react";

class Index extends React.Component {
  render() {
    return <div className="index">
      <p>Hello, {this.props.name}!</p>
    </div>;
  }
}

export default Index;
