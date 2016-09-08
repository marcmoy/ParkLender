import { connect } from 'react-redux';
import SpotIndex from './spot_index';
import { receiveSpot } from '../../actions/spots_actions';

const mapStateToProps = state => ({
  spots: state.spots
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

const SpotIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotIndex);

export default SpotIndexContainer;
