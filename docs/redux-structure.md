# Redux Structure

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Search Cycles

### Search API Request Actions
* `fetchSpots`
  0. invoked from `SearchContainer` in `didMount` **or** when filter state changes
  0. `GET /api/spots` is called.
  0. `receiveSpots` is set as the success callback.

### Search API Response Actions
* `receiveSpots`
  0. invoked from an API callback
  0. `SpotsReducer` updates store state of `spots`
* `updateFilter`
  0. invoked when filter form state changes **or** map view changes
  0. `FilterReducer` updates the filter state
* `updateMarkers`
  0. invoked when list of spots state is changed
  0. updates markers based on new state for list of spots

## Spot Cycles

### Spot API Request Actions
* `requestSpot`
  0. invoked from `SpotShowContainer` in `componentWillMount`
  0. `GET /api/spots/:id` is called.
  0. `receiveSpots` is set as the success callback.
* `createSpot`
  0. invoked from `NewSpotContainer`
  0. `POST /api/spots`
  0. `receiveSpots` is set as the success callback. (plan to redirect to show page for new spot)
* `updateSpot`
  0. invoked from `DashboardContainer`
  0. `PATCH /api/spots/:id` is called.
  0. no success callback returned
* `deleteSpot`
  0. invoked from `DashboardContainer`
  0. `DELETE /api/spots/:id` is called.
  0. no success callback returned

## Review Cycles

### Review API Request Actions
* `fetchReviews`
  0. invoked from `SpotsShowContainer` in `componentWillMount`
  0. `GET /api/reviews` is called.
  0. `receiveReviews` is set as the success callback.
* `createReview`
  0. invoked from `SpotsShowContainer` in `submitReview`
  0. `POST /api/reviews` is called.
  0. `receiveReviews` is set as the success callback (insert new review in front of review list array)
* `updateReview`
* `deleteReview`

### Review API Response Actions
* `receiveReviews`
  0. invoked from an API callback.
  0. `ReviewReducer` is updates store's state of reviews

## Message Cycles

### Message API Request Actions
* `fetchMessages`
  0. invoked from `DashboardContainer` in `componentWillMount`
  0. `GET /api/users/:id/messages` is called.
  0. `receiveMessages` is set as the success callback.
* `createMessage`
  0. invoked from `SpotsShowContainer` in `submitMessage`
  0. `POST /api/users/:id/messages` is called.
  0. `receiveMessages` is set as the success callback (insert new message in front of message list array)
* `updateMessage`
* `deleteMessage`

### Message API Response Actions
* `receiveMessages`
  0. invoked from an API callback.
  0. `MessageReducer` is updates store's state of messages

## Booking Cycles

### Booking API Request Actions
* `fetchBookings`
  0. invoked from `SpotsShowContainer` in `submitBooking`
  0. `GET /api/spots/:id/bookings` is called.
  0. `receiveBookings` is set as the success callback.
* `createBooking`
  0. invoked from `SpotsShowContainer` in `submitBooking`
  0. `POST /api/spots/:id/bookings` is called.
  0. `receiveBookings` is set as the success callback (insert new booking in front of booking list array)
* `updateBooking`
* `deleteBooking`

### Booking API Response Actions
* `receiveBookings`
  0. invoked from an API callback.
  0. `BookingReducer` is updates store's state of bookings
