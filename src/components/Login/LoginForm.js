import React, { PureComponent } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native'

export default class LoginForm extends PureComponent {
    render(){
        console.log(this.props.navigate)
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
                    ref={ username => this.emailInput = username }
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                />
                <TextInput 
                    style={ styles.input }
                    placeholder="password"
                    secureTextEntry
                    placeholderTextColor="#3498db"  
                    returnKeyType="go"
                    ref={ pass => this.passwordInput = pass }  
                    underlineColorAndroid="transparent"                
                />
                <TouchableOpacity 
                    style={ styles.buttonContainer }
                    onPress={ () => this.props.navigate('Profile')  } 
                >
                    <Text style={ styles.buttonText }>Login</Text>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', color: '#fff', marginTop: 10 }}>OR</Text>
                <TouchableOpacity 
                    style={ styles.githubButton }
                    onPress={ () => this.props.navigate('Profile') } 
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