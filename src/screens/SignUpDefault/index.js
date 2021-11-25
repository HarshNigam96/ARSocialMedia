import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  NativeModules
} from 'react-native';
import IMAGES from '../../common/constants/images';
import LinearGradient from 'react-native-linear-gradient';
import {
  getResponsiveHeight,
  getResponsiveWidth,
} from '../../common/helper/utils';
import Fonts from '../../common/constants/fonts';
import ButtonComponent from '../../components/ButtonComponent';
import Colors from '../../common/constants/colors';
import styles from './styles';
import Strings from '../../common/constants/Strings';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next'
const { RNTwitterSignIn } = NativeModules;
const API = {
  API_KEY: "ztSW7Tlt0cf7PHUmLcrBsdI6I",
  SECRET_KEY: "5DiJRCPNWHoiLcRyRz1FnO420L7eW9Fw6bQuSkkqjImBsL7jpK"
}

export default class SignUpDefault extends Component {
  constructor(props) {
    super(props);
    this.state = {
      privacyPolicy: 'Privacy Policy',
      contentPolicy: 'Content Policy',
      login: false,
      error: null,
      userInfo: []
    };
  }

  async componentDidMount() {
    if (Platform.OS === "android") {
      GoogleSignin.configure({
        scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
        webClientId:
          '599667441591-sltc33v52cho8cst40brp45udvl8aipm.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      })
    } else {

    }
  }

  googleLogin = async () => {
    if (Platform.OS === "android") {
      try {
        await GoogleSignin.hasPlayServices();
        this.setState({
          login: true
        })
        const { accessToken, idToken } = await GoogleSignin.signIn();
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        } else if (error.code === statusCodes.IN_PROGRESS) {
          alert('Signin in progress');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          alert('PLAY_SERVICES_NOT_AVAILABLE');
        } else {
          console.log(error)
        }
      }
    } else {

    }
  }

  facebookLogin = async () => {
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    this.props.navigation.navigate("AccountCreated", {
      socialLogin: true
    })
    // const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    // return auth().signInWithCredential(facebookCredential);
  }


  twitterLogin = () => {
    RNTwitterSignIn.init(API.API_KEY, API.SECRET_KEY)
    RNTwitterSignIn.logIn()
      .then(data => this.props.navigation.navigate("AccountCreated", {
        socialLogin: true
      }))
      .catch(error => console.log(error))
  }

  appleLogin = () => {

  }

  render() {
    const { privacyPolicy, contentPolicy } = this.state
    return (
      <View style={styles.Container}>
        <StatusBar translucent backgroundColor="transparent" />
        <ScrollView contentContainerStyle={styles.contentContainerStyle} bounces={false}>
          <ImageBackground
            source={IMAGES.WELCOMESCREENIMAGE}
            style={styles.mainImage}>
            <LinearGradient
              colors={['transparent', Colors.WHITE, Colors.WHITE]}
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 0.0, y: 0.4 }}>
              <SafeAreaView>
                <TouchableOpacity
                  style={{ marginTop: StatusBar.currentHeight }}
                  onPress={() => this.props.navigation.goBack()}>
                  <Image
                    resizeMode="contain"
                    source={IMAGES.BACK_ARROW}
                    style={styles.backButton}
                  />
                </TouchableOpacity>
              </SafeAreaView>
              <View style={styles.componentContainer}>
                <Image
                  resizeMode="contain"
                  source={IMAGES.LOGO}
                  style={styles.Logo}
                />
                <Text style={styles.WelcomeText}>{Strings.WELCOME}</Text>
                <ButtonComponent
                  onPress={() => this.props.navigation.navigate('SignUp', {
                    socialLogin: false
                  })}
                  text="Register with phone number"
                  requireImage
                  imageSource={IMAGES.PHONE}
                  mtop={getResponsiveHeight(6.9)}
                  textColor={Colors.WHITE}
                  ButtonColor={Colors.BLUE}
                  fontSize={Fonts.FONT_13}
                  height={getResponsiveWidth(12.5)}
                  fontFamily={Fonts.POPPINS_MEDIUM}
                />
                <View style={styles.orTextContainer}>
                  <View style={styles.Separator} />
                  <Text style={styles.orText}>{Strings.OR}</Text>
                  <View style={styles.Separator} />
                </View>
                <ButtonComponent
                  onPress={this.googleLogin}
                  text="Register with Google"
                  requireImage
                  imageSource={IMAGES.GOOGLE_LOGO}
                  isBorderWidth
                  borderWidth={1}
                  fontSize={Fonts.FONT_16}
                  fontFamily={Fonts.MULISH_REGULAR}
                  mtop={getResponsiveHeight(4.5)}
                  height={getResponsiveWidth(12.5)}
                />
                <ButtonComponent
                  onPress={this.facebookLogin}
                  text="Register with Facebook"
                  requireImage
                  imageSource={IMAGES.FB_LOGO}
                  isBorderWidth
                  fontSize={Fonts.FONT_16}
                  fontFamily={Fonts.MULISH_REGULAR}
                  borderWidth={1}
                  mtop={getResponsiveHeight(2.5)}
                  height={getResponsiveWidth(12.5)}
                />
                <ButtonComponent
                  onPress={this.twitterLogin}
                  text="Register with Twitter"
                  requireImage
                  fontSize={Fonts.FONT_16}
                  fontFamily={Fonts.MULISH_REGULAR}
                  imageSource={IMAGES.TWITTER_LOGO}
                  isBorderWidth
                  borderWidth={1}
                  mtop={getResponsiveHeight(2.5)}
                  height={getResponsiveWidth(12.5)}
                />
                <ButtonComponent
                  text="Register with Apple"
                  requireImage
                  fontSize={Fonts.FONT_16}
                  fontFamily={Fonts.MULISH_REGULAR}
                  imageSource={IMAGES.APPLE_LOGO}
                  isBorderWidth
                  borderWidth={1}
                  mtop={getResponsiveHeight(2.5)}
                  height={getResponsiveWidth(12.5)}
                />
                <View style={styles.haveAccountContainer}>
                  <Text style={styles.policyText}>{Strings.HAVEACCOUNT} </Text>
                  <Text style={styles.coloredTxt} onPress={() => this.props.navigation.navigate('SignIn')}>
                    Click here
                  </Text>
                </View>
                <Text style={[styles.policyText, { textAlign: "center" }]}>By signing up you are agreeing to AR’s</Text>
                <View style={styles.policyOptionsContainer}>
                  <Text style={[styles.coloredTxt, styles.textDecoration]}
                    onPress={() =>
                      this.props.navigation.navigate('Policy', {
                        policy: contentPolicy,
                      })}
                  >content policy</Text>
                  <Text style={styles.policyText}> and </Text>
                  <Text
                    onPress={() =>
                      this.props.navigation.navigate('Policy', {
                        policy: privacyPolicy,
                      })}
                    style={[styles.coloredTxt, styles.textDecoration]}>privacy policy</Text>
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
        </ScrollView>
      </View>
    );
  }
}
