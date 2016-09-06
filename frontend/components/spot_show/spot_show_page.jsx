import React from 'react';
import SpotHostDetails from './spot_host_details';
import BookingFormContainer from '../booking_form/booking_form_container';

const defaultSpot = {
  host: {thumbnail: "", name: ""},
  photoUrl: "",
  rating: 5,
  numReviews: 0
};

class SpotShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spot: defaultSpot };
  }

  // componentDidMount() {
  //   const spotId = parseInt(this.props.params.id);
  //   this.props.requestSpot(spotId);
  // }

  render() {

    let spots = this.props.spots;
    let spotObj;

    // for (let spot in spots) {
    //   if (spot) {
    //     spotObj = this.props.spots[spot];
    //   }
    // }
    spotObj = this.props.spots["27"];

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
