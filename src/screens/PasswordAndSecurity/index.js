import React, { Component } from 'react';
import { Text, View, ScrollView, SafeAreaView, Switch, Modal, Image, TouchableOpacity } from 'react-native';
import Colors from '../../common/constants/colors'
import Fonts from '../../common/constants/fonts'
import { getResponsiveWidth, getResponsiveHeight } from '../../common/helper/utils'
import InputComponent from '../../components/InputComponent'
import ButtonComponent from '../../components/ButtonComponent'
import styles from './styles';
import { BlurView } from '@react-native-community/blur';
import IMAGES from '../../common/constants/images'
import { showMessage } from 'react-native-flash-message';

export default class PasswordAndSecurity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            oldPassword: "",
            newPassword: "",
            confirmNewPassword: "",
            modalVisible: false
        };
    }

    validatePassword = () => {
        let strongRegex = new RegExp(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
        );
        if (this.state.newPassword != "" && this.state.confirmNewPassword != "") {
          if (!strongRegex.test(this.state.newPassword) || !strongRegex.test(this.state.confirmNewPassword)) {
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
            if (this.state.newPassword === this.state.confirmNewPassword) {
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
        const { toggle, oldPassword, newPassword, confirmNewPassword, modalVisible } = this.state
        return (
            <View style={styles.Container}>
                <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView>
                        <Text style={styles.headTitle}>Change Password</Text>
                        <Text style={styles.instruction}>Create a new password that is at least 8 characters long</Text>
                        <View style={styles.inputContainer}>
                            <InputComponent
                                label="Type your old password"
                                labelFontSize={Fonts.FONT_13}
                                labelColor={Colors.BLACK}
                                opacity={0.3}
                                bordered
                                secureTextEntry
                                disabled={false}
                                borderWidth={0.5}
                                borderColor={Colors.CYAN_BLUE}
                                labelFontFamily={Fonts.POPPINS_REGULAR}
                                mtop={getResponsiveHeight(1)}
                                bgColor={Colors.ALICE_BLUE}
                                paddingLeft={getResponsiveWidth(4)}
                                InputTextFontFamily={Fonts.INTER_MEDIUM}
                                InputTextSize={Fonts.FONT_16}
                                onChange={val => {
                                    this.setState({
                                        oldPassword: val
                                    })
                                }}
                                value={oldPassword}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <InputComponent
                                label="Type your new password"
                                labelFontSize={Fonts.FONT_13}
                                labelColor={Colors.BLACK}
                                opacity={0.3}
                                bordered
                                secureTextEntry
                                disabled={false}
                                borderWidth={0.5}
                                borderColor={Colors.CYAN_BLUE}
                                labelFontFamily={Fonts.POPPINS_REGULAR}
                                mtop={getResponsiveHeight(1)}
                                bgColor={Colors.ALICE_BLUE}
                                paddingLeft={getResponsiveWidth(3.5)}
                                InputTextFontFamily={Fonts.INTER_MEDIUM}
                                InputTextSize={Fonts.FONT_16}
                                onChange={val => {
                                    this.setState({
                                        newPassword: val
                                    })
                                }}
                                value={newPassword}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <InputComponent
                                label="Retype your new password"
                                labelFontSize={Fonts.FONT_13}
                                labelColor={Colors.BLACK}
                                opacity={0.3}
                                bordered
                                secureTextEntry
                                disabled={false}
                                borderWidth={0.5}
                                borderColor={Colors.CYAN_BLUE}
                                labelFontFamily={Fonts.POPPINS_REGULAR}
                                mtop={getResponsiveHeight(1)}
                                bgColor={Colors.ALICE_BLUE}
                                paddingLeft={getResponsiveWidth(4)}
                                InputTextFontFamily={Fonts.INTER_MEDIUM}
                                InputTextSize={Fonts.FONT_16}
                                onChange={val => {
                                    this.setState({
                                        confirmNewPassword: val
                                    })
                                }}
                                value={confirmNewPassword}
                            />
                        </View>
                        <View style={styles.toggleContainer}>
                            <Text style={styles.toggleText}>Require all devices to sign in with new password</Text>
                            <Switch value={toggle}
                                onChange={() => this.setState({
                                    toggle: !toggle
                                })}
                                trackColor={{ false:Colors.LIGHT_GREY, true: Colors.SKY_BLUE }}
                                thumbColor={toggle ? Colors.WHITE : Colors.WHITE}
                            />
                        </View>
                        <Modal
                            visible={modalVisible}
                            transparent={true}
                            animationType={'slide'}
                        >
                            <View style={styles.transparentBg}>
                                <BlurView
                                    style={styles.blurViewStyle}
                                    blurRadius={1}
                                    blurType="light"
                                />
                                <View style={styles.modal}>
                                    <Image
                                        resizeMode="contain"
                                        source={IMAGES.TICKET_SENT}
                                        style={styles.modalImage}
                                    />
                                    <Text style={styles.successText}>
                                        Pasword Updated Sucessfully
                                    </Text>
                                    <SafeAreaView>
                                        <TouchableOpacity style={styles.tochableTxtBtn} onPress={() => this.props.navigation.navigate("Settings")}>
                                            <Text style={styles.btnTxt}>Go back to settings</Text>
                                        </TouchableOpacity>
                                    </SafeAreaView>
                                    <View />
                                </View>
                            </View>
                        </Modal>
                    </ScrollView>
                    <View style={styles.buttonContainer}>
                        <ButtonComponent
                             onPress={this.validatePassword}
                            disabled={
                                oldPassword !== "" && newPassword !== "" & confirmNewPassword !== ""
                                    ? false : true
                            }
                            text="Update Password"
                            mbottom={getResponsiveHeight(3.8)}
                            textColor={Colors.WHITE}
                            ButtonColor={oldPassword !== "" && newPassword !== "" & confirmNewPassword !== "" ?
                                Colors.BLUE : Colors.LIGHT_GREY
                            }
                            fontSize={Fonts.FONT_14}
                            height={getResponsiveWidth(12.5)}
                            width={getResponsiveWidth(70)}
                            fontFamily={Fonts.POPPINS_REGULAR}
                        />
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}
