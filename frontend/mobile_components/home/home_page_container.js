import { connect } from 'react-redux';
import HomePage from './home_page';
import { updateMap } from '../../actions/map_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  updateMap: (center, zoom) => dispatch(updateMap(center,zoom))
});

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomePageContainer;
