import React from 'react';
import Rheostat from 'rheostat';

class PriceRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = { min: 0, max: 100 };
    this.updateValue = this.updateValue.bind(this);
    this.updateMin = this.updateMin.bind(this);
    this.updateMax = this.updateMax.bind(this);
  }

  updateMin(e) {
    e.preventDefault();
    this.setState({ min: e.target.value });
  }

  updateMax(e) {
    e.preventDefault();
    this.setState({ max: e.target.value });
  }

  updateValue(sliderState) {
    let min = sliderState.values[0];
    let max = sliderState.values[1];
    this.setState({ min: min, max: max });
  }

  render() {
    return (
      <div className='row rheostat-row'>
        <div className='price-range-input'>
          <label for='min'>Min</label>
          <input type='text' name='min'
            value={this.state.min} onChange={this.updateMin}/>
        </div>
        <Rheostat min={1} max={100} values={[this.state.min,this.state.max]}
          onValuesUpdated={this.updateValue} />
        <div className='price-range-input'>
          <label for='max'>Max</label>
          <input type='text' name='max'
            value={this.state.max} onChange={this.updateMax}/>
        </div>
      </div>
    );
  }
}

export default PriceRange;
