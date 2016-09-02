import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

class SpotMap extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, this.props.mapOpts);
    this.markers = new MarkerManager(this.map);
    this._bindBoundsListener();
  }

  componentDidUpdate(){
    this.markers.updateMarkers(this.props.spots);
  }

  componentWillReceiveProps(nextProps) {
    this.map.setCenter(nextProps.mapOpts.center);
    this.map.setZoom(nextProps.mapOpts.zoom);
  }

  _bindBoundsListener() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };

      let center = {
        lat: this.map.center.lat(),
        lng: this.map.center.lng()
      };
      
      this.props.updateMap(center, this.map.zoom);
      this.props.updateFilter('bounds', bounds);
    });
  }

  render() {
    return <div className="map" ref="map"></div>;
  }
}

export default SpotMap;
