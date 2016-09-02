import React from 'react';

class WhereTo extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initAutocomplete();
  }

  initAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete-search-field'),
      { types: ['geocode'] }
    );

    autocomplete.addListener('place_changed', () => {
      let place = autocomplete.getPlace();
      let zoom;
      if (place.adr_address.includes("address")) {
        zoom = 16;
      } else {
        zoom = 13;
      }

      let center = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };

      this.props.map.setCenter(center);
      this.props.map.setZoom(zoom);
    });
  }

  render() {
    return(
      <div className="empty whereto" />
    );
  }
}

export default WhereTo;
