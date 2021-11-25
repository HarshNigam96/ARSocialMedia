import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';
import { getResponsiveHeight, getResponsiveWidth } from '../common/helper/utils';
import Colors from '../common/constants/colors';
import Fonts from '../common/constants/fonts';
export default class InputComponent extends Component {
  render() {
    const {
      mtop,
      mbottom,
      mright,
      mleft,
      label = '',
      labelFontSize = '',
      labelFontFamily = '',
      labelColor = '',
      opacity,
      placeholder,
      secureTextEntry = false,
      bordered = false,
      borderWidth,
      borderBottomWidth,
      paddingLeft,
      borderColor,
      imageSoucre,
      requiredImage = false,
      keyType,
      bgColor = Colors.WHITE,
      InputTextSize = Fonts.FONT_14,
      InputTextFontFamily = Fonts.POPPINS_REGULAR,
      onChange,
      value,
      onPress,
      disabled = true,
      imageStyle,
      maxLength,
      ref,
      inputTxtColor=Colors.BLACK
    } = this.props;
    return (
      <View>
        <Text
          style={{
            fontSize: labelFontSize,
            fontFamily: labelFontFamily,
            color: labelColor,
            opacity: opacity,
          }}>
          {label}
        </Text>
        <View
          style={[
            {
              backgroundColor: bgColor,
              borderBottomWidth: bordered ? borderBottomWidth : null,
              borderWidth: bordered ? borderWidth : null,
              borderColor: bordered ? borderColor : null,
              marginTop: mtop,
              marginLeft: mleft,
              marginRight: mright,
              height: Platform.OS === 'ios' ? getResponsiveWidth(12) : null
            },
            styles.inputFieldContainer,
          ]}>
          <TextInput
            autoCapitalize="none"
            ref={ref}
            maxLength={maxLength}
            placeholder={placeholder}
            placeholderTextColor={Colors.LIGHT_GREY}
            onChangeText={onChange}
            value={value}
            keyboardType={keyType}
            secureTextEntry={secureTextEntry}
            style={{
              paddingLeft: bordered ? paddingLeft : null,
              fontSize: InputTextSize,
              fontFamily: InputTextFontFamily,
              width: getResponsiveWidth(75),
              color:inputTxtColor
            }}
          />
          {requiredImage ? (
            <TouchableOpacity onPress={onPress} disabled={disabled}>
              <Image
                resizeMode="contain"
                source={imageSoucre}
                style={[styles.image, imageStyle]}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputFieldContainer: {
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: getResponsiveHeight(5),
    width: getResponsiveWidth(4),
  },
  touchableIcon: {
    right: getResponsiveWidth(0.5),
  },
});
