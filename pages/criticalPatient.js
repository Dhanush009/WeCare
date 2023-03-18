import {  StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, ScrollView,FlatList } from 'react-native';
import React, {useState,useEffect} from 'react';
import Keys from './keys';
import axios from 'react-native-axios';
import {useForm, Controller} from 'react-hook-form';

const {WEB_API_URL, API_CRITICAL_PATIENT} = Keys;

const CriticalPatient = () => {

    const [patients,setPatients] = useState([]);

    useEffect(() => {
      fetchData();
    },[]);

    

    const fetchData = async (url) => {

      const GET_URL = `${WEB_API_URL}${API_CRITICAL_PATIENT}`;
      await axios.get(GET_URL)
      .then(response => {
        console.log(`Search Patient Successful`);
        setPatients(response.data.data);
        console.log(response.data.data)
      })
      .catch(err => {
        if(err.message === 'Network Error' && !err.response){
          alert('Make sure API is running')
        }
        
        return;
      })
    };

    const item = ({item}) => {
        return(
            <View style={styles.item}>
                
                <View style={styles.tableItem}>
                    <Text style={styles.textTable}>{item.firstname}</Text>
                </View>
                <View style={styles.tableItem}>
                    <Text style={styles.textTable}>{item.lastname}</Text>
                </View>
                <View style={styles.tableItem}>
                    <Text style={styles.textTable}>{item.doctor}</Text>
                </View>
            </View>
        )
    }

    return(
    <SafeAreaView style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.title}>Critical Patient List</Text>
            </View>
                <View style={styles.container2}>
                <View style={styles.item1}>
                    
                    <View style={styles.tableItem1}>
                        <Text style={styles.tableItemText1}>Firstname</Text>
                    </View>
                    <View style={styles.tableItem1}>
                        <Text style={styles.tableItemText1}>Lastname</Text>
                    </View>
                    <View style={styles.tableItem1}>
                        <Text style={styles.tableItemText1}>Consulting Dr</Text>
                    </View>
                </View>
                <FlatList
                data={patients}
                renderItem={item}
                key={item.id}
                />
                </View>
            
    </SafeAreaView>
    );

};

export default CriticalPatient;

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
        fontSize: 32,
        paddingBottom:20
     },
    container2: {
        flex:1,
        backgroundColor: 'white',
        width: '100%',
        height:'80%',
        justifyContent:'center',
        alignItems:'center'

      },
      
    table: {

        flexDirection:'row',
        borderWidth:1,
        borderColor:'black',
        borderRadius:5,
        marginTop:5,
        justifyContent:'center',
        alignContent:'center'
    },
    tableItem: {
        width:122,
        alignItems:'center'
        
        
    },

    tableItemText:{
        fontWeight: 'bold',
        fontSize: 18,
    },

    textTable:{
        fontSize:16
    },
    table1: {
        height:40,
        flexDirection:'row',
        marginTop:3,
        borderWidth:2,
        borderRadius:5,
        justifyContent:'center',
        alignContent:'center',
    },
    tableItem1: {
        
        width:122,
        backgroundColor: '#4dd4c8',
        alignItems:'center'
        
    },

    tableItemText1:{
        fontWeight: 'bold',
        fontSize: 18,
        color:'white'
    },
    item: {
        margin:2,
        flexDirection:'row',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        color:'#000',
        borderWidth: 0.5,
      },
      item1: {
        margin:4,
        flexDirection:'row',
        backgroundColor: '#4dd4c8',
        padding: 10,
        borderRadius: 10,
        color:'#000',
        borderWidth: 0.5,
      },
  
    

    })