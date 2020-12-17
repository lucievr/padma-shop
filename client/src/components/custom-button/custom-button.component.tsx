import React, { FC } from 'react';
import './custom-button.styles.scss';

type CustomButtonProps = {
  onClick: () => void;
  isGoogleSignIn?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

const CustomButton: FC<CustomButtonProps> = ({ children, onClick, isGoogleSignIn, type }) => (
  <button
    className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

export default CustomButton;
