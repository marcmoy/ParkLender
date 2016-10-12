import React from 'react';
import SpotHostDetails from './spot_host_details';
import BookingFormContainer from '../booking_form/booking_form_container';
import SpotShowDetails from './spot_show_details';
import ReviewIndexContainer from '../reviews/review_index_container';
import Modal from 'react-modal';
import { SpotShowModalStyle } from '../../util/modal_style.js';

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
  reviews: {},
  bookings: {},
  spotReviews: {}
};

class SpotShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spot: _nullSpot, modalOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(e) {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
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
            <Modal isOpen={this.state.modalOpen}
              onRequestClose={this.closeModal} style={SpotShowModalStyle}>
              <img src={spotObj.photoUrl} className="spot-image"/>
            </Modal>
          </div>
        </div>
        <div className="spot-host-details clearfix">
          <button className="view-photo" onClick={this.openModal}>
            View Photo
          </button>
          <SpotHostDetails spot={spotObj} />
          <BookingFormContainer spot={spotObj}/>
        </div>
        <div className="spot-info-container clearfix">
          <SpotShowDetails spot={spotObj} />
        </div>
        <ReviewIndexContainer spotId={spotId} />
      </div>
    );
  }
}

export default SpotShowPage;
