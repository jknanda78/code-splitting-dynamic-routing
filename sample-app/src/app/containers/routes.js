import { connect } from 'react-redux';
import RoutesComponent from '../components/routes';

const mapStateToProps = (state, props) => {
  return {
    ...props,
    routes: state.appReducer.routes,
    subRoutes: state.appReducer.subRoutes
  }
};

export default connect(mapStateToProps)(RoutesComponent);