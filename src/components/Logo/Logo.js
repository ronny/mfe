import React from "react";

import image from "./logo.png";
import styles from "./Logo.sass";

class Logo extends React.Component {
  render() {
    return (
      <img className={styles.image} src={image} />
    );
  }
}

export default Logo;
