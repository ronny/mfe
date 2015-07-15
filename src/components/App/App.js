import React, { PropTypes } from "react";
import DocumentTitle from "react-document-title";
import Hello from "../Hello/Hello";
import Logo from "../Logo/Logo";
import styles from "./App.sass";
import fa from "font-awesome/css/font-awesome.css";

class App extends React.Component {
  static propTypes = {
    initialName: PropTypes.string,
  };

  static defaultProps = {
    initialName: "World",
  };

  state = {
    name: this.props.initialName,
  };

  onNameChange = (event) => {
    this.setState({name: event.currentTarget.value});
  }

  render() {
    return (
      <DocumentTitle title="Sample App">
        <div className={styles.container}>
          <Logo />
          <Hello name={this.state.name} />
          <hr />
          <label className={styles.label}>
            <i className={`${fa.fa} ${fa["fa-user"]} ${styles.nameIcon}`} />
            <span className={styles.labelText}>Name:</span>
          </label>
          <input
            className={styles.nameField}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onNameChange} />
        </div>
      </DocumentTitle>
    );
  }
}

export default App;
