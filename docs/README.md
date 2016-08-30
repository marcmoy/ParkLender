# ParkLender

Production link: [https://parklender.com](https://www.heroku.com/).

## Minimum Viable Product

**Summary:**
ParkLender is a parking space sharing app inspired by AirBnB.

**Key Feature Set:**
- [ ] Users can search for parking spots.
- [ ] Users can request to book a parking spot.
- [ ] Parking spot searches can be filtered by location and availability.
- [ ] Google Maps will support the spot search feature.
- [ ] Parking spots have reviews.

**Bonus Feature Set:**
- [ ] User/host profiles
- [ ] Users can list a parking spot.
- [ ] Hosts can approve or deny a booking request.
- [ ] Users can view, edit, or delete their bookings.
- [ ] Hosts can view, edit, or delete their listings.
- [ ] Users and hosts can message each other.
- [ ] Users can adjust their profile settings.

## Design Documentation

* [Wireframes](/docs/wireframes)
* [React Components Heirarchy](/docs/component-heirarchy.md)
* [Sample State](/docs/sample-state.md)
* [Redux Structure](/docs/redux-structure.md)
* [DB Schema](/docs/schema.md)

## Project Timeline

**Due Date:** Friday, Sept 9 at 1:00pm

###Phases###
- [ ] Phase 1: Backend Setup & Front End User Auth (2 days)
- [ ] Phase 2: Spots & Reviews Model, API, and Components (2 days)
- [ ] Phase 3: Search Page (2 days)
- [ ] Phase 4: Spots Show Page, Booking Forms, and Review Forms (2 days)

**Bonus Phases**
- [ ] Phase 5: New Spot Form (2 days)
- [ ] Phase 6: User/Host profiles, User Show Page (1 day)
- [ ] Phase 7: User Dashboard (2 days)
- [ ] Phase 8: Messaging (2 days)

## Implementation Timeline

### Phase 1: Backend Setup & Front End User Auth (2 Days)

**Objective:** Functioning rails project with front-end Authentication

- [x] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Spots & Reviews Model, API, and components (2 days)

**Objective:** Spots and Reviews can be created, read, edited and destroyed through the API. **_(New Spots and New Review forms will be created in later phases.)_**

- [ ] `Spot` model
- [ ] Seed database
- [ ] CRUD API for notes (`SpotsController`)
- [ ] JBuilder views for spots
- [ ] `Review` model
- [ ] Seed database
- [ ] CRUD API for notes (`ReviewsController`)
- [ ] JBuilder views for reviews
- The following Spot components and respective Redux loops
  - [ ] `SpotsIndex`
  - [ ] `SpotIndexItem`
- [ ] Style spots

### Phase 3: Search Page (2 days)

**Objective** Search page can show search results, provide a filter feature, and update markers on Google maps component.

- [x] `Search` component
- Integrate Google Maps API and related components/util
  - [x] `SpotsMap`
  - [ ] Style Google Map markers
- [x] `SearchContainer` connection
- [ ] `FilterForm` component
- Complete the full redux pattern for "Search Cycles"
  - [x] `updateFilter`
  - [x] `updateMarkers`
- [ ] Complete the full redux pattern for "Spot Cycles"
- [ ] Style filter form, map, and markers
- [ ] Complete styling for Search page

### Phase 4: Spots Show Page, Booking Forms, and Review Form (2 days)

**Objective** Users can visit a spot show page, view the spot details, able to book a spot, view reviews, and post a review.

- [ ] Create `SpotDetailContainer` with respective components and redux loops
- [ ] Style `SpotDetails` on spot show page.
- [ ] `Booking` model
- [ ] Seed database
- [ ] CRUD API for notes (`BookingsController`)
- [ ] JBuilder views for spots
- [ ] Create `BookingForm` with respective components and redux loops
- [ ] Style `BookingForm`
- Create the following Review components and respective Redux loops
  - [ ] `ReviewsIndex`
  - [ ] `ReviewsIndexItem`
  - [ ] `ReviewsIndexContainer`
- [ ] Style `ReviewsIndex` on spot show page
- [ ] Create `ReviewForm` for users to write a review
- [ ] Style `ReviewForm` on spot show page

## Bonus Features Implementation

### Phase 5: New Spot Form (2 days)

**Objective** Users can post a spot using a new spot form.

- Create the SpotsFormContainer with respective components:
 - [ ] Step 1: Location Form
 - [ ] Step 2: Dimension Form
 - [ ] Step 3: Vehicles Allowed Form
 - [ ] Step 4: Availability Form
    - [ ] Implement date ranges and time ranges
 - [ ] Step 5: Price Form
 - [ ] Step 6: Upload Photos Form
    - [ ] Integrate Cloudinary API
    - [ ] Create image upload button
    - [ ] Allow "drag/drop" feature
    - [ ] Allow user to rearrange order of photos
    - [ ] `Photos` model, `PhotosController`, CRUD API, seed database
 - [ ] Step 7: Title/Description form
- [ ] Summary of Spot before user confirmation
- [ ] Style forms
  - [ ] Animate forms to swipe across screen forward and backwards between steps

## Phase 6: User/Host profiles, User Show Page (1 day)

**Objective** Users have show pages that list their public user details and reviews

- [ ] Create `UserDetailsContainer` and respective components
- [ ] Add review form to users show page
- [ ] Add review index to users show page
- [ ] Style page

## Phase 7: User Dashboard (2 days)

**Objective** Users can view their 'dashboard' page where they can view, edit, or delete their existing bookings or spot listings. Users can also view, edit, or change their user account information.

- [ ] Create `BookingsContainer`
  - [ ] Create forms form user to edit booking request (date and time only)
- [ ] Create `ListingsContainer`
  - [ ] Host approval/deny feature for requested bookings
- [ ] Create `UserSettingsContainer`
  - [ ] Create forms for user to edit their user information
  - [ ] Update rails database table with more columns

## Phase 8: Messaging (2 days)

**Objective** Users can send/create a message on the spots show page to a host. Users can reply and view their messages in the user dashboard.

- [ ] `Message` model
- [ ] Seed database
- [ ] CRUD API for notes (`MessagesController`)
- [ ] JBuilder views for messages
- [ ] Create `MessageForm`
- [ ] Add `MessageButton` to spots show page and user show page
- [ ] Create box modal style message form to spots show page and user show page
- [ ] Add `MessagesContainer` to User dashboard page
