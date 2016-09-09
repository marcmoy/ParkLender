import { applyMiddleware } from 'redux';
// Middlewares
import SessionMiddleware from '../middleware/session_middleware';
import BookingMiddleware from '../middleware/booking_middleware';
import ReviewsMiddleware from '../middleware/reviews_middleware';
import SpotsMiddleware from '../middleware/spots_middleware';
import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SpotsMiddleware,
  BookingMiddleware,
  ReviewsMiddleware
  // loggerMiddleware
);

export default RootMiddleware;
