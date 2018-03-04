import { ADD_ROUTES, NAVIGATE_TO_SCREEN } from './types';

export const addRoutes = routes => ({
  type: ADD_ROUTES,
  routes
});

export const navigateToScreen = path => ({
  type: NAVIGATE_TO_SCREEN,
  path
});