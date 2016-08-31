import { connect } from 'react-router';
import HomePage from './home';

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch, ownProps) => {
};

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomePageContainer;
