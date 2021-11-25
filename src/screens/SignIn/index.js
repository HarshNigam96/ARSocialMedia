import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  NativeModules
} from 'react-native';
import Colors from '../../common/constants/colors';
import IMAGES from '../../common/constants/images';
import Fonts from '../../common/constants/fonts';
import Strings from '../../common/constants/Strings';
import ButtonComponent from '../../components/ButtonComponent';
import InputComponent from '../../components/InputComponent';
import styles from './styles';
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils';
import { showMessage } from "react-native-flash-message";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next'

const { RNTwitterSignIn } = NativeModules;
const API = {
  API_KEY: "ztSW7Tlt0cf7PHUmLcrBsdI6I",
  SECRET_KEY: "5DiJRCPNWHoiLcRyRz1FnO420L7eW9Fw6bQuSkkqjImBsL7jpK"
}

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      checkEmailStatus: false,
      checkPasswordStatus: false,
      rememberMe: false,
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

  facebookLogin = async () => {
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    return auth().signInWithCredential(facebookCredential);
  }

  twitterLogin = () => {
    RNTwitterSignIn.init(API.API_KEY, API.SECRET_KEY)
    RNTwitterSignIn.logIn()
      .then(data => console.log(data))
      .catch(error => console.log(error))
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
          // user cancelled the login flow
          // alert('Cancel');
        } else if (error.code === statusCodes.IN_PROGRESS) {
          alert('Signin in progress');
          // operation (f.e. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          alert('PLAY_SERVICES_NOT_AVAILABLE');
          // play services not available or outdated
        } else {
          console.log(error)
          // some other error happened
        }
      }
    } else {

    }
  }

  emailInputHandler = val => {
    this.setState({
      email: val,
    });
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    reg.test(this.state.email)
      ? this.setState({
        checkEmailStatus: true,
      })
      : this.setState({
        email: val,
        checkEmailStatus: false,
      });
  };

  validatePassword = (val) => {
    const strongRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    );
    if (strongRegex.test(val)) {
      this.setState({
        password: val,
        checkPasswordStatus: true
      });
    } else {
      this.setState({
        password: val,
        checkPasswordStatus: false
      });
    }
  }

  onSubmit = () => {
    let errors = {}
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let strongRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    );
    ['email', 'password'].forEach((fields) => {
      const value = this.state[fields]
      if (!value) {
        errors[fields] = 'All text fields are mendatory';
        showMessage({ message: "error", description: "All text fields are mendatory", type: "danger" })
      } else if (fields === 'email' && reg.test(value) === false) {
        errors[fields] = '*Email is not Valid';
        showMessage({ message: "error", description: "email is not valid", type: "danger" })
      }
      else if (fields === 'password' && strongRegex.test(value) === false) {
        errors[fields] = '*Password is not Valid';
        showMessage({
          message: "error",
          description: ['1. The password length must be greater than or equal to 9.',
            '\n', "2. The password must contain one or more uppercase characters.",
            '\n', "3. The password must contain one or more lowercase characters.",
            '\n', "4. The password must contain one or more numeric values.",
            '\n', "5. The password must contain one or more special characters."
          ],
          type: "danger",
        })
      }
    })
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      setTimeout(() => {
        this.props.navigation.navigate("Home")
        this.setState({
          email: "",
          password: "",
          checkEmailStatus:false,
          checkPasswordStatus:false
        })
      }, 2000)
      showMessage({ message: "Success", type: "success" })

    }
  }

  render() {
    const { email, password, checkEmailStatus, checkPasswordStatus, rememberMe } =
      this.state;
    return (
      <View style={styles.Container}>
        <SafeAreaView>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}>
            <View>
              <View style={styles.btnAndLogoContainer}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Welcome")}
                  style={styles.backButtonContainer}>
                  <Image
                    source={IMAGES.BACK_ARROW}
                    resizeMode="contain"
                    style={styles.backArrow}
                  />
                </TouchableOpacity>
                <Image
                  source={IMAGES.LOGO}
                  style={styles.Logo}
                />
              </View>
              <Text style={styles.LoginText}>Log In</Text>
              <Text style={styles.ProvideDetails}>{Strings.PROVIDE_DETAILS}</Text>
              <View style={{ marginTop: getResponsiveHeight(3.2) }}>
                <InputComponent
                  label="Username."
                  value={email}
                  onChange={val => this.emailInputHandler(val)}
                  labelFontSize={Fonts.FONT_12}
                  labelColor={Colors.BLACK}
                  opacity={0.3}
                  bordered
                  borderBottomWidth={2}
                  borderColor={
                    checkEmailStatus ? Colors.GREEN : Colors.LIGHT_GREY
                  }
                  labelFontFamily={Fonts.MANROPE_MEDIUM}
                  placeholder="Email"
                  requiredImage
                  imageSoucre={checkEmailStatus ? IMAGES.TICK : null}
                  imageStyle={styles.TickIcon}
                  mtop={getResponsiveHeight(1.2)}
                />
              </View>
              <View style={{ marginTop: getResponsiveHeight(5) }}>
                <InputComponent
                  label="Password."
                  value={password}
                  onChange={val => this.validatePassword(val)}
                  labelFontSize={Fonts.FONT_12}
                  labelColor={Colors.BLACK}
                  opacity={0.3}
                  labelFontFamily={Fonts.MANROPE_MEDIUM}
                  placeholder="Enter Password"
                  bordered
                  borderBottomWidth={2}
                  borderColor={
                    checkPasswordStatus ? Colors.GREEN : Colors.LIGHT_GREY
                  }
                  imageSoucre={checkPasswordStatus ? IMAGES.TICK : null}
                  requiredImage
                  imageStyle={styles.TickIcon}
                  mtop={getResponsiveHeight(1.2)}
                  secureTextEntry
                />
              </View>
              <View style={styles.forgotPasswordContainer}>
                <View style={styles.rememberMeContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        rememberMe: !rememberMe,
                      })
                    }>
                    <Image
                      resizeMode="contain"
                      style={[
                        styles.rememberMeButton,
                        { tintColor: rememberMe ? Colors.BLUE : Colors.LIGHT_GREY },
                      ]}
                      source={IMAGES.SELECT_BUTTON}
                    />
                  </TouchableOpacity>
                  <Text style={styles.rememberMeText}>Remember me</Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('ForgotPassword')
                  }>
                  <Text style={styles.ForgotPasswordButton}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
              <ButtonComponent
                text="Submit"
                onPress={this.onSubmit}
                ButtonColor={Colors.BLUE}
                textColor={Colors.WHITE}
                mtop={getResponsiveHeight(9)}
                fontSize={Fonts.FONT_15}
                fontFamily={Fonts.POPPINS_MEDIUM}
                height={getResponsiveWidth(13.5)}
              />

              <View style={styles.separatorContainer}>
                <View style={styles.Separator} />
                <Text style={styles.orText}>or continue with</Text>
                <View style={styles.Separator} />
              </View>
              <View style={styles.socialLoginButtonContainer}>
                <TouchableOpacity
                  onPress={this.facebookLogin}
                  style={[styles.socialButtonLogoContainer, {
                    backgroundColor: Colors.BLUE,
                  }]}
                >
                  <Image
                    resizeMode="contain"
                    source={IMAGES.FB_LOGO}
                    style={[styles.socialButtonLogo, { tintColor: Colors.WHITE }]}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.googleLogin}
                  style={[styles.socialButtonLogoContainer, { backgroundColor: Colors.LIGHT_GREY }]}
                >
                  <Image
                    resizeMode="contain"
                    source={IMAGES.GOOGLE_LOGO}
                    style={styles.socialButtonLogo}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.twitterLogin}
                  style={[styles.socialButtonLogoContainer, { backgroundColor: Colors.CYAN_BLUE }]}
                >
                  <Image
                    resizeMode="contain"
                    source={IMAGES.TWITTER_LOGO}
                    style={[styles.socialButtonLogo, { tintColor: Colors.WHITE }]}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.socialButtonLogoContainer, { backgroundColor: Colors.BLACK }]}
                >
                  <Image
                    resizeMode="contain"
                    source={IMAGES.APPLE_LOGO}
                    style={[styles.socialButtonLogo, { tintColor: Colors.WHITE, opacity: 0.7 }]}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.createAccount}>
                <Text style={[styles.text, { opacity: 0.5 }]}>
                  Don’t have an account?
                </Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("SignUp")}>
                  <Text style={[styles.text, { color: Colors.BLUE }]}>
                    Click here
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}
