import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../common/constants/colors'
import Fonts from '../common/constants/fonts'
import { getResponsiveHeight, getResponsiveWidth } from '../common/helper/utils'

export default class NotificationComponent extends Component {
    render() {
        const highlightText = string => string.split(' ').map((word, i) => (
            <Text key={i}>
                <Text style={{ color: Colors.BLUE }}>{word} </Text>
            </Text>
        ));

        const { startFollow = "", onPress, taggedBy = "", taggedImage = "", profilePic = "", userName, comment = '', liked = false, time = "", postedImage = "" } = this.props
        return (
            <View>
                <TouchableOpacity onPress={onPress}>
                    {comment != "" ?
                        <View style={styles.notificationContainer}>
                            <View style={styles.Direction}>
                                <Image source={profilePic}
                                    style={[styles.userImage, { borderRadius: 100 }]}
                                />
                                <Text style={styles.notification}>
                                    <Text style={styles.userNameTxt}>{userName}</Text> Mentioned you in a {highlightText("comment")} {comment}.
                                    <Text style={styles.timeTxt}> {time}</Text>
                                </Text>
                            </View>
                            <Image source={postedImage}
                                style={styles.userImage}
                            />
                        </View>
                        : null}
                    {liked ?
                        <View style={styles.notificationContainer}>
                            <View style={styles.Direction}>
                                <Image source={profilePic}
                                    style={[styles.userImage, { borderRadius: 100 }]}
                                />
                                <Text
                                    style={styles.notification}>
                                    <Text style={styles.userNameTxt}>{userName}</Text>
                                    {' '}Liked your {highlightText("post")}
                                    <Text style={styles.timeTxt}> {time}</Text>
                                </Text>
                            </View>
                            <Image
                                source={{ uri: "https://i1.wp.com/gwjeel.com/wp-content/uploads/2018/04/pexels-photo-443446.jpeg?fit=1088%2C703&ssl=1" }}
                                style={styles.userImage}
                            />
                        </View>
                        : null}
                    {taggedBy != "" ?
                        <View style={styles.notificationContainer}>
                            <View style={styles.Direction}>
                                <Image source={profilePic}
                                    style={[styles.userImage, { borderRadius: 100 }]}
                                />
                                <Text
                                    style={styles.notification}>
                                    <Text style={styles.userNameTxt}>{taggedBy}</Text>
                                    Tagged you and {highlightText("3 others")} in his {highlightText("post")}.
                                    <Text style={styles.timeTxt}>{time}</Text>
                                </Text>
                            </View>
                            <Image source={taggedImage}
                                style={styles.userImage}
                            />
                        </View>
                        : null}
                    {startFollow !== "" ?
                        <View style={styles.notificationContainer}>
                            <View style={styles.Direction}>
                                <Image source={profilePic}
                                    style={[styles.userImage, { borderRadius: 100 }]}
                                />
                                <Text style={{ fontFamily: Fonts.NUNITO_SANS_BOLD, lineHeight: getResponsiveHeight(2.2), marginLeft: getResponsiveWidth(3) }}>
                                    Arthur Black and 3 others started following you<Text style={{ color: Colors.GREY, opacity: 0.6 }}> 2min</Text></Text>
                            </View>
                        </View>
                        : null}

                </TouchableOpacity>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.OFF_WHITE,
    },
    notificationContainer: {
        marginTop: getResponsiveHeight(3.5),
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: getResponsiveWidth(8.5),
        paddingRight: getResponsiveWidth(7),
    },
    userNameTxt: {
        fontFamily: Fonts.NUNITO_SANS_BOLD
    },
    Direction: {
        flexDirection: "row",
        maxWidth: getResponsiveWidth(76)
    },
    userImage: {
        height: getResponsiveWidth(11),
        width: getResponsiveWidth(11),
    },
    notification: {
        lineHeight: getResponsiveHeight(2.2),
        marginLeft: getResponsiveWidth(3),
        width: getResponsiveWidth(56),
        fontFamily: Fonts.NUNITO_SANS_REGULAR,
    },
    timeTxt: {
        color: Colors.GREY,
        opacity: 0.6
    }
})