import React, { PropTypes } from "react";
import Hello from "../Hello/Hello";
import DocumentTitle from "react-document-title";

class App extends React.Component {
  static propTypes = {
    initialName: PropTypes.string,
  };

  static defaultProps = {
    initialName: "World",
  };

  static displayName = "App";

  state = {
    name: this.props.initialName,
  };

  onNameChange(event) {
    this.setState({name: event.currentTarget.value});
  }

  render() {
    return (
      <DocumentTitle title="Sample App">
        <div className="App">
          <Hello name={this.state.name} />
          <hr />
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onNameChange.bind(this)} />
        </div>
      </DocumentTitle>
    );
  }
}

export default App;
