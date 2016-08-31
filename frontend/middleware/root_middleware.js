import { applyMiddleware } from 'redux';
// Middlewares
import SessionMiddleware from '../middleware/session_middleware';
import SpotsMiddleware from '../middleware/spots_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  SpotsMiddleware
);

export default RootMiddleware;
