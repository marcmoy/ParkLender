import { connect } from 'react-redux';
import Listing from './listing';
import { updateListing } from '../../actions/listing_actions';
import { createSpot } from '../../actions/spots_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  listing: state.listing
});

const mapDispatchToProps = dispatch => ({
  updateListing: listing => dispatch(updateListing(listing)),
  createSpot: (listing, success) => dispatch(createSpot(listing, success))
});

const ListingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Listing);

export default ListingContainer;
