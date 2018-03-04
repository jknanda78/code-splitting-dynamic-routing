export default (stateRoutes, newRoutes) => {
  return newRoutes.reduce((updatedRoute, route) => {
    if (updatedRoute.findIndex(item => item.key === route.key) === -1) {
      updatedRoute.push(route);
    }
  
    return updatedRoute;
  }, stateRoutes);
}