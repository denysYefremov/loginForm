import Immutable from 'immutable';
import { LOGIN } from '../../constants/userConstants';

const userReduser = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return action;
    default:
      return state;
  }
};

export default userReduser;
