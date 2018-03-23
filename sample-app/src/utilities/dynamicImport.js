import { Component } from 'react';
import { addRoutes, navigateToScreen } from '../app/actions/creators';
import store, { injectReducers } from '../app/store';

/**
 * Hack for Browser refresh.
 * Sub-Routes needs to load asynchronously
 */
window.onload = function() {
  const path = window.location.pathname;
  const len = process.env.NODE_ENV === 'development' ? 2 : 3;

  if (path.split('/').length > len) {
    store.dispatch(navigateToScreen(path));
  }
};

const injectRoutes = (routes, store) => {
  store.dispatch(addRoutes(routes));
};

export default class DynamicImport extends Component {
  state = {
    component: null
  };

  componentWillMount() {
    const { load } = this.props;

    load().then(module => {
      const { routes, component, reducers } = module;

      if (reducers) {
        reducers.forEach(reducer => {
          injectReducers(store, reducer.name, reducer.fn);
        });
      }

      if (routes) {
        injectRoutes(routes, store);
      }

      this.setState({
        component: component ? component : module.default
      });
    });
  }

  render() {
    return this.props.children(this.state.component);
  }
}
