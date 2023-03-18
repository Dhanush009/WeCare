import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity,} 
from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import { useRoute } from '@react-navigation/native';
import Keys from './keys';
import axios from 'axios';

const {WEB_API_URL,API_FIND_RECORD} = Keys;

const ViewTests = ({navigation}) => {

    const route = useRoute();
    const [testRecord,setTestRecord] = useState({});
    const [totalRecords, setTotalRecords] = useState([]);

    useEffect(() => {
        testDetails();
    },[])

    const testDetails = async () => {
        const TEST_URL = `${WEB_API_URL}${API_FIND_RECORD}${route.params.info._id}`;

        await axios.get(TEST_URL)
        .then( response => {
            console.log(response.data.data);
            let l = response.data.data.length
            setTestRecord(response.data.data[l-1]);
            setTotalRecords(response.data.data);
        }).catch(err => {
            if(err.message === 'Network Error' && !err.response){
              alert('Make sure API is running')
            }
            
            return;
          })

    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.title}>{route.params.info.firstname}'s Test Details</Text>
                <TouchableOpacity
                         style = {styles.cancelButton} onPress = {() => navigation.navigate("All Records",{records:totalRecords})} >
                <Text style = {styles.cancelButtonText}> All Records </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container2}>
                <View style={styles.itemContainer}>
                    <Text style={styles.textName}>Full Name:</Text>
                    <Text style={styles.textans}>{route.params.info.firstname} {route.params.info.lastname}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.textName}>Consulting Doctor:</Text>
                    <Text style={styles.textans}>{route.params.info.doctor}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.textName}>Gender:</Text>
                    <Text style={styles.textans}>{route.params.info.gender}</Text>
                </View>  
                <View style={styles.itemContainer}>
                    <Text style={styles.textName}>Blood Pressure:</Text>
                    <Text style={styles.textans}>{testRecord.bloodPressure}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.textName}>Respiratory Rate:</Text>
                    <Text style={styles.textans}>{testRecord.respiratoryRate}</Text>
                </View> 
                <View style={styles.itemContainer}>
                    <Text style={styles.textName}>Blood Oxygen Level:</Text>
                    <Text style={styles.textans}>{testRecord.oxygenLevel}</Text>
                </View> 
                <View style={styles.itemContainer}>
                    <Text style={styles.textName}>Heart Beat Rate:</Text>
                    <Text style={styles.textans}>{testRecord.heartbeat}</Text>
                </View> 
                <View style={styles.itemContainer}>
                    <Text style={styles.textName}>Date:</Text>
                    <Text style={styles.textans}>{testRecord.date}</Text>
                </View> 
                <View style={styles.container3}>
                    <TouchableOpacity
                        style={styles.submitButton} >
                        <Text style={styles.submitButtonText} onPress = {() => navigation.navigate("Update Test",{record:testRecord})}> Update </Text>
                    </TouchableOpacity>
                 
                </View>
            </View>
        </SafeAreaView>
    )

}

export default ViewTests;

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
        fontSize: 32,
        paddingBottom:20
     },
    container2: {
        backgroundColor: 'white',
        width: '100%',
        height:'60%'
      },
      container3: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:40,
        justifyContent: 'center',
        width:'100%',
        height:'10%'
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
        fontWeight:"300"
      },
      textans:  {
        fontSize : 20,
        marginLeft: 10,
        fontWeight:"600",
        marginRight:20
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
      cancelButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
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
     
      

});