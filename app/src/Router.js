/**
*
*
*/
import React, { Component } from "react";
import { View, StyleSheet, Text } from 'react-native';
import {createStackNavigator, createAppContainer,
 createSwitchNavigator, createBottomTabNavigator} from 'react-navigation';
import { fromRight, fromLeft, fromBottom, fromTop } from 'react-navigation-transitions';

import SplashScreen from './splash/SplashScreen'
import OnBoardInScreen from './splash/OnBoardInScreen'
import LoginScreen from './user_auth/LoginScreen'
import RegisterScreen from './user_auth/RegisterScreen'
import ResetPasswordScreen from './user_auth/ResetPasswordScreen'
import SetNewPasswordScreen from './user_auth/SetNewPasswordScreen'
import VerifyEmailScreen from './user_auth/VerifyEmailScreen'
import VerifyAccountScreen from './user_auth/VerifyAccountScreen'

import HomeScreen from './search/HomeScreen' // explorer

import MyProfileScreen from './profile/MyProfileScreen'


const DELAY_TIME = 700;
const UserAuth = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Register:{
      screen: RegisterScreen
    },
    ResetPassword:{
      screen: ResetPasswordScreen
    },
    SetNewPassword:{
      screen: SetNewPasswordScreen
    },
    VerifyEmail:{
      screen: VerifyEmailScreen
    },
    VerifyAccount:{
      screen: VerifyAccountScreen
    },
  },
  {      
      headerMode: 'none',
      transitionConfig: () => fromRight(DELAY_TIME),
  },
);

const MainActivity = createStackNavigator(
  {
    Home:{
      screen:HomeScreen
    },
  },
  {      
      headerMode: 'none',
      transitionConfig: () => fromRight(DELAY_TIME),
  },
);

const Profiles = createStackNavigator(
  {
    Profile:{
      screen:MyProfileScreen
    },
  },
  {      
      headerMode: 'none',
      transitionConfig: () => fromRight(DELAY_TIME),
  },
);

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  OnBoardIn:OnBoardInScreen,
  UserAuth: UserAuth,
  MainActivity : MainActivity,
  Profiles : Profiles,
});

export default createAppContainer(InitialNavigator);
