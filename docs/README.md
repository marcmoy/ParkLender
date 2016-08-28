### Heroku Link

> *At the end of the first day of full-stack projects, you should have a link to the
live version of your site. It doesn't have to be pretty, but it has to be
there. Push to Heroku ASAP!*

Future link to Heroku:
[https://parklender.com](https://www.heroku.com/)

### Minimum Viable Product

> *Write a one-sentence summary of the project and a list of the features that
would be absolutely necessary for the app to be marketable. Your MVP section must follow the format outlined [here](https://github.com/appacademy/curriculum/blob/master/full-stack-project/readings/mvp-list.md).*

####Project: ParkLender

**Summary:** ParkLender is a parking space sharing app inspired by AirBnB.

**Key Feature Set:**
* Users can search for parking spots.
* Users can request to book a parking spot.
* Parking spot searches can be filtered by location and availability.
* Google Maps will support the spot search feature.
* Parking spots have reviews.
* **BONUS:** User/host profiles
* **BONUS:** Users and hosts can message each other.
* **BONUS:** Users can become hosts by listing a parking spot.
* **BONUS:** Users can view, edit, or delete their bookings.
* **BONUS:** Hosts can approve or deny a booking request.
* **BONUS:** Hosts can view, edit, or delete their listings.

### Wireframes

> *- `/wireframes`*

> *Links to wireframes of your application's UI views. Each wireframe should be a
basic representation of the layout and information presented in a view. If you
plan to use nested React components, clearly indicate the hierarchy in your
wireframes. We should be able to see every view of your website using your
wireframes, and how each view is reached.*

> _**NB**: You can use any tool you like to create your wireframes (pen and paper are
completely acceptable). If your writing looks like chicken scratches, try
[draw.io](https://www.draw.io/)._

See [wireframes][/wireframes] folder

### React Components

- `component-heirarchy.md`

In addition to the wireframes, you should diagram a tree indicating your
application's overall component structure.

Discuss how you will nest your components. If components will need containers, indicate what state and dispatch props they will need. For presentational components, discuss what props and state they will need.

Map out your React Routes with their respective components and paths.

See the sample project proposal for an example of this.

### Sample State

- `sample-state.md`

Create a basic illustration of your state shape. Think about what information
you need to store for your app to work, and how best to organize it to minimize
duplication and maximize ease of access.

### Redux Architecture

- `redux-structure.md`

Discuss how information will move through your application state and where it
will be stored.

Organize your discussion around each `slice` (i.e. reducer) of state that will
be needed. You should be able to use this document to trace an action starting
with where it was dispatched, through any middlewares and API utils involved,
through the reducer, and finally to the components that update as a result. This
is important because once you start implementing your redux loops, that's
precisely what you'll need to do.

### DB Schema

- `schema.md`

Link to a document outlining the database schema for your app. Build up the
schema by walking through your app's wireframes. Think carefully about what data
will be needed for each view and the best way to store that data. Make note
of any database-level validations and foreign key relationships.

### API Endpoints

- `api-endpoints.md`

Link to a page that lists your Rails API endpoints. Break these up between HTML
and JSON endpoints. Discuss what params, if any, will be needed for each
endpoint, and what information will be returned.

### Implementation Timeline

Create a section in your proposal README for each `phase` of your project to develop an implementation timeline.

Refer back to your MVP and group the features into logical phases with detailed lists of each task necessary to develop the feature. This will be
the road map for your application. Rather than building the entire project all
at once, you're going to implement one feature at a time. You should have a
working app at the end of each phase (even if not all of your features are in
yet). For each phase, write a brief game plan and list out any third-party APIs, front-end and back-end components you will need to implement.

## Submission

When you've finished setting up your full-stack project repo, add it to Progress Tracker and email your instructors (instructors-sf@appacademy.io or
instructors-ny@appacademy.io).  A TA will review each proposal and leave
their comments in issues on the project repo. Be prepared to respond to
feedback, and keep your README up to date as you make progress. Happy hunting!
