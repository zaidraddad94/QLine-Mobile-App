import React from 'react';

import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SignInScreen from '../screens/SignInScreen ';


const AppStack = createStackNavigator({ Home: MainTabNavigator});
const AuthStack = createStackNavigator({ SignIn: SignInScreen });


export default  createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  //AuthLoading: AuthLoadingScreen,
  // App: AppStack,
  // Auth: AuthStack
   Main: MainTabNavigator,
}
// {
//   initialRouteName: 'AuthLoading',
// }

);