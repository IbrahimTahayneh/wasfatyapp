import React, {memo, useEffect, useRef, useState} from 'react';
import type {ViewStyle, ImageProps} from 'react-native';
import styled, {css} from 'styled-components/native';
import {ButtonImage, Typography} from '../components';
import {Colors} from '../theme';

interface HeaderProps {
  style?: ViewStyle;
  title?: string | React.ReactNode;
  statusLabel?: string;
  leftImageSrc?: ImageProps['source'];
  rightImageSrc?: ImageProps['source'];
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  testIDRightImg?: any;
  testIDLeftImg?: any;
  testIDHeaderTitle?: any;
}

interface CustomProps {
  isLeftComponentExist?: boolean;
  isRightComponentExist?: boolean;
  onPress?: () => void;
}

const Container = styled.View`
  min-height: 60px;
  width: 100%;
`;

const LeftContainer = styled.View<CustomProps>`
  min-width: 44px;
  margin-right: 8px;
  justify-content: center;
  padding-left: ${20}px;
`;

const RightContainer = styled.View<CustomProps>`
  min-width: 44px;
  margin-left: 8px;
  justify-content: center;
  padding-right: ${20}px;
`;

const LeftButtonImage = styled(ButtonImage).attrs({
  imageStyle: {height: 24, width: 24},
})<any>`
  ${css`
    height: 100%;
  `}
`;

const RightButtonImage = styled(LeftButtonImage)``;

const MiddleContainer = styled.View<{ref?: any}>`
  flex: 1;
`;

const Title = styled(Typography.Body)`
  color: ${Colors.Black};
  text-align: center;
`;

const StatusLabel = styled(Typography.Body)`
  color: ${Colors.SuccessMain};
  align-self: center;
  padding-top: ${2}px;
  padding-bottom: ${4}px;
`;
const InnerContainer = styled.View<{
  height?: number;
  statusExist?: boolean;
}>`
  flex-direction: row;
  align-items: center;
  flex: 1;
  padding-top: 4px;
  min-height: ${props =>
    (props?.height || 60) > 50 && props?.statusExist ? 70 : 60}px;
  background-color: ${Colors.White};
`;

export const Header = memo<HeaderProps>(props => {
  const [height, setHeight] = useState(60);
  const ref = useRef();
  useEffect(() => {
    //to get the height of the middleContainer since it's height changes according to the title in it
    //@ts-ignore
    setHeight(ref?.current?.clientHeight || 0);
    //@ts-ignore
  }, [ref?.current?.clientHeight]);
  return (
    <Container>
      <InnerContainer
        style={props.style}
        height={height}
        statusExist={props?.statusLabel ? true : false}>
        <LeftContainer
          isLeftComponentExist={props.leftComponent ? true : false}>
          {props.leftImageSrc ? (
            <LeftButtonImage
              testID={props.testIDLeftImg}
              onPress={props.onLeftPress}
              source={props.leftImageSrc}
            />
          ) : (
            props.leftComponent
          )}
        </LeftContainer>
        <MiddleContainer ref={ref}>
          <Title
            font={'L-Medium'}
            numberOfLines={2}
            testID={props.testIDHeaderTitle}>
            {props.title}
          </Title>
          {props.statusLabel ? (
            <StatusLabel font="XS-Regular">{props.statusLabel}</StatusLabel>
          ) : null}
        </MiddleContainer>
        <RightContainer
          isRightComponentExist={props.rightComponent ? true : false}>
          {props.rightImageSrc ? (
            <RightButtonImage
              testID={props.testIDRightImg}
              onPress={props.onRightPress}
              source={props.rightImageSrc}
            />
          ) : (
            props.rightComponent
          )}
        </RightContainer>
      </InnerContainer>
    </Container>
  );
});

export type {HeaderProps};
