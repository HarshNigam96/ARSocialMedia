import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Modal
} from 'react-native';
import IMAGES from '../common/constants/images';
import { getResponsiveHeight, getResponsiveWidth } from '../common/helper/utils';
import Fonts from '../common/constants/fonts';
import Colors from '../common/constants/colors';
import ButtonComponent from './ButtonComponent';
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      reportUser: false,
      reportAction: false,
      userName: "",
    };
  }
  onMenuPress = () => {
    this.setState({
      modalVisible: true
    })
  }

  onShare = () => {
    this.setState({
      modalVisible: false
    })
    this.props.onShare(this.state.modalVisible)
  }

  onReport = () => {
    this.setState({
      modalVisible: false,
      reportUser: true
    })
    this.props.onReport(this.state.reportUser)
  }
  onUnfollow = () => {
    this.setState({
      modalVisible: false
    })
    this.props.onUnfollow(this.state.modalVisible)
  }

  onDone = () => {
    this.setState({
      reportAction: false
    })
    this.props.onDone(this.state.reportAction)
  }

  render() {
    const {
      notificationText,
      userName,
      uploadTime,
      caption,
      profileImage,
      postedImage,
      like = 0,
      onLike,
      dislike = 0,
      onDislike,
      comment = 0,
      view = 0,
      likeButtonTintColor,
      dislikeButtonTintColor,
      openPost,
      cardStyle,
      commentIcon = true,
      showDetails,
      onBlock,
      onMute,
      popTextStyle,
      paidAccount = false,
      businessAccount = false,
      disabled = false
    } = this.props;
    const { modalVisible, reportAction, reportUser } = this.state
    return (
      <View style={[styles.Container, cardStyle]}>
        <TouchableOpacity activeOpacity={5} style={styles.userDetail} onPress={showDetails}>
          <View style={styles.Direction}>
            <Image
              resizeMode="cover"
              source={profileImage}
              style={styles.profileImage}
            />
            <View style={{ paddingLeft: getResponsiveHeight(2.5) }}>
              <View style={styles.Direction}>
                <Text style={styles.userNameText}>{userName}</Text>
                {paidAccount ?
                  <Image style={styles.paidIconContainer}
                    source={IMAGES.PAID_ACCOUNT} />
                  : null}
              </View>
              <Text style={styles.uploadTime}>{uploadTime}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={this.onMenuPress}>
            <Image
              source={IMAGES.DOT}
              resizeMode="contain"
              style={styles.menuButton}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={styles.userPostContainer}>
          <Text style={styles.captionTextStyle}>{caption}</Text>
          <TouchableOpacity disabled={disabled} onPress={openPost} activeOpacity={0.9}>
            <ImageBackground
              imageStyle={styles.imageStyle}
              resizeMode="cover"
              source={postedImage}
              style={styles.image}>
              <Text style={[styles.popText, popTextStyle]}>{notificationText}</Text>
              {businessAccount ?
                <Text style={styles.businessAdTxt}>Business Ad</Text>
                : null}
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.userActionContainer}>
          <View style={styles.Direction}>
            <TouchableOpacity onPress={onLike}>
              <Image
                resizeMode="contain"
                source={IMAGES.LIKE}
                style={styles.icons}
              />
            </TouchableOpacity>
            <Text style={styles.userActionDetails}>{like}</Text>
          </View>
          <View style={styles.Direction}>
            <TouchableOpacity onPress={onDislike}>
              <Image
                resizeMode="contain"
                source={IMAGES.DISLIKE}
                style={styles.icons}
              />
            </TouchableOpacity>
            <Text style={styles.userActionDetails}>{dislike}</Text>
          </View>
          {commentIcon ? <View style={styles.Direction}>
            <Image
              resizeMode="contain"
              source={IMAGES.COMMENT}
              style={styles.icons}
            />
            <Text style={styles.userActionDetails}>{comment}</Text>
          </View> : null}

          <View style={styles.Direction}>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                source={IMAGES.VIEWS}
                style={styles.icons}
              />
            </TouchableOpacity>
            <Text style={styles.userActionDetails}>
              {view > 0 ? view + 'AR views' : view}
            </Text>
          </View>
        </View>
        <View style={[styles.Separator, { marginTop: getResponsiveHeight(1) }]} />
        <View style={styles.secondUserActionContainer}>
          <View style={styles.Direction}>
            <TouchableOpacity onPress={onLike}>
              <Image
                resizeMode="contain"
                source={IMAGES.LIKE_OUTLINE}
                style={[styles.icons, likeButtonTintColor]}
              />
            </TouchableOpacity>
            <Text style={styles.userActionDetails}>Like</Text>
          </View>
          <View style={styles.Direction}>
            <TouchableOpacity onPress={onDislike}>
              <Image
                resizeMode="contain"
                source={IMAGES.DISLIKE_OUTLINE}
                style={[styles.icons, dislikeButtonTintColor]}
              />
            </TouchableOpacity>
            <Text style={styles.userActionDetails}>Dislike</Text>
          </View>
          <View style={styles.Direction}>
            <Image
              resizeMode="contain"
              source={IMAGES.COMMENT_OUTLINE}
              style={styles.icons}
            />
            <Text style={styles.userActionDetails}>Comment</Text>
          </View>
        </View>

        <Modal transparent={true} visible={modalVisible} animationType="slide" >
          <View style={styles.transparentBackground}>
            <View style={styles.ModalContainer}>
              <View style={styles.horizontalPadding}>
                <TouchableOpacity onPress={this.onShare}>
                  <Text
                    style={[
                      styles.MediumFonts,
                      { paddingVertical: getResponsiveHeight(2.3) },
                    ]}>
                    {Strings.SHARE_POST}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.onReport}>
                  <Text
                    style={[
                      styles.MediumFonts,
                      {
                        paddingVertical: getResponsiveHeight(2.3),
                        color: Colors.BLUE,
                      },
                    ]}>
                    {Strings.REPORT_POST}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onUnfollow}>
                  <Text
                    style={[
                      styles.MediumFonts,
                      { paddingVertical: getResponsiveHeight(2.3) },
                    ]}>
                    {Strings.UNFOLLOW} {userName}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal transparent={true} visible={reportUser} animationType="slide" >
          <View style={styles.transparentBackground}>
            <View style={styles.ModalContainer}>
              <View style={styles.horizontalPadding}>
                <View style={styles.horizontalPadding}>
                  <Text style={styles.MediumFonts}>
                    {Strings.GREET} {userName}
                  </Text>
                  <Text style={styles.MediumFonts}>
                    What is going on with this tweet?
                  </Text>
                </View>
                <View style={[styles.Separator, { marginTop: getResponsiveHeight(1.5), marginBottom: getResponsiveHeight(2.5) }]} />
                <View style={styles.horizontalPadding}>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        reportUser: false,
                        reportAction: true,
                      })
                    }>
                    <Text style={styles.reportUserOptionText}>
                      {Strings.SUSPICIOUS}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        reportUser: false,
                        reportAction: true,
                      })
                    }>
                    <Text
                      style={[
                        styles.reportUserOptionText,
                        { color: Colors.BLUE },
                      ]}>
                      {Strings.SPAM}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        reportUser: false,
                        reportAction: true,
                      })
                    }>
                    <Text style={styles.reportUserOptionText}>
                      {Strings.HARMFUL}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        reportUser: false,
                        reportAction: true,
                      })
                    }>
                    <Text style={styles.reportUserOptionText}>
                      {Strings.SENSITIVE}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        reportUser: false,
                        reportAction: true,
                      })
                    }>
                    <Text style={styles.reportUserOptionText}>
                      {Strings.SELF_HARM}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text
                      style={[
                        styles.reportUserOptionText,
                        { color: Colors.BLUE },
                      ]}>
                      {Strings.LEARN_MORE}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>


        <Modal transparent={true} visible={reportAction} animationType="slide" >
          <View style={styles.transparentBackground}>
            <View style={styles.ModalContainer}>
              <View style={styles.horizontalPadding}>
                <Text style={styles.MediumFonts}>
                  {Strings.FEEDBACK}
                </Text>
                <View style={[styles.Separator, { marginTop: getResponsiveHeight(3) }]} />
                <View style={styles.modalButtonContainer}>

                  <ButtonComponent
                    text={'Block ' + userName}
                    onPress={onBlock}
                    isBorderWidth={true}
                    borderWidth={1}
                    borderColor={Colors.BLUE}
                    ButtonColor={Colors.WHITE}
                    textColor={Colors.BLUE}
                    fontSize={Fonts.FONT_14}
                    fontFamily={Fonts.MULISH_SEMIBOLD}
                    height={getResponsiveWidth(12)}
                    width={getResponsiveWidth(40)}
                  />
                  <ButtonComponent
                    text={'Mute ' + userName}
                    onPress={onMute}
                    isBorderWidth={true}
                    borderWidth={1}
                    borderColor={Colors.BLACK}
                    ButtonColor={Colors.WHITE}
                    textColor={Colors.BLACK}
                    fontSize={Fonts.FONT_14}
                    fontFamily={Fonts.MULISH_SEMIBOLD}
                    height={getResponsiveWidth(12)}
                    width={getResponsiveWidth(40)}
                  />
                </View>
                <TouchableOpacity
                  onPress={this.onDone}
                  style={styles.doneButton}>
                  <Text
                    style={[styles.MediumFonts, { color: Colors.BLUE }]}>
                    Done
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {this.props.children}
      </View >
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: Colors.WHITE,
    borderRadius: getResponsiveWidth(4),
    marginHorizontal: getResponsiveWidth(6)
  },
  userDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: getResponsiveWidth(3),
    paddingRight: getResponsiveWidth(4),
    marginTop: getResponsiveHeight(1.5),
  },
  Direction: {
    flexDirection: 'row',
    alignItems: "center",
  },
  profileImage: {
    width: getResponsiveWidth(9.5),
    height: getResponsiveWidth(9.5),
    borderRadius: getResponsiveHeight(5),
  },
  imageStyle: { borderRadius: getResponsiveWidth(3) },
  userNameText: {
    fontFamily: Fonts.NUNITO_SANS_BOLD,
    fontSize: Fonts.FONT_16,
  },
  uploadTime: {
    fontFamily: Fonts.MULISH_REGULAR,
    fontSize: Fonts.FONT_10,
    opacity: 0.7
  },
  captionTextStyle: {
    fontFamily: Fonts.MULISH_SEMIBOLD,
    fontSize: Fonts.FONT_14,
  },
  menuButton: {
    width: getResponsiveHeight(4),
  },
  userPostContainer: {
    marginTop: getResponsiveHeight(1.5),
    paddingHorizontal: getResponsiveWidth(3),
  },
  image: {
    marginTop: getResponsiveHeight(1.6),
    borderRadius: getResponsiveWidth(3),
    height: getResponsiveHeight(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  userActionContainer: {
    marginTop: getResponsiveHeight(1.6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: getResponsiveWidth(3),
  },
  icons: {
    height: getResponsiveHeight(2.5),
    width: getResponsiveHeight(2.5),
  },
  userActionDetails: {
    marginLeft: getResponsiveWidth(1.5),
    fontSize: Fonts.FONT_13,
    fontFamily: Fonts.NUNITO_SANS_SEMIBOLD,
  },
  Separator: {
    borderWidth: 0.5,
    opacity: 0.1,
  },
  secondUserActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: getResponsiveWidth(75),
    marginVertical: getResponsiveHeight(1.5),
    paddingLeft: getResponsiveWidth(3),
    paddingRight: getResponsiveWidth(12),
  },
  popText: {
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    marginTop: getResponsiveHeight(3),
    color: Colors.WHITE,
    fontFamily: Fonts.NUNITO_SANS_SEMIBOLD,
    fontSize: Fonts.FONT_14,
    padding: getResponsiveHeight(0.8),
  },
  transparentBackground: {
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  ModalContainer: {
    backgroundColor: Colors.WHITE,
    paddingVertical: getResponsiveHeight(4),
    borderTopRightRadius: getResponsiveWidth(8),
    borderTopLeftRadius: getResponsiveWidth(8),
  },
  horizontalPadding: {
    paddingHorizontal: getResponsiveWidth(8),
  },
  MediumFonts: {
    fontSize: Fonts.FONT_18,
    fontFamily: Fonts.MULISH_SEMIBOLD,
  },

  reportUserOptionText: {
    fontSize: Fonts.FONT_16,
    fontFamily: Fonts.MULISH_SEMIBOLD,
    marginVertical: getResponsiveHeight(1),
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getResponsiveHeight(5),
  },
  doneButton: {
    alignSelf: 'flex-end',
    marginTop: getResponsiveHeight(4),
  },
  businessAdTxt: {
    color: Colors.RED,
    alignSelf: "flex-end",
    position: "absolute",
    bottom: getResponsiveHeight(1.2),
    right: getResponsiveWidth(5),
    fontFamily: Fonts.NUNITO_SANS_BOLD
  },
  paidIconContainer: {
    height: getResponsiveWidth(4),
    width: getResponsiveWidth(4),
    alignSelf: "center",
    marginLeft: getResponsiveWidth(2)
  }
});