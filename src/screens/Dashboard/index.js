import React, { Component } from 'react';
import { Text, Share, View, FlatList, StatusBar } from 'react-native';
import Card from '../../components/Card';
import {
  getResponsiveHeight,
  getResponsiveWidth,
} from '../../common/helper/utils';
import Colors from '../../common/constants/colors';
import Fonts from '../../common/constants/fonts';
import styles from './styles';
import ButtonComponent from '../../components/ButtonComponent';
import Strings from '../../common/constants/Strings';
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popUp: "",
      modalVisible: false,
      indexChecked: 0,
      reportUser: false,
      reportAction: false,
      data: [
        {
          businessAccount: false,
          paidAccount: false,
          profileImage:
            'https://images.all-free-download.com/images/graphicthumb/lioness_profile_193744.jpg',
          userName: 'Samuel',
          uploadTime: '2 hours ago',
          caption:
            'My last day for this year holiday! So excited to share my memories with you guys! 😁😍',
          postedImage:
            'https://i1.wp.com/gwjeel.com/wp-content/uploads/2018/04/pexels-photo-443446.jpeg?fit=1088%2C703&ssl=1',
          like: 172,
          dislike: 0,
          comment: 20,
          view: 200,
          posts: 12,
          followers: 20,
          following: 15
        },
        {
          businessAccount: true,
          paidAccount: false,
          profileImage:
            'https://i.pinimg.com/474x/02/22/43/02224394c0a1a5f7f5caee5f8bbca11f.jpg',
          userName: 'Charles',
          uploadTime: '2 hours ago',
          caption:
            'My last day for this year holiday! So excited to share my memories with you guys! 😁😍',
          postedImage:
            'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752',
          like: 172,
          dislike: 20,
          comment: 0,
          view: 0,
          posts: 2,
          followers: 200,
          following: 150
        },
        {
          businessAccount: false,
          paidAccount: true,
          profileImage:
            'https://i1.wp.com/statusbro.in/wp-content/uploads/2018/08/Sweet-Girl-Fb-Profile-Dp.jpg?resize=696%2C392&ssl=1',
          userName: 'Andy',
          uploadTime: 'Just Now',
          caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor orci fames purus augue. Rutrum sem.",
          postedImage:
            'https://i.pinimg.com/originals/cd/7b/5c/cd7b5c8d4687b5c98a445127926a56e2.jpg',
          like: 10,
          dislike: 1,
          comment: 0,
          view: 15,
          posts: 1,
          followers: 84,
          following: 34
        },
      ],
    };
  }

  componentDidMount() {
    const { data } = this.state;
    data.forEach(
      val => (
        (val.isLiked = false), (val.isDisliked = false), (val.isMute = false), (val.blockUser = false), (val.unfollowUser = false)
      ),
    );
  }


  onLike = id => {
    const { data } = this.state;
    const LikePost = data;
    LikePost[id].isLiked = !LikePost[id].isLiked;
    LikePost[id].like = LikePost[id].isLiked
      ? LikePost[id].like + 1
      : LikePost[id].like - 1;
    this.setState({
      data: LikePost,
    });
  };

  unFollowUser = (user, id) => {
    const { data } = this.state;
    const unfollowUser = data;
    unfollowUser[id].unfollowUser = true;
    this.setState({
      data: unfollowUser,
    });
  }

  onBlock = (val, id) => {
    const { data } = this.state;
    const blockUser = data;
    blockUser[id].blockUser = true;
    this.setState({
      data: blockUser,
    });
  };

  onMute = (val, id) => {
    const { data } = this.state;
    const muteUser = data;
    muteUser[id].isMute = true;
    this.setState({
      data: muteUser,
    });

  };
  onDislike = id => {
    const { data } = this.state;
    const DislikePost = data;
    DislikePost[id].isDisliked = !DislikePost[id].isDisliked;
    DislikePost[id].dislike = DislikePost[id].isDisliked
      ? DislikePost[id].dislike + 1
      : DislikePost[id].dislike - 1;
    this.setState({
      data: DislikePost,
    });
  };

  onUnfollow = (user, id) => {
    this.setState({
      indexChecked: id,
    });
    setTimeout(() => {
      this.setState({
        popUp: "Unfollowed@" + user.userName
      })
    })
    setTimeout(() => {
      this.setState({
        popUp: ""
      })
    }, 3000)
  }

  onDone = (user, id) => {
    this.setState({
      indexChecked: id,
      modalVisible: false,
      reportUser: false,
    });

    setTimeout(() => {
      this.setState({
        popUp: user.blockUser === true
          ? "Blocked@" + user.userName
          : user.isMute === true ?
            "Muted@" + user.userName
            : null
      })
    })
    setTimeout(() => {
      this.setState({
        popUp: ""
      })
    }, 3000)
  };

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

  render() {
    const { indexChecked, data, popUp } =
      this.state;
    const userInfo = data.find((val, index) =>
      indexChecked === index ? val : null,
    );
    return (
      <View style={styles.Container}>
        <StatusBar translucent backgroundColor="transparent" />
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          data={data}
          ListEmptyComponent={() => (
            <View style={styles.emptyListContainer}>
              <Text style={styles.noFeedText}>No Feed Posts</Text>
              <Text style={styles.startPostingText}>
                {Strings.START_POSTING}
              </Text>
              <ButtonComponent
                text="Get Started"
                onPress={() => this.props.navigation.navigate("SuggestedFollower")}
                ButtonColor={Colors.BLUE}
                textColor={Colors.WHITE}
                fontSize={Fonts.FONT_12}
                mtop={getResponsiveHeight(4)}
                fontFamily={Fonts.POPPINS_MEDIUM}
                height={getResponsiveWidth(13.5)}
                width={getResponsiveWidth(52)}
              />
            </View>
          )}
          renderItem={({ item, index }) => (
            <View style={{ marginTop: getResponsiveHeight(2.2) }}>
              <Card
                showDetails={() => this.props.navigation.navigate("UserInfo", {
                  id: index,
                  userName: item.userName,
                  caption: item.caption,
                  profileImage: item.profileImage,
                  postedImage: item.postedImage,
                  like: item.like,
                  dislike: item.dislike,
                  comment: item.comment,
                  view: item.view,
                  posts: item.posts,
                  followers: item.followers,
                  following: item.following
                })}
                profileImage={{
                  uri: item.profileImage,
                }}
                userName={item.userName}
                uploadTime={item.uploadTime}
                caption={item.caption}
                postedImage={{
                  uri: item.postedImage,
                }}
                like={item.like}
                dislike={item.dislike}
                comment={item.comment}
                view={item.view}
                onLike={() => this.onLike(index)}
                onDislike={() => this.onDislike(index)}
                likeButtonTintColor={{
                  tintColor: item.isLiked ? Colors.BLUE : Colors.BLACK,
                }}
                dislikeButtonTintColor={{
                  tintColor: item.isDisliked ? Colors.BLUE : Colors.BLACK,
                }}
                openPost={() =>
                  this.props.navigation.navigate('Post', {
                    id: index,
                    userName: item.userName,
                    caption: item.caption,
                    profileImage: item.profileImage,
                    postedImage: item.postedImage,
                    like: item.like,
                    dislike: item.dislike,
                    comment: item.comment,
                    view: item.view,
                    posts: item.posts,
                    followers: item.followers,
                    following: item.following,
                    paidAccount: item.paidAccount
                  })
                }
                businessAccount={item.businessAccount}
                paidAccount={item.paidAccount}
                onShare={this.onShare}
                onUnfollow={() => this.onUnfollow(item, index)}
                onReport={val => this.setState({
                  reportUser: val
                })}
                onBlock={() => this.onBlock(item.userName, index)}
                onMute={() =>
                  this.onMute(item.userName, index)
                }
                onDone={() => this.onDone(item, index)}
                notificationText={index === indexChecked ? popUp : null}
                popTextStyle={{ backgroundColor: popUp != "" ? "rgba(52, 52, 52, 0.3)" : null }}
              />
            </View>
          )
          }

        />
      </View >
    );
  }
}