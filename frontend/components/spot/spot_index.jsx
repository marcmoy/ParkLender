import React from 'react';
import SpotIndexItem from './spot_index_item';
import { isEmpty } from 'lodash';
import { addEmptyMessage, removeEmptyMessage } from '../../util/loader';

class SpotIndex extends React.Component {

  constructor(props) {
    super(props);
    this.initial = true;
  }

  componentDidMount() {
    if (isEmpty(this.props.spots)) {
      addEmptyMessage();
    } else {
      removeEmptyMessage();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (isEmpty(nextProps.spots)) {
      addEmptyMessage();
    } else {
      removeEmptyMessage();
    }
  }

  render() {
    let spotItems = [];
    for (let id in this.props.spots) {
      if (id) {
        let spot = this.props.spots[id];
        spotItems.push(<SpotIndexItem spot={spot} key={spot.id}/>);
      }
    }

    return (
      <div className='spot-index-container'>
        <div id='spot-modal'></div>
        <div className='listings container-fluid'>
          <div className="row text-center">
            {spotItems}<div className="empty-message" />
          </div>
        </div>
      </div>
    );
  }
}

export default SpotIndex;
