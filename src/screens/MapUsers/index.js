import React, { Component } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import Fonts from '../../common/constants/fonts'
import { getResponsiveWidth, getResponsiveHeight } from '../../common/helper/utils'
import styles from './styles'

export default class MapUsers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { profileImage: "https://www.whatsappimages.in/wp-content/uploads/2020/12/New-Whatsapp-DP-Profile-24.jpg", name: "Ramsay Jon Snow", userId: "ramsaysnowjon12" },
                { profileImage: "https://whatsappdpgirl.com/wp-content/uploads/2020/03/Whatsapp-Dp-Profile-Pictures-8.jpg", name: "Ramsay Snow Bolton", userId: "ramsaybolton" },
            ]
        }
    }
    
    render() {
        const { data } = this.state
        return (
            <View style={styles.Container}>
                <View style={styles.ComponentContainer}>
                    <Text style={{ fontFamily: Fonts.MULISH_REGULAR }}>This is a list of friends currently on map, check out their recent activity on the map</Text>
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{
                                    marginTop: index === 0 ? getResponsiveHeight(2.2) :
                                        getResponsiveHeight(2.8)
                                }}>
                                    <View style={styles.userDetail}>
                                        <Image source={{ uri: item.profileImage }}
                                            style={styles.profilePic} />
                                        <View style={{ marginLeft: getResponsiveWidth(4) }}>
                                            <Text style={styles.nameTxt}>{item.name}</Text>
                                            <Text style={styles.userIdTxt}>@{item.userId}</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>
            </View>
        )
    }
}