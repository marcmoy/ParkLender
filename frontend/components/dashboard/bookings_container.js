import { connect } from 'react-redux';
import Bookings from './bookings';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  bookings: state.bookings
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

const BookingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookings);

export default BookingsContainer;
