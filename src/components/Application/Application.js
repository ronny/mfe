import React from "react";

class Application extends React.Component {
  render() {
    return (
      <div className="root">
        {this.props.children}
      </div>
    );
  }
}

export default Application;
