import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, Platform, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import Keys from './keys';
import axios from 'react-native-axios';


const {WEB_API_URL, API_UPDATE_TEST} = Keys;

const UpdateTests = ({navigation}) => {
  
  const [text, setText] = useState('')
  const {control, handleSubmit, reset} = useForm();

  const route = useRoute();

  const{bloodPressure,respiratoryRate,oxygenLevel,heartbeat} = route.params.record;

  const onAdd = async (data) => {
    console.log("in Update Tests");
    const ADD_UPD_URL = `${WEB_API_URL}${API_UPDATE_TEST}${route.params.record._id}`;
    console.log('data:', data)
  
    await axios.put(ADD_UPD_URL,{
      
      bloodPressure: data.bloodP,
      respiratoryRate: data.resRate,
      oxygenLevel: data.oxygen,
      heartbeat: data.heartbeat,

    }).then(response => {
        alert('Successfully Updated');
        console.log(response.data);
  
    }).catch(err => {
      if(err.message === 'Network Error' && !err.response){
        alert('Make sure API is running')
      }
      
      return;
    })
    reset();
    
  }

  const onCancel = () => {
    reset();
  }

  return (


    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.title}>Update Patient Record</Text>
      </View>
      <ScrollView style={{ width: '100%' }}>
        <Text style={styles.heading}>Blood Pressure</Text>
        <Controller defaultValue={bloodPressure} control={control}
           rules={{required:true}}
           render={({field:{onChange, value}, fieldState:{error}}) => (
            <>
            <TextInput style = {styles.Input}
                         defaultValue={bloodPressure} onChangeText={onChange}
                         value={value}/>
            {error && (<Text style={{color:'red', alignSelf:'stretch', marginLeft:22, marginTop:4}}>field is required</Text>)}
            </>
           )}
           name="bloodP"
           ></Controller>
        <Text style={styles.heading}>Respiratory Rate</Text>
        <Controller defaultValue={respiratoryRate} control={control}
           rules={{required:true}}
           render={({field:{onChange, value}, fieldState:{error}}) => (
            <>
            <TextInput style = {styles.Input}
            defaultValue={respiratoryRate} onChangeText={onChange}
                         value={value}/>
            {error && (<Text style={{color:'red', alignSelf:'stretch', marginLeft:22, marginTop:4}}>field is required</Text>)}
            </>
           )}
           name="resRate"
           ></Controller>
          
        <Text style={styles.age}>Blood Oxygen Level</Text>
        <Controller defaultValue={oxygenLevel} control={control}
           rules={{required:true}}
           render={({field:{onChange, value}, fieldState:{error}}) => (
            <>
            <TextInput style = {styles.Input}
            defaultValue={oxygenLevel} onChangeText={onChange}
                         value={value}/>
            {error && (<Text style={{color:'red', alignSelf:'stretch', marginLeft:22, marginTop:4}}>field is required</Text>)}
            </>
           )}
           name="oxygen"
           ></Controller>
        <Text style={styles.heading}>Heartbeat Rate</Text>
        <Controller defaultValue={heartbeat} control={control}
           rules={{required:true}}
           render={({field:{onChange, value}, fieldState:{error}}) => (
            <>
            <TextInput style = {styles.Input}
            defaultValue={heartbeat} onChangeText={onChange}
                         value={value}/>
                         {error && (<Text style={{color:'red', alignSelf:'stretch', marginLeft:22, marginTop:4}}>field is required</Text>)}
            </>
           )}
           name="heartbeat"
           ></Controller>
        
        <View style={styles.container1}>
          <TouchableOpacity
            style={styles.submitButton} onPress={handleSubmit(onAdd)}>
            <Text style={styles.submitButtonText}> Update </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton} onPress={onCancel}>
            <Text style={styles.cancelButtonText}> Cancel </Text>
          </TouchableOpacity>
        </View>
        

      </ScrollView>
    </View>
  );
};

export default UpdateTests;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
  },
  container2: {
    backgroundColor: '#2164e3',
    textAlign: 'center',
    padding: 10,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  heading: {
    marginLeft: 15,
    padding: 10,
    marginRight: 15,
  },
  age: {
    marginLeft: 15,
    padding: 10,
    marginRight: 15,
  },
  Input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  Input2: {
    marginLeft: 15,
    marginRight: 15,
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    backgroundColor: '#4dd4c8',
    padding: 10,
    height: 40,
    borderRadius: 10,
    width: '40%',
    marginRight: 15,
    marginTop: 15,
    marginLeft: 15,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#4dd4c8',
    padding: 10,
    borderRadius: 10,
    height: 40,
    width: '40%',
    marginRight: 15,
    marginTop: 15,
    marginLeft: 15,
  },
  dateDis: {
    backgroundColor: 'transparent',
    position: 'absolute',
    height: 40,
    marginRight: 10,
    marginLeft: 15,
    width: '95%',
    borderRadius: 10,
    marginTop: 5,
  },
  cancelButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  }
})
