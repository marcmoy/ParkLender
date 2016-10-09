import React from 'react';
import Rheostat from 'rheostat';
import $ from 'jquery';

class PriceRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = { min: 1, max: 100 };
    this.updateValue = this.updateValue.bind(this);
    this.updateMin = this.updateMin.bind(this);
    this.updateMax = this.updateMax.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }

  componentDidMount() {
    $('input.price-range').click(function() {
      $(this).select();
    });
  }

  updateMin(e) {
    e.preventDefault();
    let value = parseInt(e.target.value);
    if (isNaN(value)) return;
    this.setState({ min: value });
    this.updateFilter();
  }

  updateMax(e) {
    e.preventDefault();
    let value = parseInt(e.target.value);
    if (isNaN(value)) return;
    this.setState({ max: value });
    this.updateFilter();
  }

  updateValue(sliderState) {
    let min = sliderState.values[0];
    let max = sliderState.values[1];
    this.setState({ min: min, max: max });
    this.updateFilter();
  }

  updateFilter() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      let range = [this.state.min, this.state.max];
      this.props.updateFilter('priceRange', range);
    }, 300);
  }

  render() {
    return (
      <div className='form-group'>
        <div className='row rheostat-row'>
          <span className='filter-name'>Price Range</span>
          <div className='price-range-input'>
            <input type='text' name='min' className='price-range'
              value={this.state.min} onChange={this.updateMin}/>
          </div>
          <Rheostat min={1} max={100} values={[this.state.min,this.state.max]}
            onValuesUpdated={this.updateValue} />
          <div className='price-range-input'>
            <input type='text' name='max' className='price-range'
              value={this.state.max} onChange={this.updateMax}/>
          </div>
        </div>
      </div>
    );
  }
}

export default PriceRange;
