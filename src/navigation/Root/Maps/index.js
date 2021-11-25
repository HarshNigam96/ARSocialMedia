import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Maps from '../../../screens/Maps';

const Stack = createStackNavigator();

export default class MapsTab extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Maps" component={Maps} options={{headerShown:false}} />
      </Stack.Navigator>
    );
  }
}
