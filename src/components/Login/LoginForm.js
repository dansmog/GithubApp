import React, { PureComponent } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native'

export default class LoginForm extends PureComponent {

    _handleLogin() {
        alert(" Login successful ")
    }
    render(){
        return (
            <View style={ styles.container }>
                <StatusBar
                    barStyle="light-content"
                />
                <TextInput 
                    style={ styles.input }
                    placeholder="username or email"
                    placeholderTextColor="#3498db"
                    returnKeyType="next"
                    onSubmitEditing={ () => this.passwordInput.focus() }
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TextInput 
                    style={ styles.input }
                    placeholder="password"
                    secureTextEntry
                    placeholderTextColor="#3498db"  
                    returnKeyType="go"
                    ref={ input => this.passwordInput = input }                  
                />
                <TouchableOpacity 
                    style={ styles.buttonContainer }
                    onPress={ this._handleLogin } 
                >
                    <Text style={ styles.buttonText }>Login</Text>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', color: '#fff', marginTop: 10 }}>OR</Text>
                <TouchableOpacity 
                    style={ styles.githubButton }
                    onPress={ this._handleLogin } 
                >
                    <Text style={ styles.buttonText }>Login with Github</Text>
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
        backgroundColor: 'rgba(255,255,255, 1)',
        marginBottom:10,
        color: '#3498db',
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
    },
    githubButton: {
        backgroundColor: '#27ae60',
        paddingVertical: 15,
        marginTop: 10
    }
})