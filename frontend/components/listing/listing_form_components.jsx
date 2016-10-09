import React from 'react';
import Select from 'react-select';
import { priceOptions, widthOptions, lengthOptions } from './listing_options';
import { scroller } from 'react-scroll';

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

      this.props.setState({ location: location, lat: lat, lng: lng });
    });
  }

  render() {
    let preventDefault = (e) => {
      e.preventDefault();
      this.props.scrollNext();
    };

    return(
      <div>
        <h3>Enter your location</h3>
        <form onSubmit={this.props.scrollNext}>
          <input type="text"
            className='form-input-element'
            id="autocomplete-location"
            placeholder="Where is your spot located?" />
          <button className='continue-button' onClick={preventDefault}>
            Continue
          </button>
        </form>
      </div>
    );
  }
}

export const Price = ({ state, updateField, scrollNext }) => (
  <div>
    <h3>What's your hourly rate?</h3>
    <Select clearable={false} options={priceOptions}
      id="hourlyRate" value={state.hourlyRate}
      onChange={updateField('hourlyRate')}/>
    <br/>
    <h3>What's your daily rate?</h3>
    <Select clearable={false} options={priceOptions}
      id="dailyRate" value={state.dailyRate}
      onChange={updateField('dailyRate')}/>
    <br/>
    <h3>What's your monthly rate?</h3>
    <Select clearable={false} options={priceOptions}
      id="monthlyRate" value={state.monthlyRate}
      onChange={updateField('monthlyRate')}/>
    <button className='continue-button' onClick={scrollNext}>
      Continue
    </button>
  </div>
);

export const Size = ({ state, updateField, scrollNext }) => (
  <div>
    <h3>How wide is your spot?</h3>
    <Select clearable={false} options={widthOptions}
      placeholder="What's the width of your spot?" id="width"
      value={state.width} onChange={updateField('width')}/>
    <br/>
    <h3>How long is your spot?</h3>
    <Select clearable={false} options={lengthOptions}
      placeholder="What's the length of your spot?" id="length"
      value={state.length} onChange={updateField('length')}/>

    <button className='continue-button' onClick={scrollNext}>
      Continue
    </button>
  </div>
);

export const Vehicles = ({ state, setState, scrollNext }) => {

  let toggleField = (field) => {
    return () => {
      let boolean = !state.vehicles[field];
      let vehicles = state.vehicles;
      vehicles[field] = boolean;
      setState({ vehicles: vehicles });
    };
  };

  return(
    <div>
      <h3>What types of vehicles are allowed?</h3>

      <span className='vehicle-checkbox'>
        <label htmlFor='car'>Car</label>
        <input type='checkbox' name='car' value='car'
          checked={state.vehicles.car}
          onChange={toggleField('car')}/>
      </span>

      <span className='vehicle-checkbox'>
        <label htmlFor='motorcycle'>Motorcycle</label>
        <input type='checkbox' name='motorcycle' value='motorcycle'
          checked={state.vehicles.motorcycle}
          onChange={toggleField('motorcycle')}/>
      </span>

      <span className='vehicle-checkbox'>
        <label htmlFor='truck'>Truck</label>
        <input type='checkbox' name='truck' value='truck'
          checked={state.vehicles.truck}
          onChange={toggleField('truck')} />
      </span>

      <button className='continue-button' onClick={scrollNext}>
        Continue
      </button>
    </div>
  );
};

export const Description = ({ state, setState, scrollNext }) => {
  let updateWords = (field) => {
    return (e) => {
      e.preventDefault();
      setState({ [field]: e.target.value });
    };
  };

  return(
    <div>
      <h3>Name your spot</h3>
      <input type="text" className='form-input-element'
        placeholder="Give a cool name for your spot"
        onChange={updateWords('title')} value={state.title}/>

      <h3>Describe your spot</h3>
      <textarea
        onChange={updateWords('description')}
        placeholder='Tell us about your spot'
        value={ state.description }></textarea>

      <button className='continue-button' onClick={scrollNext}>
        Continue
      </button>
    </div>
  );
};

const defaultImage = 'http://res.cloudinary.com/dsvkuc936/image/upload/v1475974911/parklender_spot_uploads/default_spot.png';

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
          this.props.setState({ imageUrl: results[0].url });
        }
      }
    });
  }

  render() {

    let imageUrl = this.props.state.imageUrl || defaultImage;

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
          <img src={imageUrl} />
        </div>
      </div>
    );
  }
}

export class Confirm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h3>Review your listing</h3>
        <button className='continue-button'>
          List this spot!
        </button>
      </div>
    );
  }
}
