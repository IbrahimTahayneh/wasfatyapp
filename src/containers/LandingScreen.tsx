import React from 'react';
import styled from 'styled-components/native';
import {images} from '../assets';
import {Image, PrimaryButton, StatusBar, Text, Typography} from '../components';
import {Colors, FONT_FAMILIES, FONT_SIZES} from '../theme';

const ImageContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
`;

const Logo = styled(Image)`
  width: 100px;
  height: 100px;
  margin-top: 55px;
  margin-bottom: 15px;
`;
const SubtitleImage = styled(Typography.Body)`
  color: ${Colors.White};
`;
const ContainerTitle = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;
const Title = styled(Text)`
  font-family: ${FONT_FAMILIES.SEMI_BOLD};
  font-size: ${FONT_SIZES.XXXXL}px;
  line-height: 60px;
  font-weight: 600;
  color: ${Colors.White};
  text-align: center;
  margin-bottom: 20px;
`;
const Subtitle = styled(Typography.Body)`
  color: ${Colors.White};
`;
const StartButton = styled(PrimaryButton)`
  font-family: ${FONT_FAMILIES.SEMI_BOLD};
  font-size: ${FONT_SIZES.M}px;
  font-weight: 600;
  line-height: 24px;
  width: 65%;
  bottom: 90px;
  position: absolute;
`;
const LandingScreen = () => {
  return (
    <ImageContainer source={images.welcomeBG}>
      <StatusBar barStyle="light-content" />
      <Logo source={images.logo} />
      <SubtitleImage font="L-SemiBold">{'100K+ Premium Recipe'}</SubtitleImage>
      <ContainerTitle>
        <Title>Get{'\n'}Cooking</Title>
        <Subtitle font="M-Regular">
          {'Simple way to find Tasty Recipe'}
        </Subtitle>
      </ContainerTitle>
      <StartButton withIcon text="Start Cooking" />
    </ImageContainer>
  );
};

export default LandingScreen;
