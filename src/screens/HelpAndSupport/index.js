import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, Modal, Image, TouchableOpacity } from 'react-native';
import { getResponsiveHeight, getResponsiveWidth, HEIGHT } from '../../common/helper/utils'
import Colors from '../../common/constants/colors'
import Fonts from '../../common/constants/fonts'
import InputComponent from '../../components/InputComponent'
import ButtonComponent from '../../components/ButtonComponent'
import styles from './styles';
import IMAGES from '../../common/constants/images'
import { BlurView } from '@react-native-community/blur';
export default class HelpAndSupport extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ticketTitle: "",
            mobileNumber: "234904561237634",
            message: "",
            modal: false,
            blurType: "light"
        }
    }
    render() {
        const { ticketTitle, mobileNumber, message, modal } = this.state
        return (
            <View style={styles.Container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.greet}>Hi Andy</Text>
                        <Text style={styles.dropMessageText}>If You need any help, please use this form to tell as about your problem, we will get in touch within <Text style={styles.hoursText}>24 hours</Text>.</Text>
                        <View style={styles.inputContainer}>
                            <InputComponent
                                label="Ticket Title"
                                placeholder="Enter ticket title"
                                labelFontSize={Fonts.FONT_14}
                                labelColor={Colors.BLACK}
                                bordered
                                opacity={0.5}
                                disabled={false}
                                borderWidth={ticketTitle != '' ? 1 : 2}
                                borderColor={ticketTitle != '' ? Colors.CYAN_BLUE : Colors.ALICE_BLUE}
                                labelFontFamily={Fonts.POPPINS_REGULAR}
                                bgColor={ticketTitle != '' ? Colors.ALICE_BLUE : Colors.WHITE}
                                mtop={getResponsiveHeight(0.5)}
                                paddingLeft={getResponsiveWidth(5)}
                                InputTextFontFamily={Fonts.INTER_REGULAR}
                                InputTextSize={Fonts.FONT_14}
                                value={ticketTitle}
                                onChange={val => this.setState({
                                    ticketTitle: val
                                })}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <InputComponent
                                label="Phone Number"
                                labelFontSize={Fonts.FONT_14}
                                labelColor={Colors.BLACK}
                                bordered
                                opacity={0.5}
                                disabled={false}
                                borderWidth={mobileNumber != '' ? 1 : 2}
                                borderColor={mobileNumber != '' ? Colors.CYAN_BLUE : Colors.ALICE_BLUE}
                                labelFontFamily={Fonts.POPPINS_REGULAR}
                                bgColor={mobileNumber != '' ? Colors.ALICE_BLUE : Colors.WHITE}
                                mtop={getResponsiveHeight(0.5)}
                                paddingLeft={getResponsiveWidth(5)}
                                InputTextFontFamily={Fonts.INTER_REGULAR}
                                InputTextSize={Fonts.FONT_14}
                                keyType="numeric"
                                value={"+" + mobileNumber}
                                onChange={val => this.setState({
                                    mobileNumber: val
                                })}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.messageText}>Message</Text>
                            <TextInput
                                placeholder="type message here"
                                multiline={true}
                                numberOfLines={5}
                                value={message}
                                onChangeText={val => this.setState({
                                    message: val
                                })}
                                style={
                                    [{
                                        color:Colors.BLACK,
                                        backgroundColor: message != '' ? Colors.ALICE_BLUE : Colors.WHITE,
                                        borderWidth: message != '' ? 1 : 2,
                                        borderColor: message != '' ? Colors.CYAN_BLUE : Colors.ALICE_BLUE
                                    },
                                    styles.messageTextInputField]
                                }
                            />
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <ButtonComponent
                        text="Send ticket"
                        onPress={() => {
                            this.setState({
                                modal: true
                            })
                        }}
                        mbottom={getResponsiveHeight(3.8)}
                        mtop={getResponsiveHeight(2.2)}
                        textColor={Colors.WHITE}
                        ButtonColor={Colors.BLUE}
                        fontSize={Fonts.FONT_14}
                        height={getResponsiveWidth(12.8)}
                        fontFamily={Fonts.POPPINS_MEDIUM}
                    />
                </View>
                <Modal animationType='slide' visible={modal} transparent={true}>
                    <View style={styles.transparentBg}>
                        <BlurView
                            style={styles.blurViewStyle}
                            blurRadius={1}
                            blurType="light"
                        />
                        <View style={styles.modalContainer}>
                            <Image style={styles.image} source={IMAGES.TICKET_SENT} />
                            <View style={styles.textContainer}>
                                <Text style={styles.ticketSentTxt}>Ticket Sent</Text>
                                <Text style={styles.thanksText}>Your ticket has been sent successfuly.
                                    Thank you for reaching out, we will get in touch with you within 24 hours.</Text>
                            </View>
                            <View style={styles.separator} />
                            <View style={styles.buttonContainer}>
                                <ButtonComponent
                                    text="Home"
                                    onPress={() => this.props.navigation.navigate("Dashboard")}
                                    mbottom={getResponsiveHeight(3.8)}
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
            </View>
        );
    }
}
