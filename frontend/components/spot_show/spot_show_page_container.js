import { connect } from 'react-redux';
import SpotShowPage from './spot_show_page';
import { requestSpot } from '../../actions/spots_actions';

const mapStateToProps = state => ({
  spots: state.spots
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestSpot: (id) => dispatch(requestSpot(id))
});

const SpotShowPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotShowPage);

export default SpotShowPageContainer;
