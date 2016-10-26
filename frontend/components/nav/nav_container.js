import { connect } from 'react-redux';
import { logout, emptyErrors } from '../../actions/session_actions';
import { updateMap } from '../../actions/map_actions';
import NavBar from './navbar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  whereTo: state.whereTo.whereTo,
  splash: state.splash.splash
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  emptyErrors: () => dispatch(emptyErrors()),
  updateMap: (center, zoom) => dispatch(updateMap(center,zoom))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
