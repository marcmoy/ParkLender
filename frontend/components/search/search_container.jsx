import { connect } from 'react-redux';
import Search from './search';
// Actions
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  spots: state.spots,
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
