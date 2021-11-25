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
export default class HeaderLeft extends Component {
  render() {
    const { openDrawer } = this.props;
    return (
      <View style={styles.headerContainer}>
        <SafeAreaView>
          <View style={styles.IconContainer}>
            <TouchableOpacity onPress={openDrawer}>
              <Image
                resizeMode="contain"
                source={IMAGES.HAMBURGER}
                style={styles.drawerIcon}
              />
            </TouchableOpacity>
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
    // marginTop: StatusBar.currentHeight,
  },
  drawerIcon: {
    height: getResponsiveHeight(2.5),
    width: getResponsiveWidth(5),
  },
});
