import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity, TextInput, Button, Image} 
from 'react-native';
import React, {Component} from 'react';

const Home = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style = {styles.container1}>
              <Text style = {styles.title}>Ontario Health Care</Text>
              <Image style={styles.homeIcon} source={require('../assets/healthcare.png')} />
            </View>
            <View style = {styles.container2}>
                <TouchableOpacity
                                style = {styles.button} onPress={() => navigation.navigate("Add Patient")}>
                <Text style = {styles.buttonText}> Add Patient </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.button} onPress={() => navigation.navigate("Search Patient")}>
                <Text style = {styles.buttonText}> Search Patients </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.button} onPress={() => navigation.navigate("Critical Patients")}>
                <Text style = {styles.buttonText}> Critical Patients </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.button} onPress={() => navigation.navigate("Doctor List")}>
                <Text style = {styles.buttonText}> Doctor's List </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white'
    },

    container1: {
      width: '100%',
      height:'50%',
      backgroundColor: '#2164e3',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    },
      title:{
         color: 'white',
         fontWeight: 'bold',
         fontSize: 36,
         paddingBottom:20
      },
      homeIcon: {
        width: 120,
        height: 120,
        paddingTop: 40
       },

      container2: {
       width: '100%',
       height:'50%',
       backgroundColor:'white',
       flexDirection: 'column',
       height:'45%',
       },

       button: {
        backgroundColor: '#4dd4c8',
        height: 60,
        borderRadius: 10,
        width: '80%',
        marginTop: 20,
        marginRight: 15,
        marginLeft: 35,
     },
     buttonText: {
        color: 'white',
        textAlign: 'center',
        paddingTop:18,
        fontSize: 18,
     },
     
    });