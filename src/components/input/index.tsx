import React, { useState } from 'react';
import styled from '@emotion/styled';
import { StInput } from './input.style';
import useInput from './input.hook';

export type InputProps = {
  name: string;
  placeholder?: string;
};

export const Input = ({ name, placeholder }: InputProps) => {
  const { value, onChangeHandler } = useInput('');

  return <StInput value={value} onChange={onChangeHandler} />;
};
