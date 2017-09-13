import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Welcome extends PureComponent {
  render() {
    return (
      <View style={ styles.wrapper }>
          <View style={ styles.titleWrapper }>
            <Text style={ styles.title }>Github App</Text>
          </View>
        <Text style={ styles.subtitle }>Powered By React Native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#27ae60',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
    },
    subtitle: {
        color: 'white',
        fontWeight: '200',
        paddingBottom: 20,
    },
    titleWrapper: {
        justifyContent: 'center',
        flex: 1
    }
})