import React from 'react';
import styled, {css} from 'styled-components/native';
import {Text, TextProps} from '../Text';
import {Colors, FONT_FAMILIES} from '../../theme';

type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';
type Families = 'Regular' | 'Medium' | 'SemiBold';

export interface HeadingProps extends TextProps {
  children?: React.ReactNode;
  font:
    | `${Extract<Sizes, 'S'>}-${Families}`
    | `${Extract<Sizes, 'M'>}-${Families}`
    | `${Extract<Sizes, 'L'>}-${Families}`
    | `${Extract<Sizes, 'XL'>}-${Exclude<Families, 'Regular'>}`
    | `${Extract<Sizes, 'XXL'>}-${Exclude<Families, 'Regular'>}`;
}

const SizesStyles = {
  S: css`
    font-size: 20px;
    line-height: 28px;
  `,
  M: css`
    font-size: 24px;
    line-height: 34px;
  `,
  L: css`
    font-size: 26px;
    line-height: 36px;
  `,
  XL: css`
    font-size: 28px;
    line-height: 36px;
  `,
  XXL: css`
    font-size: 36px;
    line-height: 44px;
  `,
};

const FamiliesStyles = {
  Regular: css`
    font-weight: 400;
    font-family: ${FONT_FAMILIES.REGULAR};
  `,
  Medium: css`
    font-weight: 500;
    font-family: ${FONT_FAMILIES.MEDIUM};
  `,
  SemiBold: css`
    font-weight: 600;
    font-family: ${FONT_FAMILIES.SEMI_BOLD};
  `,
};

const getStyle = (font: HeadingProps['font']) => {
  const [size, family] = font.split('-') as [Sizes, Families];
  const sizeStyle = SizesStyles[size];
  const familyStyle = FamiliesStyles[family];

  if (!sizeStyle || !familyStyle) {
    throw new Error(`Invalid font: ${font}`);
  }

  return css`
    ${sizeStyle}
    ${familyStyle}
  `;
};

const SText = styled(Text)<Pick<HeadingProps, 'font'>>`
  ${props => getStyle(props.font)}
  color: ${Colors.Black};
`;

export const Heading = ({children, ...restProps}: HeadingProps) => {
  return <SText {...restProps}>{children}</SText>;
};
