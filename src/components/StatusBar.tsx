import React, {memo} from 'react';
import {StatusBar as StatusBarRN} from 'react-native';
import styled from 'styled-components/native';
import {Colors} from '../theme';

export interface StatusBarProps {
  children?: React.ReactNode | null;
  barStyle?: 'dark-content' | 'light-content';
  backgroundColor?: string | undefined;
  iphoneXBottomBgColor?: string;
}

const RNStatusBar = styled(StatusBarRN)<
  Pick<StatusBarProps, 'backgroundColor'>
>`
  background-color: ${props => props.backgroundColor || 'transparent'};
`;

const TopSafeAreaView = styled.SafeAreaView<
  Pick<StatusBarProps, 'backgroundColor'>
>`
  background-color: ${props => props.backgroundColor || 'transparent'};
`;

const BottomSafeAreaView = styled.SafeAreaView<
  Pick<StatusBarProps, 'backgroundColor'>
>`
  background-color: ${props => props.backgroundColor || 'transparent'};
`;

export const StatusBar = memo<StatusBarProps>(props => (
  <>
    <RNStatusBar
      backgroundColor={props.backgroundColor || Colors.White}
      barStyle={props.barStyle || 'light-content'}
    />
    <TopSafeAreaView backgroundColor={props.backgroundColor || Colors.White} />
    {props.children}
    <BottomSafeAreaView
      backgroundColor={
        props.iphoneXBottomBgColor || props.backgroundColor || Colors.White
      }
    />
  </>
));
