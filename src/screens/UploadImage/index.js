import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import IMAGES from '../../common/constants/images'
import styles from './styles';
import ImagePicker from 'react-native-image-crop-picker';
export default class UploadImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectImageIndex: 0,
      selectMultiple: false,
      images: [
        { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNF9jJzEPlWm22-6jJusHqRDhkGRu65N6ekA&usqp=CAU" },
        { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_LhZOKN0o6Ak0qPivLkQj7gF4deb0H8tDjA&usqp=CAU" },
        { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNF9jJzEPlWm22-6jJusHqRDhkGRu65N6ekA&usqp=CAU" },
        { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLUlna3_eHqPSE44S-hCcTQzl5KH5giNw6hg&usqp=CAU" },
        { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStnKNxUeDvea2VTG10WKYuH8OC6fwuBNTXRA&usqp=CAU" },
      ],
      pickedImage: ""
    }
  }

  pickedImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      this.setState({
        pickedImage: image.path,
        selectMultiple: false
      })
    });
  }

  onSelect = (index) => {
    if (this.state.selectMultiple) {
      const { images } = this.state
      const selectImage = images
      selectImage[index].select = !selectImage[index].select
      this.setState({
        images: selectImage,
      });
    } else {
      this.setState({
        pickedImage: "",
        selectImageIndex: index,
      })
    }
  }

  render() {
    const { selectImageIndex, images, selectMultiple, pickedImage } = this.state
    return (
      <View style={styles.Container}>
        <ScrollView bounces={false}>
          <SafeAreaView>
            {images.map((val, index) => selectImageIndex === index ?
              <Image
                style={styles.BigImage}
                source={{ uri: pickedImage === "" ? val.uri : pickedImage }}
              />
              : null)}
            <View style={styles.textComponentContainer}>
              <View style={styles.galleryContainer}>
                <Text style={styles.galleryText}>Gallery</Text>
                <Image source={IMAGES.DROPDOWN} style={styles.dropDownIcon} />
              </View>
              <Text style={styles.longPressTxt}>Long press to select multiple</Text>
            </View>
            <View style={styles.imageList}>
              <TouchableOpacity onPress={this.pickedImage}
                style={styles.cameraIconContainer}>
                <Image resizeMode="contain"
                  source={IMAGES.AR_CAMERA}
                  style={styles.cameraIcon} />
              </TouchableOpacity>
              <FlatList
                horizontal
                data={images}
                renderItem={({ item, index }) =>
                  <TouchableOpacity
                    onLongPress={() => this.setState({
                      selectMultiple: true,
                      selectImageIndex: index
                    })}
                    onPress={() => this.onSelect(index)}
                  >
                    <ImageBackground
                      imageStyle={styles.imageStyle}
                      style={styles.imageBackground}
                      source={{ uri: item.uri }}
                    >
                      {pickedImage != "" ? null :
                        selectMultiple ? item.select ?
                          <View style={styles.transparentBG}>
                            <Image source={IMAGES.TICK} style={styles.tickIcon} />
                          </View> : null
                          :
                          selectImageIndex === index ?
                            <View style={styles.transparentBG}>
                              <Image source={IMAGES.TICK} style={styles.tickIcon} />
                            </View> : null
                      }
                      {/* {selectMultiple ? item.select ?
                        <View style={styles.transparentBG}>
                          <Image source={IMAGES.TICK} style={styles.tickIcon} />
                        </View> : null
                        :
                        selectImageIndex === index ?
                          <View style={styles.transparentBG}>
                            <Image source={IMAGES.TICK} style={styles.tickIcon} />
                          </View> : null
                      } */}
                    </ImageBackground>
                  </TouchableOpacity>
                }
              />
            </View>
          </SafeAreaView>
        </ScrollView>
      </View >
    );
  }
}
