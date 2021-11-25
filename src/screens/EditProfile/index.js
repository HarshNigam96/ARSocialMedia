import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils'
import Colors from '../../common/constants/colors'
import Fonts from '../../common/constants/fonts'
import InputComponent from '../../components/InputComponent'
import ButtonComponent from '../../components/ButtonComponent'
import styles from './styles';
import IMAGES from '../../common/constants/images'
import ImagePicker from 'react-native-image-crop-picker';
export default class EditProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "Samuel",
      lastName: "Doe",
      userName: "@samuel",
      profileImage: "https://images.all-free-download.com/images/graphicthumb/lioness_profile_193744.jpg",
      postedImage: "https://i1.wp.com/gwjeel.com/wp-content/uploads/2018/04/pexels-photo-443446.jpeg?fit=1088%2C703&ssl=1",
      mobileNumber: "+234904561237634",
      jobTitle: "Interaction Designer",
      selectedImage: "",
      posts: 25,
      followers: 80,
      following: 150
    }
  }
  selectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      this.setState({
        selectedImage: image.path
      })
    });
  }



  render() {
    const { firstName, lastName, userName, mobileNumber, jobTitle, selectedImage, postedImage, profileImage, posts, followers, following } = this.state
    index = 0;
    return (
      <View style={styles.Container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.secondContainer}>
            <TouchableOpacity style={styles.profilePicContainer} onPress={this.selectImage}>
              <Image style={styles.profilePic}
                source={{ uri: selectedImage != "" ? selectedImage : profileImage }} />
              <Image source={IMAGES.UPLOAD_PROFILE_PIC} style={styles.CameraIcon} />
            </TouchableOpacity>

            <Text style={styles.personalDetailText}>Personal Details</Text>

            <View style={styles.inputContainer}>
              <InputComponent
                label="First Name"
                labelFontSize={Fonts.FONT_13}
                labelColor={Colors.BLACK}
                bordered
                opacity={0.5}
                disabled={false}
                borderWidth={firstName != '' ? 1 : 2}
                borderColor={firstName != '' ? Colors.CYAN_BLUE : Colors.ALICE_BLUE}
                labelFontFamily={Fonts.POPPINS_REGULAR}
                bgColor={firstName != '' ? Colors.ALICE_BLUE : Colors.WHITE}
                mtop={getResponsiveHeight(0.5)}
                paddingLeft={getResponsiveWidth(5)}
                InputTextFontFamily={Fonts.INTER_MEDIUM}
                InputTextSize={Fonts.FONT_18}
                value={firstName}
                onChange={val => this.setState({
                  firstName: val
                })}
              />
            </View>
            <View style={styles.inputContainer}>
              <InputComponent
                label="Last Name"
                labelFontSize={Fonts.FONT_13}
                labelColor={Colors.BLACK}
                bordered
                opacity={0.5}
                disabled={false}
                borderWidth={lastName != '' ? 1 : 2}
                borderColor={lastName != '' ? Colors.CYAN_BLUE : Colors.ALICE_BLUE}
                labelFontFamily={Fonts.POPPINS_REGULAR}
                bgColor={lastName != '' ? Colors.ALICE_BLUE : Colors.WHITE}
                mtop={getResponsiveHeight(0.5)}
                paddingLeft={getResponsiveWidth(5)}
                InputTextFontFamily={Fonts.INTER_MEDIUM}
                InputTextSize={Fonts.FONT_18}
                value={lastName}
                onChange={val => this.setState({
                  lastName: val
                })}
              />
            </View>
            <View style={styles.inputContainer}>
              <InputComponent
                label="Username"
                labelFontSize={Fonts.FONT_13}
                labelColor={Colors.BLACK}
                bordered
                opacity={0.5}
                disabled={false}
                borderWidth={userName != '' ? 1 : 2}
                borderColor={userName != '' ? Colors.CYAN_BLUE : Colors.ALICE_BLUE}
                labelFontFamily={Fonts.POPPINS_REGULAR}
                bgColor={userName != '' ? Colors.ALICE_BLUE : Colors.WHITE}
                mtop={getResponsiveHeight(0.5)}
                paddingLeft={getResponsiveWidth(5)}
                InputTextFontFamily={Fonts.INTER_MEDIUM}
                InputTextSize={Fonts.FONT_18}
                value={userName}
                onChange={val => this.setState({
                  userName: val
                })}
              />
            </View>
            <View style={styles.inputContainer}>
              <InputComponent
                label="Phone Number"
                labelFontSize={Fonts.FONT_13}
                labelColor={Colors.BLACK}
                bordered
                opacity={0.5}
                disabled={false}
                borderWidth={mobileNumber != '' ? 1 : 2}
                borderColor={mobileNumber != '' ? Colors.CYAN_BLUE : Colors.ALICE_BLUE}
                labelFontFamily={Fonts.POPPINS_REGULAR}
                bgColor={mobileNumber != '' ? Colors.ALICE_BLUE : Colors.WHITE}
                mtop={getResponsiveHeight(0.5)}
                paddingLeft={getResponsiveWidth(5)}
                InputTextFontFamily={Fonts.INTER_MEDIUM}
                InputTextSize={Fonts.FONT_18}
                keyType="numeric"
                value={mobileNumber}
                onChange={val => this.setState({
                  mobileNumber: val
                })}
              />
            </View>
            <View style={styles.inputContainer}>
              <InputComponent
                label="Job Title"
                labelFontSize={Fonts.FONT_13}
                labelColor={Colors.BLACK}
                bordered
                opacity={0.5}
                disabled={false}
                borderWidth={jobTitle != '' ? 1 : 2}
                borderColor={jobTitle != '' ? Colors.CYAN_BLUE : Colors.ALICE_BLUE}
                labelFontFamily={Fonts.POPPINS_REGULAR}
                bgColor={jobTitle != '' ? Colors.ALICE_BLUE : Colors.WHITE}
                mtop={getResponsiveHeight(0.5)}
                paddingLeft={getResponsiveWidth(5)}
                InputTextFontFamily={Fonts.INTER_MEDIUM}
                InputTextSize={Fonts.FONT_18}
                value={jobTitle}
                onChange={val => this.setState({
                  jobTitle: val
                })}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <ButtonComponent
            onPress={() => this.props.navigation.navigate("UserInfo", {
              userName: userName,
              profileImage: profileImage,
              postedImage: postedImage,
              posts: posts,
              followers: followers,
              following: following,
              edited: true
            })}
            text="Save Changes"
            mbottom={getResponsiveHeight(3.8)}
            mtop={getResponsiveHeight(2.2)}
            textColor={Colors.WHITE}
            ButtonColor={Colors.BLUE}
            fontSize={Fonts.FONT_14}
            height={getResponsiveWidth(12.8)}
            fontFamily={Fonts.POPPINS_MEDIUM}
          />
        </View>
      </View>
    );
  }
}
