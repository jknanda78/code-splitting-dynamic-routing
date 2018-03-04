import { ADD_ROUTES } from '../actions/types';

const DEFAULT_STATE = {
  routes: []
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_ROUTES:
      const newRoutes = action.routes.reduce((updatedRoute, route) => {
        if (updatedRoute.findIndex(item => item.key === route.key) === -1) {
          updatedRoute.push(route);
        }

        return updatedRoute;
      }, state.routes);

      if (newRoutes.length) {
        return Object.assign(state, { routes: newRoutes });
      }

      return {
        ...state
      }
      
    default:
      return {
        ...state
      }
  }
}