import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Modal,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import styles from './styles';
import IMAGES from '../../common/constants/images';
import Strings from '../../common/constants/Strings';
import Fonts from '../../common/constants/fonts';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import {
  getResponsiveHeight,
  getResponsiveWidth,
} from '../../common/helper/utils';
import Colors from '../../common/constants/colors';
import { BlurView } from '@react-native-community/blur';
import { showMessage } from 'react-native-flash-message';
export default class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
      passwordVisible: false,
      confirmPasswordVisible: false,
      modalVisible: false,
      passwordError: '',
    };
  }

  validatePassword = () => {
    let strongRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    );
    if (this.state.password != "" && this.state.confirmPassword != "") {
      if (!strongRegex.test(this.state.password) || !strongRegex.test(this.state.confirmPassword)) {
        showMessage({
          type: "danger",
          message: "error",
          description: ['1. The password length must be greater than or equal to 9.',
            '\n', "2. The password must contain one or more uppercase characters.",
            '\n', "3. The password must contain one or more lowercase characters.",
            '\n', "4. The password must contain one or more numeric values.",
            '\n', "5. The password must contain one or more special characters."
          ],
        })
      } else {
        if (this.state.password === this.state.confirmPassword) {
          this.setState({
            modalVisible: true
          })
        } else {
          showMessage({
            type: "danger", message: "error", description: 'Please make sure your passwords match!'
          })
        }
      }
    } else {
      showMessage({
        type: "danger", message: "error", description: 'All fields are mendatory'
      })
    }
  };

  render() {
    const {
      password,
      confirmPassword,
      passwordVisible,
      confirmPasswordVisible,
      modalVisible,
    } = this.state;
    return (
      <View style={styles.Container}>
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <SafeAreaView>
            <View>
              <View style={styles.btnAndLogoContainer}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}
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
              <Text style={styles.ResetPWHeading}>Reset Password</Text>
              <Text style={styles.ResetPWString}>{Strings.RESET_PASSWORD}</Text>
              <View style={{ marginTop: getResponsiveHeight(4) }}>
                <InputComponent
                  label="Password"
                  labelFontSize={Fonts.FONT_13}
                  labelColor={Colors.BLACK}
                  opacity={0.3}
                  bordered
                  requiredImage
                  imageSoucre={IMAGES.VISIBLE}
                  imageStyle={styles.visibleIcon}
                  disabled={false}
                  onPress={() =>
                    this.setState({
                      passwordVisible: !passwordVisible,
                    })
                  }
                  secureTextEntry={passwordVisible ? false : true}
                  borderWidth={0.5}
                  borderColor={Colors.CYAN_BLUE}
                  labelFontFamily={Fonts.POPPINS_REGULAR}
                  placeholder="Enter Password"
                  value={password}
                  onChange={val =>
                    this.setState({
                      password: val,
                    })
                  }
                  mtop={getResponsiveHeight(1)}
                  bgColor={Colors.ALICE_BLUE}
                  paddingLeft={getResponsiveWidth(4)}
                  InputTextFontFamily={Fonts.INTER_MEDIUM}
                  InputTextSize={Fonts.FONT_16}
                />
              </View>
              <View style={{ marginTop: getResponsiveHeight(3.2) }}>
                <InputComponent
                  label="Confirm Password"
                  value={confirmPassword}
                  onChange={val =>
                    this.setState({
                      confirmPassword: val,
                    })
                  }
                  labelFontSize={Fonts.FONT_13}
                  labelColor={Colors.BLACK}
                  opacity={0.3}
                  bordered
                  requiredImage
                  imageSoucre={IMAGES.VISIBLE}
                  imageStyle={styles.visibleIcon}
                  disabled={false}
                  onPress={() =>
                    this.setState({
                      confirmPasswordVisible: !confirmPasswordVisible,
                    })
                  }
                  secureTextEntry={confirmPasswordVisible ? false : true}
                  borderWidth={0.5}
                  borderColor={Colors.CYAN_BLUE}
                  labelFontFamily={Fonts.POPPINS_REGULAR}
                  placeholder="Enter Confirm Password"
                  mtop={getResponsiveHeight(1)}
                  bgColor={Colors.ALICE_BLUE}
                  paddingLeft={getResponsiveWidth(4)}
                  InputTextFontFamily={Fonts.INTER_MEDIUM}
                  InputTextSize={Fonts.FONT_16}
                />
              </View>
              <Text>{this.state.passwordError}</Text>
              <View />
            </View>
          </SafeAreaView>
          <SafeAreaView>
            <ButtonComponent
              text="Submit"
              onPress={this.validatePassword}
              mbottom={getResponsiveHeight(3.8)}
              textColor={Colors.WHITE}
              ButtonColor={Colors.BLUE}
              fontSize={Fonts.FONT_18}
              height={getResponsiveWidth(12.5)}
              fontFamily={Fonts.POPPINS_MEDIUM}
            />
          </SafeAreaView>
          <Modal
            transparent={true}
            animationType={'slide'}
            visible={modalVisible}>
            <View style={styles.transparentBg}>
              <BlurView
                style={styles.blurViewStyle}
                blurRadius={1}
                blurType="light"
              />
              <View style={styles.modal}>
                <Image
                  resizeMode="contain"
                  source={IMAGES.RESETPW_SUCCESS}
                  style={styles.modalImage}
                />
                <Text style={styles.resetPasswordSuccess}>
                  {Strings.RESET_PASSWORD_SUCCESS}
                </Text>
                <SafeAreaView>
                  <ButtonComponent
                    text="Proceed to login"
                    onPress={() =>
                      this.setState(
                        {
                          modalVisible: false,
                        },
                        this.props.navigation.navigate('SignIn'),
                      )
                    }
                    mtop={getResponsiveHeight(4)}
                    mbottom={getResponsiveHeight(3.8)}
                    textColor={Colors.WHITE}
                    ButtonColor={Colors.BLUE}
                    fontSize={Fonts.FONT_18}
                    height={getResponsiveWidth(12.5)}
                    fontFamily={Fonts.POPPINS_MEDIUM}
                  />
                </SafeAreaView>
                <View />
              </View>
            </View>
          </Modal>
        </ScrollView>
      </View>
    );
  }
}
