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

export default class DOB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Dob: '',
    };
  }

  inputHandler = val => {
    this.setState({
      Dob: val,
    });
    this.props.birth(val);
  };

  onPress = (val) => {
    if ((this.state.Dob === "")) {
      showMessage({
        type: "danger", message: "error",description:"enter your Date of birth"
      })
    } else {
      this.props.onPress(val);
    }
  };
  render() {
    const { Dob } = this.state;
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.ComponentContainer}>
          <Text style={styles.HeadLineText}>What’s your Date of birth?</Text>
          <Text style={styles.ProvideDetails}>
            Please provide your official date of birth below
          </Text>
          <View style={styles.InputContainer}>
            <View>
              <InputComponent
                label="Date of birth"
                labelFontSize={Fonts.FONT_14}
                labelColor={Colors.BLACK}
                bordered
                keyType="numeric"
                opacity={0.5}
                disabled={false}
                borderWidth={Dob != '' ? 1 : 2}
                borderColor={Dob != '' ? Colors.CYAN_BLUE : Colors.ALICE_BLUE}
                labelFontFamily={Fonts.POPPINS_REGULAR}
                placeholder="Date of Birth"
                value={Dob}
                onChange={val => this.inputHandler(val)}
                bgColor={Dob != '' ? Colors.ALICE_BLUE : Colors.WHITE}
                mtop={getResponsiveHeight(0.5)}
                paddingLeft={getResponsiveWidth(5)}
                InputTextFontFamily={Fonts.INTER_MEDIUM}
                InputTextSize={Fonts.FONT_18}
              />
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
