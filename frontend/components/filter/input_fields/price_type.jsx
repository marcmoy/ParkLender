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
      <div className="price-type-input-container">

        <label name='filter[prices][hourly]'>Hourly</label>
        <input type='checkbox' name='filder[prices][hourly]'
          value='hourly_rate' onChange={ this.updatePrices }/>

        <label name='filter[prices][daily]'>Daily</label>
        <input type='checkbox' name='filder[prices][daily]'
          value='daily_rate' onChange={ this.updatePrices }/>

        <label name='filter[prices][monthly]'>Monthly</label>
        <input type='checkbox' name='filder[prices][monthly]'
          value='monthly_rate' onChange={ this.updatePrices }/>

      </div>
    );
  }
}

export default PriceType;
