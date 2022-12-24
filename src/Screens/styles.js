import {StyleSheet, Text, View} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  titleContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '800',
    fontSize: 23,
    shadowOpacity: 1,
    color: 'white',
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
    textDecorationColor: 'black',    
  },
  secondaryContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text:{
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  inputContainer:{
    justifyContent: 'center',
    width: 300,
    height: 50,
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'white',
    shadowOpacity: 0.5,
  },
  input: {
    marginLeft: 10,
  },
  button:{
    marginTop: 20,
    backgroundColor: 'lightgrey',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'dodgerblue',
    shadowOpacity: 1,
  },
  logo:{
    marginTop: 20,
    width: 50,
    height: 50,
    shadowOpacity: 1,
    shadowRadius: 3,
  },

});
