import React from 'react';

class NavWhereTo extends React.Component{
  constructor(props) {
    super(props);
    this.initAutocomplete = this.initAutocomplete.bind(this);
  }

  componentDidMount() {
    this.initAutocomplete();
  }

  initAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('nav-autocomplete-search-field'),
      { types: ['geocode'] }
    );
    let self = this;

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

      self.props.sendMap(center, zoom);
    });
  }

  render() {
    return(
      <div className="empty whereto" />
    );
  }
}

export default NavWhereTo;
