import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, {useState} from 'react';
import Keys from './keys';
import axios from 'react-native-axios';
import {useForm, Controller} from 'react-hook-form';

const {WEB_API_URL, API_NEW_PATIENT} = Keys;

const AddPatient = ({navigation}) => {

 const {control, handleSubmit, reset, formState:{errors}} = useForm(); 

  const onAdd = async (data) => {
    
    console.log("in Add Patient");
    const ADD_URL = WEB_API_URL + API_NEW_PATIENT;
    console.log('data:', data)
  
    await axios.post(ADD_URL,{
      firstname: data.fname,
      lastname: data.lname,
      gender: data.gender,
      age:data.age,
      doctor:data.doctor,
      department: data.dept,
      condition:data.cond

    }).then(response => {
        alert('Successfully Added');
  
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
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style = {styles.container2}>
              <Text style = {styles.title}>Add New Patient Details</Text>
        
        </View>
        
           <Text  style = {styles.heading}>First Name</Text>
           <Controller defaultValue="" control={control}
           rules={{required:true}}
           render={({field:{onChange, value}, fieldState:{error}}) => (
            <>
            <TextInput style = {[styles.Input,{borderColor: error ? 'red' : 'black'}]}
                         placeholder = "Enter First Name" onChangeText={onChange}
                         value={value}/>
            {error && (<Text style={{color:'red', alignSelf:'stretch', marginLeft:22, marginTop:4}}>firstname is required</Text>)}
            </>
           )}
           name="fname"
           ></Controller>


          <Text  style = {styles.heading}>Last Name</Text>
          <Controller defaultValue="" control={control}
            rules={{required:true}}          
           render={({field:{onChange, value},fieldState:{error}}) => (
            <>
            <TextInput style = {[styles.Input,{borderColor: error ? 'red' : 'black'}]}
            placeholder = "Enter Last Name" onChangeText={onChange} value={value}/>
            {error && (<Text style={{color:'red', alignSelf:'stretch', marginLeft:22, marginTop:4}}>lastname is required</Text>)}
            </>
           )}
           name="lname"
           ></Controller>
          
           <Text  style = {styles.age}>Gender</Text>
           <Controller defaultValue="" control={control}
           rules={{required:true}}
           render={({field: {onChange, value},fieldState:{error}}) => (
            <>
            <TextInput style = {[styles.Input,{borderColor: error ? 'red' : 'black'}]}
            placeholder = "Enter Gender" onChangeText={onChange} value={value}/>
            {error && (<Text style={{color:'red', alignSelf:'stretch', marginLeft:22, marginTop:4}}>gender is required</Text>)}
            </>
           )}
           name="gender"
           ></Controller>

          <Text  style = {styles.age}>Age</Text>
           <Controller defaultValue="" control={control}
           rules={{required:true}}
           render={({field: {onChange, value}, fieldState:{error}}) => (
            <>
            <TextInput style = {[styles.Input,{borderColor: error ? 'red' : 'black'}]}
            placeholder = "Enter Age" onChangeText={onChange} value={value}/>
            {error && (<Text style={{color:'red', alignSelf:'stretch', marginLeft:22, marginTop:4}}>age is required</Text>)}
            </>
           )}
           name="age"
           ></Controller> 

          <Text  style = {styles.age}>Doctor</Text>
           <Controller defaultValue="" control={control}
           rules={{required:true}}
           render={({field: {onChange, value, onBlur},fieldState:{error}}) => (
            <>
            <TextInput style = {[styles.Input,{borderColor: error ? 'red' : 'black'}]}
            placeholder = "Enter Attending Doctor" onChangeText={onChange} onBlur={onBlur} value={value}/>
            {error && (<Text style={{color:'red', alignSelf:'stretch', marginLeft:22, marginTop:4}}>doctor is required</Text>)}
            </>
           )}
           name="doctor"
           ></Controller>

           <Text  style = {styles.heading}>Department</Text>
           <Controller defaultValue="" control={control}
           rules={{required:true}}
           render={({field:{onChange, value},fieldState:{error}}) => (
            <>
            <TextInput style = {[styles.Input,{borderColor: error ? 'red' : 'black'}]}
            placeholder = "Enter Department" onChangeText={onChange} value={value} />
            {error && (<Text style={{color:'red', alignSelf:'stretch', marginLeft:22, marginTop:4}}>department is required</Text>)}
            </>
           )}
           name="dept"
           ></Controller>
          <Text  style = {styles.heading}>Condition</Text>
           <Controller defaultValue="" control={control}
           rules={{required:true}}
           render={({field:{onChange, value},fieldState:{error}}) => (
            <>
            <TextInput style = {[styles.Input,{borderColor: error ? 'red' : 'black'}]}
            placeholder = "Enter Condition" onChangeText={onChange} value={value} />
            {error && (<Text style={{color:'red', alignSelf:'stretch', marginLeft:22, marginTop:4}}>patient condition is required</Text>)}
            </>
           )}
           name="cond"
           ></Controller>
           
         
           <View style = {styles.container1}>
          <TouchableOpacity
                         style = {styles.submitButton} onPress={handleSubmit(onAdd)}>
          <Text style = {styles.submitButtonText}> Add </Text>
          </TouchableOpacity>
          <TouchableOpacity
                         style = {styles.cancelButton} onPress = {onCancel}>
          <Text style = {styles.cancelButtonText}> Cancel </Text>
          </TouchableOpacity>
          </View>
          </ScrollView>
      </SafeAreaView>
    )
  }
  export default AddPatient;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      
    },
    container2: {
      flex: 1,
      backgroundColor: '#2164e3',
      textAlign: 'center',
      padding: 10,
      height: '30%',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    },
      title:{
         color: 'white',
         fontWeight: 'bold',
         fontSize: 20,
      },
      heading: {
        marginLeft: 15,
        marginTop: 15,
        paddingBottom: 5,
      },
      age: {
       marginLeft: 15,
       marginTop: 15,
       paddingBottom: 5,
       keyboardType:'numeric'
     },
      Input: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
      },
      container1: {
       flex: 1,
       marginTop:28,
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
          marginLeft: 15,
       },
       submitButtonText: {
          color: 'white',
          textAlign: 'center',
          fontSize: 18,
       },
       cancelButton: {
          backgroundColor: '#4dd4c8',
          padding: 10,
          borderRadius: 10,
          height: 40,
          width: '40%',
          marginRight: 15,
          marginLeft: 15,
       },
       cancelButtonText: {
          color: 'white',
          textAlign: 'center',
          fontSize: 18,
       },
       datePickerStyle: {
        width: 230,
      }
    
  });
  