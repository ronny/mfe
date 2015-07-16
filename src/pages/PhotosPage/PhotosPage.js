import React from "react";
import DocumentTitle from "react-document-title";
import { connect } from "react-redux";
import { Link } from "react-router";
import { bindActionCreators } from "redux";
import PhotoActions from "actions/PhotoActions";
import PhotoList from "components/PhotoList/PhotoList";
// import fetchOnUpdate from "decorators/fetchOnUpdate";

@connect(state => {
  console.log("connect: state=", state);
  return {
    photos: state.photos,
  };
})
class PhotosPage extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    const actions = bindActionCreators(PhotoActions, dispatch);
    console.log("componentWillMount");
    actions.getNextPage();
  }

  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate", prevProps);
  }

  render() {
    const { photos } = this.props;

    return (
      <DocumentTitle title="Photos from 500px">
        <div>
          <h1>Photos</h1>
          <Link to="/">Home</Link>

          <PhotoList photos={photos} />
        </div>
      </DocumentTitle>
    );
  }
}

export default PhotosPage;
