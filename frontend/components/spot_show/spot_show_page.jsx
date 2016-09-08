import React from 'react';
import SpotHostDetails from './spot_host_details';
import BookingFormContainer from '../booking_form/booking_form_container';
import SpotShowDetails from './spot_show_details';
import { addSpinner, removeSpinner } from '../../util/loader';
import ReviewIndexContainer from '../reviews/review_index_container';

const _nullSpot = {
  id: null,
  photoUrl: "",
  host: {
    name: "",
    thumbnail: ""
  },
  rating: 0,
  prices: {},
  vehicles: [],
  reviews: {}
};

class SpotShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spot: _nullSpot };
  }

  render() {

    const spotId = this.props.params.spotId;
    let spotObj = this.props.spots[spotId] || _nullSpot;
    let reviews = this.props.reviews || {};

    return(
      <div className="spot-show-page clearfix">
        <div className="spot-image-container">
          <div className="spot-show-image-overflow">
            <img src={spotObj.photoUrl} className="spot-image"/>
            <button>Enlarge Photo</button>
          </div>
        </div>
        <div className="spot-host-details clearfix">
          <SpotHostDetails spot={spotObj} />
          <BookingFormContainer spot={spotObj}/>
        </div>
        <div className="spot-info-container clearfix">
          <SpotShowDetails spot={spotObj} />
        </div>
        <ReviewIndexContainer spot={spotObj} />
      </div>
    );
  }
}

export default SpotShowPage;
