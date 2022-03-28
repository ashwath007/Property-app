import React from 'react';
import {View, Text, StyleSheet,Image,TouchableOpacity, ScrollView} from 'react-native';

const Home = () => {

    const DATA = [
        {
            id:1,
            image:"https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",
            name: "Property One",
            location: "Chennai",
            type: "Home"
        },
        {
            id:2,
            name: "Property Two",
            image:"https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",

            location: "Mumbai",
            type: "Home"
        },
        {
            id:3,
            name: "Property Three",
            image:"https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",

            location: "Banglore",
            type: "Home"
        },
        {
            id:4,
            name: "Property Four",
            image:"https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",

            location: "Kerala",
            type: "Home"
        },
        {
            id:5,
            name: "Property Five",
            image:"https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format",

            location: "Pune",
            type: "Home"
        },
    ]


    return(
        <View
        style={{
            width:'100%',
            height:'100%',
            backgroundColor:'#ffffff'
        }}
        >
            <Text
            style={{
                textAlign: 'center',
                marginTop:15,
                fontSize:15,
                color:'#000',
                fontWeight:'700'
            }}
            >
                All Properties
            </Text>
            <ScrollView>

            {DATA && DATA.map((item, index) => {
                return(
                    <TouchableOpacity disabled={true}>

                        <View
                        style={{
                            flexDirection:'column',
                            marginTop:12
                        
                        }}
                        >
                            <View
                            style={{
                                height:150,
                                width:'89%',
                                backgroundColor:'#FFFFFF',
                                marginBottom:20,
                                alignSelf:'center',
                                borderRadius:8,
                                borderColor:'#A0A0A0',
                                borderWidth:1,
                                flexDirection:'row'
                            }}
                            >
                                <Image
                                style={{
                                    height:100,
                                    width:100,
                                    borderRadius:12,
                                    marginTop:20,
                                    marginLeft:15
                                }}
                                source={{
                                    uri: item.image
                                  }}
                            />
                            <View
                            style={{
                                flexDirection:'column'
                            }}
                            >
                            <Text
                                style={{
                                    marginLeft:10,
                                    marginTop:25,
                                    fontWeight:'700',
                                    color:'#000',
                                    fontSize:17
                                }}
                                >
                                    {item.name}
                                </Text>
                            <Text
                                style={{
                                    marginLeft:10,
                                    marginTop:10,
                                    fontWeight:'500',
                                    color:'#000',
                                    fontSize:12
                                }}
                                >
                                    {item.location}
                                </Text>
                            <Text
                                style={{
                                    marginLeft:10,
                                    marginTop:10,
                                    fontWeight:'500',
                                    color:'#4DD637',
                                    fontSize:12
                                }}
                                >
                                    {item.type}
                                </Text>
                            </View>
                                <View
                                style={{
                                    backgroundColor:'#FF6666',
                                    width:80,
                                    height:40,
                                    marginTop:100,
                                    marginLeft:25,
                                    justifyContent:'center',
                                    textAlign:'center',
                                    borderRadius:50
                                }}
                                >
                                    <Text
                                    style={{
                                        color:'white',
                                        textAlign:'center',
                                        fontSize:16
                                    }}
                                    >
                                        Book
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            })

            }
            </ScrollView>
        </View>
    )
}


export default Home;