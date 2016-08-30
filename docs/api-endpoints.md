# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users` (new)
- `GET /api/users/:id` (show)
  - Retrieve user details for profile page
- `PATCH /api/users/:id` (update)
  - User can adjust their account settings
- `DELETE /api/users/:id` (destroy)
  - User can delete their account

### Session

- `POST /api/session` (new)
- `DELETE /api/session` (destroy)
- `GET /api/session` (show)

### Spots

- `GET /api/spots` (index)
  - Spots index/search
  - Accepts query params to search spots based on filters
- `POST /api/users/:id/spots` (create)
  - Hosts can post their parking spot
- `GET /api/spots/:id` (show)
  - Users can view a spot
- `PATCH /api/spots/:id` (update)
  - Host can update spot
- `DELETE /api/users/:id/spots` (destroy)
  - Host can delete spot

### Reviews
_Spots show page will have reviews_
_Users show profile pages will have reviews_
_Reviews Model handles reviews for both spots and users_

- `GET /api/reviews` (index)
  - Review index for those that belong to a specific spot or user
- `POST /api/reviews` (create)
  - Create review for a spot
- `GET /api/reviews/:id` (show)
  - show a single review (might not be needed)
- `DELETE /api/reviews/:id` (destroy)
  - author can delete review

### Bookings

- `GET /api/spots/:id/bookings` (index)
  - Shows host all of their requested bookings for their spot
- `POST /api/spots/:id/bookings` (create)
  - User requests to book a spot
- `GET /api/spots/:id/bookings/:id` (show)
  - Host can view a single booking (might not be needed)
- `PATCH /api/spots/:id/bookings/:id` (update)
  - User can edit booking or Host can approve/deny booking request

### Messages
_`users` in url refers to the author (fromUserId) of message_

- `POST /api/users/:id/messages` (create)
- `DELETE /api/users/:id/messages/:id` (destroy) ?
- `GET /api/users/:id/messages` (show)

### Photos
_Integrate Cloudinary in app_

- `POST /api/photos` (create)
- `GET /api/photos` (index)
- `GET /api/photos/:id` (show)
- `DELETE /api/photos/:id` (destroy)
