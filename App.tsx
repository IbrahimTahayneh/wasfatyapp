/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FONT_FAMILIES, FONT_SIZES} from './src/theme';
// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.testfont}>This text uses a quick sand font</Text>
    </View>
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
