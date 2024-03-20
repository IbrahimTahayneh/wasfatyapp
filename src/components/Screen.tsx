import React from 'react';
import {Platform, ViewStyle, ScrollViewProps} from 'react-native';
import {StatusBar, Loading, Header, StatusBarProps} from '../components';
import styled, {css} from 'styled-components/native';
import {images} from '../assets';
import {Colors} from '../theme';

export interface ScreenProps extends StatusBarProps {
  children?: React.ReactNode | null;
  style?: ViewStyle;
  barStyleBackgroundColor?: StatusBarProps['backgroundColor'];
  scrollable?: boolean;
  isLoading?: boolean;
  withHeader?: boolean;
  headerTitle?: string | React.ReactNode;
  statusLabel?: string;
  headerColor?: string;
  headerLeftComponent?: React.ReactNode | null;
  headerRightComponent?: React.ReactNode | null;
  headerLeftImageSrc?: any; //TODO:fix it
  headerRightImageSrc?: any; //TODO:fix it
  testIDRightImg?: any;
  testIDLeftImg?: any;
  testIDHeaderTitle?: any;
  onPressHeaderLeft?: () => void;
  onPressHeaderRight?: () => void;
  withKeyboardAvoidingView?: boolean;
  keyboardShouldPersistTaps?: ScrollViewProps['keyboardShouldPersistTaps']; //TODO:fix it
}

interface CustomProps {
  headerColor?: string;
}

const RNKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {flexGrow: 1},
})`
  flex: 1;
`;

const ChildrenContainer = styled.View`
  flex: 1;
  background-color: ${Colors.White};
`;

const SHeader = styled(Header)<Pick<CustomProps, 'headerColor'>>`
  ${props =>
    props.headerColor
      ? css`
          background-color: ${props.headerColor};
        `
      : ''}
`;

export const Screen = React.memo<ScreenProps>(
  ({withHeader = true, headerLeftImageSrc = images.backButton, ...rest}) => {
    const _renderContents = (): React.ReactNode => (
      <ChildrenContainer style={rest.style}>
        {withHeader ? (
          <SHeader
            title={rest.headerTitle}
            statusLabel={rest.statusLabel}
            headerColor={rest.headerColor}
            leftImageSrc={headerLeftImageSrc}
            onLeftPress={rest.onPressHeaderLeft}
            rightImageSrc={rest.headerRightImageSrc}
            onRightPress={rest.onPressHeaderRight}
            leftComponent={rest.headerLeftComponent}
            rightComponent={rest.headerRightComponent}
            testIDHeaderTitle={rest.testIDHeaderTitle}
            testIDLeftImg={rest.testIDLeftImg}
            testIDRightImg={rest.testIDRightImg}
          />
        ) : null}
        {rest.children}
      </ChildrenContainer>
    );

    const getContainers = () => {
      let containers = _renderContents();

      if (rest.scrollable) {
        containers = (
          <ScrollView
            keyboardShouldPersistTaps={rest.keyboardShouldPersistTaps}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}
            bounces={false}>
            {containers}
          </ScrollView>
        );
      }

      if (rest.withKeyboardAvoidingView) {
        containers = (
          <RNKeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            {containers}
          </RNKeyboardAvoidingView>
        );
      }

      return containers;
    };

    return (
      <StatusBar
        backgroundColor={rest.barStyleBackgroundColor}
        barStyle={rest.barStyle}
        iphoneXBottomBgColor={rest.iphoneXBottomBgColor}>
        {getContainers()}
        {rest.isLoading ? <Loading /> : null}
      </StatusBar>
    );
  },
);
