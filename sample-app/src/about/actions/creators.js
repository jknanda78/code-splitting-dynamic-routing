import { NAVIGATE_TO_SCREEN } from './types';

export const navigateToScreen = path => ({
  type: NAVIGATE_TO_SCREEN,
  path
});
