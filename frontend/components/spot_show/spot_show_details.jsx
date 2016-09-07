import React from 'react';

class SpotShowDetails extends React.Component {
  constructor(props) {
    super(props);
    this.prices = this.prices.bind(this);
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

    return(
      <ul className='spot-show-prices'>
        { priceBlocks }
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
              {this.props.spot.width}' wide x {this.props.spot.length}' long
            </span>
          </div>

          <div className="row">
            <h3>Vehicles Allowed</h3>
            <span className="pull-right" />
          </div>
        </div>
      </div>
    );
  }
}

export default SpotShowDetails;
