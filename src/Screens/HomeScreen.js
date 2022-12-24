import React from 'react';
import {Button, Text, TextInput, View, TouchableOpacity, Linking, Image, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SetName} from '../Redux/action';
import {SetAge} from '../Redux/action';
import {styles} from './styles'

export default HomeScreen = ({navigation}) => {
  
  const goDetailsScreen = () => {
    if (!GeneralResponse.name && GeneralResponse.age) {
      alert('Please Enter name')
    }
    else if (GeneralResponse.name && !GeneralResponse.age) {
      alert('Please Enter Age')
    }
    else if (!GeneralResponse.name && !GeneralResponse.age) {
      alert('Please Fill All Fields')
    }
    else
    navigation.navigate('DetailsScreen');
  };

  const dispatch = useDispatch()
  const {GeneralResponse} = useSelector(state=>state)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> Welcome to Home Screen </Text>
      </View>
      <View style={styles.secondaryContainer}>
        <Text style={styles.text}> Name: {GeneralResponse.name} Age: {GeneralResponse.age} </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={GeneralResponse.name}
            onChangeText={(name)=>dispatch(SetName(name))}
            />
        </View>  
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType='numeric'
            style={styles.input}
            placeholder="Enter your age"
            value={GeneralResponse.age}
            onChangeText={(age)=>dispatch(SetAge(age))}
          />
        </View> 
        <View style={styles.button}>
          <Button
            title="Click to Go Details"
            onPress={goDetailsScreen}
            />
        </View>
          <View>
            <TouchableOpacity activeOpacity={0.8} onPress={() => {Linking.openURL('https://linkedin.com/in/harun-sari')}}>
              <Image style={styles.logo} source={require('../Assets/linkedin.png')} />
            </TouchableOpacity>
          </View>
      </View>

    </SafeAreaView>
  );
};
