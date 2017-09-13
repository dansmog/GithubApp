import React, { PureComponent } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'

export default class LoginForm extends PureComponent {
    render(){
        return (
            <View style={ styles.container }>
                <TextInput 
                    style={ styles.input }
                    placeholder="username or email"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    returnKeyType="next"
                />
                <TextInput 
                    style={ styles.input }
                    placeholder="password"
                    secureTextEntry
                    placeholderTextColor="rgba(255,255,255,0.7)"  
                    returnKeyType="go"                  
                />
                <TouchableOpacity style={ styles.buttonContainer }>
                    <Text style={ styles.buttonText }>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255, 0.2)',
        marginBottom:10,
        color: '#fff',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700'
    }
})