import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import Colors from '../../common/constants/colors';
import Fonts from '../../common/constants/fonts';
import IMAGES from '../../common/constants/images';
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

export default class AccountCreated extends Component {

  render() {
    const { socialLogin } = this.props.route.params;
    return (
      <View style={styles.Container}>
        <StatusBar translucent backgroundColor="transparent" />
        <ScrollView contentContainerStyle={styles.contentContainerStyle} bounces={false}>
          <ImageBackground
            style={styles.mainImage}
            source={IMAGES.WELCOMESCREENIMAGE}>
            <LinearGradient colors={['transparent', '#ffffff', '#ffffff']}>
              <Text style={styles.Logo}>Account Created!</Text>
              <View style={styles.componentContainer}>
                <Text style={styles.Text}>
                  Welcome to AR Social Community. Your account has been verified
                  successfully, please proceed to your home page
                </Text>
                <ButtonComponent
                  text="Proceed"
                  onPress={() => socialLogin ? this.props.navigation.navigate("SignUp", {
                    socialLogin: true
                  }) : this.props.navigation.navigate("Home")}
                  textColor={Colors.WHITE}
                  ButtonColor={Colors.BLUE}
                  height={getResponsiveWidth(12)}
                  mtop={getResponsiveHeight(15)}
                  mbottom={getResponsiveHeight(3)}
                  fontSize={Fonts.FONT_18}
                  fontFamily={Fonts.POPPINS_MEDIUM}
                />

              </View>
            </LinearGradient>
          </ImageBackground>
        </ScrollView>
      </View>
    );
  }
}
