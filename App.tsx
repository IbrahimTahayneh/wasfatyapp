import React from 'react';
// import type {PropsWithChildren} from 'react';
import {images} from './src/assets';
import {ImageBackground} from 'react-native';
import {PrimaryButton, Screen} from './src/components';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <Screen
      // withHeader={false}
      barStyleBackgroundColor="gray"
      barStyle="dark-content"
      headerColor="yellow">
      <ImageBackground
        source={images.splashScreen}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        {/* <StatusBar barStyle="light-content" backgroundColor={Colors.Black} /> */}
        <PrimaryButton text={'hello ibrahim'} withIcon />
      </ImageBackground>
    </Screen>
  );
}

export default App;
