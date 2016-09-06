import React from 'react';
import SpotHostDetails from './spot_host_details';
import BookingFormContainer from '../booking_form/booking_form_container';

class SpotShowPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const spotId = this.props.params.id;
    let spotObj = this.props.spots[spotId];

    return(
      <div className="spot-show-page clearfix">
        <div className="spot-image-container">
          <div className="spot-show-image-overflow">
            <img src={spotObj.photoUrl} className="spot-image"/>
          </div>
        </div>
        <div className="spot-host-details clearfix">
          <SpotHostDetails spot={spotObj} />
          <BookingFormContainer />
        </div>
        <div className="spot-info-container clearfix">
        </div>
      </div>
    );
  }
}

export default SpotShowPage;
