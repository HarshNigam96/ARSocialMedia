import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, SafeAreaView, Platform, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IMAGES from '../../../common/constants/images'
import Post from '../../../screens/Post';
import Following from '../../../screens/Following';
import ProfileImage from '../../../screens/ProfileImage';
import EditProfile from '../../../screens/EditProfile';
import Settings from '../../../screens/Settings';
import PasswordAndSecurity from '../../../screens/PasswordAndSecurity';
import Languages from '../../../screens/Languages';
import AccountPrivacy from '../../../screens/AccountPrivacy';
import BusinessAccount from '../../../screens/BusinessAccount';
import PaymentMethods from '../../../screens/PaymentMethods';
import Payment from '../../../screens/Payment';
import RequestToken from '../../../screens/RequestToken';
import PaidAccount from '../../../screens/PaidAccount';
import HelpAndSupport from '../../../screens/HelpAndSupport';
import NewPost from '../../../screens/NewPost';
import UploadImage from '../../../screens/UploadImage';
import Notification from '../../../screens/Notification';
import Subscription from '../../../screens/Subscription';
import UserInfo from '../../../screens/UserInfo'
import LocationPost from '../../../screens/LocationPost'
import SuggestedFollower from '../../../screens/SuggestedFollower'
import { getResponsiveHeight, getResponsiveWidth, HEIGHT } from '../../../common/helper/utils'
import ARMode from '../../../screens/ARMode'
import Home from '../Home'
import Search from '../Search'
import Profile from '../Profile'
import Maps from '../Maps'
import Colors from '../../../common/constants/colors'
import Fonts from '../../../common/constants/fonts'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabBar({ state, navigation }) {
  // console.log(state.routes[state.index].name)
  if (state.routes[state.index].name !== "Maps") {
    return (
      <View style={{
        flexDirection: 'row',
        backgroundColor: Colors.WHITE,
        height: getResponsiveHeight(8),
        justifyContent: "center",
        alignItems: "center",
      }}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };


          return (
            <TouchableOpacity key={index}
              onPress={onPress}
              style={{ flex: 1, alignItems: "center" }}
            >
              <SafeAreaView>
                {index === 2 ? <Image
                  style={{
                    height: getResponsiveWidth(16),
                    width: getResponsiveWidth(16),
                    marginBottom: Platform.OS === "android" ? getResponsiveHeight(5)
                      : HEIGHT > 667 ? getResponsiveHeight(2.2) : getResponsiveHeight(5.5)
                  }}
                  source={IMAGES.FLOATBUTTON} />
                  :
                  <Image
                    style={{
                      height: getResponsiveWidth(5),
                      width: getResponsiveWidth(5),
                      tintColor: isFocused ? Colors.BLUE : Colors.BLACK
                    }}
                    source={
                      index === 0 ?
                        IMAGES.HOME
                        : index === 1 ?
                          IMAGES.SEARCH
                          : index === 3 ?
                            IMAGES.LOCATION
                            : index === 4 ?
                              IMAGES.PROFILE
                              : null
                    } />
                }
              </SafeAreaView>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  } else {
    return null
  }
}

const MyTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="ARMode" component={ARMode} />
      <Tab.Screen name="Maps" component={Maps} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default class TabNavigator extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          component={MyTabs} name="Dashboard" />
        <Stack.Screen
          name="Post"
          component={Post}
          options={{
            headerTitle: 'Post',
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
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Dashboard")}>
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
          name="Following"
          component={Following}
          options={({ route }) => ({
            headerTitle: route.params.headerTitle,
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
              <TouchableOpacity onPress={() => this.props.navigation.navigate("UserInfo")}>
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
            )
          })}
        />
        <Stack.Screen name="UserInfo" component={UserInfo} options={{
          header: () => null,
          headerShown: false
        }} />
        <Stack.Screen name="ProfileImage" component={ProfileImage} options={{
          header: () => null,
          headerShown: false
        }} />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            headerTitle: 'EditProfile',
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
              <TouchableOpacity style={{
                backgroundColor: Colors.ALICE_BLUE,
                padding: getResponsiveWidth(2),
                borderRadius: getResponsiveWidth(1.2),
                marginLeft: getResponsiveWidth(6),
              }} onPress={() => this.props.navigation.goBack()}>
                <Image
                  resizeMode="contain"
                  source={IMAGES.BACK_ARROW}
                  style={{

                    height: getResponsiveHeight(2),
                    width: getResponsiveWidth(5),
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="HelpAndSupport"
          component={HelpAndSupport}
          options={{
            headerTitle: 'Help & Support',
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
              <TouchableOpacity style={{
                backgroundColor: Colors.ALICE_BLUE,
                padding: getResponsiveWidth(2),
                borderRadius: getResponsiveWidth(1.2),
                marginLeft: getResponsiveWidth(6),
              }} onPress={() => this.props.navigation.navigate("Dashboard")}>
                <Image
                  resizeMode="contain"
                  source={IMAGES.BACK_ARROW}
                  style={{
                    height: getResponsiveHeight(2),
                    width: getResponsiveWidth(5),
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerTitle: 'Settings',
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
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Dashboard")}>
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
          name="Languages"
          component={Languages}
          options={{
            headerTitle: 'Languages',
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
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Settings")}>
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
          name="AccountPrivacy"
          component={AccountPrivacy}
          options={{
            headerTitle: 'Account Privacy',
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
          name="BusinessAccount"
          component={BusinessAccount}
          options={{
            headerTitle: 'Business Account',
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
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Settings")}>
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
          name="PaidAccount"
          component={PaidAccount}
          options={{
            headerTitle: 'Paid Account',
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
          name="RequestToken"
          component={RequestToken}
          options={{
            headerTitle: 'AR Token',
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
          name="Subscription"
          component={Subscription}
          options={{
            headerTitle: 'Subscription',
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
          name="PaymentMethods"
          component={PaymentMethods}
          options={{
            headerTitle: 'Payment Methods',
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
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Settings")}>
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
          name="Payment"
          component={Payment}
          options={{
            headerTitle: 'Payment',
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
          name="UploadImage"
          component={UploadImage}
          options={{
            headerTitle: null,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              backgroundColor: Colors.OFF_WHITE
            },
            headerLeft: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity style={{
                  backgroundColor: Colors.ALICE_BLUE,
                  alignItems: "center",
                  justifyContent: "center",
                  height: getResponsiveWidth(8),
                  width: getResponsiveWidth(8),
                  borderRadius: getResponsiveWidth(20),
                  marginLeft: getResponsiveWidth(6),
                }} onPress={() => this.props.navigation.goBack()}>
                  <Image
                    source={IMAGES.LEFTARROW}
                    style={{
                      tintColor: Colors.BLACK,
                      height: getResponsiveHeight(2),
                      width: getResponsiveWidth(6),
                    }}
                  />
                </TouchableOpacity>
                <Image
                  style={{
                    backgroundColor: Colors.ALICE_BLUE,
                    alignItems: "center",
                    justifyContent: "center",
                    height: getResponsiveWidth(8),
                    width: getResponsiveWidth(8),
                    borderRadius: getResponsiveWidth(20),
                    marginLeft: getResponsiveWidth(2.5),
                  }}
                  source={{ uri: "https://images.all-free-download.com/images/graphicthumb/lioness_profile_193744.jpg" }} />
              </View>
            ),
            headerRight: () => <TouchableOpacity onPress={() => this.props.navigation.navigate("NewPost")}>
              <Text
                style={{
                  paddingRight: getResponsiveWidth(6),
                  color: Colors.BLUE,
                  fontSize: Fonts.FONT_18,
                  fontFamily: Fonts.MULISH_SEMIBOLD
                }}>Next</Text>
            </TouchableOpacity>
          }}
        />
        <Stack.Screen
          name="NewPost"
          component={NewPost}
          options={{
            headerTitle: 'New Post',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              backgroundColor: Colors.OFF_WHITE
            },
            headerTitleStyle: {
              textAlign: 'center',
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
            headerRight: () => <TouchableOpacity onPress={() => this.props.navigation.navigate("Dashboard")}>
              <Text
                style={{
                  paddingRight: getResponsiveWidth(6),
                  color: Colors.BLUE,
                  fontSize: Fonts.FONT_18,
                  fontFamily: Fonts.MULISH_SEMIBOLD
                }}
              >Finish Up</Text>
            </TouchableOpacity>
          }}
        />
        <Stack.Screen
          name="PasswordAndSecurity"
          component={PasswordAndSecurity}
          options={{
            headerTitle: 'Password & Security',
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
              <TouchableOpacity style={{
                backgroundColor: Colors.ALICE_BLUE,
                padding: getResponsiveWidth(2),
                borderRadius: getResponsiveWidth(1.2),
                marginLeft: getResponsiveWidth(6),
              }} onPress={() => this.props.navigation.navigate("Settings")}>
                <Image
                  resizeMode="contain"
                  source={IMAGES.BACK_ARROW}
                  style={{

                    height: getResponsiveHeight(2),
                    width: getResponsiveWidth(5),
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="SuggestedFollower"
          component={SuggestedFollower}
          options={{
            headerTitle: 'Suggested Followers',
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
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Dashboard")}>
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
          name="Notification"
          component={Notification}
          options={{
            headerTitle: 'Notifications',
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
              <TouchableOpacity style={{
                padding: getResponsiveWidth(2),
                borderRadius: getResponsiveWidth(1.2),
                marginLeft: getResponsiveWidth(6),
              }} onPress={() => this.props.navigation.goBack()}>
                <Image
                  resizeMode="contain"
                  source={IMAGES.BACK_ARROW}
                  style={{
                    height: getResponsiveHeight(2),
                    width: getResponsiveWidth(5),
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="LocationPost"
          component={LocationPost}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    );
  }
}