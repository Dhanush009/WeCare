//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity, TextInput } from 'react-native';
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddPatient from './pages/addPatient';
import Home from './pages/home';
import SearchPatient from './pages/searchPatient';
import ViewPatient from './pages/viewPatient';
import ViewTests from './pages/viewTests';
import AddTests from './pages/addTests';
import DoctorList from './pages/doctorList';
import CriticalPatient from './pages/criticalPatient';
import PastRecords from './pages/pastRecords';
import UpdatePatient from './pages/updatePatient';
import UpdateTests from './pages/updateTest';


const Stack = createStackNavigator();

 const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home' 
        >
        <Stack.Screen name = 'Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name = 'Add Patient' component={AddPatient}/>
        <Stack.Screen name='Search Patient' component={SearchPatient} />
        <Stack.Screen name='View Patient' component={ViewPatient} />
        <Stack.Screen name='View Tests' component={ViewTests} />
        <Stack.Screen name='Add Tests' component={AddTests} />
        <Stack.Screen name="Doctor List" component={DoctorList} />
        <Stack.Screen name="Critical Patients" component={CriticalPatient} />
        <Stack.Screen name="All Records" component={PastRecords} />
        <Stack.Screen name="Update Patient" component={UpdatePatient} />
        <Stack.Screen name="Update Test" component={UpdateTests} />
      </Stack.Navigator>
    </NavigationContainer>
 
  )
}
export default App;