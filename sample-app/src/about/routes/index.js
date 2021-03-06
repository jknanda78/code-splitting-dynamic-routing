import React from 'react';
import { Route } from 'react-router-dom';
import DynamicImport from '../../utilities/dynamicImport';
import Loading from '../../utilities/loading';

const Openings = props => (
  <DynamicImport
    load={() =>
      import(/* webpackChunkName: "Openings" */ '../../about/containers/openings')
    }
  >
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);

const OpeningsInfo = props => (
  <DynamicImport
    load={() =>
      import(/* webpackChunkName: "OpeningsInfo" */ '../../about/components/openings-info')
    }
  >
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);

const Team = props => (
  <DynamicImport
    load={() =>
      import(/* webpackChunkName: "Team" */ '../../about/components/team')
    }
  >
    {Component => (Component === null ? <Loading /> : <Component {...props} />)}
  </DynamicImport>
);

export default {
  subRoutes: [
    <Route
      exact
      path="/about/team"
      component={Team}
      key="about-team-component"
    />,
    <Route
      exact
      path="/about/openings"
      component={Openings}
      key="about-openings-component"
    />,
    <Route
      exact
      path="/about/openings/:id"
      component={OpeningsInfo}
      key="about-openings-info-component"
    />
  ]
};
