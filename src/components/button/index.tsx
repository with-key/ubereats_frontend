import React, { ReactNode } from 'react';
import { StButton } from './button.style';

export type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  isDisabled?: boolean;
};

export const Button = ({
  children,
  onClick,
  type,
  isDisabled,
}: ButtonProps) => {
  return (
    <StButton onClick={onClick} type={type ?? 'submit'} disabled={isDisabled}>
      {children}
    </StButton>
  );
};
