import { connect } from 'react-redux';
import { navigateToScreen } from '../../app/actions/creators';
import AboutComponent from '../components/about';

const mapDispatchToProps = dispatch => ({
  navigate: (path) => {
    dispatch(navigateToScreen(path));
  }
});

export default connect(null, mapDispatchToProps)(AboutComponent);