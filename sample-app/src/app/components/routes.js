import React from 'react';

export default ({ routes, subRoutes }) => {
  return (
    <div>
      {routes}
      <div>{subRoutes}</div>
    </div>
  );
};
