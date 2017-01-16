import { login as loginEndpoint } from '../services/userService';
import { LOGIN } from '../constants/userConstants';

export const afterLogin = status => ({
  type: LOGIN,
  status,
});

export const login = ({ name, password }) => {
  /* dispatch => (
   loginEndpoint(name, password)
   .then(payload => !!payload && dispatch(afterLogin(payload)))
   ) */
  console.log(`${name}/${password}`);
  return afterLogin('success');
};

export default {};
