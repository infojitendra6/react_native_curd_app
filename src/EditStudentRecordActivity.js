import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ActivityIndicator } from 'react-native';
import SweetAlert from 'react-native-sweet-alert';
//https://btupaper.com/jitendra/read.php
export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({
    id: "",
    student_class: "",
    student_name: "",
    student_phone_number: "",
    student_email: ""
  });
  const [usera, setUsera] = useState({});
  
  useEffect(() => {
    fetch('https://btupaper.com/jitendra/ShowAllStudentsList.php?id=4')
      .then((response) => response.json())
      .then((json) =>{
        // setUsera(json.records);
         setUser(json.records[0]);
          setUsera(json.records[0]);
        console.log(usera);
        //console.log(json);
      } 
      )
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
    
  const { student_class, student_name, student_phone_number, student_email } = usera;
    // console.log(usera);
    //  console.log(`this is test data ${student_class}`);

  const onInputChange = e => {
    setUsera({ ...usera, [e.target.name]: e.target.value });
  };

  const InsertStudentRecordsToServer = () =>{

    fetch('https://btupaper.com/jitendra/InsertStudentData.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      student_name : student_name,
      student_class :student_class ,
      student_phone_number : student_phone_number,
      student_email: student_email

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
  value={student_name}
  name="student_name"
  onChange={e => onInputChange(e)}
  underlineColorAndroid='transparent'
  style={styles.TextInputStyleClass}
/>

<TextInput
 value={student_class}
 name="student_class"
  placeholder="Enter Student Class"
  onChange={e => onInputChange(e)}
  underlineColorAndroid='transparent'
  style={styles.TextInputStyleClass}
/>

<TextInput
  placeholder="Enter Student Phone Number"
  value={student_phone_number}
  name="student_phone_number"
  onChange={e => onInputChange(e)}
  underlineColorAndroid='transparent'
  style={styles.TextInputStyleClass}
/>

<TextInput

  placeholder="Enter Student Email"
  value={student_email}
  name="student_email"
  onChange={e => onInputChange(e)}
  // onChangeText={text => setEmail(text)}
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