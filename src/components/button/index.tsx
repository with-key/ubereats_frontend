import React, { ReactNode } from 'react';
import { StButton } from './button.style';

export type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

export const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <StButton onClick={onClick} type={type ?? 'submit'}>
      {children}
    </StButton>
  );
};
