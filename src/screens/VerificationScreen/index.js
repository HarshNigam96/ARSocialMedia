import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Platform
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

export default class VerificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: '91',
      mobileNumber: '',
      verification: true,
      firstPin: '',
      secondPin: '',
      thirdPin: '',
      forthPin: '',
    };
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
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}>
          <View>
            <Image
              resizeMode="contain"
              style={styles.Logo}
              source={IMAGES.VERIFICATION_IMAGE}
            />
            <Text style={styles.sentCodeText}>
              Kindly input the 4-digit Code code we have sent to at{' '}
              <Text style={styles.textDecoration}>+0 000 000 0000</Text>.
            </Text>
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
                      secondPin != ''
                        ? Colors.CYAN_BLUE
                        : Colors.LIGHT_GREY,
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
                    this.props.navigation.navigate('AccountCreated',{
                      socialLogin:false
                    });
                  } else {
                    this.refs.thirdPinRef.focus();
                  }
                }}
              />
            </View>
            <View style={styles.resendCodeContainer}>
              <Text style={styles.receievedCodeTxt}>
                Didn’t n received the code?
              </Text>
              <TouchableOpacity style={styles.resendCodeTouchable}>
                <Text style={styles.resendCodeText}>Resend Code</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <SafeAreaView>
          <ButtonComponent
            text={verification ? 'Submit' : 'Next'}
            onPress={() =>
              mobileNumber != ''
                ? verification
                  ? firstPin === '' ||
                    secondPin === '' ||
                    thirdPin === '' ||
                    forthPin === ''
                    ? null
                    : null
                  : this.setState({
                    verification: true,
                  })
                : null
            }
            mbottom={getResponsiveHeight(3.8)}
            textColor={Colors.WHITE}
            ButtonColor={Colors.BLUE}
            fontSize={Fonts.FONT_18}
            height={getResponsiveWidth(13)}
            fontFamily={Fonts.POPPINS_MEDIUM}
          />
        </SafeAreaView>
      </View>

    );
  }
}
