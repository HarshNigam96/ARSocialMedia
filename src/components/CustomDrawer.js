import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import Colors from '../common/constants/colors'
import IMAGES from '../common/constants/images'
import { getResponsiveHeight, getResponsiveWidth } from '../common/helper/utils'
export default class CustomDrawer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            indexCheck: 0,
        }
    }


    onPress = (val, index) => {
        this.setState({
            indexCheck: index
        })
        this.props.navigation.navigate(val, {
            userName: "Samuel",
            profileImage: "https://images.all-free-download.com/images/graphicthumb/lioness_profile_193744.jpg",
            postedImage: "https://i1.wp.com/gwjeel.com/wp-content/uploads/2018/04/pexels-photo-443446.jpeg?fit=1088%2C703&ssl=1",
            like: 172,
            dislike: 0,
            view: 200,
            posts: 5,
            followers: 1,
            following: 0,
            editMode: true,
        })
    }
    render() {
        const { indexCheck } = this.state
        const route = [
            { icon: IMAGES.USER_PROFILE, title: "Profile", route: "UserInfo" },
            { icon: IMAGES.AR_CAMERA, title: "AR Camera", route: "ARMode" },
            { icon: IMAGES.MAP_ICON, title: "On World Map", route: "" },
            { icon: IMAGES.SETTINGS, title: "Settings", route: "Settings" },
            { icon: IMAGES.CALL, title: "Help & Support", route: "HelpAndSupport" },
        ]
        return (
            <View style={styles.Container}>
                {route.map((val, index) =>
                    <TouchableOpacity key={index} style={[styles.touchableContainer,
                    {
                        borderWidth: index === indexCheck ? 1 : 0,
                        marginTop: index === 0 ? 0 : getResponsiveHeight(2.5)
                    }]}
                        onPress={() => this.onPress(val.route, index)}>
                        <View style={styles.alignMent}>
                            <Image resizeMode="contain" source={val.icon}
                                style={[styles.Icons,
                                {
                                    tintColor: indexCheck === index
                                        ? Colors.BLUE
                                        : Colors.BLACK
                                }]} />
                            <Text style={[styles.titleTxt,
                            {
                                color: index === indexCheck
                                    ? Colors.BLUE
                                    : Colors.BLACK
                            }]}>{val.title}</Text>
                        </View>
                        {indexCheck === index ?
                            <Image resizeMode="contain"
                                style={styles.forwardArrow} source={IMAGES.FORWARD_ARROW} />
                            :
                            null}
                    </TouchableOpacity>)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    touchableContainer: {
        paddingLeft: getResponsiveWidth(5),
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: getResponsiveWidth(2),
        padding: getResponsiveWidth(2),
        borderColor: Colors.BLUE,
    },
    alignMent: {
        alignItems: "center",
        flexDirection: "row"
    },
    forwardArrow: {
        height: getResponsiveWidth(5),
        width: getResponsiveWidth(5),
        tintColor: Colors.BLUE
    },
    titleTxt: {
        paddingLeft: getResponsiveWidth(6)
    },
    Icons: {
        height: getResponsiveWidth(6),
        width: getResponsiveWidth(6)
    },
})