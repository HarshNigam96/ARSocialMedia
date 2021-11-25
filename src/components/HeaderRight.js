import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  SafeAreaView
} from 'react-native';
import IMAGES from '../common/constants/images';
import Colors from '../common/constants/colors';
import { getResponsiveHeight, getResponsiveWidth } from '../common/helper/utils';
export default class HeaderRight extends Component {
  render() {
    const { upload, notification } = this.props;
    return (
      <View style={styles.headerContainer}>
        <SafeAreaView>
          <View style={styles.IconContainer}>
            <View style={styles.Direction}>
              <TouchableOpacity onPress={upload}>
                <Image
                  resizeMode="contain"
                  source={IMAGES.PLUS}
                  style={styles.addIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={notification}>
                <Image
                  resizeMode="contain"
                  source={IMAGES.NOTIFICATION}
                  style={styles.bellIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.OFF_WHITE,
    paddingLeft: getResponsiveWidth(8),
    paddingRight: getResponsiveWidth(5),
  },
  IconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Direction: {
    flexDirection: 'row',
  },
  addIcon: {
    height: getResponsiveHeight(3),
    width: getResponsiveHeight(6),
  },
  bellIcon: {
    height: getResponsiveHeight(3),
    width: getResponsiveWidth(6),
  },
});
