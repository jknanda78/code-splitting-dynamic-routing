import { Component } from 'react';
import { addRoutes } from '../app/actions/creators';
import store, { injectReducers  } from '../app/store';

const injectRoutes = (routes, store) => {
  store.dispatch(addRoutes(routes));
};

export default class DynamicImport extends Component {
  state = {
    component: null
  };

  componentWillMount() {
    const { load } = this.props;

    load().then((module) => {
      const { routes, component, reducers } = module;

      if (routes) {
        injectRoutes(routes, store);
      }

      if (reducers) {
        reducers.forEach((reducer) => {
          injectReducers(store, reducer.name, reducer.fn);
        });
      }

      this.setState({
        component: (component) ? component : module.default
      });

    });
  }

  render() {
    return this.props.children(this.state.component)
  }
}
