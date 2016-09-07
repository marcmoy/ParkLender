import React from 'react';

class SpotShowDetails extends React.Component {
  constructor(props) {
    super(props);
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
