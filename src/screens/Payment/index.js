import React, { Component } from 'react'
import {
    Text,
    TextInput,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    Modal,
    ActivityIndicator,
    Platform
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import IMAGES from '../../common/constants/images'
import Colors from '../../common/constants/colors'
import Fonts from '../../common/constants/fonts'
import ButtonComponent from '../../components/ButtonComponent'
import InputComponent from '../../components/InputComponent'
import { getResponsiveHeight, getResponsiveWidth, WIDTH } from '../../common/helper/utils';
import styles from './styles';
import Strings from '../../common/constants/Strings';
import { CardView } from "react-native-credit-card-input";
import AccountActivate from '../../components/AccountActivate';

export default class Payment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
            modalVisible: false,
            spinner: false,
            cardHolderName: "",
            expiryDate: "",
            cardNumber: "",
            onFocus: ""
        }
    }
    onProceed = () => {
        this.setState({
            modalVisible: true,
            spinner: true
        })
        setTimeout(() => {
            this.setState({
                spinner: false
            })
        }, 3000)
    }
    fixCardText = (text) => {
        if (text.length == 2 && this.state.expiryDate.length == 1) {
            text += '/';
        } else if (text.length == 2 && this.state.expiryDate.length == 2) {
            text = text.substring(0, text.length - 1);
        }
        this.setState({ expiryDate: text });
        if (text.length === 5) {
            this.refs.cvc.focus()
        }
    }
    _handlingCardNumber(number) {
        this.setState({
            cardNumber: number
                .replace(/\s?/g, '')
                .replace(/(\d{4})/g, '$1 ')
                .trim(),
        });
        if (number.length === 19) {
            this.refs.expiry.focus();
        }
    }

    render() {
        const { modalVisible, spinner } = this.state
        const data = [
            {
                cardHolderName: "Sameul",
                brand: "diners-club",
                number: "4747 4747 4747 4747", expiry: "07/21", cvc: "123"
            },
            {
                cardHolderName: "Andy",
                brand: "visa",
                number: "1234 1234 1234 1234", expiry: "02/21", cvc: "567"
            },
            {
                cardHolderName: "Charls",
                brand: "jcb",
                number: "5678 5678 4567 4568",
                expiry: "12/21",
                cvc: "300"
            },
            {
                cardHolderName: "endy",
                brand: "master-card",
                number: "5678 5678 4567 4568",
                expiry: "12/21",
                cvc: "300"
            },
        ];
        const handleCarouselScrollEnd = (item, index) => {
            this.setState({
                currentIndex: index
            })
        }
        const renderItem = ({ item, index }) => {

            return (
                <CardView
                    name={item.cardHolderName}
                    number={item.number}
                    expiry={item.expiry}
                    cvc={item.cvc}
                    focused={this.state.onFocus}
                    placeholder={
                        number = item.number,
                        name = item.cardHolderName,
                        expiry = item.expiry,
                        cvc = item.cvc
                    }
                    autoFocus
                    brand={item.brand}
                    display={true}
                    clickable
                    flipDirection="v"
                />
            );
        }
        return (
            <View style={styles.Container}>
                <SafeAreaView style={{ flex: 1 }} >
                    <ScrollView contentContainerStyle={styles.contentContainer}>
                        <View>
                            <TouchableOpacity style={styles.titleContainer}>
                                <Image resizeMode="contain"
                                    style={styles.addCardImg} source={IMAGES.ADD_NEW_CARD} />
                            </TouchableOpacity>
                            <View style={styles.carouselContainer}>
                                <Carousel
                                    style={styles.carousel}
                                    data={data}
                                    renderItem={renderItem}
                                    itemWidth={Platform.OS === "ios" ? 0.7 * WIDTH : 0.8 * WIDTH}
                                    inActiveOpacity={0.8}
                                    containerWidth={WIDTH}
                                    onScrollEnd={handleCarouselScrollEnd}
                                    ref={"carouselRef"}
                                />
                            </View>
                        </View>
                        <View style={styles.inputComponentsContainer}>
                            <InputComponent
                                label="Name on card"
                                labelFontSize={Fonts.FONT_14}
                                labelColor={Colors.BLACK}
                                value={this.state.cardHolderName}
                                onChange={val => {
                                    this.setState({
                                        cardHolderName: val
                                    })
                                }}
                                bordered
                                opacity={0.5}
                                disabled={false}
                                borderWidth={1}
                                borderColor={Colors.GREY}
                                labelFontFamily={Fonts.POPPINS_REGULAR}
                                mtop={getResponsiveHeight(1)}
                                paddingLeft={getResponsiveWidth(5)}
                                InputTextFontFamily={Fonts.INTER_REGULAR}
                                InputTextSize={Fonts.FONT_14}
                            />
                            <View style={styles.textFieldContainer}>
                                <InputComponent
                                    label="Card Number"
                                    keyType="numeric"
                                    maxLength={19}
                                    ref={"number"}
                                    labelFontSize={Fonts.FONT_14}
                                    labelColor={Colors.BLACK}
                                    bordered
                                    opacity={0.5}
                                    disabled={false}
                                    borderWidth={1}
                                    borderColor={Colors.GREY}
                                    labelFontFamily={Fonts.POPPINS_REGULAR}
                                    mtop={getResponsiveHeight(1)}
                                    paddingLeft={getResponsiveWidth(5)}
                                    InputTextFontFamily={Fonts.INTER_REGULAR}
                                    InputTextSize={Fonts.FONT_14}
                                    onChange={(text) => this._handlingCardNumber(text)}
                                    value={this.state.cardNumber}
                                />
                            </View>
                            <View style={styles.HorizontalFieldsContainer}>
                                <View style={styles.width}>
                                    <Text style={styles.labels}>Expiry Date</Text>
                                    <TextInput
                                        ref={"expiry"}
                                        maxLength={5}
                                        value={this.state.expiryDate}
                                        onChangeText={(text) => {
                                            this.fixCardText(text);
                                        }}
                                        keyboardType="numeric"
                                        style={styles.HorizontalFields}

                                    />
                                </View>
                                <View style={styles.width}>
                                    <Text style={styles.labels}>CVC</Text>
                                    <TextInput
                                        onFocus={val => this.setState({
                                            onFocus: "cvc"
                                        })}
                                        ref={"cvc"}
                                        maxLength={3}
                                        keyboardType="numeric"
                                        style={styles.HorizontalFields} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <ButtonComponent
                                onPress={this.onProceed}
                                text={"Proceed"}
                                mbottom={getResponsiveHeight(3.8)}
                                mtop={getResponsiveHeight(1)}
                                textColor={Colors.WHITE}
                                ButtonColor={Colors.BLUE}
                                fontSize={Fonts.FONT_18}
                                height={getResponsiveWidth(12.5)}
                                fontFamily={Fonts.MULISH_MEDIUM}
                            />
                        </View>
                        <Modal animationType="slide" visible={modalVisible}>
                            {spinner ? <View style={styles.spinnerContainer}>
                                <ActivityIndicator color={Colors.BLUE} size="large" />
                                <Text style={styles.pleaseWaitTxt}>Please wait....</Text>
                            </View>
                                :
                                <AccountActivate
                                    title={Strings.SUBSCRIPTION_ACTIVATED}
                                    description={Strings.PAID_ACCOUNT_FEATURES}
                                />
                            }
                            {spinner ? null :
                                <View style={styles.buttonContainer}>
                                    <ButtonComponent
                                        text="Home"
                                        onPress={() => this.props.navigation.navigate("Dashboard")}
                                        mbottom={getResponsiveHeight(8)}
                                        textColor={Colors.WHITE}
                                        ButtonColor={Colors.BLUE}
                                        fontSize={Fonts.FONT_18}
                                        height={getResponsiveWidth(12.5)}
                                        fontFamily={Fonts.MULISH_MEDIUM}
                                    />
                                </View>}

                        </Modal>
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }
}