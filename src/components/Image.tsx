import React, {memo} from 'react';
import styled from 'styled-components/native';
import {Platform} from 'react-native';
import type {
  ImageProps as RNImageProps,
  NativeSyntheticEvent,
} from 'react-native';

interface ImageProps extends Omit<RNImageProps, 'source' | 'onLoad'> {
  source: any;
  onLoad?: (event: NativeSyntheticEvent<any>) => void;
  testID?: string;
}

const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.Image<{source: {uri: string}}>`
  height: 100%;
  width: 100%;
`;

const SVG = 'svg';

const getUrlExtension = (url: string) =>
  url?.split(/[#?]/)[0]?.split('.')?.pop()?.trim();

const isSvgUri = (source: ImageProps['source']) =>
  typeof source === 'string' && getUrlExtension(source) === SVG;

export const Image = memo<ImageProps>(
  ({
    style = {height: 30, width: 30},
    source,
    resizeMode = 'contain',
    ...rest
  }) => {
    const Source = typeof source === 'function' ? source : () => null;

    return typeof source === 'function' ||
      (Platform.OS !== 'web' && isSvgUri(source)) ? (
      (() => {
        try {
          var {SvgUri} = require('react-native-svg');
        } catch (error) {
          console.log('error in loading : ', {error});
        }
        return (
          <ImageContainer style={style} testID={rest.testID}>
            {isSvgUri(source) ? (
              <SvgUri width="100%" height="100%" uri={source} />
            ) : (
              <Source height={'100%'} width={'100%'} />
            )}
          </ImageContainer>
        );
      })()
    ) : (
      <ImageContainer style={style} testID={rest.testID}>
        <StyledImage
          source={
            typeof source === 'string'
              ? source
                ? {uri: source}
                : null
              : source
          }
          resizeMode={resizeMode}
          {...rest}
        />
      </ImageContainer>
    );
  },
);
