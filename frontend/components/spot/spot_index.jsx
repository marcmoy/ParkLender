import React from 'react';
import SpotIndexItem from './spot_index_item';
import { isEmpty } from 'lodash';
import { addEmptyMessage } from '../../util/loader';

class SpotIndex extends React.Component {

  constructor(props) {
    super(props);
    this.initial = true;
  }

  componentDidMount() {
    if (isEmpty(this.props.spots)) addEmptyMessage();
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
      <aside className='spot-index-container'>
        {spotItems}
        <div className="load-message"></div>
      </aside>
    );
  }
}

export default SpotIndex;
