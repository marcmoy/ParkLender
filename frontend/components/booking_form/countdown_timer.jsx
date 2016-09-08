import React from 'react';

class CountdownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 900 };
    this.timeToString = this.timeToString.bind(this);
    this.countdownText = this.countdownText.bind(this);
  }

  componentDidMount() {
    this.interval = window.setInterval(() =>{
      let secs = this.state.seconds - 1;
      this.setState({ seconds: secs });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  timeToString() {
    if (this.props.disabled) {
      this.setState({ seconds: 0 });
      clearInterval(this.interval);
    } else {
      let seconds = this.state.seconds;
      if (seconds === 0) clearInterval(this.interval);
      let mins = Math.floor(seconds / 60);
      let secs = seconds - ( mins * 60);
      if (mins < 10) mins = `0${mins}`;
      if (secs < 10) secs = `0${secs}`;
      return `${mins}:${secs}`;
    }
  }

  countdownText() {
    if (this.props.disabled) {
      clearInterval(this.interval);
      return(
        <div>
          <img src="http://res.cloudinary.com/dsvkuc936/image/upload/v1473285677/parklender_assets/checkmark.png" />
          <strong>Please wait for host approval</strong>
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
    return (
      <div>
        {this.countdownText()}
      </div>
    );
  }
}

export default CountdownTimer;
