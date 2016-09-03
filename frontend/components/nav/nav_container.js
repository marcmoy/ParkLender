import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  whereTo: state.whereTo.whereTo
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
