import React, { Component } from 'react'
import { View, Text, SafeAreaView, Switch, Image, Modal, FlatList, TouchableOpacity } from 'react-native'
import styles from './styles'
import IMAGES from '../../common/constants/images'

export default class LocationSetting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: false,
            modalVisible: false,
            selectedIndex: 0,
            visibleTo: "My friends",
            data: [
                { visibleTo: "EveryOne" },
                { visibleTo: "My friends" },
                { visibleTo: "nobody" },
            ]
        }
    }
    onSelect = (val, id) => {
        this.setState({
            modalVisible: false,
            selectedIndex: id,
            visibleTo: val.visibleTo,
        });
    };
    render() {
        const { toggle, data, modalVisible, visibleTo } = this.state
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.ComponentContainer}>
                    <Text style={styles.info}>
                        You can adjust your location preference options here  for your users
                    </Text>
                    <Text style={styles.HeadLineText}>My Location</Text>
                    <View style={styles.toggleContainer}>
                        <Text style={styles.hideLocationTxt}>Hide Location</Text>
                        <Switch
                            value={toggle}
                            onChange={() => this.setState({
                                toggle: !toggle
                            })}
                            trackColor={{ false: Colors.GREY, true: Colors.SKY_BLUE }}
                            thumbColor={toggle ? Colors.WHITE : Colors.WHITE}
                        />
                    </View>
                    {toggle ? null :
                        <>
                            <Text style={styles.HeadLineText}>Location Visibility Options</Text>
                            <TouchableOpacity
                                style={[
                                    {
                                        borderColor:
                                            visibleTo != '' ? Colors.CYAN_BLUE : Colors.ALICE_BLUE,
                                        backgroundColor:
                                            visibleTo != '' ? Colors.ALICE_BLUE : Colors.WHITE,
                                        borderWidth: visibleTo != '' ? 1 : 2,
                                    },
                                    styles.selected,
                                ]}
                                onPress={() => this.setState({ modalVisible: !modalVisible })}>
                                <Text style={styles.hideLocationTxt}>{visibleTo}</Text>
                            </TouchableOpacity>
                            <Image
                                resizeMode="contain"
                                style={styles.dropDown}
                                source={IMAGES.DROPDOWN}
                            />
                        </>
                    }
                    <Modal visible={modalVisible}>
                        <SafeAreaView>
                            <TouchableOpacity
                                style={styles.closeButtonContainer}
                                onPress={() =>
                                    this.setState({
                                        modalVisible: !modalVisible,
                                    })
                                }>
                                <Image
                                    resizeMode="contain"
                                    style={styles.closeButtonImg}
                                    source={IMAGES.CLOSE}
                                />
                            </TouchableOpacity>
                            <FlatList
                                data={data}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity onPress={() => this.onSelect(item, index)}>
                                        <Text style={styles.modalOptions}>{item.visibleTo}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </SafeAreaView>
                    </Modal>

                </View>
            </SafeAreaView>
        )
    }
}