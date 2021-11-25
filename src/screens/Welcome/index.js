import React, {Component} from 'react';
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
import {getResponsiveHeight, getResponsiveWidth} from '../../common/helper/utils';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

export default class Welcome extends Component {
  
  render() {
    return (
      <View style={styles.Container}>
        <StatusBar translucent backgroundColor="transparent" />
        <ScrollView contentContainerStyle={styles.contentContainerStyle} bounces={false}>
          <ImageBackground
            style={styles.mainImage}
            source={IMAGES.WELCOMESCREENIMAGE}>
            <LinearGradient colors={['transparent', '#ffffff', '#ffffff']}>
              <Image
                resizeMode="contain"
                style={styles.Logo}
                source={IMAGES.LOGO}
              />
              <View style={styles.componentContainer}>
                <Text style={styles.Text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
                  enim a aenean auctor. Morbi dap
                </Text>
                <ButtonComponent
                  text="Sign Up"
                  onPress={() =>
                    this.props.navigation.navigate('SignUpDefault')
                  }
                  textColor={Colors.WHITE}
                  ButtonColor={Colors.BLUE}
                  height={getResponsiveWidth(12.5)}
                  mtop={getResponsiveHeight(4.5)}
                  fontSize={Fonts.FONT_15}
                  fontFamily={Fonts.POPPINS_SEMIBOLD}
                />
                <ButtonComponent
                  text="Login"
                  isBorderWidth
                  borderWidth={1}
                  mtop={getResponsiveHeight(3.2)}
                  mbottom={getResponsiveHeight(8)}
                  onPress={() => this.props.navigation.navigate('SignIn')}
                  height={getResponsiveWidth(12.5)}
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
