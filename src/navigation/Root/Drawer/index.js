import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Alert, SafeAreaView, StatusBar, Platform, TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  useIsDrawerOpen
} from '@react-navigation/drawer';
import TabNavigator from '../Tab';
import { useDispatch } from 'react-redux';
import Fonts from '../../../common/constants/fonts'
import Colors from '../../../common/constants/colors'
import IMAGES from '../../../common/constants/images'
import { getResponsiveHeight, getResponsiveWidth } from '../../../common/helper/utils'
import { createStackNavigator } from '@react-navigation/stack';
import CustomDrawer from '../../../components/CustomDrawer';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const TabNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={TabNavigator} name="tabBar" options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

function CustomDrawerContent(props) {
  const dispatch = useDispatch();

  return (
    <View style={styles.Container}>
      <SafeAreaView style={styles.Container}>
        <View style={styles.directionFlow}>
          <DrawerContentScrollView>
            <View style={styles.userDetailContainer}>
              <View style={styles.profilePicContainer}>
                <Image style={styles.profilePic}
                  source={{ uri: "https://images.all-free-download.com/images/graphicthumb/lioness_profile_193744.jpg" }} />
                <Image style={styles.CameraIcon} source={IMAGES.UPLOAD_PROFILE_PIC} />
              </View>
              <View style={styles.userIdInfo}>
                <Text style={styles.userNameText}>Andy Doe</Text>
                <Text style={styles.userIdText}>@andydoe</Text>
                <View style={styles.followingDetails}>
                  <View style={styles.directionFlow}>
                    <Text style={styles.count}>351 </Text>
                    <Text style={styles.followText}>following</Text>
                  </View>
                  <View style={[styles.directionFlow, { marginLeft: 24 }]}>
                    <Text style={styles.count}>351 </Text>
                    <Text style={styles.followText}>followers</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.Separator} />
            <View style={styles.drawerContent}>
              <CustomDrawer {...props} />
            </View>
          </DrawerContentScrollView>
          <View style={{ marginTop: StatusBar.currentHeight }}>
            {useIsDrawerOpen() ?
              <TouchableOpacity
                style={styles.closeButtonContainer}
                onPress={() => props.navigation.closeDrawer()}>
                <Image
                  style={styles.closeButton}
                  source={IMAGES.CROSS} />
              </TouchableOpacity>
              : null}
          </View>
        </View>
        <View style={styles.logoutButtonContainer}>
          <DrawerItem {...props}
            onPress={() => Alert.alert("Do you want to log out ?", " ", [
              {
                text: 'No',
              },
              {
                text: 'Yes',
                onPress: () => props.navigation.navigate("SignIn")
                // onPress: () => dispatch(_doAuthLogout())
              },
            ])}
            label="Log out"
            itemStyle={{}}
            labelStyle={{
            }}
            style={{}}
            icon={() => <Image resizeMode="contain" style={styles.Icons} source={IMAGES.LOGOUT} />}
          />
        </View>
      </SafeAreaView>
    </View >
  );
}
export default class DrawerNavigator extends Component {
  render() {
    return (
      <Drawer.Navigator
        screenOptions={{
          swipeEnabled: true,
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}
        drawerContentOptions={{
          activeTintColor: Colors.BLUE,
          inactiveTintColor: Colors.BLACK,
          activeBackgroundColor: 'transparent',
        }}
        drawerStyle={{
          backgroundColor: Colors.WHITE,
          width: getResponsiveWidth(78),
        }}>
        <Drawer.Screen component={TabNav} name="Home" />
      </Drawer.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  CameraIcon: {
    height: getResponsiveWidth(7),
    width:  getResponsiveWidth(7),
    alignSelf: "flex-end",
    bottom: 30,
    right:5
  },
  userDetailContainer: {
    paddingHorizontal: getResponsiveWidth(10),
  },
  userIdInfo: {
    marginTop: getResponsiveHeight(-2),
  },
  profilePicContainer: {
    width: getResponsiveWidth(26)
  },
  profilePic: {
    height: getResponsiveWidth(25),
    width: getResponsiveWidth(25),
    borderRadius: 100
  },
  userNameText: {
    fontSize: Fonts.FONT_18,
    fontFamily: Fonts.POPPINS_MEDIUM
  },
  userIdText: {
    opacity: 0.5,
    fontSize: Fonts.FONT_12,
    fontFamily: Fonts.POPPINS_REGULAR
  },
  followingDetails: {
    flexDirection: "row",
    marginTop: getResponsiveHeight(0.5)
  },
  directionFlow: {
    flexDirection: "row",
    flex: 1
  },
  count: {
    fontFamily: Fonts.POPPINS_MEDIUM
  },
  followText: {
    opacity: 0.5,
    fontFamily: Fonts.POPPINS_MEDIUM
  },
  Separator: {
    borderBottomWidth: 0.8,
    marginTop: getResponsiveHeight(1),
    marginBottom: getResponsiveHeight(2.5),
    opacity: 0.1
  },
  drawerContent: {
    paddingLeft: getResponsiveWidth(5),
    marginRight: getResponsiveWidth(5),
  },
  Icons: {
    height: getResponsiveWidth(6),
    width: getResponsiveWidth(6)
  },
  logoutButtonContainer: {
    paddingLeft: getResponsiveWidth(5),
    paddingRight: getResponsiveWidth(10)
  },
  closeButtonContainer: {
    backgroundColor: Colors.WHITE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 3,
    borderRadius: 100,
    right: Platform.OS === "android" ? -22 : -26,
    marginTop: Platform.OS === "android" ? getResponsiveHeight(2.5) : getResponsiveHeight(8),
    height: getResponsiveWidth(12),
    width: getResponsiveWidth(12),
    alignItems: "center",
    justifyContent: "center",
    position: "absolute"
  },
  closeButton: {
    height: getResponsiveWidth(4),
    width: getResponsiveWidth(4)
  }
})