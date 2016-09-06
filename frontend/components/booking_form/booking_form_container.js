import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { createBooking } from '../../actions/booking_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createBooking: (request) => dispatch(request)
});

const BookingFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);

export default BookingFormContainer;
