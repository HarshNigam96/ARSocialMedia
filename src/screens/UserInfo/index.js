import React, { Component } from 'react';
import { Text, View, FlatList, ScrollView, Image, TouchableOpacity, Modal, SafeAreaView, ImageBackground, StatusBar, Platform } from 'react-native';
import Colors from '../../common/constants/colors'
import Fonts from '../../common/constants/fonts'
import ButtonComponent from '../../components/ButtonComponent'
import { getResponsiveHeight, getResponsiveWidth, WIDTH } from '../../common/helper/utils'
import IMAGES from '../../common/constants/images'
import styles from './styles';
import Card from '../../components/Card'
import { TabView, TabBar } from 'react-native-tab-view';
const initialLayout = { width: WIDTH };

export default class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      reportUser: false,
      reportAction: false,
      index: 0,
      routes: [
        { key: 'Category', title: 'Category' },
        { key: 'Favorite', title: 'Favorite' },
      ],
      data: [
        { title: 'post1' },
        { title: 'post2' },
      ],
      follow: true,
      sentRequest: false
    }
  }


  getTabBarIcon = (props) => {
    const { route } = props
    if (route.key === 'Category') {
      return <Image resizeMode="contain" source={IMAGES.CATEGORY}
        style={{
          height: getResponsiveWidth(6),
          width: getResponsiveWidth(6)
        }} />
    } else {

      return <Image resizeMode="contain" source={IMAGES.HEART}
        style={{
          height: getResponsiveWidth(6),
          width: getResponsiveWidth(6)
        }} />
    }
  }
  renderTabBar = (props) => (
    <TabBar
      {...props}
      getLabelText={({ route }) => route.title}
      renderIcon={
        props => this.getTabBarIcon(props)
      }
      renderLabel={({ route, focused, color }) => null}
      indicatorContainerStyle={{ backgroundColor: Colors.OFF_WHITE }}
      indicatorStyle={{ backgroundColor: Colors.BLUE }}
    />
  );

  sendRequest = () => {
    this.setState({
      modalVisible: true,
    })
  }

  sentRequest = () => {
    this.setState({
      sentRequest: true
    })
  }

  unFollow = () => {
    this.setState({
      follow: false
    })
  }

  render() {
    const { index, routes, follow, sentRequest, modalVisible } = this.state
    const {
      userName,
      profileImage,
      postedImage,
      like,
      dislike,
      view,
      editMode=true,
      posts,
      followers,
      following,
      edited,
    } = this.props.route.params;
    const renderScene = ({ route }) => {
      switch (route.key) {
        case 'Category':
          return (
            <>
              {follow ?
                <FlatList data={this.state.data} renderItem={({ item, index }) =>
                  <View style={{ marginTop: index === 0 ? getResponsiveHeight(1) : getResponsiveHeight(2) }}>
                    <Card
                      profileImage={{
                        uri: profileImage
                      }}
                      userName={"Charlie"}
                      caption={"My last day for this year holiday! So excited to share my memories with you guys! 😁😍"}
                      postedImage={{
                        uri: postedImage
                      }}
                      like={like}
                      dislike={dislike}
                      view={view}
                      onShare={(val) => this.setState({
                        modalVisible: !val
                      })}
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
                  </View>
                } /> :
                <View>
                  <Image resizeMode="contain"
                    style={styles.LockIcon}
                    source={IMAGES.LOCK} />
                  <Text style={styles.PrivateAccountText}>@{userName} account is private </Text>
                  <Text style={styles.followAccountText}>Please follow his account to view his posts</Text>
                </View>
              }
            </>
          );
        case 'Favorite':
          return (
            null
          );
      }
    };
    return (

      <View style={styles.Container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
          <TouchableOpacity activeOpacity={0.95}
            onPress={() => this.props.navigation.navigate("ProfileImage", {
              coverPic: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            })}>
            <ImageBackground
              style={styles.coverImage}
              source={{ uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" }}>
              <SafeAreaView style={{ flex: 1, }}>
                <TouchableOpacity style={styles.backBtnContainer}
                  onPress={() => this.props.navigation.navigate("Dashboard")}>
                  <Image resizeMode="contain" source={IMAGES.LEFTARROW}
                    style={styles.backButton} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("ProfileImage", {
                    profilePic: profileImage
                  })}
                  style={styles.profilePicContainer}>
                  <Image source={{ uri: profileImage }}
                    style={styles.profilePic} />
                </TouchableOpacity>
              </SafeAreaView>
            </ImageBackground>
          </TouchableOpacity>
          {editMode
            ? <TouchableOpacity style={[styles.editBtn, { backgroundColor: edited ? Colors.GREY : Colors.BLUE }]} onPress={() => this.props.navigation.navigate("EditProfile")}>
              <Image resizeMode="center" source={IMAGES.EDIT} />
            </TouchableOpacity>
            : null
          }
          {editMode ? <Image source={IMAGES.UPLOAD_PROFILE_PIC}
            style={styles.cameraLogo} /> : null}

          <View style={[styles.details, {
            marginTop: editMode ? null : Platform.OS === "android" ? getResponsiveHeight(10.8) : getResponsiveHeight(8.7)
          }]}>
            <Text style={styles.userNameText}>{userName}</Text>
            <Text style={styles.userIdText}>@{userName}</Text>
            <Text style={styles.userProfessionText}>Interaction Designer</Text>
            <Text onPress={() => this.props.navigation.navigate("Profile")} style={styles.contactInfoTxt}>See Contact Info</Text>
          </View>
          <View style={styles.followingDetailContainer}>
            <TouchableOpacity style={styles.Direction}>
              <Text>{posts}</Text>
              <Text style={styles.labels}>Posts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Direction}
              onPress={() => this.props.navigation.navigate("Following", {
                headerTitle: userName
              })}
            >
              <Text>{followers}</Text>
              <Text style={styles.labels}>Followers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Direction}
              onPress={() => this.props.navigation.navigate("Following", {
                headerTitle: userName
              })}>
              <Text>{following}</Text>
              <Text style={styles.labels}>Following</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <ButtonComponent
              text={follow ? "Unfollow" : sentRequest ? "Requested" : "Follow"}
              onPress={follow ? this.unFollow : this.sendRequest}
              mtop={getResponsiveHeight(1.9)}
              ButtonColor={Colors.BLUE}
              textColor={Colors.WHITE}
              fontSize={Fonts.FONT_15}
              fontFamily={Fonts.POPPINS_MEDIUM}
              height={getResponsiveWidth(11)}
            />
          </View>
          <TabView
            lazy={true}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={(index) => this.setState({ index })}
            initialLayout={initialLayout}
            renderTabBar={this.renderTabBar}
            style={{ flexGrow: 1, height: follow ? 0 : getResponsiveHeight(50) }}
          />
          <SafeAreaView>
            <Modal transparent={true} visible={modalVisible}>
              <View style={styles.transparentBg}>
                <View style={styles.modalContainer}>
                  <Text style={styles.reqSendTxt}>Follow request sent</Text>
                  <View style={styles.modalButtons}>
                    <TouchableOpacity onPress={() => this.setState({
                      modalVisible: false
                    })}>
                      <Text style={styles.modalButtonText}>Undo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({
                      sentRequest: true,
                      modalVisible: false
                    })}>
                      <Text style={styles.modalButtonText}>OK</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}


