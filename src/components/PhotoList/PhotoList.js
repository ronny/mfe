import React from "react";
import styles from "./PhotoList.sass";
import PhotoListItem from "components/PhotoListItem/PhotoListItem";

class PhotoList extends React.Component {
  render() {
    const { photos } = this.props;

    if (photos.length > 0) {
      return (
        <ul className={styles.list}>
          {photos.map(photo => {
            return <PhotoListItem photo={photo} key={photo.id} />;
          })}
        </ul>
      );
    } else {
      return (
        <p>No photos yet...</p>
      );
    }
  }
}

export default PhotoList;
