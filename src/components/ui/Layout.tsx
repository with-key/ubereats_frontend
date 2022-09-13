import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

type Props = {
  children: ReactNode;
};

const Container = styled.section`
  width: 100%;
  height: 100vh;
  border: 1px solid blue;
`;

export default function Layout({ children }: Props) {
  return <Container>{children}</Container>;
}
