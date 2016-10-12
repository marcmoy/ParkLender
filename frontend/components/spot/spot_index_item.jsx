import React from 'react';
import { withRouter } from 'react-router';
import {
  SpotPhoto, Price, HostPhoto,
  Title, Reviews, Rating
} from './spot_index_item_details';

class SpotIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.openShowPage = this.openShowPage.bind(this);
  }

  openShowPage(e) {
    e.preventDefault();
    this.props.router.push(`/spots/${this.props.spot.id}`);
  }

  render() {
    return(
      <div className='spot-index-item clearfix col-lg-6 col-md-6 col-sm-6 col-xs-12'
        id={`spot${this.props.spot.id}`}>
        <a onClick={this.openShowPage} className='listing-photo-container'>
          <SpotPhoto spot={this.props.spot} />
          <HostPhoto host={this.props.spot.host} />
          <Price prices={this.props.spot.prices} />
        </a>

        <div className='spot-caption-container clearfix text-left'>
          <Title title={this.props.spot.title} /><br />
          <Reviews numReviews={this.props.spot.numReviews} />
          <Rating rating={this.props.spot.rating} />
        </div>
      </div>
    );
  }
}

export default withRouter(SpotIndexItem);
