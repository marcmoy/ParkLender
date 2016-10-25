import React from 'react';
import DatePicker from 'react-bootstrap-date-picker';
import Select from 'react-select';
import { timeOptionsAM, timeOptionsPM } from './time_options';
import AlertContainer from 'react-alert';
import CountdownTimer from './countdown_timer';

// worst code I've ever written
// if you're reading this, sorry.

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    let prices = this.props.spot.prices;
    let initialPrice = Object.keys(prices)[0] || "hourly_rate";
    let initialStartDate = new Date();
    let initialEndDate = new Date();

    // if (initialPrice === "hourly_rate") {
    //   initialEndDate = new Date();
    //
    // } else if (initialPrice === "daily_rate") {
    //   initialEndDate = new Date(initialStartDate, + 1);
    //
    // } else if (initialPrice === "monthly_rate") {
    //   let month = initialStartDate.getMonth() + 1;
    //   let nextDate = new Date(initialStartDate).setMonth(month);
    //
    //   initialEndDate = new Date(nextDate);
    // }
    //
    // let initialStartTime = 420;
    // let initialEndTime = 1020;
    //
    let existingBooking = false;
    if (this.props.currentUser && this.props.bookings && this.props.spot.id) {
      let currentUserId = this.props.currentUser.id;
      let spotId = this.props.spot.id;
      let bookings = this.props.bookings;

      for (let id in bookings) {
        if (id) {
          let booking = bookings[id];
          if (booking.user_id === currentUserId && booking.spot_id === spotId) {
            // initialStartDate = new Date(booking.start_date);
            // initialEndDate = new Date(booking.end_date);
            // initialStartTime = booking.start_time_minutes;
            // initialEndTime = booking.end_time_minutes;
            // initialPrice = booking.price_type;
            existingBooking = true;
          }
        }
      }
    }

    this.state = {
      type: initialPrice,
      seconds: 900,
      startDate: initialStartDate.toISOString(),
      endDate: initialEndDate.toISOString(),
      // startTime: initialStartTime,   // bug
      // endTime: initialEndTime,       // bug
      startTime: 420,
      endTime: 1020,
      bookingSuccess: existingBooking,
      pendingRequest: false,
      disableClock: existingBooking
    };

    this.prices = this.prices.bind(this);

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
    this.showDeleteAlert = this.showDeleteAlert.bind(this);

    this.requestButton = this.requestButton.bind(this);
    this.updateBookSuccess = this.updateBookSuccess.bind(this);
    this.disableForms = this.disableForms.bind(this);
    this.submitBooking = this.submitBooking.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.deleteBooking = this.deleteBooking.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser && nextProps.bookings && nextProps.spot.id ) {
      let bookings = nextProps.bookings;
      let currentUserId = nextProps.currentUser.id;
      let spotId = nextProps.spot.id;

      for (let id in bookings) {
        if (id) {
          let booking = bookings[id];
          if (booking.user_id === currentUserId && booking.spot_id === spotId) {
            this.setState({
              type: booking.price_type,
              seconds: 900,
              startDate: new Date(booking.start_date).toISOString(),
              endDate: new Date(booking.end_date).toISOString(),
              startTime: booking.start_time_minutes,
              endTime: booking.end_time_minutes,
              bookingSuccess: true,
              pendingRequest: false,
              disableClock: true
            });
          }
        }
      }
    }
  }

  componentDidMount() {
    $('.booking-form').bookingFormFollow();
  }

  componentDidUpdate() {
    if (this.disableForms()) {
      $("select.price-blocks").prop("disabled", true);
      $("select.price-blocks").css("cursor", "not-allowed");
      $("input.form-control").prop("disabled", true);
      $(".Select-value").css("cursor", "not-allowed");
    } else {
      $("select.price-blocks").prop("disabled", false);
      $("select.price-blocks").css("cursor", "pointer");
      $("input.form-control").prop("disabled", false);
      $(".Select-value").css("cursor", "pointer");
    }
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
  }

  submitBooking() {
    if (!this.props.currentUser) {
      this.showUserAlert();
      return;

    } else if (!this.inputValid()) {
      return;

    } else {

      const data = {
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

      this.setState({ pendingRequest: true, disableClock: true });
      this.props.submitBooking(data, this.updateBookSuccess);
    }
  }

  updateBookSuccess(data) {
    this.setState({ bookingSuccess: true, pendingRequest: false });
  }

  inputValid() {
    if (!this.validDates()) {
      this.showDateAlert();
      return false;
    } else if (!this.validTimes()){
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
    msgBot.show('MUST SELECT VALID TIMES', {
      time: 2000,
      type: 'error'
    });
  }

  showDateAlert(){
    msgBot.show('MUST SELECT VALID DATES', {
      time: 2000,
      type: 'error'
    });
  }

  showUserAlert(){
    msgBot.show('MUST TO BE LOGGED IN TO BOOK', {
      time: 2000,
      type: 'error'
    });
  }

  showDeleteAlert(){
    msgBot.show('BOOKING CANCELLED', {
      time: 2000,
      type: 'success'
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
        <div>
          <button className="cancel-button" onClick={this.resetForm}>
            Cancel Booking
          </button>
        </div>
      );
    } else if (this.state.pendingRequest) {
      return (
        <button className="pending-button" disabled={true}>
          Sending request...
        </button>
      );
    } else {
      return <button onClick={this.submitBooking}>Request a booking</button>;
    }
  }

  resetForm() {
    let spotId = this.props.spot.id;
    let currentUserId = this.props.currentUser.id;
    let bookings = this.props.bookings;
    let bookingToDelete;
    for (let id in bookings) {
      if (id) {
        let booking = bookings[id];
        if (booking.user_id === currentUserId && booking.spot_id === spotId) {
          bookingToDelete = booking;
        }
      }
    }
    return this.deleteBooking(bookingToDelete);
  }

  deleteBooking(booking) {
    this.props.removeBooking(booking, () => {
      this.showDeleteAlert();
      this.setState({
        type: "hourly_rate",
        seconds: 900,
        startDate: "",
        endDate: "",
        startTime: 420,
        endTime: 1020,
        bookingSuccess: false,
        pendingRequest: false,
        disableClock: false
      });
    });
  }

  disableForms() {
    return this.state.pendingRequest || this.state.bookingSuccess;
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
            <Select options={timeOptionsAM} value={this.state.startTime}
                onChange={this.updateStartTime} searchbale={false}
                disabled={this.disableForms()} />
            <Select options={timeOptionsPM} value={this.state.endTime}
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
              <CountdownTimer disabled={this.state.disableClock} />
            </div>
          </div>
        </div>

      </form>
    );
  }
}

export default BookingForm;

$.fn.bookingFormFollow = function () {
    let $this = this,
        $window = $(window);

    // listen for scroll
    $window.scroll(function (e) {

        // grabs window's scroll position
        let scroll = $window.scrollTop();

        if (scroll <= 480) {
          $this.css({
              position: 'absolute',
              top: -43
          });
        } else if (480 < scroll && scroll <= 815) {
          $this.css({
              position: 'fixed',
              top: 70
          });
        } else if (scroll > 815){
          $this.css({
              position: 'absolute',
              top: 280
          });
        }
    });
};
