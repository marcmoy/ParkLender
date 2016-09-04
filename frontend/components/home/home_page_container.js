import { connect } from 'react-redux';
import HomePage from './home_page';

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch, ownProps) => {
};

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomePageContainer;
