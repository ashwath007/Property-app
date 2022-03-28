import React from 'react';
import { Text, StyleSheet, View, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function UserType({navigation}) {
  return (
    <View
    style={{
        width:'100%',
        height:'100%',
        backgroundColor:'#EB4D4B'
    }}
    >
        <View
        style={{
            flexDirection:'column',
            marginTop:10,
            marginBottom:10,
            alignSelf:'center'
        }}
        >
            <TouchableOpacity
            onPress={() => navigation.navigate('HomeNavigation')}
            style={{
                backgroundColor:'#fff',
                width: 350,
                height: 50,
                borderRadius:8,
                justifyContent:'center',
                marginBottom:10,
                marginTop:25
            }}
            >
                <Text
                style={{
                    textAlign:'center',
                    fontSize:15,
                    fontWeight:'600',
                    color:'#000'
                }}
                >
                    Property Owner
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{
                backgroundColor:'#fff',
                width: 350,
                height: 50,
                borderRadius:8,
                justifyContent:'center',
                marginBottom:10
            }}
            >
                <Text
                style={{
                    textAlign:'center',
                    fontSize:15,
                    fontWeight:'600',
                    color:'#000'
                }}
                >
                    Property Agent
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{
                backgroundColor:'#fff',
                width: 350,
                height: 50,
                borderRadius:8,
                justifyContent:'center'
            }}
            >
                <Text
                style={{
                    textAlign:'center',
                    fontSize:15,
                    fontWeight:'600',
                    color:'#000'
                }}
                >
                    User
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default UserType