import { connect } from 'react-redux';
import SpotMap from './map';
// Actions
import { updateMap } from '../../actions/map_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  mapOpts: state.mapOpts,
  spots: state.spots
});

const mapDispatchToProps = dispatch => ({
  updateMap: (center, zoom) => dispatch(updateMap(center, zoom)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotMap);

export default MapContainer;
