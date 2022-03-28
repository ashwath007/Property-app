
import React,{useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login';
import UserType from './src/pages/UserType';
import HomeNavigation from './src/pages/Navigation/HomeNavigation';

const Stack = createStackNavigator();

const App = () => {
 
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');


  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{ headerShown: false }} name="UserType" component={UserType} />
      <Stack.Screen options={{ headerShown: false }} name="HomeNavigation" component={HomeNavigation} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  loginBox: {
    marginTop:80
  },  
  input: {
 
    marginRight:10,
    marginLeft:10,
    borderColor:'#ffffff',
    borderWidth:2,
    padding:10,
    borderRadius:8,
    color:'#fff',
    marginTop:25
  },  
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
