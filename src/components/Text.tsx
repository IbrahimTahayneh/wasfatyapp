import React from 'react';
import {memo} from 'react';
import type {TextProps, TextStyle} from 'react-native';
import styled from 'styled-components/native';
import {Colors} from '../theme';
const StyledText = styled.Text`
  font-size: 17px;
  color: ${Colors.Black};
`;

export const Text = memo<TextProps & {children: React.ReactNode}>(props => (
  <StyledText {...props} style={props.style} testID={props.testID}>
    {props.children}
  </StyledText>
));

export type {TextStyle, TextProps};
