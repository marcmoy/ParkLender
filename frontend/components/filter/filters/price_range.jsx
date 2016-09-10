import React from 'react';
import Rheostat from 'rheostat';

class PriceRange extends React.Component {
  constructor(props) {
    super(props);
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(sliderState) {
    console.log(sliderState);
  }

  render() {
    return (
      <div className='row rheostat-row'>
        <Rheostat min={1} max={100} values={[1,100]}
          onValuesUpdated={this.updateValue} />
      </div>
    );
  }
}

export default PriceRange;
