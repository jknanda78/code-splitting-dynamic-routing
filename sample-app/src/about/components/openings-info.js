import React from 'react';

const Component = props => (
  <div>
    <h2>Currently looking at opening {props.match.params.id}</h2>
  </div>
);

export default Component;
