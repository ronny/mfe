import React from "react";
import styles from "./PhotoList.sass";
import PhotoListItem from "components/PhotoListItem/PhotoListItem";

class PhotoList extends React.Component {
  render() {
    const { photos } = this.props;
    console.log("PhotoList: photos", photos);

    if (photos.length) {
      return (
        <ul className={styles.list}>
          {photos.map(photo => (
            <PhotoListItem photo={photo} />
          ))}
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
