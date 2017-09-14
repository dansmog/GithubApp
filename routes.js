import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import LoginScreen from './src/screens/LoginScreen';
import Welcome from './welcome';


const App = StackNavigator({
    welcome: {
        screen: Welcome,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },
})


export default App