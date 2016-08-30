```json
{
  session: {
    currentUser: {
      id: 1,
      username: "demo-user"
    },
    errors: []
  },

  user: {
    id: 1,
    email: "example@me.com",
    username: "demo-user"
    name: {
      fname: "demo",
      lname: "user"
    }
  },

  forms: {
    signUp: { errors: [] },
    logIn: { errors: [] },
    newSpot: { errors: ["Location can't be blank", "Dates can't overlap"] },
    newBooking: { errors: ["Requested date is unavailable", "Requested times are unavailable"] }
    newMessage { errors: ["Message content can't be blank"] }
    newReview { errors: ["Review content can't be blank"] }
  },

  spots: {
    1: {
      spotId: 1,
      hostId: 1,
      host: { "USER OBJECT" }
      title: "Driveway near AT&T park",
      description: "10 minute walk from AT&T park...",
      coords: {
        lat: 37.757815,
        lng: -122.5076409
      },
      location: {
        address: "123 Spear Ave",
        city: "San Francisco",
        state: "CA",
        country: "US"
      },
      prices: {
        hourly: 10,
        daily: 0,
        monthly: 0
      },
      availability: {  // need to talk with PM about date/time ranges and date objects
        dates:
              [
                [
                  startDate: { month: "Sept", day: 14, year: 2016},
                  endDate: { month: "Oct", day: 20, year: 2016}
                ],
                [
                  startDate: { month: "Nov", day: 1, year: 2016},
                  endDate: { month: "Jan", day: 17, year: 2017}
                ]
              ],
        times:
              [
                [
                  startTime: { hours: 7, minutes: 30 },
                  endTime { hours: 12, minutes: 0}
                ],
                [
                  startTime: { hours: 15, minutes: 30 },
                  endTime { hours: 20, minutes: 0}
                ],
              ]
      }
      size: {
        width: 10,
        length: 20
      },
      vehiclesAllowed: ["car", "motorcycles"],
      photos: [
        { photoId: 1, url: "cloundinary_url", thumbnail: "thumbnail_url"},
        { photoId: 2, url: "cloundinary_url", thumbnail: "thumbnail_url"},
        { photoId: 3, url: "cloundinary_url", thumbnail: "thumbnail_url"}
      ]
    }
  },

  filter: {
    bookingType: ["hourly","daily"],
    maxPrice: {
      hourly: 10,
      daily: 25
    },
    startDate: "DATE object",
    endDate: "DATE object",
    startTime: "TIME object",
    endTime: "TIME object"
    minWidth: 6,
    minLength: 16,
    bounds: {
      northWest: { lat: 37, lng: -122 },
      southWest: { lat: 38, lng: -123 },
    }
  },

  reviews: {
    1: {
      reviewId: 1,
      authorId: 1,
      spotId: 1, // review can be for a spot
      userId: null, // or a review can be for a user
      rating: 5,
      content: "This spot was great!"
    }
  },

  bookings: {
    1: {
      bookingId: 1,
      driverId: 1,
      spotId: 1,
      bookingType: "hourly",
      status: "PENDING",
      requestDate: {
        startDate: { month: "Sept", day: 15, year: 2016 },
        endDate: { month: "Sept", day: 15, year: 2016 }
      },
      requestTime: {
        startTime: { hours: 8, minutes: 30 },
        endTime: { hours: 10, minutes: }
      },
    }
  },

  messages: {
    1: {
      messageId: 1,
      fromUserId: 1,
      toUserId: 2,
      content: "Hi! I'm interested. How safe is your neighborhood?",
      parentMessageId: null
    },
    2: {
      messageId: 2,
      fromUserId: 2,
      toUserId: 1,
      content: "It is very safe!",
      parentMessageId: 1
    }
  },

  photos: {
    1: {
      photoId: 1,
      spotId: 1,
      url: "cloundinary_url",
      thumbnail: "thumbnail_url"
    }
  }
}
```
