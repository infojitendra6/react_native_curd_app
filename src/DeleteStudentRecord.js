import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity,  ActivityIndicator } from 'react-native';
import SweetAlert from 'react-native-sweet-alert';
export default App = () => {
  const [id, setId] = useState();
 const DeleteStudentRecord = () =>{
          
    fetch('https://btupaper.com/jitendra/DeleteStudentRecord.php', {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id : id
    })
  
    }).then((response) => response.json())
    .then((responseJson) => {
  
      // Showing response message coming from server after inserting records.
     // Alert.alert(responseJson);

     Alert.alert(
      "Alert Title",
      "Record succesfully inserted",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
    }).catch((error) => {
       console.error(error);
    });

   // this.props.navigation.navigate('First');

}



  return (
    

    <View style={styles.MainContainer}>
     
    <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Edit Student Record Form </Text>

    <TextInput
      
      placeholder="Enter ID  for delete"
      // value={id}
      onChangeText={text => setId(text)}
      underlineColorAndroid='transparent'
      style={styles.TextInputStyleClass}
    />

   <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={DeleteStudentRecord} >
      <Text style={styles.TextStyle}> DELETE CURRENT RECORD </Text>

   </TouchableOpacity>


</View>


  );
};



const styles = StyleSheet.create({

  MainContainer :{

    alignItems: 'center',
    flex:1,
    paddingTop: 30,
    backgroundColor: '#fff'

  },

  MainContainer_For_Show_StudentList_Activity :{
    
    flex:1,
    paddingTop: (Platform.OS == 'ios') ? 20 : 0,
    marginLeft: 5,
    marginRight: 5
    
    },

  TextInputStyleClass: {

  textAlign: 'center',
  width: '90%',
  marginBottom: 7,
  height: 40,
  borderWidth: 1,
  borderColor: '#FF5722',
  borderRadius: 5 ,

  },

  TouchableOpacityStyle: {

    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
    marginBottom:7,
    width: '90%',
    backgroundColor: '#00BCD4'

  },

  TextStyle:{
    color:'#fff',
    textAlign:'center',
  },

  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  }

});