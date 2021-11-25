import React, { Component } from 'react';
import { Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image, TextInput, Switch } from 'react-native';
import Colors from '../../common/constants/colors'
import styles from './styles';

export default class NewPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false,
      disableComment: false,
      modal: false,
      businessAccount: false,
      paidAccount: false
    }
  }


  accountType = () => {
    const { businessAccount, paidAccount, toggle, disableComment } = this.state
    if (businessAccount) {
      return <>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>Sponsored ad</Text>
          <Switch value={toggle}
            onChange={() => this.setState({
              toggle: !toggle
            })}
            trackColor={{ false: Colors.LIGHT_GREY, true: Colors.SKY_BLUE }}
            thumbColor={toggle ? Colors.WHITE : Colors.WHITE}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Audience</Text>
          <View>
            <TouchableOpacity
              style={styles.touchable}>
              <Text>All Followers</Text>
              <Image style={styles.dropDown} source={IMAGES.DROPDOWN} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Post Duration</Text>
          <View>
            <TouchableOpacity
              style={styles.touchable}>
              <Text>1 Week</Text>
              <Image style={styles.dropDown} source={IMAGES.DROPDOWN} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Specific location</Text>
          <View>
            <TouchableOpacity
              style={styles.touchable}>
              <Text>No.24, Mumbai Street, India</Text>
              <Image style={styles.dropDown} source={IMAGES.DROPDOWN} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>Disable commments</Text>
          <Switch value={disableComment}
            onChange={() => this.setState({
              disableComment: !disableComment
            })}
            trackColor={{ false: Colors.LIGHT_GREY, true: Colors.SKY_BLUE }}
            thumbColor={toggle ? Colors.WHITE : Colors.WHITE}
          />
        </View>
      </>
    }
    else if (paidAccount) {
      return <>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Post Visibility options</Text>
          <View>
            <TouchableOpacity
              style={styles.touchable}>
              <Text>All Followers</Text>
              <Image style={styles.dropDown} source={IMAGES.DROPDOWN} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Post Duration</Text>
          <View>
            <TouchableOpacity
              style={styles.touchable}>
              <Text>1 Week</Text>
              <Image style={styles.dropDown} source={IMAGES.DROPDOWN} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>Appear on AR mode</Text>
          <Switch value={toggle}
            onChange={() => this.setState({
              toggle: !toggle
            })}
            trackColor={{ false: Colors.LIGHT_GREY, true: Colors.SKY_BLUE }}
            thumbColor={toggle ? Colors.WHITE : Colors.WHITE}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>pick location</Text>
          <View>
            <TouchableOpacity
              style={styles.touchable}>
              <Text>No.24, Mumbai Street, India</Text>
              <Image style={styles.dropDown} source={IMAGES.DROPDOWN} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>Disable commments</Text>
          <Switch value={disableComment}
            onChange={() => this.setState({
              disableComment: !disableComment
            })}
            trackColor={{ false: Colors.LIGHT_GREY, true: Colors.SKY_BLUE }}
            thumbColor={toggle ? Colors.WHITE : Colors.WHITE}
          />
        </View>
      </>
    }
    else {
      return <>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Post Visibility options</Text>
          <View>
            <TouchableOpacity
              style={styles.touchable}>
              <Text>All Followers</Text>
              <Image style={styles.dropDown} source={IMAGES.DROPDOWN} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Post Duration</Text>
          <View>
            <TouchableOpacity
              style={styles.touchable}>
              <Text>1 Week</Text>
              <Image style={styles.dropDown} source={IMAGES.DROPDOWN} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>Disable commments</Text>
          <Switch value={disableComment}
            onChange={() => this.setState({
              disableComment: !disableComment
            })}
            trackColor={{ false: Colors.LIGHT_GREY, true: Colors.SKY_BLUE }}
            thumbColor={toggle ? Colors.WHITE : Colors.WHITE}
          />
        </View>
      </>
    }
  }

  render() {
    const { toggle, disableComment } = this.state
    return (
      <View style={styles.Container}>
        <SafeAreaView style={styles.safeAreaContainer}>
          <ScrollView contentContainerStyle={styles.safeAreaContainer}>
            <Image
              style={styles.uploadedImg}
              source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNF9jJzEPlWm22-6jJusHqRDhkGRu65N6ekA&usqp=CAU" }} />
            <View style={styles.componentContainer}>
              <Text style={styles.label}>Caption</Text>
              <TextInput
                multiline={true}
                numberOfLines={5}
                style={styles.captionTextInput}
              />
              {this.accountType()}
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}
