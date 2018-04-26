import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Button,
  Image,
  TextInput,
} from 'react-native';
import { Constants } from 'expo';

var images = [
  'https://raw.githubusercontent.com/Agora-SE2/React-Native/master/images/tiburoso1.jpg',
  'https://raw.githubusercontent.com/Agora-SE2/React-Native/master/images/tiburoso2.jpg',
  'https://raw.githubusercontent.com/Agora-SE2/React-Native/master/images/tiburoso3.jpg',
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 0,
      title: 'Tiburoso: 100% real, 1000% letal',
    };
  }

  goBack() {
    if (this.state.image > 0) {
      this.setState({ image: this.state.image - 1 });
    }
  }

  upgrade() {
    if (this.state.image < 2) {
      this.setState({ image: this.state.image + 1 });
    }
  }

  render() {
    return (
      <ScrollView>

        <View style={styles.container}>
          <View style={styles.sectionContainer}>
            <Text>{this.state.title}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={styles.sectionContainer}>
              <Button
                onPress={this.goBack.bind(this)}
                title="Go back :/"
                color={colors[0]}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Button
                onPress={this.upgrade.bind(this)}
                title="Upgrade! :D"
                color={colors[1]}
              />
            </View>
          </View>

          <Image
            source={{ uri: images[this.state.image] }}
            style={styles.image}
          />
          <View style={styles.sectionContainer}>
            <TextInput
              style={styles.inputText}
              onChangeText={text => this.setState({ title: text })}
              value={this.state.title}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

var colors = ['darkorange', 'deepskyblue'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  image: {
    width: 400,
    height: 400,
  },
  sectionContainer: {
    padding: 40,
  },
  inputText: {
    height: 40,
    borderColor: colors[1],
    borderWidth: 3,
    width: 200,
  },
});