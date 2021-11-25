import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
  SafeAreaView,
  Share
} from 'react-native';
import IMAGES from '../../common/constants/images';
import {
  getResponsiveWidth,
  getResponsiveHeight,
} from '../../common/helper/utils';
import Fonts from '../../common/constants/fonts';
import styles from './styles';
import Strings from '../../common/constants/Strings';
import Card from '../../components/Card'
import Colors from '../../common/constants/colors'
export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      reportUser: false,
      reportAction: false,
      newComment: "",
      comments: [
        {
          commentedBy: 'Arthur Black',
          commenterProfilePic:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2fWPROdS8pukewyAzcDzsD_ffortpxCXeg&usqp=CAU',
          userComment:
            'Haha lol. That’s so easy to use and user friendly, go try again in a moment!',
        },
        {
          commentedBy: 'Jacob Howard',
          commenterProfilePic:
            'https://qph.fs.quoracdn.net/main-qimg-20df28f3b31895e56cba6dbc0515c635',
          userComment:
            'Wow! that’s so frickin’ cool dude, where do you get that? Is it available in Supermarket?',
        },
        {
          commentedBy: 'Arthur Black',
          commenterProfilePic:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2fWPROdS8pukewyAzcDzsD_ffortpxCXeg&usqp=CAU',
          userComment:
            'Haha lol. That’s so easy to use and user friendly, go try again in a moment!',
        },
      ],
    };
  }

  onShare = async () => {
    try {
      const result = await Share.share({
        message: "Social Media",
        title: "ARSocial Media",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };


  componentDidMount() {
    const numOfComment = this.props.route.params.comment

    if (numOfComment === 0) {
      this.setState({
        comments: []
      })
    }
  }


  onSubmit = () => {
    if (this.state.newComment !== "") {
      this.setState({
        comments: [...this.state.comments, {
          commentedBy: "Samuel",
          commenterProfilePic: "https://images.all-free-download.com/images/graphicthumb/lioness_profile_193744.jpg",
          userComment: this.state.newComment,
        }]
      })
      this.setState({ newComment: "" })
    } else { console.log("err") }
  }


  render() {
    const {
      userName,
      caption,
      profileImage,
      postedImage,
      like,
      dislike,
      comment,
      view,
      paidAccount
    } = this.props.route.params;
    const { modalVisible, reportUser, reportAction, newComment, comments } = this.state;
    return (
      <View style={styles.Container}>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView style={{ marginTop: getResponsiveHeight(0.5) }}>
            <Card
              profileImage={{
                uri: profileImage
              }}
              disabled={true}
              userName={userName}
              caption={"My last day for this year holiday! So excited to share my memories with you guys! 😁😍"}
              postedImage={{
                uri: postedImage
              }}
              like={like}
              dislike={dislike}
              view={view}
              paidAccount={paidAccount}
              showDetails={() => this.props.navigation.navigate("UserInfo", {
                userName: userName,
                caption: caption,
                profileImage: profileImage,
                postedImage: postedImage,
                like: like,
                dislike: dislike,
                comment: comment,
                view: view,
              })}
              onShare={this.onShare}
              onUnfollow={(val) => this.setState({
                modalVisible: !val
              })}
              onReport={val => this.setState({
                reportUser: val
              })}
              onDone={() => this.setState({
                modalVisible: false,
                reportUser: false,
              })}
            />
            <View style={styles.CommentsContainer}>
              <View style={styles.Direction}>
                <Text style={styles.postDate}>Posted 10:17, 07 May,2021</Text>
                <View style={styles.Separator} />
              </View>
              {comment === 0 ? null : (
                <Text style={styles.totalComments}>{comment} Comments</Text>
              )}
              <FlatList
                data={comments}
                ListFooterComponent={() => <View style={{ marginTop: 80 }} />}
                ListEmptyComponent={() => (
                  <View style={styles.emptyImageContainer}>
                    <Image
                      resizeMode="contain"
                      source={IMAGES.NO_COMMENT}
                      style={styles.emptyCommentImage}
                    />
                    <Text style={styles.addNewCommentText}>
                      {Strings.EMPTY_COMMENT_TEXT}
                    </Text>
                  </View>
                )}
                renderItem={({ item, index }) => (
                  <View>
                    <View style={styles.commentSection}>
                      <View
                        style={{
                          flexDirection: 'row',
                          paddingRight: getResponsiveWidth(1),
                        }}>
                        <Image
                          resizeMode="cover"
                          source={{
                            uri: item.commenterProfilePic,
                          }}
                          style={styles.profileImage}
                        />
                        <View style={styles.nameAndCommentText}>
                          <Text style={styles.commenterName}>
                            <Text
                              style={{
                                fontFamily: Fonts.NUNITO_SANS_BOLD,

                              }}>
                              {item.commentedBy}
                            </Text>
                            {''} {item.userComment}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
          </ScrollView>
          <View style={styles.inputContainer}>
            <View
              style={[styles.Direction, { paddingLeft: getResponsiveWidth(2.5) }]}>
              <TouchableOpacity style={styles.align}>
                <Image
                  resizeMode="contain"
                  source={IMAGES.SMILE}
                  style={styles.smileIcon}
                />
              </TouchableOpacity>
              <TextInput style={styles.textInput}
                value={newComment}
                onChangeText={val => this.setState({
                  newComment: val
                })}
                placeholderTextColor={Colors.GREY}
                placeholder="Write your comments" />
            </View>
            <TouchableOpacity style={styles.align} onPress={this.onSubmit}>
              <Image
                resizeMode="contain"
                source={IMAGES.SEND}
                style={styles.sendIcon}
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
