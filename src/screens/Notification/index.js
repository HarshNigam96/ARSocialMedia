import React, { Component } from 'react';
import { View, Text, FlatList, SafeAreaView, Image } from 'react-native';
import NotificationComponent from '../../components/NotificationComponent';
import styles from './styles';
import IMAGES from '../../common/constants/images'

export default class Notification extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          userName: "Jacob Howard",
          comment: '"Hahaha, I forgot that lol"',
          time: "10 min",
          profilePicture: "https://www.setaswall.com/wp-content/uploads/2017/03/Cosmos-4K-Wallpaper-3840x2160.jpg",
          postedImage: "https://wallpapercave.com/wp/wp2570964.jpg",
          liked: false,
          taggedImage: ""
        },
        {
          userName: "Arthur Black",
          comment: '',
          time: "1 min",
          profilePicture: "https://static.statusqueen.com/desktopwallpaper/thumbnail/ROG-Pugio-Hd_4k_desktop_wallpaper_photos4-558.jpg",
          postedImage: "https://wallpapercave.com/wp/wp2570964.jpg",
          liked: true,
          taggedBy: "",
          taggedImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72FjbHlfHoVU6SaTJNQAl_dyfiqO8zfkfkg&usqp=CAU"
        },
        {
          userName: "Diane Richards",
          comment: '',
          time: "1 min",
          profilePicture: "https://www.pixelstalk.net/wp-content/uploads/2016/03/Cool-Deadpool-Wallpaper-HD-1.jpg",
          postedImage: "https://wallpapercave.com/wp/wp2570964.jpg",
          liked: false,
          // taggedBy: "Alex",
          taggedImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72FjbHlfHoVU6SaTJNQAl_dyfiqO8zfkfkg&usqp=CAU"
        },
        {
          userName: "Jacob Howard",
          comment: '',
          time: "10 min",
          profilePicture: "https://www.setaswall.com/wp-content/uploads/2017/03/Cosmos-4K-Wallpaper-3840x2160.jpg",
          postedImage: "https://wallpapercave.com/wp/wp2570964.jpg",
          liked: false,
          taggedImage: ""
        },
        {
          userName: "Arthur Black",
          comment: '',
          time: "1 min",
          profilePicture: "https://static.statusqueen.com/desktopwallpaper/thumbnail/ROG-Pugio-Hd_4k_desktop_wallpaper_photos4-558.jpg",
          postedImage: "https://wallpapercave.com/wp/wp2570964.jpg",
          liked: false,
          taggedBy: "",
          taggedImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72FjbHlfHoVU6SaTJNQAl_dyfiqO8zfkfkg&usqp=CAU"
        },
        {
          userName: "Diane Richards",
          comment: '',
          startFollow:"following",
          time: "1 min",
          profilePicture: "https://www.pixelstalk.net/wp-content/uploads/2016/03/Cool-Deadpool-Wallpaper-HD-1.jpg",
          postedImage: "https://wallpapercave.com/wp/wp2570964.jpg",
          liked: false,
          taggedBy: "Alex",
          taggedImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72FjbHlfHoVU6SaTJNQAl_dyfiqO8zfkfkg&usqp=CAU"
        },
      ]
    }
  }
  render() {

    return (
      <View style={styles.Container}>
        <SafeAreaView style={{ flex: 1 }}>
          <Text style={styles.boldTxt}>Today</Text>
          <FlatList contentContainerStyle={{ flexGrow: 1 }}
            data={this.state.data}
            ListEmptyComponent={() => <View style={styles.emptyListContainer}>
              <Image
                style={styles.bellImage}
                source={IMAGES.EMPTY_NOTIFICATION}
              />
              <Text style={styles.emptyNotificationTxt}>Notification Empty</Text>
              <Text style={styles.info}>
                There are no notifications in this account, let’s discover and take a look this later.
              </Text>
            </View>}
            renderItem={({ item, index }) =>
              <NotificationComponent
                onPress={() => this.props.navigation.navigate("Post", {
                  userName: item.userName,
                  postedImage: item.postedImage,
                  profileImage: item.profilePicture,

                })}
                comment={item.comment}
                liked={item.liked}
                time={item.time}
                postedImage={{ uri: item.postedImage }}
                taggedImage={{ uri: item.taggedImage }}
                taggedBy={item.taggedBy}
              startFollow={item.startFollow}
                profilePic={{ uri: item.profilePicture }}
                userName={item.userName} />
            }
          />
        </SafeAreaView>
      </View >
    );
  }
}
