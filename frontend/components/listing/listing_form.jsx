import React from 'react';
import Select from 'react-select';
import { priceOptions, widthOptions, lengthOptions } from './listing_options';

// class ListingForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       location: {}, lat: 0, lng: 0,
//       hourlyRate: 5, dailyRate: 30, monthlyRate: 100,
//       width: 10, length: 20,
//       vehicles: ['car', 'motorcycle', 'truck'],
//       title: '',
//       description: ''
//     };
//     this.initAutocomplete = this.initAutocomplete.bind(this);
//     this.updateField = this.updateField.bind(this);
//     this.updateVehicles = this.updateVehicles.bind(this);
//     this.handleFile = this.handleFile.bind(this);
//   }
//
//   componentDidMount() {
//     this.initAutocomplete();
//   }
//
//   initAutocomplete() {
//     const autocomplete = new google.maps.places.Autocomplete(
//       document.getElementById('autocomplete-location'),
//       { types: ['geocode'] }
//     );
//
//     autocomplete.addListener('place_changed', () => {
//       let place = autocomplete.getPlace();
//       let location = {};
//       for (var i = 0; i < place.address_components.length; i++) {
//         let addressType = place.address_components[i].types[0];
//         if (componentForm[addressType]) {
//           let val = place.address_components[i][componentForm[addressType]];
//           location[addressType] = val;
//         }
//       }
//
//       let lat = place.geometry.location.lat();
//       let lng = place.geometry.location.lng();
//
//       this.setState({ location: location, lat: lat, lng: lng });
//     });
//   }
//
//   updateField(field) {
//     return (value) => this.setState({ [field]: value });
//   }
//
  // updateVehicles(e) {
  //   let vehicle = e.target.value;
  //   let newVehicles = this.state.vehicles;
  //   if (this.state.vehicles.includes(vehicle)) {
  //     let index = newVehicles.indexOf(vehicle);
  //     newVehicles.splice(index, 1);
  //   } else {
  //     newVehicles = [...this.state.vehicles, vehicle];
  //   }
  //   this.setState({ vehicles: newVehicles });
  // }
//
//   handleFile() {
//     let img = this.refs.file.files[0];
//
//     if (img) {
//       let reader = new FileReader();
//     }
//   }
//
//   render() {
//     return(
//       <form className='new-listing-form'>
//
//       </form>
//     );
//   }
// }
//

export class Location extends React.Component {
  constructor(props) {
    super(props);
    this.initAutocomplete = this.initAutocomplete.bind(this);
  }

  componentDidMount() {
    this.initAutocomplete();
  }

  initAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete-location'),
      { types: ['geocode'] }
    );

    const componentForm = {
      street_number: 'short_name',
      route: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'short_name',
      country: 'long_name',
      postal_code: 'short_name'
    };

    autocomplete.addListener('place_changed', () => {
      let place = autocomplete.getPlace();
      let location = {};
      for (var i = 0; i < place.address_components.length; i++) {
        let addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
          let val = place.address_components[i][componentForm[addressType]];
          location[addressType] = val;
        }
      }

      let lat = place.geometry.location.lat();
      let lng = place.geometry.location.lng();

      this.setState({ location: location, lat: lat, lng: lng });
    });
  }

  render() {
    return(
      <div>
        <h3>Enter your location</h3>
        <input type="text"
          id="autocomplete-location"
          placeholder="Where is your spot located?" />
      </div>
    );
  }
}
