import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import styles from '../styles';
import InputComponent from '../../../components/InputComponent';
import Fonts from '../../../common/constants/fonts';
import {
  getResponsiveHeight,
  getResponsiveWidth,
} from '../../../common/helper/utils';
import ButtonComponent from '../../../components/ButtonComponent';
import { showMessage } from 'react-native-flash-message';

export default class CreatePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
      passwordVisible: false,
      confirmPasswordVisible: false,
    };
  }

  passwordHandler = val => {
    this.setState({
      password: val,
    });
    this.props.password(this.state.password);
  };

  confirmPasswordHandler = val => {
    this.setState({
      confirmPassword: val,
    });
    this.props.confirmedPassword(val);
  };

  validatePassword = (val) => {
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
          this.props.onPress(val);
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

  // onPress = (val) => {
  //   let errors = {}
  //   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   let rjx = /^[a-zA-Z]+$/;
  //   ['password', 'confirmPassword'].forEach((fields) => {
  //     const value = this.state[fields]
  //     if (!value) {
  //       errors[fields] = 'All text fields are mendatory';
  //       showMessage({ message: "error", description: "All text fields are mendatory", type: "danger" })
  //     } else if (fields === 'password' && value.length < 6) {
  //       errors[fields] = '*Password should be atleast 6 characters';
  //       showMessage({ message: "error", description: "Password should be atleast 6 characters", type: "danger" })
  //     } else if (fields === 'confirmPassword' && value.length < 6) {
  //       errors[fields] = 'Password is not matching';
  //       showMessage({ message: "error", description: "Password is not matching", type: "danger" })
  //     } 
  //   })
  //   this.setState({ errors });

  //   if (Object.keys(errors).length === 0) {
  //     if(this.state.password===this.state.confirmPassword){
  //       this.props.onPress(val);
  //     }
  //   }
  // };
  render() {
    const { password, confirmPassword, passwordVisible, confirmPasswordVisible } =
      this.state;
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.ComponentContainer}>
          <Text style={styles.HeadLineText}>Create a Password</Text>
          <Text style={styles.ProvideDetails}>
            Must contain atleast 8 characters, including uppercase, lower case,
            letters, numbers & special symbols
          </Text>
          <View style={styles.InputContainer}>
            <View>
              <InputComponent
                label="Password"
                labelFontSize={Fonts.FONT_14}
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
              <View style={styles.InputContainer}>
                <InputComponent
                  label="Confirm Password"
                  value={confirmPassword}
                  onChange={val =>
                    this.setState({
                      confirmPassword: val,
                    })
                  }
                  labelFontSize={Fonts.FONT_14}
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
            </View>
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <ButtonComponent
            text="Next"
            onPress={val => this.validatePassword(val)}
            mbottom={getResponsiveHeight(3.8)}
            textColor={Colors.WHITE}
            ButtonColor={Colors.BLUE}
            fontSize={Fonts.FONT_18}
            height={getResponsiveWidth(13.5)}
            fontFamily={Fonts.POPPINS_MEDIUM}
          />
        </View>
      </SafeAreaView>
    );
  }
}
