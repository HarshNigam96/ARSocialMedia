import React, { Component } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import Colors from '../../common/constants/colors';
import Strings from '../../common/constants/Strings';
import Fonts from '../../common/constants/fonts';
import ButtonComponent from '../../components/ButtonComponent';
import styles from './styles';
import {
  getResponsiveHeight,
  getResponsiveWidth,
} from '../../common/helper/utils';
export default class PolicyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policyData: [
        {
          title: 'Privacy Policy',
          description: Strings.LOREM_IPSUM,
          headingText: Strings.COLLECTED_INFO,
          HeadLine: Strings.INFO_PROVIDED_BY,
        },
      ],
      contentData: [
        {
          title: 'Content Policy',
          description: Strings.LOREM_IPSUM,
          headingText: Strings.CONTENT_POLICY_TERMS,
        },
      ],
    };
  }
  render() {
    const { policy } = this.props.route.params;
    const { policyData, contentData } = this.state;
    return (
      <View style={styles.Container}>
        <FlatList
          data={policy === 'Privacy Policy' ? policyData : contentData}
          renderItem={({ item, index }) => (
            <View style={styles.listContainer}>
              <Text style={styles.Title}>AR's {item.title}</Text>
              <Text style={styles.Content}>{item.description}</Text>
              <Text style={styles.Heading}>{item.headingText}</Text>
              <Text style={styles.Content}>{item.description}</Text>
              <Text style={styles.Heading}>{item.HeadLine}</Text>
              <Text style={styles.Content}> {item.description}</Text>
            </View>
          )}
        />
        <SafeAreaView>
          <View style={styles.buttonContainer}>
            <ButtonComponent
              text="Don’t Agree"
              isBorderWidth
              borderColor={Colors.BLUE}
              fontSize={Fonts.FONT_15}
              fontFamily={Fonts.POPPINS_REGULAR}
              textColor={Colors.BLUE}
              borderWidth={1}
              height={getResponsiveWidth(10.5)}
              width={getResponsiveWidth(35)}
              mbottom={getResponsiveHeight(3)}
            />
            <ButtonComponent
              text="Agree"
              textColor={Colors.WHITE}
              ButtonColor={Colors.BLUE}
              fontSize={Fonts.FONT_15}
              fontFamily={Fonts.POPPINS_SEMIBOLD}
              height={getResponsiveWidth(10.5)}
              width={getResponsiveWidth(35)}
              mbottom={getResponsiveHeight(3)}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
