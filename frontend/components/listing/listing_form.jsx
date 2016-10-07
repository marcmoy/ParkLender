import React from 'react';
import Select from 'react-select';

class ListingForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form className='new-listing-form'>

        <input type="text"
					id="username"
					className="form-control"
					placeholder="Where is your spot located?" />

        <Select />
        <Select />

      </form>
    );
  }
}

export default ListingForm;
