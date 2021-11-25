import React, { Component } from 'react';
import { Text, View, SafeAreaView, Modal, Switch } from 'react-native';
import Colors from '../../common/constants/colors'
import Fonts from '../../common/constants/fonts';
import styles from './styles'
import ButtonComponent from '../../components/ButtonComponent'
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils'
import { BlurView } from '@react-native-community/blur';
export default class AccountPrivacy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false,
      modalVisible: false
    }
  }

  turnOn = () => {
    this.setState({
      toggle: true,
    })
    if (this.state.toggle) {
      this.props.navigation.navigate("Dashboard")
    }
  }
  render() {
    const { toggle, modalVisible } = this.state
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.optionsContainer}>
            <Text style={styles.optionTxtStyle}>Private Account</Text>
            <Switch value={toggle}
              onChange={() => this.setState({
                modalVisible: true
              })}
              trackColor={{ false: Colors.GREY, true: Colors.SKY_BLUE }}
              thumbColor={toggle ? Colors.WHITE : Colors.WHITE}
            />
          </View>
          <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.transparentBg}>
              <BlurView
                style={styles.blurViewStyle}
                blurRadius={1}
                blurType="light"
              />
              <View style={styles.modalContainer}>
                <Text style={styles.info}>Your current followers would be able to view your photos & vides, new followers would have send a follow request to successfully follow you.</Text>
                <View style={styles.buttonContainer}>
                  <ButtonComponent
                    onPress={this.turnOn}
                    text="Switch to private"
                    mbottom={getResponsiveHeight(3.8)}
                    mtop={getResponsiveHeight(8)}
                    textColor={Colors.WHITE}
                    ButtonColor={Colors.BLUE}
                    fontSize={Fonts.FONT_18}
                    height={getResponsiveWidth(14)}
                    fontFamily={Fonts.MULISH_MEDIUM}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </SafeAreaView>
      </View >
    );
  }
}
