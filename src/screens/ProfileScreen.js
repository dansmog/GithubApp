import React, { PureComponent } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, StatusBar } from "react-native";


export default class ProfileScreen extends PureComponent {
  render() {
    return (
       <KeyboardAvoidingView behaviour="padding" style={ styles.container }>
            <View style={ styles.logoContainer }>
                <Text style={ styles.title }>An app made for Github</Text>
            </View>
            <View style={ styles.formContainer }>
            </View>
        </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
    opacity: 0.9
  }
  
});
