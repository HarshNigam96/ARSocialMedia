import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { getResponsiveHeight } from '../../common/helper/utils'
import IMAGES from '../../common/constants/images'
import styles from './styles';
export default class ProfileImage extends Component {
  render() {
    const { coverPic, profilePic } = this.props.route.params
    return (
      <View style={styles.Container}>
        <TouchableOpacity style={styles.backIconContainer}
          onPress={() => this.props.navigation.goBack()}>
          <Image resizeMode="contain" source={IMAGES.LEFTARROW} style={styles.backArrowImage} />
        </TouchableOpacity>
        <ScrollView style={{ paddingHorizontal: profilePic ? getResponsiveHeight(2.5) : 0 }}>
          <Image source={{ uri: profilePic ? profilePic : coverPic }}
            style={profilePic ? styles.profilePic : styles.coverPic} />
        </ScrollView>
      </View>
    );
  }
}
