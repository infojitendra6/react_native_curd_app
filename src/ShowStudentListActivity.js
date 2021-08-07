import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
//https://btupaper.com/jitendra/read.php
export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://btupaper.com/jitendra/ShowAllStudentsList.php?id=4')
      .then((response) => response.json())
      .then((json) =>{
        setData(json.records);
        // console.log(json);
        // console.log(json.records);
        // console.log('jitendra kumar');
      } 
      )
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>

      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text> {item.student_name}, {item.student_class}, {item.student_phone_number}, {item.student_email}</Text>
          )}
        />
      )}

    </View>
  );
};