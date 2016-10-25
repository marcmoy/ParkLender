import { connect } from 'react-redux';
import Settings from './settings';
// actions
import { receiveUpdatedUser } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveUpdatedUser: user => dispatch(receiveUpdatedUser(user))
});

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);

export default SettingsContainer;
