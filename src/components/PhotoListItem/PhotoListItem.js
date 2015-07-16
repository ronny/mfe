import React from "react";
import styles from "./PhotoListItem.sass";

class PhotoListItem extends React.Component {
  render() {
    const { photo } = this.props;

    return (
      <li className={styles.listItem}>
        <img src={photo.image_url} className={styles.image} />
      </li>
    );
  }
}

export default PhotoListItem;
