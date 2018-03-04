import React from 'react';
import { Route } from 'react-router-dom';
import DynamicImport from '../../utilities/dynamicImport';
import Loading from '../../utilities/loading';

const Home = props => (
  <DynamicImport load={() => import(/* webpackChunkName: "Home" */ '../../home/components')}>
    {(Component) => Component === null ? <Loading /> : <Component {...props} />}
  </DynamicImport>
);

const About = props => (
  <DynamicImport load={() => import(/* webpackChunkName: "About" */ '../../about')}>
    {(Component) => Component === null ? <Loading /> : <Component {...props} />}
  </DynamicImport>
);

const Contact = props => (
  <DynamicImport load={() => import(/* webpackChunkName: "Contact" */ '../../contact/components')}>
    {(Component) => Component === null ? <Loading /> : <Component {...props} />}
  </DynamicImport>
);

export default {
  routes: [
    <Route exact path="/" component={Home} key="home-component" />,
    <Route path="/about" component={About} key="about-component" />,
    <Route exact path="/contact" component={Contact} key="contact-component" />
  ]
};
