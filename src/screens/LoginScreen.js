import React, { PureComponent } from "react";
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, StatusBar } from "react-native";

import LoginForm from '../components/Login/LoginForm'

export default class LoginScreen extends PureComponent {
  render() {
    return (
       <KeyboardAvoidingView behaviour="padding" style={ styles.container }>
            <View style={ styles.logoContainer }>
                <Image 
                    style={ styles.logo }
                    source={require('../assets/images/octocat100.png')}
                />
                <Text style={ styles.title }>An app made for Github</Text>
            </View>
            <View style={ styles.formContainer }>
                <LoginForm />
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
