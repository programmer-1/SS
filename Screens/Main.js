import React, { Component } from 'react'
import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native';
import { SocialIcon } from 'react-native-elements'
import { Appbar } from 'react-native-paper';
import { Audio, Video } from 'expo-av';


export default class Main extends Component {
    constructor(){
        super()
        this.state = {
            isstream: false,
        }
    }
    render() {
        return (
            <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="SS Tv" subtitle="Subtitle"/>
            </Appbar.Header>
                <View style = {styles.Top}>
                    {!this.state.isstream?<Image  source={require('../Images/Logo.png')} style={{width: "100%", height: "100%"}}/>:<Video
                        source = {{uri: "../Images/video.mp4"}}
                        rate = {1.0}
                        volume = {1.0}
                        isMuted = {false}
                        resizeMode = "cover"
                        shouldPlay
                        isLooping
                        style = {{width: "100%", height: "100%"}}
                    />
                    }
                </View>
                <View style = {styles.Bottom}>
                <View style = {{flexDirection:"row",flex:1.2,justifyContent:"space-around"}}>
                    <View style = {{flex:1,alignItems:"center",justifyContent:"flex-end"}}>
                        <SocialIcon
                        type="twitter"
                        onPress={() => {
                            this.setState(prevState =>({
                                isstream : !prevState.isstream
                            }))
                        }}
                        />
                        <Text>On Air</Text>  
                    </View> 
                    <View style = {{flex:1,alignItems:"center",justifyContent:"flex-end"}}>
                    <SocialIcon
                    type="facebook"
                    onPress={() => {
                        alert('FaceBook');
                    }}
                    />
                    <Text>Facebook</Text>  
                    </View>
                    <View style = {{flex:1,alignItems:"center",justifyContent:"flex-end"}}>
                    <SocialIcon
                    type="youtube"
                    title = "youtube"
                    onPress={() => {
                        alert('YouTube');
                    }}
                    />
                    <Text>You Tube</Text>    
                    </View>
                    </View>
                    <View style = {{flexDirection:"row",flex:1,justifyContent:"space-around",marginTop:70}}>
                    <View style = {{flex:1,alignItems:"center",justifyContent:"flex-start"}}>
                    <SocialIcon
                        type="twitter"
                        onPress={() => {
                            alert('Twitter');
                        }}
                        />
                        <Text>Twitter</Text>  
                    </View> 
                    <View style = {{flex:1,alignItems:"center",justifyContent:"flex-start"}}>
                    <SocialIcon
                    type="facebook"
                    onPress={() => {
                        alert('FaceBook');
                    }}
                    />
                    <Text>Facebook</Text>  
                    </View>
                    <View style = {{flex:1,alignItems:"center",justifyContent:"flex-start"}}>
                    <SocialIcon
                    type="youtube"
                    title = "youtube"
                    onPress={() => {
                        alert('YouTube');
                    }}
                    />
                    <Text>You Tube</Text>  
                    </View>
                    <View style = {{flex:1,alignItems:"center",justifyContent:"flex-start"}}>
                    <SocialIcon
                    type="instagram"
                    onPress={() => {
                        alert('Instagram');
                    }}
                    />
                    <Text>Instagram</Text>
                    </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    Top:{
        flex:1,
    },
    Bottom:{
        flex:2,
        alignItems:"center"
    }
  });
