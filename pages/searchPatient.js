import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, ScrollView, FlatList} 
from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import Keys from './keys';
import axios from 'axios';

const {WEB_API_URL,API_GET_ALL} = Keys;

const SearchPatient = ({navigation}) => {

    const [searchText,setSearchText] = useState(""); 
    const [patients,setPatients] = useState([]);
    const [filteredPatients, setFilteredPatients] = useState([]);

    useEffect(() => {
      fetchData();
    },[]);

    

    const fetchData = async (url) => {

      const GET_URL = `${WEB_API_URL}${API_GET_ALL}`;
      await axios.get(GET_URL)
      .then(response => {
        console.log(`Search Patient Successful`);
        setPatients(response.data.data);
        setFilteredPatients(response.data.data);
        console.log(response.data.data)
      })
      .catch(err => {
        if(err.message === 'Network Error' && !err.response){
          alert('Make sure API is running')
        }
        
        return;
      })
    }

    const searchFilterFunction = (text) => {
      if (text) {
        const newPatient = patients.filter ( item => {
          const patientData = item.firstname ? item.firstname.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          return patientData.indexOf(textData) > -1;
        })
        setFilteredPatients(newPatient);
        
      } else {
        setFilteredPatients(patients);
      }
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.title}>Search Patients</Text>
            </View>
            <View style={styles.container2}>
                <TextInput placeholder='Search Patient' style={styles.input}
                value = {searchText}
                onChangeText={(text) => { searchFilterFunction(text);
                setSearchText(text);}}
                />
                <ScrollView>
                  {
                    filteredPatients.map((item,index) => {
                      return(
                        <View key={index} style={styles.item}  >
                        
                          <Text style={styles.textName} onPress={() => navigation.navigate("View Patient",{data:item})}>
                            {item.firstname} {item.lastname}</Text>
                            
                      </View>
                      )
                    })
                  }
                </ScrollView>
                
            </View>
        </SafeAreaView>
    )

}

export default SearchPatient;

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    container1: {
      backgroundColor: '#2164e3',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height:'20%'
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
        height:'80%'
      },
      input: {
        margin:10,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        color:'#000',
        borderWidth: 1,
      },
      itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        borderWidth : 0.5,
        borderRadius : 5
      },
      textName: {
        fontSize : 17,
        marginLeft: 10,
        fontWeight:"400"
      },
      item: {
        margin:7,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        color:'#000',
        borderWidth: 0.5,
      },
      
});