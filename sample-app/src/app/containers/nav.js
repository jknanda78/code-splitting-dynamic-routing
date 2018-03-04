import { connect } from 'react-redux';
import { navigateToScreen } from '../actions/creators';
import NavComponent from '../components/nav';

const mapDispatchToProps = dispatch => ({
  navigate: (path) => {
    dispatch(navigateToScreen(path));
  }
});

export default connect(null, mapDispatchToProps)(NavComponent);