import React, {memo} from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {Modal} from '.';
interface LoadingProps {
  backgroundColor?: string;
  indicatorColor?: string;
  indicatorSize?: number | 'small' | 'large' | undefined;
}
const SModal = styled(Modal)`
  justify-content: center;
  align-items: center;
`;
export const Loading = memo<LoadingProps>(
  ({
    backgroundColor = '',
    indicatorColor = 'white',
    indicatorSize = 'large',
  }) => (
    <SModal {...{backgroundColor}}>
      <ActivityIndicator size={indicatorSize} color={indicatorColor} />
    </SModal>
  ),
);
