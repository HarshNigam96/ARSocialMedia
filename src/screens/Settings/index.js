import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, Switch } from 'react-native';
import Colors from '../../common/constants/colors'
import IMAGES from '../../common/constants/images'
import Strings from '../../common/constants/Strings';
import styles from './styles';

export default class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false,
    }
  }

  render() {
    const { toggle } = this.state
    return (
      <View style={styles.Container}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.title}>Account</Text>
            </View>
            <View style={styles.settingOptionContainer}>
              <TouchableOpacity style={styles.TouchableContainer}
                onPress={() => this.props.navigation.navigate("EditProfile")}>
                <Text style={styles.settingOptionTxt}>Personal Information</Text>
                <Image style={styles.icon} source={IMAGES.FORWARD_ARROW} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.TouchableContainer}
                onPress={() => this.props.navigation.navigate("Languages")}>
                <Text style={styles.settingOptionTxt}>Languange</Text>
                <Image style={styles.icon} source={IMAGES.FORWARD_ARROW} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.TouchableContainer}
                onPress={() => this.props.navigation.navigate("RequestToken", {
                  information: Strings.LOREM_IPSUM,
                  featureTitle: "Other Features",
                  features: Strings.LOREM_IPSUM_LINE
                })}>
                <Text style={styles.settingOptionTxt}>Request AR tokens</Text>
                <Image style={styles.icon} source={IMAGES.FORWARD_ARROW} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.TouchableContainer}
                onPress={() => this.props.navigation.navigate("Subscription")}>
                <Text style={styles.settingOptionTxt}>Paid Subscription</Text>
                <Image style={styles.icon} source={IMAGES.FORWARD_ARROW} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.TouchableContainer}
                onPress={() => this.props.navigation.navigate("AccountPrivacy")}>
                <Text style={styles.settingOptionTxt}>Privacy</Text>
                <Image style={styles.icon} source={IMAGES.FORWARD_ARROW} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.TouchableContainer}
                onPress={() => this.props.navigation.navigate("BusinessAccount")}
              >
                <Text style={styles.settingOptionTxt}>Switch to Business account</Text>
                <Image style={styles.icon} source={IMAGES.FORWARD_ARROW} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.TouchableContainer}
                onPress={() => this.props.navigation.navigate("PaidAccount")}
              >
                <Text style={styles.settingOptionTxt}>Switch to Paid account</Text>
                <Image style={styles.icon} source={IMAGES.FORWARD_ARROW} />
              </TouchableOpacity>
              <View style={styles.titleMargin}>
                <Text style={styles.title}>Preferences</Text>
              </View>
              <TouchableOpacity style={styles.TouchableContainer}>
                <Text style={styles.settingOptionTxt}>Notification</Text>
                <Switch value={toggle}
                  onChange={() => this.setState({
                    toggle: !toggle
                  })}
                  trackColor={{ false:Colors.LIGHT_GREY, true: Colors.SKY_BLUE }}
                  thumbColor={toggle ? Colors.WHITE : Colors.WHITE}
                />
              </TouchableOpacity>
              <View style={styles.titleMargin}>
                <Text style={styles.title}>Security</Text>
              </View>
              <TouchableOpacity style={styles.TouchableContainer} onPress={() => this.props.navigation.navigate("PasswordAndSecurity")}>
                <Text style={styles.settingOptionTxt}>Security & password</Text>
                <Image style={styles.icon} source={IMAGES.FORWARD_ARROW} />
              </TouchableOpacity>
              <View style={styles.titleMargin}>
                <Text style={styles.title}>Support</Text>
              </View>
              <TouchableOpacity style={styles.TouchableContainer}
                onPress={() => this.props.navigation.navigate("HelpAndSupport")}
              >
                <Text style={styles.settingOptionTxt}>Help & Support</Text>
                <Image style={styles.icon} source={IMAGES.FORWARD_ARROW} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}
