import React from 'react';

class PriceType extends React.Component {
  constructor(props) {
    super(props);
    this.state = { prices: [] };
    this.updatePrices = this.updatePrices.bind(this);
  }

  updatePrices(e) {
    let price = e.target.value;
    let newPrices = this.state.prices;
    if (this.state.prices.includes(price)) {
      let index = newPrices.indexOf(price);
      newPrices.splice(index, 1);
    } else {
      newPrices = [...this.state.prices, price];
    }
    this.setState({ prices: newPrices });
    this.props.updateFilter('prices', newPrices);
  }

  render() {
    return(
      <span className="price-type">
        <button type="button" className="btn btn-primary" data-toggle="button"
          autoComplete="off" aria-pressed="false" value="hourly_rate"
          onClick={this.updatePrices}>Hourly</button>
        <button type="button" className="btn btn-primary" data-toggle="button"
          autoComplete="off" aria-pressed="false" value="daily_rate"
          onClick={this.updatePrices}>Daily</button>
        <button type="button" className="btn btn-primary" data-toggle="button"
          autoComplete="off" aria-pressed="false" value="monthly_rate"
          onClick={this.updatePrices}>Monthly</button>
      </span>
    );
  }
}

export default PriceType;
