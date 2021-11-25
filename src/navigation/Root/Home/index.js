import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../../../screens/Dashboard';
import HeaderRight from '../../../components/HeaderRight';
import Colors from '../../../common/constants/colors';
import HeaderLeft from '../../../components/HeaderLeft';
const Stack = createStackNavigator();

export default class Home extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerStyle: {
              backgroundColor: Colors.OFF_WHITE,
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTitleStyle: {
              textAlign: 'center',
            },
            headerRight: () => <HeaderRight notification={() => this.props.navigation.navigate("Notification")}
              upload={() => this.props.navigation.navigate("UploadImage")} />
            ,
            headerLeft: () => <HeaderLeft openDrawer={() => this.props.navigation.openDrawer()} />
          }}
        />
      </Stack.Navigator>
    );
  }
}
