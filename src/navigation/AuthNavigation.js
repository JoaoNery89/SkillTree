//AuthNavigation.js
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../screens/Login'
import Signup from '../screens/SignUp'

const AuthNavigation = createStackNavigator(
    {
        Login: { screen: Login },
        Signup: { screen: Signup }
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none'
    }
)

export default AuthNavigation