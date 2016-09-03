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
    // need to dry this later
    return(
      <div className="form-group text-center">

        <div className="checkbox-inline">
          <label>
            <input type="checkbox" value="hourly_rate"
              onChange={ this.updatePrices } /> Hourly
          </label>
        </div>

        <div className="checkbox-inline">
          <label>
            <input type="checkbox" value="daily_rate"
              onChange={ this.updatePrices } /> Daily
          </label>
        </div>

        <div className="checkbox-inline">
          <label>
            <input type="checkbox" value="monthly_rate"
              onChange={ this.updatePrices } /> Monthly
          </label>
        </div>

      </div>
    );
  }
}

export default PriceType;
