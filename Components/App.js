import React from 'react';

import SplashPage from './SplashPage';
import LoginRegisterButtons from './SplashPage_Buttons';
import Login from './Login';
import Register from './Register';
import HomeScreen from './HomeScreen';
import FoodDiary from './FoodDiary';
import NavBar from './navigationBar';
import ProgressGraph from './ProgressGraph';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddToDiary from './AddToDiary';

const Stack = createNativeStackNavigator();

var categoryName = '';

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
       

          <Stack.Screen
            name="SplashPage"
            component={SplashPage}
            options={{ title: 'My Home' }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Login' }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ title: 'Register' }}
          />
          <Stack.Screen
            name="SplashPageButtons"
            component={LoginRegisterButtons}
            options={{ title: 'SplashPageButtons' }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: 'HomeScreen' }}
          />

          <Stack.Screen
            name="FoodDiary"
            component={FoodDiary}
            options={{ title: 'Food Diary' }}
          />
          <Stack.Screen
            name="AddToDiary"
            component={AddToDiary}
            options={{ title: 'AddToDiary' }}
            initialParams={{categoryName: ''}}
          />

          {/* <Stack.Screen
            name="NavigationBar"
            component={NavBar}
            options={{ title: 'Navigation' }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
