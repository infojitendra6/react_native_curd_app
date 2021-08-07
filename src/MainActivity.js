import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ActivityIndicator } from 'react-native';
import SweetAlert from 'react-native-sweet-alert';
//https://btupaper.com/jitendra/read.php
export default App = () => {
  const [name, setName] = useState('aaa');
  const [abc, setAbc] = useState('aaa');
  const [mobile, setMobile] = useState('aaa');
  const [email, setEmail] = useState('aaa');
   
  const InsertStudentRecordsToServer = () =>{

    fetch('https://btupaper.com/jitendra/InsertStudentData.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      student_name : name,
      student_class : abc,
      student_phone_number : mobile,
      student_email: email

    })

    }).then((response) => response.json())
        .then((responseJson) => {

          // Showing response message coming from server after inserting records.
          // Alert.alert(responseJson);
          // Alert.alert(
          //   "Alert Title",
          //   "Record succesfully inserted",
          //   [
          //     {
          //       text: "Cancel",
          //       onPress: () => console.log("Cancel Pressed"),
          //       style: "cancel"
          //     },
          //     { text: "OK", onPress: () => console.log("OK Pressed") }
          //   ]
          // );

          SweetAlert.showAlertWithOptions({
            title: 'hhhii ',
            subTitle: 'jjjj',
            confirmButtonTitle: 'OK',
            confirmButtonColor: '#000',
            otherButtonTitle: 'Cancel',
            otherButtonColor: '#dedede',
            style: 'success',
            cancellable: true
          },
            callback => console.log('callback'));

        }).catch((error) => {
          console.error(error);
        });

}


  return (
    
<View style={styles.MainContainer}>
  
<Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Student Registration Form </Text>
<TextInput
  
  placeholder="Enter Student Name"
  onChangeText={text => setName(text)}
  underlineColorAndroid='transparent'
  style={styles.TextInputStyleClass}
/>

<TextInput
  
  placeholder="Enter Student Class"
  onChangeText={text => setAbc(text)}
  underlineColorAndroid='transparent'
  style={styles.TextInputStyleClass}
/>

<TextInput
  placeholder="Enter Student Phone Number"
  onChangeText={text => setMobile(text)}
  underlineColorAndroid='transparent'
  style={styles.TextInputStyleClass}
/>

<TextInput

  placeholder="Enter Student Email"
  onChangeText={text => setEmail(text)}
  underlineColorAndroid='transparent'
  style={styles.TextInputStyleClass}
/>

<TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={InsertStudentRecordsToServer} >

 <Text style={styles.TextStyle}> INSERT STUDENT RECORD </Text>

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