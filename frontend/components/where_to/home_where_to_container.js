import { connect } from 'react-redux';
import HomeWhereTo from './home_where_to';
// Actions
import { updateMap } from '../../actions/map_actions';

const mapStateToProps = state => ({
  mapOpts: state.mapOpts
});

const mapDispatchToProps = dispatch => ({
  updateMap: (center, zoom) => dispatch(updateMap(center, zoom))
});

const HomeWhereToContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeWhereTo);

export default HomeWhereToContainer;
