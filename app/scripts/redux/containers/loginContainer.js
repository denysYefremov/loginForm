import { connect } from 'react-redux';
import login from '../../components/login';
import { login as loginAction } from '../../actions/formActions';

const mapStateToProps = state => ({
  status: state.status,
});

const mapDispatchToProps = dispatch => ({
  onLoginClick: (name, password) => {
    dispatch(loginAction({ name, password }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(login);
