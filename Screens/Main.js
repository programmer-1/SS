import React, { Component } from 'react'
import { StyleSheet, Text, View,Image,ImageBackground, Dimensions } from 'react-native';
import { SocialIcon} from 'react-native-elements'
import { Appbar } from 'react-native-paper';
import { Audio,Video} from 'expo-av';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import Video from 'react-native'
//import playControls from 'react-native-vector-icons/FontAwesome5';


const { width } = Dimensions.get('window');

export default class Main extends Component {
    constructor(){
        super()
        this.state = {
            isstream: false,
            currentTime:0,
            duration:0.1,
            paused:false,
            overlay:false
        }
    }
    componentDidMount(){
    }
    render = () => {
        const {currentTime,duration,paused,overlay} = this.state;
        return (
            <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="SS TV"/>
            </Appbar.Header>
                <View style = {styles.Top}>
                    {!this.state.isstream?<Image  source={require('../Images/Logo.png')} style={{width, height:width*.65}}/>:
                     <Video
                     source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                     rate={1.0}
                     volume={1.0}
                     isMuted={false}
                     resizeMode="cover"
                     shouldPlay
                     isLooping
                     style={{width, height:width*.65}}
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
        borderTopColor:"black",
        borderBottomColor:"black",
        borderTopWidth : 1,
        borderBottomWidth:1,
        borderLeftColor : 'black',
        borderRightColor:'black',
        borderLeftWidth:1,
        borderRightWidth:1,
        backgroundColor:"black"
    },
    Bottom:{
        flex:2,
        alignItems:"center"
    }
  });

  // source = {{uri: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'}}
                        // rate = {1.0}
                        // volume = {1.0}
                        // isMuted = {false}
                        // resizeMode = "cover"
                        // shouldPlay
                        // isLooping
                        // inFullscreen={true}
