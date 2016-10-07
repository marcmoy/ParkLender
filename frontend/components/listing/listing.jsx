import React from 'react';
import ListingForm from './listing_form';

class Listing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='listings-container'>
        <ListingForm />
      </div>
    );
  }
}

export default Listing;
