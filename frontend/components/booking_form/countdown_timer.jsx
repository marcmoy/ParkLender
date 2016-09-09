import React from 'react';

class CountdownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 900, disabled: this.props.disabled };
    this.timeToString = this.timeToString.bind(this);
    this.countdownText = this.countdownText.bind(this);
    this.activateTimer = this.activateTimer.bind(this);
  }

  componentDidMount() {
    if (!this.state.disabled) {
      this.activateTimer();
    }
  }

  componentWillReceiveProps(nextProps) {
    // timer off
    if (nextProps.disabled) {

      if (!this.state.disabled) {
        clearInterval(this.interval);
      }

      this.setState({ disabled: true, seconds: 900 });
    } else {
      // timer on
      if (this.state.disabled) {
        this.activateTimer();
      }

      this.setState({ disabled: false });
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  activateTimer() {
    this.interval = window.setInterval(() =>{
      let secs = this.state.seconds - 1;
      this.setState({ seconds: secs });
    }, 1000);
  }

  timeToString() {
    if (this.state.disabled) {
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
    if (this.state.disabled) {
      return(
        <div>
          <img src="https://res.cloudinary.com/dsvkuc936/image/upload/v1473285677/parklender_assets/checkmark.png" />
          <strong>Please wait for host approval</strong>
        </div>
      );
    } else {
      return(
        <div>
          <img src="https://res.cloudinary.com/dsvkuc936/image/upload/c_scale,w_32/v1473136726/parklender_assets/clock.png" />
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
