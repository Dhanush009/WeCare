import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, FlatList,} 
from 'react-native';
import React, {Component, useEffect, useState} from 'react';

const data = [
    {id:1,name:'Jose Sa', department:'Critical Care',contact:'(647)475-0957'},
    {id:2,name:'Manuel Neuer', department:'Critical Care',contact:'(647)475-0957'},
    {id:3,name:'Ederson', department:'Cardiology',contact:'(647)475-0957'},
    {id:4,name:'Akanji', department:'Cardiology',contact:'(647)475-0957'},
    {id:5,name:'Christian Pulisic', department:'Neurology',contact:'(647)475-0957'},
    {id:6,name:'John Stones', department:'Neurology',contact:'(647)475-0957'},
    {id:7,name:'Jadon Sancho', department:'Orthopedic',contact:'(647)475-0957'},
    {id:8,name:'Haaland', department:'Orthopedic',contact:'(647)475-0957'},
    {id:9,name:'Luis Suarez', department:'Intensive Care',contact:'(647)475-0957'},
    {id:10,name:'Casemiro', department:'Intensive Care',contact:'(647)475-0957'},
    {id:11,name:'Edinson Cavani', department:'Intensive Care',contact:'(647)475-0957'},
    {id:12,name:'Jose Sa', department:'Critical Care',contact:'(647)475-0957'},
    {id:13,name:'Manuel Neuer', department:'Critical Care',contact:'(647)475-0957'},
    {id:14,name:'Ederson', department:'Cardiology',contact:'(647)475-0957'},
    {id:15,name:'Akanji', department:'Cardiology',contact:'(647)475-0957'},
    {id:16,name:'Christian Pulisic', department:'Neurology',contact:'(647)475-0957'},
    {id:17,name:'John Stones', department:'Neurology',contact:'(647)475-0957'},
    {id:18,name:'Jadon Sancho', department:'Orthopedic',contact:'(647)475-0957'},
    {id:19,name:'Haaland', department:'Orthopedic',contact:'(647)475-0957'},
    {id:20,name:'Luis Suarez', department:'Intensive Care',contact:'(647)475-0957'},
    {id:21,name:'Casemiro', department:'Intensive Care',contact:'(647)475-0957'},
    {id:22,name:'Edinson Cavani', department:'Intensive Care',contact:'(647)475-0957'},
]


const DoctorList = () => {

    const item = ({item}) => {
        return(
            <View style={styles.item}>
                
                <View style={styles.tableItem}>
                    <Text style={styles.textTable}>{item.name}</Text>
                </View>
                <View style={styles.tableItem}>
                    <Text style={styles.textTable}>{item.department}</Text>
                </View>
                <View style={styles.tableItem}>
                    <Text style={styles.textTable}>{item.contact}</Text>
                </View>
            </View>
        )
    }

    return(
    <SafeAreaView style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.title}>Doctor's List</Text>
            </View>
                <View style={styles.container2}>
                <View style={styles.item1}>
                    
                    <View style={styles.tableItem1}>
                        <Text style={styles.tableItemText1}>Doctor Name</Text>
                    </View>
                    <View style={styles.tableItem1}>
                        <Text style={styles.tableItemText1}>Department</Text>
                    </View>
                    <View style={styles.tableItem1}>
                        <Text style={styles.tableItemText1}>Contact No.</Text>
                    </View>
                </View>
                <FlatList
                data={data}
                renderItem={item}
                key={item.id}
                />
                </View>
            
    </SafeAreaView>
    );
};

export default DoctorList;

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
        flexDirection:'row',
        width:128,
        backgroundColor: '#4dd4c8',
        
    },

    tableItemText1:{
        fontWeight: 'bold',
        fontSize: 18,
        color:'white'
    },
    item: {
        margin:4,
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