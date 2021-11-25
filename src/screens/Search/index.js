import React, { Component } from 'react';
import { Text, View, SafeAreaView, FlatList, TextInput, Image, TouchableOpacity, } from 'react-native';
import Colors from '../../common/constants/colors'
import { getResponsiveHeight,WIDTH } from '../../common/helper/utils'
import styles from './styles';
import { TabView, TabBar } from 'react-native-tab-view';
import Dashboard from '../Dashboard';
import IMAGES from '../../common/constants/images';
const initialLayout = { width: WIDTH };
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: "",
      list: [
        { profileImage: "https://www.whatsappimages.in/wp-content/uploads/2020/12/New-Whatsapp-DP-Profile-24.jpg", name: "Ramsay Jon Snow", userId: "ramsaysnowjon12" },
        { profileImage: "https://whatsappdpgirl.com/wp-content/uploads/2020/03/Whatsapp-Dp-Profile-Pictures-8.jpg", name: "Ramsay Snow Bolton", userId: "ramsaybolton" },
      ],
      places: [
        {
          placeName: "Paris, London."
        },
        {
          placeName: "Paris, London."
        },
        {
          placeName: "Paris, London."
        },
        {
          placeName: "Paris, London."
        },
        {
          placeName: "Paris, London."
        },
        {
          placeName: "Paris, London."
        },
        {
          placeName: "Paris, London."
        },
        {
          placeName: "Paris, London."
        },
        {
          placeName: "Paris, London."
        },
        {
          placeName: "Paris, London."
        },
        {
          placeName: "Paris, London."
        },
        {
          placeName: "Paris, London."
        },
        {
          placeName: "Paris, London."
        },
      ],
      index: 0,
      routes: [
        { key: 'Accounts', title: 'Accounts' },
        { key: 'Posts', title: 'Posts' },
        { key: 'Places', title: 'Places' },
      ],
    }
  }

  renderTabBar = (props) => (
    <TabBar
      {...props}
      getLabelText={({ route }) => route.title}
      renderLabel={({ route, focused, color }) =>
        <Text style={styles.tabLabels}>
          {route.title}
        </Text>
      }
      indicatorContainerStyle={styles.indicatorContainer}
      indicatorStyle={styles.indicatorStyle}
    />
  );

  render() {
    const { index, routes, list, search, places } = this.state
    const renderScene = ({ route }) => {
      switch (route.key) {
        case 'Accounts':
          return (
            <View style={styles.FollowingContainer}>
              <FlatList data={list.filter(val => {
                return val.name.toLowerCase().indexOf(search.toLowerCase()) != -1
              })}
                contentContainerStyle={styles.accountListContainer}
                ListEmptyComponent={() =>
                  <View style={styles.emptyListContainer}>
                    <Image style={styles.emptyImage} source={IMAGES.EMPTY_FILTER} />
                    <Text style={styles.sorryTxt}>Oops, so sorry!</Text>
                    <Text style={styles.resultTxt}> We couldn’t find any result for <Text style={{ color: Colors.RED }}>{this.state.search}</Text>. Try a new keyword</Text>
                  </View>
                }
                renderItem={({ item, index }) =>
                  <View style={[styles.listItemContainer, {
                    marginTop: index === 0 ? getResponsiveHeight(2.2) :
                      getResponsiveHeight(4.4)
                  }]}>
                    <View style={styles.userDetails}>
                      <Image source={{ uri: item.profileImage }}
                        style={styles.profilePic} />
                      <View style={styles.nameContainer}>
                        <Text style={styles.nameText}>{item.name}</Text>
                        <Text style={styles.userIdText}>@{item.userId}</Text>
                      </View>
                    </View>
                  </View>}
              />
            </View>
          );
        case 'Posts':
          return (
            <Dashboard />
          );
        case "Places":
          return (
            <FlatList
              data={places.filter(val => {
                return val.placeName.toLowerCase().indexOf(search.toLowerCase()) != -1
              })}
              contentContainerStyle={styles.accountListContainer}
              ListEmptyComponent={() =>
                <View style={styles.emptyListContainer}>
                  <Image style={styles.emptyImage} source={IMAGES.EMPTY_FILTER} />
                  <Text style={styles.sorryTxt}>Oops, so sorry!</Text>
                  <Text style={styles.resultTxt}> We couldn’t find any result for <Text style={{ color: Colors.RED }}>{search}</Text>. Try a new keyword</Text>
                </View>
              }
              renderItem={({ item, index }) =>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Maps")} style={styles.placeListContainer}>
                  <Image source={IMAGES.MAP_ICON} />
                  <Text style={styles.placeNameTxt}>{item.placeName}</Text>
                </TouchableOpacity>}
            />
          )
      }
    };
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1, }}>
          <View style={styles.searchContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Dashboard")}>
              <Image source={IMAGES.BACK_ARROW} style={styles.backArrow} />
            </TouchableOpacity>
            <View style={styles.inputContainer}>
              <Image resizeMode="contain" source={IMAGES.SEARCH} style={styles.searchIcon} />
              <TextInput value={search}
                value={search}
                onChangeText={val => this.setState({
                  search: val
                })}
                style={styles.inputField}
                placeholder="Search" />
            </View>
          </View>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={(index) => this.setState({ index })}
            initialLayout={initialLayout}
            renderTabBar={this.renderTabBar}
            style={styles.container}
          />
        </SafeAreaView>
      </View>
    );
  }
}
