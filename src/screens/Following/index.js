import React, { Component } from 'react';
import { Text, View, FlatList, TextInput, Image } from 'react-native';
import Colors from '../../common/constants/colors'
import Fonts from '../../common/constants/fonts'
import ButtonComponent from '../../components/ButtonComponent'
import { getResponsiveHeight, getResponsiveWidth, WIDTH } from '../../common/helper/utils'
import IMAGES from '../../common/constants/images'
import styles from './styles';
import { TabView, TabBar } from 'react-native-tab-view';
const initialLayout = { width: WIDTH };
export default class Following extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
            list: [
                { profileImage: "https://www.whatsappimages.in/wp-content/uploads/2020/12/New-Whatsapp-DP-Profile-24.jpg", name: "Ramsay Jon Snow", userId: "ramsaysnowjon12" },
                { profileImage: "https://whatsappdpgirl.com/wp-content/uploads/2020/03/Whatsapp-Dp-Profile-Pictures-8.jpg", name: "Ramsay Snow Bolton", userId: "ramsaybolton" },
            ],
            index: 0,
            routes: [
                { key: 'Followers', title: 'Followers' },
                { key: 'Following', title: 'Following' },
            ],
        }
    }

    FollowButton = (id) => {
        const { list } = this.state
        const followAction = list
        followAction[id].follow = !followAction[id].follow
        this.setState({
            list: followAction
        })
    }
    renderTabBar = (props) => (
        <TabBar
            {...props}
            getLabelText={({ route }) => route.title}
            renderLabel={({ route, focused, color }) =>
                <Text style={{ fontFamily: Fonts.NUNITO_SANS_REGULAR, fontSize: Fonts.FONT_12 }}>
                    {route.title}
                </Text>
            }
            indicatorContainerStyle={{ backgroundColor: Colors.OFF_WHITE }}
            indicatorStyle={{ backgroundColor: Colors.BLUE }}
        />
    );

    render() {
        const { index, routes, search, list } = this.state
        const renderScene = ({ route }) => {
            switch (route.key) {
                case 'Followers':
                    return (
                        null
                    );
                case 'Following':
                    return (
                        <View style={styles.FollowingContainer}>
                            <View style={styles.inputContainer}>
                                <Image resizeMode="contain" source={IMAGES.SEARCH} style={styles.searchIcon} />
                                <TextInput value={search}
                                    onChangeText={val => this.setState({
                                        search: val
                                    })}
                                    style={{ paddingLeft: getResponsiveWidth(4) }}
                                    placeholder="Search" />
                            </View>
                            <FlatList data={list.filter(val => {
                                return val.name.toLowerCase().indexOf(search.toLowerCase()) != -1
                            })}
                                renderItem={({ item, index }) => <View style={[styles.listItemContainer, {
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
                                    <ButtonComponent
                                        onPress={() => this.FollowButton(index)}
                                        text={item.follow ? "Following" : "Follow"}
                                        textColor={Colors.BLUE}
                                        fontSize={Fonts.FONT_12}
                                        fontFamily={Fonts.NUNITO_SANS_REGULAR}
                                        isBorderWidth
                                        borderWidth={1}
                                        borderColor={Colors.BLUE}
                                        height={getResponsiveWidth(6)}
                                        width={getResponsiveWidth(18)}
                                    />
                                </View>}
                            />
                        </View>
                    );
            }
        };
        return (
            <View style={styles.container}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={(index) => this.setState({ index })}
                    initialLayout={initialLayout}
                    renderTabBar={this.renderTabBar}
                    style={styles.container}
                />
            </View>
        );
    }
}
