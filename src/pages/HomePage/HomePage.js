import React, { PropTypes } from "react";
import DocumentTitle from "react-document-title";
import { Link } from "react-router";

import Hello from "components/Hello/Hello";
import Logo from "components/Logo/Logo";

import fa from "font-awesome/css/font-awesome.css";
import styles from "./HomePage.sass";

class HomePage extends React.Component {
  static propTypes = {
    initialName: PropTypes.string,
  };

  static defaultProps = {
    initialName: "World",
  };

  state = {
    name: this.props.initialName,
  };

  onNameChange(event) {
    this.setState({name: event.currentTarget.value});
  }

  render() {
    return (
      <DocumentTitle title="MFE">
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
            onChange={::this.onNameChange} />
          <hr />
          <Link to="/photos">Photos</Link>
        </div>
      </DocumentTitle>
    );
  }
}

export default HomePage;
