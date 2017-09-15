import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Welcome from './welcome';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';





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
    Profile: {
        screen: DashboardScreen,
        navigationOptions: {
            header: null
        }
    }
})


export default App