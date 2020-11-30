import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import db from '../config';
import MyHeader from '../components/MyHeader'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
export default class BookDonationScreen  extends Component{
    constructor(){
        super();
        this.state={
            requestedBooksList:[]
        }
        this.requestRef=null
    }
    getRequestedBooksList=()=>{
    this.requestRef = db.collection("requested_books")
    .onSnapshot((snapshot)=>{
        var requestedBooksList = snapshot.docs.map(document=>document.data())
        this.setState({requestedBooksList:requestedBooksList})
    })
    }
    componentDidMount(){
        this.getRequestedBooksList();
    }
    componentWillUnMount(){
        this.requestRef()
    
    }
  keyExtractor=(item,index)=>index.toString()
  renderItem=({item,i})=>{
      return(
          <ListItem
          key={i}
          title={book_name}
          subtitle={item.reason_to_request}
          titleStyle={{color:'black',fontWeight:'bold'}}
          rightElement={<TouchableOpacity><Text style={{color:'#ffff'}}></Text></TouchableOpacity>}
          bottomDivider
          />
      )
  }
render(){
return(
    <View style={{flex:1}}>
        <MyHeader title="Donate Books"/>
     <View style={{flex:1}}>{this.state.requestedBooksList.length =0
     ?(
<View style={styles.subContainer}><Text>List of all Requested Books</Text></View>):(
   <FlatList
   keyExtractor={this.keyExtractor}
   data={this.state.requestedBooksList}
   renderItem={this.renderItem}/> 
)}
     </View>

    </View>
)
}
}
const styles = StyleSheet.create({ subContainer:{ flex:1, fontSize: 20, justifyContent:'center', alignItems:'center' }, button:{ width:100, height:30, justifyContent:'center', alignItems:'center', backgroundColor:"#ff5722", shadowColor: "#000", shadowOffset: { width: 0, height: 8 } } })