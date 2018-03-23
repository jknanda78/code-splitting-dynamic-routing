import { connect } from 'react-redux';
import { navigateToScreen } from '../actions/creators';
import Component from '../components/openings';

const mapDispatchToProps = dispatch => ({
  navigate: path => {
    dispatch(navigateToScreen(path));
  }
});

export default connect(null, mapDispatchToProps)(Component);
