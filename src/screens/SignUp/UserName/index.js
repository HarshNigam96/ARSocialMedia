import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from '../styles';
import InputComponent from '../../../components/InputComponent';
import Fonts from '../../../common/constants/fonts';
import {
  getResponsiveHeight,
  getResponsiveWidth,
} from '../../../common/helper/utils';
import ButtonComponent from '../../../components/ButtonComponent';
import { showMessage } from 'react-native-flash-message';
export default class UserName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    };
  }

  firstNameHandler = val => {
    this.setState({
      firstName: val,
    });
    this.props.firstName(val);
  };

  lastNameHandler = val => {
    this.setState({
      lastName: val,
    });
    this.props.lastName(val);
  };
  onPress = (val) => {
    let errors = {}
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let rjx = /^[a-zA-Z]+$/;
    ['firstName', 'lastName'].forEach((fields) => {
      const value = this.state[fields]
      if (!value) {
        errors[fields] = 'All text fields are mendatory';
        showMessage({ message: "error", description: "All text fields are mendatory", type: "danger" })
      } else if (fields === 'firstName' === "") {
        errors[fields] = '*Please enter your First Name';
        showMessage({ message: "error", description: "Please enter your First Name", type: "danger" })
      } else if (fields === 'lastName' === "") {
        errors[fields] = 'Please enter your First Name';
        showMessage({ message: "error", description: "Please enter your First Name", type: "danger" })
      }
    })
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.props.onPress(val);
    }
  };
  render() {
    const { firstName, lastName } = this.state;
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.ComponentContainer}>
          <Text style={styles.HeadLineText}>What's Your Name</Text>
          <Text style={styles.ProvideDetails}>
            Please provide your first & last name in the fields below
          </Text>
          <View style={styles.InputContainer}>
            <View>
              <InputComponent
                label="First name"
                labelFontSize={Fonts.FONT_14}
                labelColor={Colors.BLACK}
                bordered
                onChange={val => this.firstNameHandler(val)}
                disabled={false}
                borderWidth={firstName != '' ? 1 : 2}
                borderColor={
                  firstName != '' ? Colors.CYAN_BLUE : Colors.ALICE_BLUE
                }
                labelFontFamily={Fonts.POPPINS_REGULAR}
                placeholder="Enter First Name"
                value={firstName}
                bgColor={firstName != '' ? Colors.ALICE_BLUE : Colors.WHITE}
                mtop={getResponsiveHeight(0.5)}
                paddingLeft={getResponsiveWidth(5)}
                InputTextFontFamily={Fonts.INTER_MEDIUM}
                InputTextSize={Fonts.FONT_18}
              />
              <View style={styles.InputContainer}>
                <InputComponent
                  label="Last name"
                  labelFontSize={Fonts.FONT_14}
                  labelColor={Colors.BLACK}
                  bordered
                  disabled={false}
                  borderWidth={lastName != '' ? 1 : 2}
                  borderColor={
                    lastName != '' ? Colors.CYAN_BLUE : Colors.ALICE_BLUE
                  }
                  labelFontFamily={Fonts.POPPINS_REGULAR}
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={val => this.lastNameHandler(val)}
                  InputTextFontFamily={Fonts.INTER_MEDIUM}
                  InputTextSize={Fonts.FONT_18}
                  bgColor={lastName != '' ? Colors.ALICE_BLUE : Colors.WHITE}
                  mtop={getResponsiveHeight(0.5)}
                  paddingLeft={getResponsiveWidth(5)}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <ButtonComponent
            text="Next"
            onPress={(val) => this.onPress(val)}
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
