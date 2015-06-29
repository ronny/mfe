import React, { PropTypes } from "react";
import Hello from "./components/Hello";
import DocumentTitle from "react-document-title";
import { RouteHandler } from "react-router";

class App {
  static propTypes = {
    params: PropTypes.object.isRequired,
    query: PropTypes.object.isRequired,
  };

  render() {
    return (
      <DocumentTitle title="Sample App">
        <div className="App">
          <Hello name="World" />
          <hr />
          <RouteHandler {...this.props} />
        </div>
      </DocumentTitle>
    );
  }
}

export default App;
