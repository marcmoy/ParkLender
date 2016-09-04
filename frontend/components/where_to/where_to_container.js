import { connect } from 'react-redux';
import WhereTo from './where_to';
// Actions
import { updateFilter } from '../../actions/filter_actions';
import { updateMap } from '../../actions/map_actions';

const mapStateToProps = state => ({
  spots: state.spots,
  filter: state.filter,
  mapOpts: state.mapOpts
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  updateMap: (center, zoom) => dispatch(updateMap(center, zoom))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WhereTo);
