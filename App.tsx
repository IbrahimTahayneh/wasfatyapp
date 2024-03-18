/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import {FONT_FAMILIES, FONT_SIZES} from './src/theme';
import styled from 'styled-components/native';
import {Text} from './src/components/Text';
import {Body} from './src/components/Typography/Body';
import {Heading} from './src/components/Typography/Heading';
import {Typography} from './src/components/Typography';

const StyledView = styled.View`
  background-color: lavender;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-family: ${FONT_FAMILIES.SEMI_BOLD};
  font-size: ${FONT_SIZES.XL}px;
`;

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    // <SafeAreaView>
    <StyledView>
      <StyledText style={styles.testfont}>
        {'This text uses a quick sand font'}
      </StyledText>
      <Text>Hello</Text>
      <Body font="L-SemiBold"> heelo </Body>
      <Heading font="XL-SemiBold"> text="Helo" </Heading>
      <Typography.Body font="L-Light">{'Hlllll'}</Typography.Body>
    </StyledView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lavender',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  testfont: {
    fontFamily: FONT_FAMILIES.SEMI_BOLD,
    fontSize: FONT_SIZES.XL,
  },
});
export default App;
