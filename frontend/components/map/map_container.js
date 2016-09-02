import { connect } from 'react-redux';
import SpotMap from './spot_map';
// Actions
import { updateMap } from '../../actions/map_actions';

const mapStateToProps = state => ({
  mapOpts: state.mapOpts
});

const mapDispatchToProps = dispatch => ({
  updateMap: (center, zoom) => dispatch(updateMap(center, zoom))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotMap);
