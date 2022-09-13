import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

type Props = {
  children: ReactNode;
  gap?: number;
  jc?: 'cetner' | 'start' | 'end' | 'space-between';
  ai?: 'cetner' | 'start' | 'end';
  dir?: 'row' | 'column';
};

const Container = styled.div<Omit<Props, 'children'>>`
  display: flex;
  gap: ${({ gap }) => `${gap}px`};
  flex-direction: ${({ dir }) => dir};
`;

export const Flex = ({ children, ...rest }: Props) => {
  return <Container {...rest}>{children}</Container>;
};
