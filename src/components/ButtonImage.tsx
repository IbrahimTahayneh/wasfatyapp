import React, {memo} from 'react';
import type {GestureResponderEvent, ImageResizeMode} from 'react-native';
import styled from 'styled-components/native';
import {Image} from '../components';

interface ButtonImageProps {
  resizeMode?: ImageResizeMode | undefined;
  style?: any;
  imageStyle?: any;
  disabled?: boolean | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  source?: any;
  testID?: string;
  hitSlop?: null | number | undefined;
}
const TouchableOpacity = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(Image)<ButtonImageProps>`
  height: 100%;
  width: 100%;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
`;

export const ButtonImage = memo<ButtonImageProps>(
  ({
    resizeMode = 'contain',
    style,
    imageStyle,
    disabled = false,
    onPress,
    source = null,
    testID,
    hitSlop,
  }) => {
    return (
      <TouchableOpacity
        {...{style, disabled, onPress, hitSlop}}
        testID={testID}>
        <StyledImage resizeMode={resizeMode} style={imageStyle} {...{source}} />
      </TouchableOpacity>
    );
  },
);
