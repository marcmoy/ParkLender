import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import {
  receiveSpotReview,
  createSpotReview,
  receiveUserReview,
  createUserReview } from '../../actions/review_actions';

const mapStateToProps = state => ({
  reviews: state.reviews,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createSpotReview: review => dispatch(createSpotReview(review)),
  createUserReview: review => dispatch(createUserReview(review))
});

const ReviewIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);

export default ReviewIndexContainer;
