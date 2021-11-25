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

export default class CreateUserName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
  }

  userNameHandler = val => {
    this.setState({
      user: val,
    });
    this.props.userName(val);
  };

  onPress = (val) => {
    if ((this.state.user === "")) {
      showMessage({
        type: "danger", message: "error",description:"please enter your Username"
      })
    } else {
      this.props.onPress(val);
    }
  };
  render() {
    const { user } = this.state;
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.ComponentContainer}>
          <Text style={styles.HeadLineText}>Create a Username for yourself</Text>
          <Text style={styles.ProvideDetails}>
            Username can only accept lowercase letters & numbers
          </Text>
          <View style={styles.InputContainer}>
            <View>
              <InputComponent
                label="Username"
                labelFontSize={Fonts.FONT_14}
                labelColor={Colors.BLACK}
                bordered
                opacity={0.5}
                disabled={false}
                borderWidth={user != '' ? 1 : 2}
                borderColor={user != '' ? Colors.CYAN_BLUE : Colors.ALICE_BLUE}
                labelFontFamily={Fonts.POPPINS_REGULAR}
                placeholder="Enter Username"
                value={user.toLowerCase()}
                onChange={val => this.userNameHandler(val)}
                bgColor={user != '' ? Colors.ALICE_BLUE : Colors.WHITE}
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
