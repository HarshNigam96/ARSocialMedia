import React, { Component } from 'react';
import { Image, Platform, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../../screens/Welcome';
import AccountCreated from '../../screens/AccountCreated';
import SignUpDefault from '../../screens/SignUpDefault';
import SignIn from '../../screens/SignIn';
import SignUp from '../../screens/SignUp';
import VerificationScreen from '../../screens/VerificationScreen';
import ForgotPassword from '../../screens/ForgotPassword';
import ResetPassword from '../../screens/ResetPassword';
import PolicyScreen from '../../screens/PolicyScreen';
import IMAGES from '../../common/constants/images';
import {
  getResponsiveHeight,
  getResponsiveWidth,
} from '../../common/helper/utils';
const Stack = createStackNavigator();

export default class AuthNavigator extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccountCreated"
          component={AccountCreated}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpDefault"
          component={SignUpDefault}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerTitle:"Sign up",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTitleStyle: {
              textAlign: 'center',
              right: Platform.OS === 'android' ? getResponsiveWidth(8) : 0,
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  resizeMode="contain"
                  source={IMAGES.BACK_ARROW}
                  style={{
                    marginLeft: getResponsiveWidth(6),
                    height: getResponsiveHeight(2),
                    width: getResponsiveWidth(5),
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
          options={{
            headerTitle: 'Enter Verification Code ',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTitleStyle: {
              textAlign: 'center',
              right: Platform.OS === 'android' ? getResponsiveWidth(8) : 0,
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => this.props.navigation.navigate("SignUpDefault")}>
                <Image
                  resizeMode="contain"
                  source={IMAGES.BACK_ARROW}
                  style={{
                    marginLeft: getResponsiveWidth(6),
                    height: getResponsiveHeight(2),
                    width: getResponsiveWidth(5),
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Policy"
          component={PolicyScreen}
          options={({ route }) => ({
            headerTitle:route.params.policy,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTitleStyle: {
              textAlign: 'center',
              right: Platform.OS === 'android' ? getResponsiveWidth(8) : 0,
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  resizeMode="contain"
                  source={IMAGES.BACK_ARROW}
                  style={{
                    marginLeft: getResponsiveWidth(6),
                    height: getResponsiveHeight(2),
                    width: getResponsiveWidth(5),
                  }}
                />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    );
  }
}
