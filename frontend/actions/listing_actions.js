export const ListingConstants = {
  UPDATE_LISTING: 'UPDATE_LISTING',
  CLEAR_LISTING: 'CLEAR_LISTING'
};

export const updateListing = listing => ({
  type: ListingConstants.UPDATE_LISTING,
  listing
});

export const clearListing = () => ({
  type: ListingConstants.CLEAR_LISTING
});
