import React from 'react';
import { withRouter } from 'react-router-dom';
import Nav from '../containers/nav';

const Component = props => (
  <main>
    <header>
      <Nav />
    </header>
    <section>{props.children}</section>
  </main>
);

export default withRouter(Component);
