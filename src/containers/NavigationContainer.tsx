import * as React from 'react';
import {NavigationContainer as RNNavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from './LandingScreen';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

const NavigationContainer = () => {
  return (
    <RNNavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'WelcomeScreen'}
          component={LandingScreen}
          options={{headerShown: false, presentation: 'fullScreenModal'}}
        />
      </Stack.Navigator>
    </RNNavigationContainer>
  );
};

export default NavigationContainer;
