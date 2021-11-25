import React, { Component } from 'react';
import { SafeAreaView, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import IMAGES from '../../common/constants/images'
import styles from './styles';
import Fonts from '../../common/constants/fonts'
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils'
export default class Profile extends Component {

  render() {
    return (
      <View style={styles.Container}>
        <ImageBackground
          style={styles.imageBackground}
          source={{ uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" }}>
          <SafeAreaView style={styles.safeAreaContainer}>
            <TouchableOpacity style={styles.backbtnContainer}>
              <Image resizeMode="contain"
                source={IMAGES.LEFTARROW}
                style={styles.backButton} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("ProfileImage", {
              coverPic: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            })} style={{ flex: 1 }} />
            <View style={styles.userDetailContainer}>
              <Text style={styles.userNameTxt}>Andy Restaurant</Text>
              <View style={styles.detailContainer}>
                <View style={styles.detailAlignment}>
                  <Text style={styles.placeHoderTxt}>Mobile Number : </Text>
                  <Text style={styles.detail}>+234382658978</Text>
                </View>
                <View style={styles.detailAlignment}>
                  <Text style={styles.placeHoderTxt}>Email : </Text>
                  <Text style={styles.detail}>Andyrestaurants@gmail.com</Text>
                </View>
                <View style={styles.detailAlignment}>
                  <Text style={styles.placeHoderTxt}>Business Location : </Text>
                  <Text style={styles.detail}>Mumbai, India</Text>
                </View>
                <View style={[styles.detailAlignment, { flexWrap: "wrap", }]}>
                  <Text style={styles.placeHoderTxt}>Website : </Text>
                  <Text style={styles.detail}>www.andyrestaurant@gmail.com</Text>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}
