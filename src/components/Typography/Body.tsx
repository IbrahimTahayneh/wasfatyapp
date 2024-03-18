import React from 'react';
import styled, {css} from 'styled-components/native';
import {Text, TextProps} from '../Text';
import {FONT_FAMILIES, Colors} from '../../theme';

type Sizes = 'XS' | 'S' | 'M' | 'L';
type Families = 'Light' | 'Regular' | 'Medium' | 'SemiBold';

export interface BodyProps extends TextProps {
  children?: React.ReactNode;
  font:
    | `${Extract<Sizes, 'XS'>}-${Exclude<Families, 'SemiBold'>}`
    | `${Extract<Sizes, 'S'>}-${Exclude<Families, 'SemiBold'>}`
    | `${Extract<Sizes, 'M'>}-${Families}`
    | `${Extract<Sizes, 'L'>}-${Families}`;
}

const SizesStyles = {
  XS: css`
    font-size: 12px;
    line-height: 16px;
  `,
  S: css`
    font-size: 14px;
    line-height: 20px;
  `,
  M: css`
    font-size: 16px;
    line-height: 24px;
  `,
  L: css`
    font-size: 18px;
    line-height: 26px;
  `,
};

const FamiliesStyles = {
  Light: css`
    font-weight: 300;
    font-family: ${FONT_FAMILIES.LIGHT};
  `,
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

const getStyle = (font: BodyProps['font']) => {
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

const SText = styled(Text)<Pick<BodyProps, 'font'>>`
  ${props => getStyle(props.font)}
  color: ${Colors.Black}
`;

export const Body = ({children, ...restProps}: BodyProps) => {
  return <SText {...restProps}>{children}</SText>;
};
