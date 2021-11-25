import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import {getResponsiveWidth,getResponsiveHeight} from '../../../common/helper/utils'
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../../../screens/Search';
import LocationSetting from '../../../screens/LocationSetting';
import MapUsers from '../../../screens/MapUsers';

const Stack = createStackNavigator();

export default class SearchTab extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName={Search}>
        <Stack.Screen options={{ headerShown: false }} name="Search" component={Search} />
        <Stack.Screen
          name="LocationSetting"
          component={LocationSetting}
          options={{
            headerTitle: 'Location Settings',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              backgroundColor: Colors.OFF_WHITE
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
          name="MapUsers"
          component={MapUsers}
          options={{
            headerTitle: 'Friends on Map',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              backgroundColor: Colors.OFF_WHITE
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
      </Stack.Navigator>
    );
  }
}
