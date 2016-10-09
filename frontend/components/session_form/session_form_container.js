import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, logout, signup } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.formType;
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: (user, success) => dispatch(processForm(user, success)),
    formType
  };
};

const SessionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

export default SessionContainer;
