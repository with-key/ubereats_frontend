import React, { ReactNode } from 'react';
import Text from '../ui/Text';
import { StButton } from './button.style';

export type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  isDisabled?: boolean;
};

const Button = ({ children, onClick, type, isDisabled }: ButtonProps) => {
  console.log('btn re');
  return (
    <StButton onClick={onClick} type={type ?? 'submit'} disabled={isDisabled}>
      <Text variants="size16">{children}</Text>
    </StButton>
  );
};

export default React.memo(Button);
