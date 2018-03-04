import { Component } from 'react';
import { addRoutes } from '../app/actions/creators';
// import store from '../app/store';

const injectRoutes = (routes, store) => {
  store.dispatch(addRoutes(routes));
};

export default class DynamicImport extends Component {
  state = {
    component: null
  };

  componentWillMount() {
    this.props.load().then((module) => {
      const { routes, component, store } = module;

      if (routes) {
        injectRoutes(routes, store);
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
