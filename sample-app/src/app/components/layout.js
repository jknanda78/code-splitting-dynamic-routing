import React from 'react';
import Nav from '../containers/nav';

export default props => (
  <main>
    <header>
      <Nav />
    </header>
    <section>{props.children}</section>
  </main>
);
