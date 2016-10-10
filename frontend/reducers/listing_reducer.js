import { ListingConstants } from '../actions/listing_actions';
import { merge, isEmpty } from 'lodash';

const defaultImage = 'http://res.cloudinary.com/dsvkuc936/image/upload/v1475974911/parklender_spot_uploads/default_spot.png';

const defaultListing = {
  location: {
    street_number: '', route: '', locality: '',
    country: '', postal_code: ''
  },
  lat: null, lng: null,
  hourly_rate: 0, daily_rate: 0, monthly_rate: 0,
  width: null, length: null,
  car: false, motorcycle: false, van: false, truck: false,
  title: '',
  description: '',
  image_url: defaultImage
};

const ListingReducer  = function(state = defaultListing, action){
  switch(action.type){
    case ListingConstants.UPDATE_LISTING:
      return merge({}, state, action.listing);
    case ListingConstants.CLEAR_LISTING:
      return defaultListing;
    default:
      return state;
  }
};

export default ListingReducer;
