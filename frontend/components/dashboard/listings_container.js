import { connect } from 'react-redux';
import Listings from './listings';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

const ListingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Listings);

export default ListingsContainer;
