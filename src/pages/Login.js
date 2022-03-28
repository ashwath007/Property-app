import React,{useState} from 'react'
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
  
function Login({navigation }) {

    const [name, setname] = useState('');
    const [password, setpassword] = useState('');

    return (
        <SafeAreaView style={{
          backgroundColor:'#FF6263',
          height:'100%',
          width:'100%'
        }}>
          <View style={styles.loginBox}>
            <Text
            style={{
              textAlign:'center',
              fontSize:32,
              marginTop:50,
              color:'#FFFFFF',
              fontWeight:'700'
            }}
           
            >
              Login
            </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the phone"
            onChangeText={(e) => setname(e.target.value)}
            value={name}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter the password"
            onChangeText={(e) => setpassword(e.target.value)}
            value={password}
          />
          <TouchableOpacity
           onPress={() => navigation.navigate('UserType')}
          style={{
            alignSelf:'center',
            backgroundColor:'#fff',
            padding:10,
            borderRadius:50,
            borderColor:'#DE4839',
            width:120,
            marginTop:25
          }}>
            <Text
            style={{
              textAlign:'center',
              fontSize:15,
              color:'#000'
            }}
            >
              Login
            </Text>
          </TouchableOpacity>
          </View>
          </SafeAreaView>
      );
}

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


export default Login