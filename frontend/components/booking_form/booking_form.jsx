import React from 'react';
import { DateField } from 'react-date-picker';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form className="booking-form clearfix">
        <div className="booking-price">
          <span className="price">$10</span>
          <span className="price-type">per hour</span>
        </div>

        <div className="form-inline">
          <div className="form-group">
            <label htmlFor="start-date">Start Date</label>
            <DateField id="start-date" dateFormat="MM-DD-YYYY"/>
            <label htmlFor="end-date">End Date</label>
            <DateField id="end-date" dateFormat="MM-DD-YYYY"/>
          </div>
        </div>

        <div className="form-inline">
          <div className="form-group">
            <label htmlFor="start-date">Start Time</label>
            <input id="start-date" />
            <label htmlFor="end-date">End Time</label>
            <input id="end-date" />
          </div>
        </div>

        <button>Request to book</button>
      </form>
    );
  }
}

export default BookingForm;
