import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import {
  receiveSpotReview,
  createSpotReview,
  receiveUserReview,
  createUserReview } from '../../actions/reviews_actions';

const mapStateToProps = state => ({
  reviews: state.reviews
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
