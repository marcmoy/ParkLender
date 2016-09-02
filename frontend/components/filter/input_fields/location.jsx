import React from 'react';

class LocationInput extends React.Component {

  constructor(props) {
    super(props);
    this.initAutocomplete = this.initAutocomplete.bind(this);
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

      this.props.updateMap(center, zoom);
    });
  }

  render() {
    return(
      <div className="location-input-container">
        <div className="autocomplete-search-container">
          <form className="autocomplete-search-form">
            <input type="text" id="autocomplete-search-field"
              placeholder="Where to?" />
          </form>
        </div>
      </div>
    );
  }
}

export default LocationInput;
