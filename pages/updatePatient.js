import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import Keys from './keys';
import axios from 'react-native-axios';
import {useForm, Controller} from 'react-hook-form';
import { useRoute } from '@react-navigation/native';

const {WEB_API_URL, API_UPDATE_PATIENT, API_FIND_PATIENT} = Keys;

const UpdatePatient = ({navigation}) => {

 const {control, handleSubmit, reset} = useForm(); 
 const [err,setErr] = useState("");   
 const route = useRoute();

 const {firstname,doctor,department,condition} = route.params.updpat;

  const onAdd = async (data) => {
    
    console.log("in update Patient");
    const UPDATE_URL = `${WEB_API_URL}${API_UPDATE_PATIENT}${route.params.updpat._id}`;
    console.log('data:', data)

    
    
    await axios.put(UPDATE_URL,{
      doctor:data.doctor,
      department: data.dept,
      condition:data.cond

    }).then(response => {
        alert('Successfully Updated');
        navigation.navigate("Search Patient");
  
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
        <View style = {styles.container2}>
              <Text style = {styles.title}>Update {firstname}'s Details</Text>
        
        </View>
        <ScrollView>

          <Text  style = {styles.age}>Doctor</Text>
           <Controller defaultValue={doctor} control={control}
           rules={{required:true}}
           render={({field:{onChange, value}, fieldState:{error}}) => (
            <>
            <TextInput style = {styles.Input}
            defaultValue={doctor} onChangeText={onChange} value={value}/>
            {error && (<Text style={{color:'red', alignSelf:'stretch', marginLeft:22, marginTop:4}}>field is required</Text>)}
            </>
           )}
           name="doctor"
           ></Controller>

           <Text  style = {styles.heading}>Department</Text>
           <Controller defaultValue={department} control={control}
           rules={{required:true}}
           render={({field:{onChange, value}, fieldState:{error}}) => (
            <>
            <TextInput style = {styles.Input}
            defaultValue={department} onChangeText={onChange} value={value} />
            {error && (<Text style={{color:'red', alignSelf:'stretch', marginLeft:22, marginTop:4}}>field is required</Text>)}
            </>
           )}
           name="dept"
           ></Controller>
          <Text  style = {styles.heading}>Condition</Text>
           <Controller defaultValue={condition} control={control}
            rules={{required:true}}
            render={({field:{onChange, value}, fieldState:{error}}) => (
              <>
            <TextInput style = {styles.Input}
            defaultValue={condition} onChangeText={onChange} value={value} />
            {error && (<Text style={{color:'red', alignSelf:'stretch', marginLeft:22, marginTop:4}}>field is required</Text>)}
            </>
           )}
           name="cond"
           ></Controller>
           </ScrollView>
         
           <View style = {styles.container1}>
          <TouchableOpacity
                         style = {styles.submitButton} onPress={handleSubmit(onAdd)}>
          <Text style = {styles.submitButtonText}> Update </Text>
          </TouchableOpacity>
          <TouchableOpacity
                         style = {styles.cancelButton} onPress = {onCancel}>
          <Text style = {styles.cancelButtonText}> Cancel </Text>
          </TouchableOpacity>
          </View>
      </SafeAreaView>
    )
  }
  export default UpdatePatient;
  
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
  