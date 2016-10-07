import { connect } from 'react-redux';
import Listing from './listing';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
});

const ListingContainer = connect(
)(Listing);

export default ListingContainer;
