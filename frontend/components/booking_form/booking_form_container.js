import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { requestBooking } from '../../actions/booking_actions';

const mapStateToProps = state => ({
  initialPrice: state.filter,
  currentUser: state.session.currentUser,
  spots: state.spots
});

const mapDispatchToProps = dispatch => ({
  requestBooking: (req, suc) => dispatch(requestBooking(req,suc))
});

const BookingFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);

export default BookingFormContainer;
