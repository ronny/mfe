import React, { PropTypes } from "react";

import styles from "./Hello.sass";

class Hello extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };
  static defaultProps = {
    name: "World"
  };

  render() {
    return (
      <p className={styles.hello}>
        <span className={styles.greeting}>Hello,</span>
        <span className={styles.name}>{this.props.name}</span>
        <span className={styles.exclamation}>!</span>
      </p>
    );
  }
}

export default Hello;
