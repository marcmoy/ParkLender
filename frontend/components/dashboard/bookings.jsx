import React from 'react';
import { withRouter } from 'react-router';
import Tabs from './tabs';
import BookingItem from './booking_item';

class Bookings extends React.Component {
  constructor(props) {
    super(props);
  }

  renderBookings() {

  }

  render() {
    return(
      <div>
        <div className='dashboard-container'>
          <Tabs
            router={this.props.router}
            pathname={this.props.location.pathname}
          />
          <div className='dashboard'>
            <h1>Your Bookings</h1>
            <h2>{this.renderBookings()}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Bookings);
