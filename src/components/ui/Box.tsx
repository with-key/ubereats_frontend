import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  pd?: string;
  mg?: string;
  w?: string;
  h?: string;
};

const Container = styled.div<Omit<Props, 'children'>>`
  border: 1px solid red;
  padding: ${({ pd }) => pd};
  width: ${({ w }) => w ?? `100%`};
  height: ${({ h }) => h ?? `100%`};
`;

export default function Box({ children, ...rest }: Props) {
  return <Container {...rest}>{children}</Container>;
}
