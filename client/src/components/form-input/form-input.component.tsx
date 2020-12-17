import React, { FC, FormEvent } from 'react';
import './form-input.styles.scss';

type FormInputProps = {
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  label: string;
  value: string;
  name: string;
  type: string;
  required?: boolean;
}

const FormInput: FC<FormInputProps> = ({ onChange, label, value, name, type, required, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={onChange} name={name} type={type} required={required} {...otherProps} />
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
