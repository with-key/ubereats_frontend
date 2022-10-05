import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function FormError({ children }: Props) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  font-size: 14px;
  color: red;
  font-weight: 700;
`;

export default FormError;
