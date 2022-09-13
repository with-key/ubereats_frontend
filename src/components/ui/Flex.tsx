import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

type Props = {
  children: ReactNode;
  gap?: number;
  jc?: 'center' | 'start' | 'end' | 'space-between';
  ai?: 'center' | 'start' | 'end';
  dir?: 'row' | 'column';
};

const Container = styled.div<Omit<Props, 'children'>>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${({ jc }) => jc ?? 'center'};
  align-items: ${({ ai }) => ai ?? 'center'};
  gap: ${({ gap }) => `${gap}px`};
  flex-direction: ${({ dir }) => dir ?? 'row'};
`;

export const Flex = ({ children, ...rest }: Props) => {
  return <Container {...rest}>{children}</Container>;
};
