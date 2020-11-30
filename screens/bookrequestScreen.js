import React, {Component} from 'react';
import {Text, View,TouchableOpacity,StyleSheet,TextInput,Alert,KeyboardAvoidingView } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';
export default class BookRequestScreen  extends Component{
    constructor(){
        super();
        this.state={
            userId:firebase.auth().currentUser.email,
            bookName:'',reasonToRequest:''
        }
    }
  addRequest = (bookname,reason)=>{
  var userId = this.state.userId;
  var randomrequestId = this.createUniqueId()
  db.collection('requested_books').add({
      "user_id":userId,
      "book_name":bookname,
      "reasonToRequest":reason,
       "request_id":randomrequestId
  })
  this.setState({reasonToRequest:'',bookName:''})
  return Alert.alert("book requested successfully!")
  }  
  createUniqueId = ()=>{
      return Math.round().toString(36).substring(7)
  }
render(){
return(
    <View style={{flex:1}}>
        <MyHeader title="Request Books" />
        <KeyboardAvoidingView style={styles.KeyboardStyle}>
        <TextInput
        style={styles.FormTextInput}
        placeholder="enter Bookm name"
        onChangeText={(text)=>{this.setState({bookName:text})}}
        value={this.state.bookName}
        />  
         <TextInput
        style={[styles.FormTextInput],{height:300}}
        multiline
        numberOfLines={8}
        placeholder="why do you need the book"
        onChangeText={(text)=>{this.setState({reasonToRequest:text})}}
        value={this.state.reasonToRequest}
        />
        <TouchableOpacity style={styles.button}><Text>Book Request</Text></TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
)

}

}
const styles = StyleSheet.create({ keyBoardStyle : { flex:1, alignItems:'center', justifyContent:'center' }, formTextInput:{ width:"75%", height:35, alignSelf:'center', borderColor:'#ffab91', borderRadius:10, borderWidth:1, marginTop:20, padding:10, }, button:{ width:"75%", height:50, justifyContent:'center', alignItems:'center', borderRadius:10, backgroundColor:"#ff5722", shadowColor: "#000", shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.44, shadowRadius: 10.32, elevation: 16, marginTop:20 }, } )