import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity,} 
from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import { useRoute } from '@react-navigation/native';
import Keys from './keys';
import axios from 'axios';

const {WEB_API_URL,API_FIND_PATIENT} = Keys;

const ViewPatient = ({navigation}) => {

    const route = useRoute();
    const [patientData,setPatientData] = useState({});

    useEffect(() => {
      patientContent();      
    },[])

    const patientContent = async () => {
      const FIND_URL = `${WEB_API_URL}${API_FIND_PATIENT}${route.params.data._id}`;
      await axios.get(FIND_URL)
      .then(response => {
        console.log(response.data.data);
        setPatientData(response.data.data);
      }) .catch(err => {
        if(err.message === 'Network Error' && !err.response){
          alert('Make sure API is running')
        }
        
        return;
      })
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.title}>{route.params.data.firstname}'s Details</Text>
                <TouchableOpacity
                         style = {styles.cancelButton} onPress = {() => navigation.navigate("Update Patient",{updpat:route.params.data})} >
                <Text style = {styles.cancelButtonText}> Update </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container2}>
                <View style={styles.itemContainer}>
                    <Text style={styles.textName}>Full Name:</Text>
                    <Text style={styles.textans}>{patientData.firstname} {patientData.lastname}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.textName}>Gender:</Text>
                    <Text style={styles.textans}>{patientData.gender}</Text>
                </View>
                 
                <View style={styles.itemContainer}>
                    <Text style={styles.textName}>Age:</Text>
                    <Text style={styles.textans}>{patientData.age}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.textName}>Doctor:</Text>
                    <Text style={styles.textans}>{patientData.doctor}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.textName}>Department:</Text>
                    <Text style={styles.textans}>{patientData.department}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.textName}>Condition:</Text>
                    <Text style={styles.textans}>{patientData.condition}</Text>
                </View>  
            </View>
            <View style = {styles.container3}>
                <TouchableOpacity
                                style = {styles.submitButton} onPress={() => navigation.navigate("Add Tests",{id:route.params.data._id})}>
                <Text style = {styles.submitButtonText}> Add Test Details </Text>
                </TouchableOpacity>
                <TouchableOpacity
                                style = {styles.cancelButton} onPress={() => navigation.navigate("View Tests",{info:route.params.data})}>
                <Text style = {styles.cancelButtonText}> View Test Details </Text>
                </TouchableOpacity>
          </View>
        </SafeAreaView>
    )

}

export default ViewPatient;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white'
    },
    container1: {
      backgroundColor: '#2164e3',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height:'30%'
    },
    title:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 36,
        paddingBottom:20
     },
    container2: {
        backgroundColor: 'white',
        width: '100%',
        height:'50%'
      },
    
      container3: {
        width: '100%',
        height:'20%',
        flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: 'white'
      },

      itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 25
      },
      textName: {
        fontSize : 20,
        marginLeft: 10,
        fontWeight:"600"
      },
      textans:  {
        fontSize : 24,
        marginLeft: 10,
        fontWeight:"700",
        marginRight:20
      },
      submitButton: {
        backgroundColor: '#4dd4c8',
        padding: 10,
        height: 40,
        borderRadius: 10,
        width: '44%',
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
        width: '44%',
        marginRight: 15,
        marginLeft: 15,
     },
     cancelButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
     },


});