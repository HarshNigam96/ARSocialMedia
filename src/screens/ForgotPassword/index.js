import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
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
import CountryPicker from 'react-native-country-picker-modal';
import { showMessage } from 'react-native-flash-message'
export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: '91',
      mobileNumber: '',
      verification: false,
      firstPin: '',
      secondPin: '',
      thirdPin: '',
      forthPin: '',
    };
  }

  onProceed = () => {
    if (this.state.mobileNumber.length >= 10) {
      this.setState({
        verification: true,
      })
    } else {
      showMessage({ type: "danger", message: "Please enter mobile number" })
    }
  }

  onVerify = () => {
    if (this.state.firstPin === "" || this.state.secondPin === "" || this.state.thirdPin === "" || this.state.forthPin === "") {
      showMessage({ type: "danger", message: "Please enter OTP" })
    } else {
      this.props.navigation.navigate("ResetPassword")
    }
  }
  render() {
    const {
      countryCode,
      verification,
      mobileNumber,
      firstPin,
      secondPin,
      thirdPin,
      forthPin,
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
              <Text style={styles.ForgotPWText}>
                {verification ? 'Verification' : 'Forgot Password?'}
              </Text>
              <Text style={styles.RecoverdPW}>
                {verification
                  ? Strings.ENTER_VERI_CODE
                  : Strings.RECOVERED_PASSWORD}
              </Text>
              <View />
              {verification ? (
                <View style={styles.OTPInputContainer}>
                  <TextInput
                    style={[
                      styles.OTPInputField,
                      {
                        backgroundColor:
                          firstPin != '' ? Colors.ALICE_BLUE : Colors.WHITE,
                        borderColor:
                          firstPin != '' ? Colors.CYAN_BLUE : Colors.LIGHT_GREY,
                      },
                    ]}
                    maxLength={1}
                    ref={'firstPinRef'}
                    keyboardType="numeric"
                    value={firstPin}
                    onChangeText={val => {
                      this.setState({ firstPin: val });
                      if (val != '') {
                        this.refs.secondPinRef.focus();
                      }
                    }}
                  />
                  <TextInput
                    style={[
                      styles.OTPInputField,
                      {
                        backgroundColor:
                          secondPin != '' ? Colors.ALICE_BLUE : Colors.WHITE,
                        borderColor:
                          secondPin != '' ? Colors.CYAN_BLUE : Colors.LIGHT_GREY,
                      },
                    ]}
                    keyboardType="numeric"
                    value={secondPin}
                    onChangeText={val => {
                      this.setState({ secondPin: val });
                      if (val != '') {
                        this.refs.thirdPinRef.focus();
                      } else {
                        this.refs.firstPinRef.focus();
                      }
                    }}
                    maxLength={1}
                    ref={'secondPinRef'}
                  />
                  <TextInput
                    style={[
                      styles.OTPInputField,
                      {
                        backgroundColor:
                          thirdPin != '' ? Colors.ALICE_BLUE : Colors.WHITE,
                        borderColor:
                          thirdPin != '' ? Colors.CYAN_BLUE : Colors.LIGHT_GREY,
                      },
                    ]}
                    keyboardType="numeric"
                    value={thirdPin}
                    maxLength={1}
                    ref={'thirdPinRef'}
                    onChangeText={val => {
                      this.setState({ thirdPin: val });
                      if (val != '') {
                        this.refs.forthPinRef.focus();
                      } else {
                        this.refs.secondPinRef.focus();
                      }
                    }}
                  />
                  <TextInput
                    keyboardType="numeric"
                    style={[
                      styles.OTPInputField,
                      {
                        backgroundColor:
                          forthPin != '' ? Colors.ALICE_BLUE : Colors.WHITE,
                        borderColor:
                          forthPin != '' ? Colors.CYAN_BLUE : Colors.LIGHT_GREY,
                      },
                    ]}
                    value={forthPin}
                    maxLength={1}
                    ref={'forthPinRef'}
                    onChangeText={val => {
                      this.setState({ forthPin: val });
                      if (val != '') {
                        showMessage({ type: "success", message: "Successfully Verified" })
                      } else {
                        this.refs.thirdPinRef.focus();
                      }
                    }}
                  />
                </View>
              ) : (
                <View>
                  <View style={styles.codePicker}>
                    <CountryPicker
                      placeholder={'+' + countryCode}
                      withFilter
                      withCallingCode
                      onSelect={val =>
                        this.setState({ countryCode: val.callingCode })
                      }
                    />
                    <Image style={styles.chevronIcon} source={IMAGES.DROPDOWN} />
                  </View>
                  <View style={{ marginTop: getResponsiveHeight(2.5) }}>
                    <InputComponent
                      label="Phone no."
                      labelFontSize={Fonts.FONT_14}
                      value={mobileNumber}
                      onChange={val =>
                        this.setState({
                          mobileNumber: val,
                        })
                      }
                      keyType="numeric"
                      labelColor={Colors.BLACK}
                      opacity={0.3}
                      bordered
                      maxLength={10}
                      borderWidth={0.5}
                      borderColor={Colors.CYAN_BLUE}
                      labelFontFamily={Fonts.POPPINS_REGULAR}
                      placeholder="Mobile no."
                      mtop={getResponsiveHeight(1)}
                      bgColor={Colors.ALICE_BLUE}
                      paddingLeft={getResponsiveWidth(4)}
                      InputTextFontFamily={Fonts.INTER_MEDIUM}
                      InputTextSize={Fonts.FONT_20}
                    />
                  </View>
                </View>
              )}
            </View>
          </SafeAreaView>
          <SafeAreaView>
            <ButtonComponent
              text={verification ? 'Verify' : 'Proceed'}
              onPress={verification ? this.onVerify : this.onProceed}
              // onPress={() =>
              //   mobileNumber != ''
              //     ? verification
              //       ? firstPin === '' ||
              //         secondPin === '' ||
              //         thirdPin === '' ||
              //         forthPin === ''
              //         ? null
              //         : null
              //       : this.setState({
              //         verification: true,
              //       })
              //     : showMessage({ type: "danger", message: "Please enter mobile number" })
              // }
              mbottom={getResponsiveHeight(3.8)}
              textColor={Colors.WHITE}
              ButtonColor={Colors.BLUE}
              fontSize={Fonts.FONT_18}
              height={getResponsiveWidth(13.5)}
              fontFamily={Fonts.POPPINS_MEDIUM}
            />
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}
