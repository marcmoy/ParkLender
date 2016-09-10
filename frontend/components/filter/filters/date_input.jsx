import React from 'react';

class DateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startDate: "", endDate: "" };
    this.updateDates = this.updateDates.bind(this);
  }

  updateDates(e) {
    if (e.currentTarget.name === "startDate") {
      this.setState({ startDate: e.currentTarget.value });
    } else {
      this.setState({ endDate: e.currentTarget.value });
    }

    // check if start date is less than end date
    let dates = [this.state.startDate, this.state.endDate].sort();

    if (this.state.startDate === "" || this.state.endDate === "") {
      return;
    }
    
    if (dates[0] === this.state.startDate) {
      this.props.updateFilter('dates', dates);
    }
  }

  render() {
    return (
      <span>
        <label>Start Date</label>
        <input type="date" name="startDate" onChange={ this.updateDates }/>
        <label>End Date</label>
        <input type="date" name="endDate" onChange={ this.updateDates }/>
      </span>
    );
  }
}

export default DateInput;


// import { DateRange } from 'react-date-range';
// import Modal from 'react-modal';
// import ModalStyle from '../../../util/modal_style.js';

// this.openModal = this.openModal.bind(this);
// this.closeModal = this.closeModal.bind(this);
// this.handleSelect = this.handleSelect.bind(this);

// openModal(e) {
//   this.setState({ modalOpen: true });
// }
//
// closeModal() {
//   this.setState({ modalOpen: false });
//   this.props.updateFilter('dates', this.state.dates);
// }

// handleSelect(dates) {
//   this.setState({ dates: dates });
// }
// <DateRange onInit={this.handleSelect} onChange={this.handleSelect}/>
