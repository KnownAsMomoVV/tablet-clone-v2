import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import Buttons from "./compoments/Buttons";
import ButtonSample from "./compoments/ButtonSample";
import Events from "./compoments/Events";
import Calendar from "./compoments/Calendar";
import {ChakraBaseProvider} from "@chakra-ui/react";
const Stack = createStackNavigator();
import { Grid } from '@chakra-ui/react';
import CalendarView from "./compoments/CalendarView";
//import firebase from '@react-native-firebase/app';
//import database from '@react-native-firebase/database';
//import {firebaseConfig} from "./compoments/firebaseconfig";
/*

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
 */

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(3, 1fr)" gap={6}>
            <ButtonSample text='📆'></ButtonSample>
            <ButtonSample text="☎️" onClick={() => navigation.navigate('Events')} />
            <ButtonSample text="☎Dings" onClick={() => navigation.navigate('Calendar')} />
            <ButtonSample text='📆'></ButtonSample>
            <ButtonSample text="☎️" onClick={() => window.location.href='./compoments/Events.js'} />
            <ButtonSample text='🎭'></ButtonSample>
            <ButtonSample text='Test'></ButtonSample>
            <ButtonSample text='King'></ButtonSample>
            <ButtonSample text='King'></ButtonSample>
            <ButtonSample text='King'></ButtonSample>
                </Grid>
        </View>
    );
}

export default function App() {
    return (
        <ChakraBaseProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Events" component={Events} />
                <Stack.Screen name="Calendar" component={CalendarView} />
            </Stack.Navigator>
        </NavigationContainer>
        </ChakraBaseProvider>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
