import { connect } from 'react-redux';
import SpotShowPage from './spot_show_page';

const mapStateToProps = state => ({
  spots: state.spots,
  reviews: state.reviews
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

const SpotShowPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotShowPage);

export default SpotShowPageContainer;
