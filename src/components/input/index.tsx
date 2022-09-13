import React from 'react';
import { StInput } from './input.style';

export type InputProps = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
};

export const Input = ({ type, ...rest }: InputProps) => {
  return <StInput type={type ?? 'text'} {...rest} />;
};
