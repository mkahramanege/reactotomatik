import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import codePush from 'react-native-code-push';

type Props = {};
export default class App extends Component<Props> {
  guncelle(){
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Runtime güncelleme</Text>
        <Button title='Uygulama Güncelle' onPress={this.guncelle()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
