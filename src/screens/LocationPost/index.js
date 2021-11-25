import React, { Component } from 'react'
import { View, Share, Modal, Text, ImageBackground, SafeAreaView, TextInput, Image, TouchableOpacity, FlatList } from 'react-native'
import IMAGES from '../../common/constants/images'
import Colors from '../../common/constants/colors'
import styles from './styles'
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils'

export default class LocationPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showMenu: false,
            modalVisible: false,
            viewReplies: false,
            comments: [
                {
                    commentedBy: 'martini_rond',
                    subComments: true,
                    commenterProfilePic:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2fWPROdS8pukewyAzcDzsD_ffortpxCXeg&usqp=CAU',
                    userComment:
                        'Haha lol. That’s so easy to use and user friendly, go try again in a moment!',
                },
                {
                    commentedBy: 'maxjacobson',
                    subComments: false,
                    commenterProfilePic:
                        'https://qph.fs.quoracdn.net/main-qimg-20df28f3b31895e56cba6dbc0515c635',
                    userComment:
                        'Wow! that’s so frickin’ cool dude, where do you get that? Is it available in Supermarket?',
                },
                {
                    commentedBy: 'zackjohn',
                    subComments: false,
                    commenterProfilePic:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2fWPROdS8pukewyAzcDzsD_ffortpxCXeg&usqp=CAU',
                    userComment:
                        'Haha lol. That’s so easy to use and user friendly, go try again in a moment!',
                },
            ],
        }
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

    render() {
        const { showMenu, comments, modalVisible, viewReplies } = this.state
        const { postedImage } = this.props.route.params
        return (
            <ImageBackground
                style={styles.Container}
                source={{ uri: postedImage }} >
                <SafeAreaView style={styles.SafeArea}>
                    <View style={styles.secondContainer}>
                        <View style={styles.Direction}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Image style={styles.backArrow} source={IMAGES.BACK_ARROW} />
                            </TouchableOpacity>
                            <Image
                                style={styles.profilePic}
                                source={{ uri: "https://images.all-free-download.com/images/graphicthumb/lioness_profile_193744.jpg" }} />
                            <View style={styles.userNameContainer}>
                                <Text style={styles.userNameTxt}>Andy Joe</Text>
                                <Text style={[styles.userNameTxt, { opacity: 0.5 }]}>@Andy Joe</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => this.setState({
                            showMenu: !showMenu
                        })}>
                            <Image style={styles.menuIcon} source={IMAGES.MENU} />
                        </TouchableOpacity>
                        {showMenu
                            ? <View style={styles.menuContainer}>
                                <TouchableOpacity>
                                    <Text style={styles.menuOptions}>Delete Post</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={[styles.menuOptions, { marginTop: getResponsiveHeight(1) }]}>Hide post</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={[styles.menuOptions, { marginTop: getResponsiveHeight(1) }]}>Turn off comments</Text>
                                </TouchableOpacity>
                            </View>
                            : null}
                    </View>
                </SafeAreaView>
                <View style={styles.captionContentContainer}>
                    <Text style={styles.captionText}>Memories</Text>
                </View>
                <View style={styles.transparentBGContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Comment..."
                            placeholderTextColor={Colors.WHITE}
                            style={styles.textInput} />
                        <TouchableOpacity onPress={() => { }}>
                            <Image source={IMAGES.SEND} style={styles.sendIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.options}>
                    <Image source={IMAGES.HEART_ICON} style={styles.Icon} />
                    <Text style={styles.postDetails}>328.7K</Text>
                    <TouchableOpacity style={{ alignItems: "center" }} onPress={() => this.setState({
                        modalVisible: !modalVisible
                    })}>
                        <Image source={IMAGES.COMMENT_POST} style={styles.Icon} />
                        <Text style={styles.postDetails}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onShare}>
                        <Image source={IMAGES.SHARE} style={styles.Icon} />
                        <Text style={styles.postDetails}>Share</Text>
                    </TouchableOpacity>
                </View>
                <Modal transparent={true} animationType="slide" visible={modalVisible}>
                    <View style={styles.modalTransparentContainer}>
                        <View style={styles.modalContainer}>
                            <View style={{ marginTop: getResponsiveHeight(3) }}>
                                <Text style={styles.commentsHeader}>3 comments</Text>
                                <TouchableOpacity onPress={() => this.setState({
                                    modalVisible: !modalVisible
                                })} style={styles.closeButtonContainer}>
                                    <Image style={styles.closeIcon} source={IMAGES.CROSS} />
                                </TouchableOpacity>
                            </View>
                            <FlatList style={{ marginBottom: getResponsiveWidth(5) }}
                                data={comments}
                                renderItem={({ item, index }) =>
                                    <View style={styles.commentsContainer}>
                                        <View style={{ flexDirection: "row" }}>
                                            <Image
                                                style={styles.profilePic}
                                                source={{ uri: item.commenterProfilePic }} />
                                            <View style={{ marginLeft: getResponsiveWidth(2) }}>
                                                <Text style={styles.commenterName}>{item.commentedBy}</Text>
                                                <Text style={styles.userComment}>{item.userComment}<Text style={{ color: Colors.GREY }}> 22h</Text></Text>
                                                {item.subComments ? <TouchableOpacity onPress={() => this.setState({
                                                    viewReplies: !viewReplies
                                                })}>
                                                    <Text style={styles.viewReplyTxt}>{viewReplies ? "Hide replies" : "View replies (1)"}</Text>
                                                </TouchableOpacity> : null}
                                            </View>
                                        </View>
                                    </View>
                                }
                            />
                        </View>
                    </View>
                </Modal>
            </ImageBackground>
        )
    }
}