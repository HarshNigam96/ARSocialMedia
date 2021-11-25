import React, { Component } from 'react';
import { Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { getResponsiveHeight, getResponsiveWidth } from '../../../common/helper/utils';
import CountryPicker from 'react-native-country-picker-modal';
import Fonts from '../../../common/constants/fonts'
import InputComponent from '../../../components/InputComponent';
import IMAGES from '../../../common/constants/images'
import ButtonComponent from '../../../components/ButtonComponent';
import { showMessage } from 'react-native-flash-message';
export default class PhoneNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickCountryCode: '91',
            mobileNumber: '',
        };
    }

    countryCodeHandler = (val) => {
        this.setState({ pickCountryCode: val.callingCode })
        this.props.countryCode(val.callingCode)
    }

    mobileNumberHandler = val => {
        this.setState({
            mobileNumber: val
        })
        this.props.mobileNumber(val)
    }

    onPress = (val) => {
        if ((this.state.mobileNumber === '' )) {
         showMessage({
           type:"danger", message:"error",description:"please enter your Mobile Number"
         })
        } else {
          this.props.onPress(val);
        }
      };

    render() {
        const { pickCountryCode, mobileNumber } = this.state;
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.ComponentContainer}>
                    <Text style={styles.HeadLineText}>Enter your Phone number</Text>
                    <Text style={styles.ProvideDetails}>
                        Provide the mobile number to help us verify your account
                    </Text>
                    <TouchableOpacity style={styles.codePicker}>
                        <CountryPicker
                            placeholder={'+' + pickCountryCode}
                            withFilter
                            withFlag={false}
                            withCallingCode
                            onSelect={val =>
                                this.countryCodeHandler(val)
                            }
                        />
                        <Image style={styles.chevronIcon} source={IMAGES.DROPDOWN} />
                    </TouchableOpacity>
                    <View style={{ marginTop: getResponsiveHeight(2.4) }}>
                        <InputComponent
                            label="phone no"
                            labelFontSize={Fonts.FONT_13}
                            value={mobileNumber}
                            onChange={val =>
                                this.mobileNumberHandler(val)
                            }
                            keyType="numeric"
                            labelColor={Colors.BLACK}
                            opacity={0.3}
                            bordered
                            borderWidth={0.5}
                            borderColor={Colors.CYAN_BLUE}
                            labelFontFamily={Fonts.POPPINS_REGULAR}
                            placeholder="Mobile no."
                            mtop={getResponsiveHeight(1)}
                            bgColor={Colors.ALICE_BLUE}
                            paddingLeft={getResponsiveWidth(4)}
                            InputTextFontFamily={Fonts.INTER_MEDIUM}
                            InputTextSize={Fonts.FONT_18}
                        />
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
