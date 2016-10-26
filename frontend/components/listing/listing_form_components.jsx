import React from 'react';
import Select from 'react-select';
import { priceOptions, widthOptions, lengthOptions } from './listing_options';
import { scroller } from 'react-scroll';
import { withRouter } from 'react-router';
import { addSpinner, removeSpinner } from '../../util/loader';
import IMAGES from '../../util/images';

// if anyone is reading this, I know this code is not DRY.

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

    let self = this;

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
      let listing = self.props.listing;
      listing.location = location;
      listing.lat = lat;
      listing.lng = lng;

      self.props.updateListing(listing);
    });
  }

  render() {
    let preventDefault = (e) => {
      e.preventDefault();
      this.props.scrollNext();
    };

    return(
      <div>
        <h3>Enter your street address</h3>
        <form onSubmit={this.props.scrollNext}>
          <input type="text" spellcheck="false"
            className='form-input-element'
            id="autocomplete-location"
            placeholder="i.e. 160 Spear St #14, San Francisco, CA 94105" />
          <button className='continue-button' onClick={preventDefault}>
            Continue
          </button>
        </form>
      </div>
    );
  }
}

export const Price = ({ listing, updateField, scrollNext }) => (
  <div>
    <h3>What's your hourly rate?</h3>
    <Select clearable={false} options={priceOptions}
      placeholder='Hourly Rate'
      value={listing.hourly_rate}
      onChange={updateField('hourly_rate')}/>
    <br/>
    <h3>What's your daily rate?</h3>
    <Select clearable={false} options={priceOptions}
      placeholder='Daily Rate'
      value={listing.daily_rate}
      onChange={updateField('daily_rate')}/>
    <br/>
    <h3>What's your monthly rate?</h3>
    <Select clearable={false} options={priceOptions}
      placeholder='Monthly Rate'
      value={listing.monthly_rate}
      onChange={updateField('monthly_rate')}/>
    <button className='continue-button' onClick={scrollNext}>
      Continue
    </button>
  </div>
);

export const Size = ({ listing, updateField, scrollNext }) => (
  <div>
    <h3>How wide is your spot?</h3>
    <Select clearable={false} options={widthOptions}
      placeholder="Enter width" id="width"
      value={listing.width} onChange={updateField('width')}/>
    <br/>
    <h3>How long is your spot?</h3>
    <Select clearable={false} options={lengthOptions}
      placeholder="Enter length" id="length"
      value={listing.length} onChange={updateField('length')}/>

    <button className='continue-button' onClick={scrollNext}>
      Continue
    </button>
  </div>
);

export const Vehicles = ({ listing, updateListing, scrollNext }) => {

  let toggleField = (field) => {
    return () => {
      listing[field] = !listing[field];
      updateListing(listing);
    };
  };

  return(
    <div>
      <h3>What types of vehicles are allowed?</h3>

      <span className='vehicle-checkbox'>
        <label htmlFor='car'>Car</label>
        <input type='checkbox' name='car' value='car'
          checked={listing.car}
          onChange={toggleField('car')}/>
      </span>

      <span className='vehicle-checkbox'>
        <label htmlFor='motorcycle'>Motorcycle</label>
        <input type='checkbox' name='motorcycle' value='motorcycle'
          checked={listing.motorcycle}
          onChange={toggleField('motorcycle')}/>
      </span>

      <span className='vehicle-checkbox'>
        <label htmlFor='van'>Van</label>
        <input type='checkbox' name='van' value='van'
          checked={listing.van}
          onChange={toggleField('van')}/>
      </span>

      <span className='vehicle-checkbox'>
        <label htmlFor='truck'>Truck</label>
        <input type='checkbox' name='truck' value='truck'
          checked={listing.truck}
          onChange={toggleField('truck')} />
      </span>

      <button className='continue-button' onClick={scrollNext}>
        Continue
      </button>
    </div>
  );
};

export const Description = ({ listing, updateListing, scrollNext }) => {
  let updateWords = (field) => {
    return (e) => {
      e.preventDefault();
      listing[field] = e.target.value;
      updateListing(listing);
    };
  };

  return(
    <div>
      <h3>Name your spot</h3>
      <input type="text" spellcheck="false" className='form-input-element'
        placeholder="Give a cool name for your spot"
        onChange={updateWords('title')} value={listing.title}/>

      <h3>Describe your spot</h3>
      <textarea
        onChange={updateWords('description')}
        placeholder='Tell us about your spot'
        value={ listing.description }></textarea>

      <button className='continue-button' onClick={scrollNext}>
        Continue
      </button>
    </div>
  );
};

export class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(!error){
        if (results[0].resource_type === 'image') {
          let listing = this.props.listing;

          let image = new Image();
          image.onload = () => {
            listing.image_url = results[0].url;
            this.props.updateListing(listing);
            removeSpinner();
          };

          image.src = results[0].url;
          addSpinner();
        }
      }
    });
  }

  render() {

    let imageUrl = this.props.listing.image_url;

    return(
      <div>
        <h3>Upload a photo</h3>
        <div className="upload-form">
          <button
            className='continue-button upload-photo'
            onClick={this.upload}>
            Upload Image
          </button>
        </div>
        <button className='continue-button' onClick={this.props.scrollNext}>
          Continue
        </button>
        <div className='img-preview'>
          <div className="load-message" />
          <img src={imageUrl} />
        </div>
      </div>
    );
  }
}

class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.validateListing = this.validateListing.bind(this);
  }

  validateListing(e) {
    e.preventDefault();
    let errors = $('span.text-danger');
    if (errors.length) {
      alert('Missing fields!');
    } else {
      let listing = this.props.listing;
      let location = listing.location;
      listing.host_id = this.props.currentUser.id;
      listing.address =  `${location.street_number} ${location.route}`;
      listing.city = location.locality;
      listing.state = location.administrative_area_level_1;
      listing.country = location.country;

      let redirect = spot => {
        this.props.router.replace(`/spots/${spot.id}`);
      };

      this.props.createSpot(listing, redirect);
    }
  }

  render() {
    let missingField = <span className='text-danger'>Required</span>;
    let vehicles = ['car','van','motorcycle','truck'];
    let listing = this.props.listing;

    let allowedVehicles = [];
    vehicles.forEach(vehicle => {
      if (listing[vehicle]) {
        let str = vehicle.charAt(0).toUpperCase() + vehicle.substr(1);
        allowedVehicles.push(str);
      }
    });
    allowedVehicles = allowedVehicles.join(', ');
    if (!allowedVehicles.length) allowedVehicles = missingField;

    let location = listing.location;
    let address = missingField;
    if (location.street_number && location.route) {
      address = location.street_number + ' ' + location.route;
    }

    let image = listing.image_url !== IMAGES.defaultImage ?
                                      'Uploaded' : missingField;

    return(
      <div>
        <h3>Review your listing</h3>
        <button className='continue-button' onClick={this.validateListing}>
          List this spot!
        </button>
        <div className='review-listing'>
          <div className='row'>
            <div className='col-md-5'>
              <h4>Address</h4>
              {address} <br/>
              <h4>City</h4>
              {location.locality || missingField} <br/>
              <h4>State</h4>
              {location.administrative_area_level_1 || missingField } <br/>
              <h4>Country</h4>
              {location.country || missingField } <br/>
              <h4>Postal Code</h4>
              {location.postal_code || missingField } <br/>
              <h4>Hourly Rate</h4>
              {listing.hourly_rate ? '$ ' + listing.hourly_rate : 'N/A' }<br/>
              <h4>Daily Rate</h4>
              {listing.daily_rate ? '$ ' + listing.daily_rate : 'N/A' }<br/>
              <h4>Monthly Rate</h4>
              {listing.monthly_rate ? '$ ' + listing.monthly_rate : 'N/A' }<br/>
            </div>
            <div className='col-md-6'>
              <h4>Width</h4>
              {listing.width ? listing.width + ' ft' : missingField } <br/>
              <h4>Length</h4>
              {listing.length ? listing.length + ' ft' : missingField } <br/>
              <h4>Vehicles</h4>
              { allowedVehicles } <br/>
              <h4>Title</h4>
              {listing.title || missingField } <br/>
              <h4>Description</h4>
              {listing.description || missingField } <br/>
              <h4>Photo</h4>
              {image} <br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Confirm);
