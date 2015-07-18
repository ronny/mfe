import React, { PropTypes } from "react";
import styles from "./PhotoListItem.sass";

class PhotoListItem extends React.Component {
  static propTypes = {
    photo: PropTypes.object.isRequired,
  }

  render() {
    const { photo } = this.props;

    // TODO: in a real app we probably don't want to use the
    // raw photo object returned from the API directly but maybe
    // wrapped in a model or something.

    // No idea why 500px calls it "url" when it's just path.
    const photoPageUrl = `https://500px.com${photo.url}`;

    return (
      <li className={styles.listItem} key={photo.id}>
        <a href={photoPageUrl} className={styles.link}>
          <img src={photo.image_url} className={styles.image} />
        </a>
      </li>
    );
  }
}

export default PhotoListItem;
