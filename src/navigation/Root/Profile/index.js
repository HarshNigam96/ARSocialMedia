import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../../../screens/Profile';

const Stack = createStackNavigator();

export default class ProfileTab extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    );
  }
}
