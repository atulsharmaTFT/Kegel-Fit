import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {About, Home, Progress, Workout} from '../containers/Tab-screens';
import {hideHeader} from './helper';
import {Login, Register} from '../containers/Auth';
import {Welcome} from '../containers/Onboarding/Welcome';

const LoginStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const TabStack = createBottomTabNavigator();
const OnBoardingStack = createNativeStackNavigator();

export const Tabs = () => {
  return (
    <TabStack.Navigator screenOptions={hideHeader} initialRouteName={'Home'}>
      <TabStack.Screen name="Home" component={Home} />
      <TabStack.Screen name="Workout" component={Workout} />
      <TabStack.Screen name="Progress" component={Progress} />
      <TabStack.Screen name="About" component={About} />
    </TabStack.Navigator>
  );
};
export const AuthStack = () => {
  return (
    <LoginStack.Navigator initialRouteName="login">
      <LoginStack.Screen name="login" component={Login} />
      <LoginStack.Screen name="register" component={Register} />
    </LoginStack.Navigator>
  );
};
export const OnboardingStack = () => {
  return (
    <OnBoardingStack.Navigator
      screenOptions={hideHeader}
      initialRouteName="welcome">
      <OnBoardingStack.Screen name="welcome" component={Welcome} />
    </OnBoardingStack.Navigator>
  );
};
export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="TabStack">
      <Stack.Screen name="TabStack" component={Tabs} options={hideHeader} />
    </Stack.Navigator>
  );
};
