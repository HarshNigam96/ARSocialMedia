import React, { Component } from 'react';
import { View, ImageBackground, TextInput, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import styles from './styles';
import IMAGES from '../../common/constants/images'
import ImagePicker from 'react-native-image-crop-picker';

MapboxGL.setAccessToken('pk.eyJ1IjoiaGlnaHBvbGFyIiwiYSI6ImNrc2c0Yzg2ZDFnamczMm8zbDFweGxuNXYifQ.vV7jFkZDgQwkp5VZb-HtUw');

export default class Maps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          img: "https://i1.wp.com/southgatemedical.com.au/wp-content/uploads/2020/11/junk-food.jpg?fit=800%2C800&ssl=1",
          coordinate: [
            [-73.98330688476561, 40.76975180901395],
          ]
        },
        {
          img: "https://media.nomadicmatt.com/2021/party1.jpg",
          coordinate: [
            [19.040236, 47.497955],
          ]
        },
        {
          img: "https://static.toiimg.com/photo/79796910/new-1.jpg?width=748&resize=4",
          coordinate: [
            [-73.96682739257812, 40.761560925502806],
          ]
        },
        {
          img: "https://img.freepik.com/free-vector/lots-colorful-tiny-confetti-ribbons-transparent-background_220217-3295.jpg?size=626&ext=jpg",
          coordinate: [
            [-74.00751113891602, 40.746346606483826],
          ]
        },
      ],
    };
  }

  openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: false,
    }).then(image => {
      console.log(image.path);
    });
  }

  renderAnnotation(val, counter) {
    const id = `pointAnnotation${counter}`;
    const coordinate = val.coordinate[0]

    return (
      <MapboxGL.MarkerView
        key={id}
        id={id}
        title='Test'
        coordinate={coordinate}>
        <TouchableOpacity style={styles.Touchable} onPress={() => this.props.navigation.navigate("LocationPost", {
          postedImage: val.img
        })}>
          <ImageBackground source={IMAGES.MARKER} style={styles.marker}>
            <Image style={styles.markerDynamicImage} source={{ uri: val.img }} />
          </ImageBackground>
        </TouchableOpacity>
      </MapboxGL.MarkerView>

    );
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <MapboxGL.MapView
            style={styles.map}
            zoomLevel={11}
            userTrackingMode={1}
            centerCoordinate={this.state.data[0]}
          >
            {this.state.data.map((val, index) => this.renderAnnotation(val, index))}
          </MapboxGL.MapView>
        </View>
        <SafeAreaView style={styles.searchContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image style={styles.backArrow}
              source={IMAGES.BACK_ARROW} />
          </TouchableOpacity>
          <View style={styles.inputContainer}>
            <Image source={IMAGES.SEARCH}
              style={styles.searchIcon}
            />
            <TextInput style={styles.textInput}
              placeholder="Search"
              placeholderTextColor={Colors.BLACK}
            />
          </View>
        </SafeAreaView>
        <SafeAreaView style={styles.optionContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("LocationPost", {
            postedImage: "https://images.all-free-download.com/images/graphicthumb/lioness_profile_193744.jpg"
          })}>
            <Image
              style={styles.image}
              source={{ uri: "https://images.all-free-download.com/images/graphicthumb/lioness_profile_193744.jpg" }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Search", { screen: "LocationSetting" })}
            style={styles.touchable}>
            <Image source={IMAGES.GEAR}
              style={styles.optionIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.openCamera}
            style={styles.touchable}>
            <Image
              source={IMAGES.FILLED_CAMERA}
              style={styles.optionIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable}>
            <Image source={IMAGES.Record}
              style={styles.optionIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable} onPress={() => this.props.navigation.navigate("Search", { screen: "MapUsers" })}>
            <Image source={IMAGES.USER}
              style={styles.optionIcon} />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  }
}