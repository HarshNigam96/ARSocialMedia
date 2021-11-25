import React, { Component } from 'react';
import { Text, View, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Colors from '../../common/constants/colors'
import Fonts from '../../common/constants/fonts'
import IMAGES from '../../common/constants/images'
import styles from './styles'
import { getResponsiveHeight, getResponsiveWidth } from '../../common/helper/utils'
export default class Languages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      availableLanguages: [
        { language: "English" },
        { language: "Arabic" },
        { language: "Spanish" },
      ],
      selectedIndex: 0
    }
  }
  render() {
    const { availableLanguages, selectedIndex } = this.state
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <View>
            <FlatList data={availableLanguages} renderItem={({ item, index }) => {
              return (
                <TouchableOpacity style={styles.listItemContainer}
                  onPress={() => this.setState({
                    selectedIndex: index
                  })}>
                  <Text style={styles.languageTxtStyle}>{item.language}</Text>
                  {selectedIndex === index ? <View style={styles.selectButton}>
                    <Image source={IMAGES.TICK} style={styles.TickIcon} />
                  </View> : <View style={styles.disabled}>
                  </View>}
                </TouchableOpacity>
              )
            }} />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
