import React, { Component } from 'react';
import { Text, View, FlatList, TextInput, Image, Platform } from 'react-native';
import Colors from '../../common/constants/colors'
import Fonts from '../../common/constants/fonts'
import ButtonComponent from '../../components/ButtonComponent'
import { getResponsiveHeight, getResponsiveWidth, WIDTH } from '../../common/helper/utils'
import IMAGES from '../../common/constants/images'
import styles from './styles';

export default class SuggestedFollower extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
    render() {
        const {list}=this.state
        return (
            <View style={styles.FollowingContainer}>
                <FlatList data={list}
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
        )
    }
}