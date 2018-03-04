import { connect } from 'react-redux';
import RoutesComponent from '../components/routes';

const mapStateToProps = (state, props) => {
  return {
    ...props,
    routes: state.appReducer.routes
  }
};

export default connect(mapStateToProps)(RoutesComponent);