import React, { useState, FC, FormEvent, SyntheticEvent } from 'react';
import { connect } from 'react-redux';

import {
  googleSignInStart,
  emailSignInStart,
  Dispatch,
  UserCredentials,
} from '../../redux/user/user.actions';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { ReactComponent as GoogleIcon } from '../../assets/google.svg';

import './sign-in.styles.scss';

type SignInProps = {
  googleSignInStart: () => void;
  emailSignInStart: (userCredentials: UserCredentials) => void;
}

const SignIn: FC<SignInProps> = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    emailSignInStart({ email, password });
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit} className='sign-in-form'>
        <FormInput
          name='email'
          type='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            <span className='google-icon'>
              <GoogleIcon />
            </span>
            <span>Sign in</span>
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (userCredentials: UserCredentials) =>
    dispatch(emailSignInStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignIn);
