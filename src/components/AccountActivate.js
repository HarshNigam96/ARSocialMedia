import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import IMAGES from '../common/constants/images'
import { getResponsiveWidth, getResponsiveHeight } from '../common/helper/utils'
import Strings from '../common/constants/Strings'
import Fonts from '../common/constants/fonts'
export default class AccountActivate extends Component {
  render() {
    const { title, description, TokenId = false, Token } = this.props
    return (
      <View style={styles.Container}>
        <Image style={styles.image} source={IMAGES.BUSINESS_ACCOUNT_CREATED} />
        <Text style={styles.Title}>{title}</Text>
        {TokenId ? <Text style={styles.Title}>AR Token ID: {Token}</Text> : null}
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: getResponsiveWidth(4)
  },
  image: {
    alignSelf: "center",
    resizeMode: "contain",
    width: getResponsiveWidth(52),
    height: getResponsiveWidth(40)
  },
  Title: {
    fontSize: Fonts.FONT_24,
    textAlign: "center",
    fontFamily: Fonts.MULISH_SEMIBOLD,
    marginTop: getResponsiveHeight(3)
  },
  description: {
    textAlign: 'center',
    fontSize: Fonts.FONT_16,
    fontFamily: Fonts.MULISH_REGULAR,
    marginTop: getResponsiveHeight(4)
  }
})