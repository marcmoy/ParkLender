import React from 'react';
import DatePicker from 'react-bootstrap-date-picker';
import Select from 'react-select';
import timeOptions from './time_options';
import AlertContainer from 'react-alert';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    let prices = this.props.spot.prices;
    let initialPrice = Object.keys(prices)[0];

    this.state = {
      type: initialPrice,
      seconds: 900,
      startDate: "",
      endDate: "",
      startTime: 540,
      endTime: 1020,
      bookingSuccess: false,
      pendingRequest: false
    };

    this.alertOptions = {
      offset: 14,
      position: 'bottom right',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };

    this.prices = this.prices.bind(this);
    this.timeToString = this.timeToString.bind(this);

    this.updateStartDate = this.updateStartDate.bind(this);
    this.updateEndDate = this.updateEndDate.bind(this);
    this.updateStartTime = this.updateStartTime.bind(this);
    this.updateEndTime = this.updateEndTime.bind(this);
    this.updateType = this.updateType.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.inputValid = this.inputValid.bind(this);
    this.validDates = this.validDates.bind(this);
    this.validDateRange = this.validDateRange.bind(this);
    this.validTimes = this.validTimes.bind(this);
    this.equalDates = this.equalDates.bind(this);

    this.showUserAlert = this.showUserAlert.bind(this);
    this.showDateAlert = this.showDateAlert.bind(this);
    this.showTimeAlert = this.showTimeAlert.bind(this);

    this.requestButton = this.requestButton.bind(this);
    this.updateBookSuccess = this.updateBookSuccess.bind(this);
    this.disableForms = this.disableForms.bind(this);
  }

  componentDidMount() {
    this.interval = window.setInterval(() =>{
      console.log("tick");
      let secs = this.state.seconds - 1;
      this.setState({ seconds: secs });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate() {
    if (this.disableForms()) {
      $("select.price-blocks").prop("disabled", true);
      $("select.price-blocks").css("cursor", "not-allowed");
      $("input.form-control").prop("disabled", true);
      $(".Select-value").css("cursor", "not-allowed");
    }
  }

  timeToString() {
    if (this.disableForms()) {
      return(() => {
        this.setState({ seconds: 0 });
        clearInterval(this.interval);
      });
    }
    let seconds = this.state.seconds;
    if (seconds === 0) clearInterval(this.interval);
    let mins = Math.floor(seconds / 60);
    let secs = seconds - ( mins * 60);
    if (mins < 10) mins = `0${mins}`;
    if (secs < 10) secs = `0${secs}`;
    return `${mins}:${secs}`;
  }

  updateStartTime(time) {
    this.setState({ startTime: time.value });
  }

  updateEndTime(time) {
    this.setState({ endTime: time.value });
  }

  updateStartDate(date) {
    this.setState({ startDate: date });
  }

  updateEndDate(date) {
    this.setState({ endDate: date });
  }

  updateType(e) {
    this.setState({ type: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.props.currentUser) {
      this.showUserAlert();
      return;

    } else if (!this.inputValid()) {
      console.log("invalid input");
      return;

    } else {

      const booking = {
        booking: {
          spot_id: this.props.spot.id,
          user_id: this.props.currentUser.id,
          host_id: this.props.spot.host.id,
          price_type: this.state.type,
          price: this.props.spot.prices[this.state.type],
          start_date: this.state.startDate,
          end_date: this.state.endDate,
          start_time: this.state.startTime,
          end_time: this.state.endTime
        }
      };

      clearInterval(this.interval);
      this.setState({ pendingRequest: true });
      this.props.requestBooking(booking, this.updateBookSuccess);
    }
  }

  updateBookSuccess() {
    this.setState({ bookingSuccess: true });
  }

  inputValid() {
    if (!this.validDates()) {
      console.log("invalid date");
      this.showDateAlert();
      return false;
    } else if (!this.validTimes()){
      console.log("invalid time");
      this.showTimeAlert();
      return false;
    } else {
      return true;
    }
  }

  validDates() {
    if (this.state.startDate === "") {
      return false;
    } else if (this.state.endDate === "") {
      return false;
    } else if (!this.validDateRange()) {
      return false;
    } else {
      return true;
    }
  }

  validDateRange() {
    let start = Date.parse(this.state.startDate);
    let end = Date.parse(this.state.endDate);
    return start <= end;
  }

  validTimes() {
    if (this.equalDates()) {
      return this.state.startTime < this.state.endTime;
    } else {
      return true;
    }
  }

  equalDates() {
    let start = Date.parse(this.state.startDate);
    let end = Date.parse(this.state.endDate);
    return start === end;
  }

  showTimeAlert(){
    msg.show('MUST SELECT VALID TIMES', {
      time: 2000,
      type: 'error'
    });
  }

  showDateAlert(){
    msg.show('MUST SELECT VALID DATES', {
      time: 2000,
      type: 'error'
    });
  }

  showUserAlert(){
    msg.show('MUST TO BE LOGGED IN TO BOOK', {
      time: 2000,
      type: 'error'
    });
  }

  prices() {
    const priceKey = {
      hourly_rate: "hour",
      daily_rate: "day",
      monthly_rate: "month"} ;

    const priceBlocks = [];
    const prices = this.props.spot.prices;
    let defaultPrice, defaultPriceType;
    let count = 0;

    for (let price in prices) {
      if (prices[price] > 0) {
        let cost = prices[price];
        let text = `$${cost} per ${priceKey[price]}`;
        let className = `price ${price}`;
        let priceBlock =
          <option className='price-tag' key={price} value={price}>
            {text}
          </option>;
        defaultPrice =
          <span className='price-tag' key={price} value={price}>
            {text}
          </span>;
        defaultPriceType = price;
        count++;
        priceBlocks.push(priceBlock);
      }
    }

    if (count === 1) {
      return defaultPrice;
    } else {
      return(
        <select className="price-blocks" value={this.state.type}
          onChange={this.updateType}>
          {priceBlocks}
        </select>
      );
    }
  }

  requestButton() {
    if (this.state.bookingSuccess) {
      return(
        <button className="sent-button" disabled={true}>
          Booking sent!
        </button>
      );
    } else if (this.state.pendingRequest) {
      return (
        <button className="pending-button" disabled={true}>
          Sending request...
        </button>
      );
    } else {
      return <button>Request a booking</button>;
    }
  }

  disableForms() {
    return this.state.pendingRequest || this.state.bookingSuccess;
  }

  countdownText() {
    if (this.disableForms()) {
      return(
        <div>
          <img src="http://res.cloudinary.com/dsvkuc936/image/upload/c_scale,w_32/v1473136726/parklender_assets/clock.png" />
          <strong>Booking request sent!</strong> Please wait for host approval.
        </div>
      );
    } else {
      return(
        <div>
          <img src="http://res.cloudinary.com/dsvkuc936/image/upload/c_scale,w_32/v1473136726/parklender_assets/clock.png" />
          <strong className="timer">{this.timeToString()}</strong> until your reservation expires.
        </div>
      );
    }
  }

  render() {
    return(
      <form className="booking-form clearfix" onSubmit={this.handleSubmit}>
        <div className="booking-price">
          {this.prices()}
        </div>

        <div className="booking-content">

          <div className="row">
            <label htmlFor="startDate">Start Date</label>
            <label htmlFor="endDate">End Date</label>
          </div>

          <div className="row">
            <DatePicker className="date-picker" id="startDate"
              value={this.state.startDate} onChange={this.updateStartDate}
              disabled={this.disableForms()} />
            <DatePicker className="date-picker" id="endDate"
              value={this.state.endDate} onChange={this.updateEndDate}
              disabled={this.disableForms()} />
          </div>

          <div className="row">
            <label htmlFor="startTime">Start Time</label>
            <label htmlFor="endTime">End Time</label>
          </div>

          <div className="row time-row">
            <Select options={timeOptions} value={this.state.startTime}
                onChange={this.updateStartTime} searchbale={false}
                disabled={this.disableForms()} />
            <Select options={timeOptions} value={this.state.endTime}
              onChange={this.updateEndTime} searchbale={false}
              disabled={this.disableForms()} />
          </div>

          <div className="booking-button-container">
            {this.requestButton()}
          </div>

          <div className="booking-footer">
            <div className="charged">
              <span className="italicize-text">
                Your credit card will not be charged at this time
              </span>
            </div>

            <div className="countdown">

              {this.countdownText()}
            </div>
          </div>

          <AlertContainer ref= {(a) => global.msg = a } {...this.alertOptions} />
        </div>

      </form>
    );
  }
}

export default BookingForm;
