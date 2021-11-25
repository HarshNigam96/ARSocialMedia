import React, { Component } from 'react';
import { Text, View, Image, SafeAreaView } from 'react-native';
import styles from '../styles';
import { getResponsiveHeight,getResponsiveWidth } from '../../../common/helper/utils';
import CountryPicker from 'react-native-country-picker-modal';
import IMAGES from '../../../common/constants/images';
import ButtonComponent from '../../../components/ButtonComponent';
import { showMessage } from 'react-native-flash-message';
import Fonts from '../../../common/constants/fonts'
export default class SelectCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickCountry: 'India',
    };
  }
  onSelect = val => {
    this.setState({
      pickCountry: val.name,
    });
    this.props.selectedCountry(val.name);
  };
  onPress = (val) => {
    if ((this.state.pickCountry === "")) {
      showMessage({
        type: "danger", message: "error",description:"please select your Country"
      })
    } else {
      this.props.onPress(val);
    }
  };
  render() {
    const { pickCountry } = this.state;
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.ComponentContainer}>
          <Text style={styles.HeadLineText}>Select your Country</Text>
          <Text style={styles.ProvideDetails}>
            Please pick your country to help curate Ads for you
          </Text>
          <View style={styles.InputContainer}>
            <View>
              <Text style={styles.label}>Select Country</Text>
              <CountryPicker
                containerButtonStyle={{
                  marginTop: getResponsiveHeight(0.5),
                  borderColor:
                    pickCountry != '' ? Colors.CYAN_BLUE : Colors.ALICE_BLUE,
                  backgroundColor:
                    pickCountry != '' ? Colors.ALICE_BLUE : Colors.WHITE,
                  padding: getResponsiveHeight(1.5),
                  borderWidth: pickCountry != '' ? 1 : 2,
                  borderRadius: getResponsiveHeight(1),
                }}
                placeholder={pickCountry}
                withFilter
                withFlag={false}
                onSelect={val => this.onSelect(val)}
              />
              <Image
                resizeMode="contain"
                style={styles.dropDown}
                source={IMAGES.DROPDOWN}
              />
            </View>
            <Text style={styles.optionalTextStyle}>(optional)</Text>
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
