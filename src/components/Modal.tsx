import React from 'react';
import type {ViewStyle} from 'react-native';
import styled from 'styled-components/native';

export interface ModalProps {
  style?: ViewStyle;
  isVisible?: boolean;
  children?: React.ReactNode;
  animationType?: 'none' | 'slide' | 'fade' | undefined;
}

const SModal = styled.Modal``;

const View = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const Modal = (props: ModalProps) => (
  <SModal
    transparent
    visible={props.isVisible}
    animationType={props.animationType}>
    <View style={props.style}>{props.children}</View>
  </SModal>
);
