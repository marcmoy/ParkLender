import { applyMiddleware } from 'redux';
// Middlewares
import SessionMiddleware from '../middleware/session_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware
);

export default RootMiddleware;
