import { ADD_ROUTES } from '../actions/types';
import deduceRoutes from '../../utilities/deduceRoutes';

const DEFAULT_STATE = {
  routes: [],
  subRoutes: []
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_ROUTES:
      const newRoutes = deduceRoutes(
        action.routes.subRoutes ? state.subRoutes : state.routes,
        action.routes.routes || action.routes.subRoutes
      );

      if (newRoutes.length) {
        return Object.assign(state, {
          [action.routes.subRoutes ? 'subRoutes' : 'routes']: newRoutes
        });
      }

      return {
        ...state
      };

    default:
      return {
        ...state
      };
  }
};
