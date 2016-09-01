import React from 'react';
// import ReactForms from 'react-forms';
// const Schema = ReactForms.schema.Schema;
// const Property = ReactForms.schema.Property;
// const Form = ReactForms.schema.Form;

class LocationInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { place: "" };
    this.initAutocomplete = this.initAutocomplete.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount() {
    this.initAutocomplete();
  }

  initAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete-search-field'),
      { types: ['geocode'] }
    );
    this.autocomplete = autocomplete;
    autocomplete.addListener('place_change', this.updateSearch);
  }

  updateSearch() {
    let place = this.autocomplete.getPlace();
    this.setState({
      place: place
    });
  }

  handleSubmit() {
    console.log("submit");
  }

  render() {
    return(
      <div className="location-input-container" onSubmit={this.handleSubmit}>
        <div className="autocomplete-search-container">
          <form className="autocomplete-search-form">
            <input type="text" id="autocomplete-search-field"
              placeholder="Where to?" />
            <button type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default LocationInput;
