import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

type Props = {
  children: ReactNode;
};

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #50586c;
`;

export default function Layout({ children }: Props) {
  return <Container>{children}</Container>;
}
