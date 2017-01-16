import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './scripts/redux/store';
import Login from './scripts/redux/containers/loginContainer';
import styles from './styles/index.less';

render(
  <Provider store={store}>
    <div className="centered-container">
      <Login />
    </div>
  </Provider>,
  document.getElementById('root'),
);
