import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { getResponsiveHeight, getResponsiveWidth } from '../common/helper/utils';

export default class ButtonComponent extends Component {
  render() {
    const {
      onPress,
      ButtonColor,
      height,
      width,
      textColor,
      fontSize,
      text,
      isBorderWidth = false,
      borderWidth,
      borderColor,
      mtop,
      mbottom,
      mleft,
      mright,
      requireImage = false,
      imageSource,
      fontFamily,
      disabled = false
    } = this.props;
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[
          styles.ButtonContainer,
          {
            marginTop: mtop,
            marginBottom: mbottom,
            marginLeft: mleft,
            marginRight: mright,
            backgroundColor: ButtonColor,
            height: height,
            width: width,
            borderWidth: isBorderWidth ? borderWidth : null,
            borderColor: borderColor,
            borderRadius: 50,
          },
        ]}>
        {requireImage ? (
          <Image
            resizeMode="contain"
            source={imageSource}
            style={styles.logo}
          />
        ) : null}
        <Text
          style={{
            color: textColor,
            fontSize: fontSize,
            fontFamily: fontFamily,
          }}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  ButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: getResponsiveWidth(5),
    width: getResponsiveWidth(5.5),
    position: 'absolute',
    left: getResponsiveWidth(6),
  },
});
