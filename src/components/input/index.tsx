import React from 'react';
import { StInput } from './input.style';
import * as yup from 'yup';

export type InputProps = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
};

function Input({ type, ...rest }: InputProps) {
  return <StInput type={type ?? 'text'} {...rest} />;
}

export default Input;
