import React from 'react';
import { DateField } from 'react-date-picker';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 480,
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      errors: []
    };

    this.interval = window.setInterval(() =>{
      let secs = this.state.seconds - 1;
      this.setState({ seconds: secs });
    }, 1000);

    this.timeToString = this.timeToString.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.updateStartDate = this.updateStartDate.bind(this);
    this.updateEndDate = this.updateEndDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputValid = this.inputValid.bind(this);
  }

  timeToString() {
    let seconds = this.state.seconds;
    if (seconds === 0) clearInterval(this.interval);
    let mins = Math.floor(seconds / 60);
    let secs = seconds - ( mins * 60);
    if (secs < 10) secs = `0${secs}`;
    return `0${mins}:${secs}`;
  }

  updateTime(e) {
    let time = e.currentTarget.name;
    let val = e.currentTarget.val;
    this.setState({ time, val });
  }

  updateStartDate(date) {
    this.setState({ startDate: date });
  }

  updateEndDate(date) {
    this.setState({ endDate: date });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  inputValid() {
  }

  render() {
    return(
      <form className="booking-form clearfix" onSubmit={this.handleSubmit}>
        <div className="booking-price">
          <span>$10 per hour</span>
        </div>

        <div className="booking-content">
          <div className="container">
            <div className="row">

              <div className="col-lg-2 col-md-2">
                <label htmlFor="startDate">Start Date</label>
                <DateField id="startDate" dateFormat="MM-DD-YYYY"
                  onChange={this.updateStartDate}/>
                <label htmlFor="startTime">Start Time</label>
                <input className="time" name="startTime" type="time" step="600"/>
              </div>

              <div className="col-lg-2 col-md-2">
                <label htmlFor="endDate">End Date</label>
                <DateField id="endDate" name="endDate" dateFormat="MM-DD-YYYY"
                  onChange={this.updateEndDate}/>
                <label htmlFor="endTime">End Time</label>
                <input className="time" name="endTime" type="time" step="600"/>
              </div>

            </div>
          </div>

          <div className="booking-button-container">
            <button>Request to book</button>
          </div>

          <div className="booking-footer">
            <div className="charged">
              <span className="italicize-text">
                Your credit card will not be charged at this time
              </span>
            </div>

            <div className="countdown">
              <img src="http://res.cloudinary.com/dsvkuc936/image/upload/c_scale,w_32/v1473136726/parklender_assets/clock.png" />
              <strong className="timer">{this.timeToString()}</strong> until your reservation expires.
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default BookingForm;
