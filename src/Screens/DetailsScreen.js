import React from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import {styles} from './styles'

export default DetailsScreen =() => {
    const navigation = useNavigation()
    const {GeneralResponse} = useSelector(state=>state)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome to DetailsScreen</Text>
      </View>
      <View style={styles.secondaryContainer}>
        <Text style={styles.text}>Dear {GeneralResponse.name}, your age is {GeneralResponse.age}</Text>
        <View style={styles.button}>
          <Button title='Go Back' onPress={navigation.goBack}/> 
        </View>
      </View>
    </SafeAreaView>
  )
}
