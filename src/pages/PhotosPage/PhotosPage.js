import React, { PropTypes } from "react";
import DocumentTitle from "react-document-title";
import { connect } from "react-redux";
import { Link } from "react-router";
import { bindActionCreators } from "redux";
import * as PhotoActions from "actions/FiveHundredPx/PhotoActions";
import PhotoList from "components/PhotoList/PhotoList";

import styles from "./PhotosPage.sass";
import fa from "font-awesome/css/font-awesome.css";

@connect(({ fivehundredpx }) => {
  return {
    loading: fivehundredpx.loading,
    photos: fivehundredpx.photos,
    error: fivehundredpx.error,
  };
})
class PhotosPage extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    photos: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.object,
  };

  loadPhotos(event) {
    event.preventDefault();

    const { error, dispatch } = this.props;
    const actions = bindActionCreators(PhotoActions, dispatch);

    actions.getNextPage();
  }

  render() {
    const { loading, error, photos } = this.props;

    return (
      <DocumentTitle title="Photos from 500px">
        <div>
          <h1>Photos</h1>
          <Link to="/">Home</Link>

          <hr />

          {
            error
              ? <p className={styles.error}>{error.status} - {error.statusText}</p>
              : null
          }

          {
            loading
              ? <p>
                  <i className={`${fa.fa} ${fa["fa-spinner"]} ${fa["fa-spin"]} ${styles.spinner}`} />
                  Loading...
                </p>
              : null
          }

          {
            photos.length == 0 && !loading
            ? <button type="button" onClick={::this.loadPhotos}>
                Load Photos
              </button>
            : null
          }

          <PhotoList photos={photos} />

        </div>
      </DocumentTitle>
    );
  }
}

export default PhotosPage;
