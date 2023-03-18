import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList,} 
from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import { useRoute } from '@react-navigation/native';

const Product = () => {

    const {date,bloodPressure,heartbeat,oxygenLevel,respitatoryRate} = this.props.product;

    return(
        <View>
            <Text>{date}</Text>
            <Text>{bloodPressure}</Text>
            <Text>{heartbeat}</Text>
            <Text>{oxygenLevel}</Text>
            <Text>{respitatoryRate}</Text>
        </View>
    )

};

export default Product;