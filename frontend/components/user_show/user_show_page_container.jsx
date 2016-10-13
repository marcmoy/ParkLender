import { connect } from 'react-redux';
import UserShowPage from './user_show_page';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

const UserShowPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShowPage);

export default UserShowPageContainer;
