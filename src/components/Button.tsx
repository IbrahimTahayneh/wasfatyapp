import React, {memo} from 'react';
import styled from 'styled-components/native';
import {Image, Typography} from '../components';
import {Colors} from '../theme';
import {images} from '../assets';
import type {TextProps} from './Text';
import type {TouchableOpacityProps} from 'react-native';

const TouchableOpacity = styled.TouchableOpacity``;

const _BaseButtonWrapper = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
`;

interface ButtonProps extends TouchableOpacityProps {
  text?: string | React.ReactNode;
  textStyle?: TextProps['style'];
  testID?: string;
}

const _BaseText = styled(Typography.Body)<{disabled?: boolean}>`
  opacity: ${props => (props.disabled ? 0.8 : 1)};
`;

export const Button = memo<ButtonProps>(props => (
  <TouchableOpacity
    style={props.style}
    disabled={props.disabled}
    onPress={props.onPress}
    testID={props.testID}>
    <_BaseText
      disabled={props.disabled}
      style={props.textStyle}
      font="M-Medium">
      {props.text}
    </_BaseText>
  </TouchableOpacity>
));

export type {ButtonProps};

/**
 * PrimaryButton
 */
interface PrimaryButtonProps extends ButtonProps {
  withIcon?: boolean;
  icon?: string;
  testID?: string;
}

const _PrimaryTouchableOpacity = styled(_BaseButtonWrapper)<{
  isMobile?: boolean;
}>`
  flex-direction: row;
  /* height: ${props => (props.isMobile ? 50 : 42)}px; */
  height: 60px;
  background-color: ${props =>
    props.disabled ? Colors.Gray_3 : Colors.PrimaryMain};
  padding: ${15}px ${50}px;
  /* width: 90%; */
  margin: 10px auto;
  border-radius: 10px;
`;

const _PrimaryText = styled(Typography.Body)<{disabled?: boolean}>`
  color: ${Colors.White};
  font-weight: 600;
`;

const _PrimaryImage = styled(Image)<any>`
  margin-left: 8px;
  height: 20px;
  width: 20px;
  opacity: ${props => (props.disabled ? 0.8 : 1)};
`;

export const PrimaryButton = memo<PrimaryButtonProps>(props => {
  return (
    <_PrimaryTouchableOpacity
      style={props.style}
      disabled={props.disabled}
      onPress={props.onPress}
      testID={props.testID}>
      <_PrimaryText
        font="M-Regular"
        numberOfLines={1}
        disabled={props.disabled}
        style={props.textStyle}>
        {props.text}
      </_PrimaryText>
      {props.withIcon ? (
        <_PrimaryImage
          disabled={props.disabled}
          source={props.icon || images.rightArrow}
        />
      ) : null}
    </_PrimaryTouchableOpacity>
  );
});

export type {PrimaryButtonProps};
