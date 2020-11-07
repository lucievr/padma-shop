import React, { useState } from 'react';
import { connect } from 'react-redux';

import { signUpStart } from '../../redux/user/user.actions';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = ({ target: { name, value } }) => {
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
          data-lpignore='true'
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
          data-lpignore='true'
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
          data-lpignore='true'
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
          data-lpignore='true'
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
