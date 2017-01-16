import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReduser';

const reducers = combineReducers(
  {
    user: userReducer,
  },
);

const getAvailableDevTools = () => {
  if (process.env.NODE_ENV === 'development' && window.devToolsExtension) {
    return window.devToolsExtension();
  }

  return f => f;
};

const store = createStore(
  reducers,
  getAvailableDevTools(),
);

export default store;
