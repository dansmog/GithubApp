import React, { PureComponent } from "react";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from "react-native";

export default class Welcome extends PureComponent {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ styles.wrapper }>
          <StatusBar
            backgroundColor="#3498db"
            barStyle="default"
          />
          <View style={ styles.titleWrapper }>
            <Text style={ styles.title }>Github App</Text>
          </View>
          <TouchableOpacity 
            style={ styles.githubButton }
            onPress={ () => navigate('Login') } 
            >
            <Text style={ styles.buttonText }>Lets Do this</Text>
          </TouchableOpacity>
        <Text style={ styles.subtitle }>Powered By React Native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#3498db',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: '700',
    },
    subtitle: {
        color: 'white',
        fontWeight: '200',
        paddingBottom: 20,
    },
    titleWrapper: {
        justifyContent: 'center',
        flex: 1
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700'
    },
    githubButton: {
        backgroundColor: '#27ae60',
        paddingVertical: 15,
        width: '80%',
        marginBottom: 20
    }

})