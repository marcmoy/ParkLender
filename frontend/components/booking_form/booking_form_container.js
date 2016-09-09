import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { submitBooking, removeBooking } from '../../actions/booking_actions';

const mapStateToProps = state => ({
  initialPrice: state.filter,
  currentUser: state.session.currentUser,
  spots: state.spots,
  bookings: state.bookings
});

const mapDispatchToProps = dispatch => ({
 submitBooking: (booking, success) => dispatch(submitBooking(booking, success)),
 removeBooking: (booking, success) => dispatch(removeBooking(booking, success))
});

const BookingFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);

export default BookingFormContainer;
