import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList,} 
from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import { useRoute } from '@react-navigation/native';

const PastRecords = ({navigation}) => {

    const route = useRoute();
    console.log(route.params.records);

    const item = ({item}) => {

        return(
            <View style={{width:'48%',alignItems:'center',borderWidth:0.75,margin:'1%',padding:15}}>
                <Text style={styles.textans}>{item.date}</Text>
                <Text style={styles.textName}>Blood Pressure: {item.bloodPressure}</Text>
                <Text style={styles.textName}>Oxygen Level: {item.oxygenLevel}</Text>
                <Text style={styles.textName}>Respiratory Rate: {item.respiratoryRate}</Text>
                <Text style={styles.textName}>HeartBeat: {item.heartbeat}</Text>
            </View>
        )

    }

    return(
        <SafeAreaView>
        <View style={styles.container1}>
            <FlatList 
            numColumns={2}
            data={route.params.records}
            renderItem = {item}
            key = {item._id}    
            />
        </View>
        </SafeAreaView>
        
    )

};

export default PastRecords;

const styles = ({
    container1: {
        backgroundColor: 'white',
       
        width: '100%',
        height: '100%'
        
      },
      textName: {
        fontSize : 16,
        alignItems:'center',
        fontWeight:"300"
      },
      textans:  {
        fontSize : 20,
        marginLeft: 10,
        fontWeight:"600",
        marginRight:20,
        alignItems:'center',
        padding:10
      },

});