import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

export const fonts = {
  size32: () =>
    css`
      font-size: 32px;
      font-weight: 700;
    `,
  size20: () =>
    css`
      font-size: 20px;
      font-weight: 700;
    `,
  size16: () =>
    css`
      font-size: 16px;
    `,
  size14: () =>
    css`
      font-size: 14px;
    `,
  size10: () =>
    css`
      font-size: 10px;
    `,
};

type FontStyles = keyof typeof fonts;
type Props = {
  children: ReactNode;
  variants: FontStyles;
  align?: 'center' | 'right' | 'left';
};

const StText = styled.div<Pick<Props, 'variants' | 'align'>>`
  width: 100%;
  text-align: ${({ align }) => align ?? 'center'};
  ${({ variants }) => {
    switch (variants) {
      case 'size10':
        return fonts.size10;
      case 'size14':
        return fonts.size14;
      case 'size16':
        return fonts.size16;
      case 'size20':
        return fonts.size20;
      case 'size32':
        return fonts.size32;
      default:
        return fonts.size14;
    }
  }};
`;

export default function Text({ children, variants }: Props) {
  return <StText variants={variants}>{children}</StText>;
}
