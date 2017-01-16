import React, { PropTypes } from 'react';
import CustomInput from './customInput';
import CustomButton from './customButton';

const Login = ({ onLoginClick }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();

      const form = e.target;
      const login = form.elements.login.value;
      const password = form.elements.password.value;

      onLoginClick(login, password);
    }}
  >
    <h2>Login</h2>
    <CustomInput name="login" type="text" labelPlaceholder="User name" error="some text" />
    <CustomInput name="password" type="password" labelPlaceholder="Password" />
    <CustomButton className="btn btn-default" >
      Login
    </CustomButton>
  </form>
);

const { func } = PropTypes;

Login.propTypes = {
  onLoginClick: func,
};

export default Login;
