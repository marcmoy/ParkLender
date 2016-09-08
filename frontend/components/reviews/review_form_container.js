import { connect } from 'react-redux';
import ReviewForm from './review_form';
import {
  receiveSpotReview,
  createSpotReview,
  receiveUserReview,
  createUserReview } from '../../actions/review_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createSpotReview: (review, success) => dispatch(createSpotReview(review, success)),
  createUserReview: (review, success) => dispatch(createUserReview(review, success))
});

const ReviewFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);

export default ReviewFormContainer;
