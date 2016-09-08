import React from 'react';

class SpotShowDetails extends React.Component {
  constructor(props) {
    super(props);
    this.prices = this.prices.bind(this);
    this.vehicles = this.vehicles.bind(this);
  }

  prices() {

    const priceKey = {
      hourly_rate: "hour",
      daily_rate: "day",
      monthly_rate: "month"} ;

    let priceBlocks = [];
    let prices = this.props.spot.prices;

    for (let price in prices) {
      if (prices[price] > 0) {
        let cost = prices[price];
        let text = `$${cost} per ${priceKey[price]}`;
        let priceBlock =
        <li className="price-detail-block" key={price}>
          {text}
        </li>;
        priceBlocks.push(priceBlock);
      }
    }

    return (
      <ul className='spot-show-prices'>
        { priceBlocks }
      </ul>
    );
  }

  vehicles() {
    let vehicleBlocks = [];
    let vehicles = this.props.spot.vehicles;

    for (let i = 0; i < vehicles.length; i++) {

      let text = vehicles[i].charAt(0).toUpperCase() + vehicles[i].slice(1);

      vehicleBlocks.push(
        <li className="vehicle-detail-block" key={i}>
          {text}
        </li>
      );
    }

    return (
      <ul className="vehicles-show">
        {vehicleBlocks}
      </ul>
    );
  }

  render() {
    return(
      <div className="spot-show-details-container">
        <div className="container">

          <div className="row">
            <h2>About this parking space</h2>
            <span className="description">
              {this.props.spot.description}
            </span>
          </div>

          <div className="row">
            <h3>Price</h3>
            <span className="pull-right">
              {this.prices()}
            </span>
          </div>

          <div className="row">
            <h3>Size</h3>
            <span className="pull-right">
              <ul>
                <li>{this.props.spot.width}' wide</li>
                <li>{this.props.spot.length}' long</li>
              </ul>
            </span>
          </div>

          <div className="row">
            <h3>Vehicles Allowed</h3>
            <span className="pull-right">
              {this.vehicles()}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SpotShowDetails;
