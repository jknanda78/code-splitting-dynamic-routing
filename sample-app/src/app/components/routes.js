import React from 'react';

export default ({ routes, subRoutes }) => {
  console.log('routes', routes);
  console.log('subRoutes', subRoutes);
  return (
    <div>
      {routes}
      <div>
        {subRoutes}
      </div>
    </div>
  );
}