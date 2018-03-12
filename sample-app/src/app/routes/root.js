import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import { history } from '../store';
import AppRoutes from '../containers/routes';
import Layout from '../components';

/**
 * Represents Root component.
 * @function
 * @param {object} store - store passed from parent component
 */
const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Layout>
        <Switch>
          <AppRoutes />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({}).isRequired
};

export default Root;
