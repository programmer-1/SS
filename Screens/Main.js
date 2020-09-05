import React, { Component } from 'react'
import { StyleSheet, Text, View,Image,ImageBackground,Dimensions, Platform, PixelRatio,Linking,Alert,SafeAreaView ,TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import { SocialIcon,Header, normalize} from 'react-native-elements'
import Modal from 'react-native-modal';
//import { Appbar } from 'react-native-paper';
import {Video} from 'expo-av';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import call from 'react-native-phone-call';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
//import KSYVideo from "react-native-ksyvideo";
//import MapView from 'react-native-maps'
//import Video from 'react-native'
//import Video from 'react-native-video';
//import playControls from 'react-native-vector-icons/FontAwesome5';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');

const scale = SCREEN_WIDTH / 392; 
const scaleheight = SCREEN_HEIGHT / 774;  

export default class Main extends Component {
    constructor(){
        super()
        this.state = {
            isstream: false,
            isinfo : false,
            isnavtoplayer:false,
             paused:false,
        }
    }

    call = (phone) => {
        const args = {
          number: phone,
          prompt: false,
        };
        call(args).catch(console.error);
      };

      normalize = (size,flag) => {
          if(flag == "width"){
            const newSize = size * scale
          }
        else{
            const newSize = size * scaleheight
        }
        if (Platform.OS === 'ios') {
          return Math.round(PixelRatio.roundToNearestPixel(newSize))
        } else {
          return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
        }
      }

      showAlert(phone,name) {  
        Alert.alert(  
            'CALL',  
            'Call '+name+'?',  
            [  
                {  
                    text: 'Cancel', 
                    style: 'cancel',  
                },  
                {text: 'OK', onPress: () => {this.call(phone)}},
            ]  
        );  
    }  

    mail = (mail) =>{
        Linking.openURL("mailto:"+mail+"?subject=SS_TV Feedback ")
    }

    showMailAlert = (id) =>{
        Alert.alert(  
            'FEEDBACK',  
            'Mail to SSTV?',  
            [  
                {  
                    text: 'Cancel', 
                    style: 'cancel',  
                },  
                {text: 'OK', onPress: () => {this.mail(id)}},
            ]  
        ); 
    }

    timeout = () => {
        this.setState(prevState =>({
            isnavtoplayer: !prevState.isnavtoplayer
         }),() =>{
             this.timeoutHandle = setTimeout(()=>{
            if(this.state.isnavtoplayer === true)
                this.setState({isnavtoplayer:false})
        }, 3000);})
    }

     location = () =>{
Linking.openURL('https://goo.gl/maps/ZVhVyYTiEA5KcAMKA');
    }

    callback(){
        alert("123")
    }
    componentDidMount(){
    }
    render = () => {
        //const {currentTime,duration,paused,overlay} = this.state;
        return (
            <View style={{backgroundColor:'#c9daf5',flex:1}} >
            <Header
                backgroundColor = "#3668ff"
                placement="left"
                //leftComponent={<Image  source={require('../Images/spla.png')} style={{width:normalize(70),height:normalize(35)}}/>}
                centerComponent={{ text: 'SS TV Ranipet', style: { color: '#fff',fontSize:normalize(18,'width')} }}
                rightComponent={<Entypo name="info-with-circle" size={22} color="white" onPress = {() =>{this.setState({isinfo:true})}} />}
            />
            <View style = {{alignItems:"center",marginVertical:"5%"}}>
                    <Image  source={require('../Images/spla.png')} style={{width:normalize(100,'width'),height:normalize(50,'height')}}/>
                </View>
            <View style={styles.container}>
                <View style = {styles.Top}>
                     <TouchableWithoutFeedback onPress = {this.timeout}>
                         <View>
                        <Video
                        source = {{uri:'https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4'}}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode='contain'
                        shouldPlay = {false}
                        isLooping = {false}
                        useNativeControls
                        usePoster
                        posterSource = {{uri: '../Images/loading.png'}}
                        style={{width, height:width*.65}}
                        />
                        {this.state.isnavtoplayer?<FontAwesome name="external-link" size={22} color="white" style = {{position:"absolute",top:10,right:10}} onPress = {() =>{Linking.openURL('https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8')}}/>:null}
                        
                    <TouchableOpacity style = {{flexDirection:'row',backgroundColor:"#0264f7",paddingVertical:normalize(15,'height'),justifyContent:"center",paddingHorizontal:normalize(10,"width"),alignItems:"center"}} onPress={this.showAlert.bind(this,'7339003295','SS TV LIVE')}>
                    <Feather name="phone-call" size={normalize(22,'height')} color="#00f545" />
                        <Text style = {{fontSize:normalize(20,'width'),color:"#fc3d3d",fontWeight:"bold",paddingLeft : normalize(10,'height')}}>SS TV Live : 7339003295</Text>
                    </TouchableOpacity>
                        </View>
                     </TouchableWithoutFeedback>
                </View>
                <Modal animationIn="slideInUp" animationOut="slideOutDown" onBackdropPress={()=>this.setState({isinfo: false})}
                
                swipeDirection="right" isVisible={this.state.isinfo} style={{marginTop :"50%" ,backgroundColor:'white',maxHeight:Dimensions.get('window').height/3}}>
                    <AntDesign name="closecircle" size={normalize(24,'width')} color="red" style = {{position:"absolute",top:10,right:5}} onPress={()=>this.setState({isinfo: false})}/>
                        <View style = {{alignItems:'center'}}>
                        <Text style = {{fontSize:normalize(18,'width'),color:"#fc3d3d",fontWeight:"bold",}}>SS TV WALAJA NETWORK</Text>
                        <Text style = {{fontSize:normalize(13,'width'),color:"#e770ff"}}>No:23, Nethaji street,Walajapet,Vellore</Text>
                        </View>
                </Modal>   
                <View style = {styles.Bottom}>
                    <View style = {{flexDirection:"row",backgroundColor:"#fff",padding:normalize(15,'height'),elevation:10}}>
                        {/* <View style = {{flex:1,alignItems:"center",justifyContent:"center"}}>
                        <MaterialIcons name="live-tv" size={normalize(45)} color="#292828" onPress = {()=>{this.setState(prevState =>({isstream:!prevState.isstream}))}}/>
                            <Text style = {styles.txtstylesocial}>On Air</Text>  
                        </View> */}
                        <View style = {{flex:1,alignItems:"center",justifyContent:"center"}}>
                        <Entypo name="facebook-with-circle" size={normalize(45,'height')} color="#0080ff" onPress = {() =>{Linking.openURL('fb://page/105016241207647');}}/>
                        <Text style = {styles.txtstylesocial}>Facebook</Text>  
                        </View>
                        <View style = {{flex:1,alignItems:"center",justifyContent:"center"}}>
                        <FontAwesome5 name="whatsapp-square" size={normalize(45,'height')} color="#25D366" onPress = {() =>{  Linking.openURL('whatsapp://send?phone=+917339003295&text=Hi SS WALAJA NETWORK')}}/>
                        <Text style = {styles.txtstylesocial}>Whatsapp</Text>  
                        </View>
                        <View style = {{flex:1,alignItems:"center",justifyContent:"center"}}>
                        <FontAwesome5 name="globe" size={normalize(45,'height')} color="#0080ff" />
                        <Text style = {styles.txtstylesocial}>Website</Text>    
                        </View>
                        <View style = {{flex:1,alignItems:"center",justifyContent:"center"}}>
                        <Ionicons name="md-call" size={normalize(45,'height')} color="#0080ff" onPress={this.showAlert.bind(this,'7339003295','SS TV MEDIA NETWORK')}/>
                            <Text style = {styles.txtstylesocial}>Call</Text>  
                        </View>
                    </View>
                    <View style = {{backgroundColor:"#4aa4ff",flexDirection:"row",paddingHorizontal:10,paddingVertical:normalize(15,'height'),width:"100%",justifyContent:"center",alignItems:"center"}}>
                        <View style = {{borderRightColor:"black",borderRightWidth:1,paddingRight : 10}}>
                        <View style = {{flexDirection:"row",alignItems:"center"}} >
                            <Ionicons name="md-call" size={normalize(10,'width')} color="white" style = {{paddingRight:5}}/>
                            <Text style = {styles.txtcall} onPress = {this.showAlert.bind(this,'9894530758','G Boobalan')}>G Boobalan   : 9894530758</Text>
                        </View>
                        <View style = {{flexDirection:"row",alignItems:"center"}} >
                            <Ionicons name="md-call" size={normalize(10,'width')} color="white" style = {{paddingRight:5}}/>
                            <Text style = {styles.txtcall} onPress = {this.showAlert.bind(this,'9488438415','K Saravanan')}>K Saravanan : 9488438415</Text>
                        </View>
                        </View>
                        <View style = {{paddingLeft : 10}}>
                        <View style = {{flexDirection:"row",alignItems:"center"}} >
                            <Ionicons name="md-mail" size={normalize(10,'width')} color="white" style = {{paddingRight:5}}/>
                            <Text style = {styles.txtcall} onPress = {this.showMailAlert.bind(this,'sstvwalaja@gmail.com')}>sstvwalaja@gmail.com</Text>
                        </View>
                        <View style = {{flexDirection:"row",alignItems:"center"}} >
                            <Entypo name="network" size={normalize(10,'width')} color="white" style = {{paddingRight:5}}/>
                            <Text style = {styles.txtcall}>www.sstvwalaja.in</Text>
                        </View>
                        </View>
                    </View>
                </View>
            </View>
            </ View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-between"
    },
    Top:{
        borderTopColor:"black",
        borderTopWidth : 1,
        backgroundColor:"black",
    },
    backgroundVideo: {
        width,
        height:width*.65
      },
    Bottom:{
        alignItems:"center",
    },
    txtstyle:{
        fontSize:normalize(14,'width'),
        color:"black",
    },
    txtcall:{
        fontSize:normalize(10,'width'),
        color:"white",
    },
    txtstylesocial:{
        fontSize:normalize(10,'width'),
        color:"black",
    }
  });
