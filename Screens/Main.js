import React, { Component } from 'react'
import { StyleSheet, Text, View,Image,ImageBackground, Dimensions,Linking,Alert} from 'react-native';
import { SocialIcon,Header} from 'react-native-elements'
import Modal from 'react-native-modal';
//import { Appbar } from 'react-native-paper';
import {Video} from 'expo-av';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import call from 'react-native-phone-call';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import MapView from 'react-native-maps'
//import Video from 'react-native'
//import playControls from 'react-native-vector-icons/FontAwesome5';


const { width } = Dimensions.get('window');

export default class Main extends Component {
    constructor(){
        super()
        this.state = {
            isstream: false,
            isinfo : false,
            // currentTime:0,
            // duration:0.1,
            // paused:false,
            // overlay:false,
            // isinfoAlert : false,
        }
    }

    call = (phone) => {
        const args = {
          number: phone,
          prompt: false,
        };
        call(args).catch(console.error);
      };

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

    callback(){
        alert("123")
    }
    componentDidMount(){
    }
    render = () => {
        //const {currentTime,duration,paused,overlay} = this.state;
        return (
            <View style={styles.container}>
                <View style = {styles.Top}>
            <Header
                backgroundColor = "#3668ff"
                placement="left"
                //leftComponent={<MyCustomLeftComponent />}
                centerComponent={{ text: 'SS TV Ranipet', style: { color: '#fff',fontSize:22} }}
                rightComponent={<Entypo name="info-with-circle" size={24} color="white" onPress = {() =>{this.setState({isinfo:true})}} />}
            />
                    {!this.state.isstream?<Image  source={require('../Images/Logo.png')} style={{width, height:width*.65}}/>:
                     <View>
                        <Video
                        source = {{uri: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'}}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        shouldPlay
                        isLooping = {false}
                        useNativeControls
                        style={{width, height:width*.65}}
                        />
                        {/* <AntDesign name="closecircle" size={24} color="red" style = {{position:"absolute",top:10,right:5}}/> */}
                        <FontAwesome name="external-link" size={24} color="white" style = {{position:"absolute",top:10,right:10}} onPress = {() =>{Linking.openURL('http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4')}}/>
                     </View>
                    }
                </View>
                <Modal animationIn="slideInUp" animationOut="slideOutDown" onBackdropPress={()=>this.setState({isinfo: false})}
                
                swipeDirection="right" isVisible={this.state.isinfo} style={{marginTop :"50%" ,backgroundColor:'white',maxHeight:Dimensions.get('window').height/3}}>
                    <AntDesign name="closecircle" size={24} color="red" style = {{position:"absolute",top:10,right:5}} onPress={()=>this.setState({isinfo: false})}/>
                        <View style = {{alignItems:'center'}}>
                        <Text style = {{fontSize:20,color:"#fc3d3d",fontWeight:"bold",}}>SS MEDIA NETWORK</Text>
                        <Text style = {{fontSize:16,color:"#e770ff"}}>No:23, Nethaji street,Walajapet,Vellore</Text>
                        </View>
                </Modal>   
                <View style = {styles.Bottom}>
                    <View style = {{flexDirection:"row",backgroundColor:"#fff",padding:20}}>
                        <View style = {{flex:1,alignItems:"center",justifyContent:"center"}}>
                        <MaterialIcons name="live-tv" size={50} color="#292828" onPress = {()=>{this.setState(prevState =>({isstream:!prevState.isstream}))}}/>
                            <Text style = {styles.txtstylesocial}>On Air</Text>  
                        </View>
                        <View style = {{flex:1,alignItems:"center",justifyContent:"center"}}>
                        <Entypo name="facebook-with-circle" size={50} color="#0080ff" onPress = {() =>{Linking.openURL('fb://page/105016241207647');}}/>
                        <Text style = {styles.txtstylesocial}>Facebook</Text>  
                        </View>
                        <View style = {{flex:1,alignItems:"center",justifyContent:"center"}}>
                        <MaterialCommunityIcons name="google-maps" size={50}  color="#37a670" />
                        <Text style = {styles.txtstylesocial}>Location</Text>    
                        </View>
                        <View style = {{flex:1,alignItems:"center",justifyContent:"center"}}>
                        <Ionicons name="md-call" size={50} color="#0080ff" onPress={this.showAlert.bind(this,'7339003295','SS MEDIA NETWORK')}/>
                            <Text style = {styles.txtstylesocial}>Call</Text>  
                        </View>
                    </View>
                    <View style = {{backgroundColor:"white",paddingVertical:20,width:"100%",justifyContent:"center",alignItems:"center",elevation:10,borderTopWidth:.5,borderTopColor:'#5c5c5c'}}>
                        <Text style = {{fontSize:20,color:"#fc3d3d",fontWeight:"bold"}}>SS MEDIA NETWORK</Text>
                        <Text style = {{fontSize:16,color:"#e770ff"}}>For Advertisements : 7339003295</Text>
                        <Text style = {{fontSize:16,color:"#e770ff"}}>No:23, Nethaji street,Walajapet,Vellore</Text>
                    </View>
                    <View style = {{backgroundColor:"#4aa4ff",flexDirection:"row",paddingHorizontal:15,paddingVertical:20,width:"100%",justifyContent:"center",alignItems:"center"}}>
                        <View style = {{borderRightColor:"black",borderRightWidth:1,paddingRight : 10}}>
                        <View style = {{flexDirection:"row",alignItems:"center"}} >
                            <Ionicons name="md-call" size={13} color="white" style = {{paddingRight:5}}/>
                            <Text style = {styles.txtcall} onPress = {this.showAlert.bind(this,'9894530758','G Boobalan')}>G Boobalan   : 9894530758</Text>
                        </View>
                        <View style = {{flexDirection:"row",alignItems:"center"}} >
                            <Ionicons name="md-call" size={13} color="white" style = {{paddingRight:5}}/>
                            <Text style = {styles.txtcall} onPress = {this.showAlert.bind(this,'9488438415','K Saravanan')}>K Saravanan : 9488438415</Text>
                        </View>
                        </View>
                        <View style = {{paddingLeft : 10}}>
                        <View style = {{flexDirection:"row",alignItems:"center"}} >
                            <Ionicons name="md-mail" size={13} color="white" style = {{paddingRight:5}}/>
                            <Text style = {styles.txtcall}>sstvwalaja@gmail.com</Text>
                        </View>
                        <View style = {{flexDirection:"row",alignItems:"center"}} >
                            <Entypo name="network" size={13} color="white" style = {{paddingRight:5}}/>
                            <Text style = {styles.txtcall}>www.sstvwalaja.in</Text>
                        </View>
                        </View>
                    </View>
                </View>
            </View>
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
        alignItems:"center",
    },
    txtstyle:{
        fontSize:14,
        color:"black",
    },
    txtcall:{
        fontSize:13,
        color:"white",
    },
    txtstylesocial:{
        fontSize:14,
        color:"black",
    }
  });

//AIzaSyDucFGyORP1XLXKCN9gBNqvrPTBOqAvgGw
