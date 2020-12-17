import React, { FC } from 'react';
import './form-input.styles.scss';

type FormInputProps = {
  handleChange: () => void;
  label: string;
  value: string;
}

const FormInput: FC<FormInputProps> = ({ handleChange, label, value, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
