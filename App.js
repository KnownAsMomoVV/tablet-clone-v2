import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import ButtonSample from "./compoments/ButtonSample";
import { ChakraBaseProvider} from "@chakra-ui/react";
const Stack = createStackNavigator();
import { Grid, Box } from '@chakra-ui/react';
import CalendarView from "./compoments/CalendarView";
import calendarFirebase from "./compoments/CalendarFirebase";
//let url = "https://ping.checklyhq.com/f1ece931-1be8-44bf-b861-bb4e203a336d"
//fetch(url).then(response => console.log(response))

import {Button} from "@chakra-ui/button";
function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(3, 1fr)" gap={6}>
            <ButtonSample text='Dongs'></ButtonSample>
            <ButtonSample text='Dongs'></ButtonSample>
            <ButtonSample text="☎️" onClick={() => navigation.navigate('Events')} />
            <ButtonSample text="Dings" onClick={() => navigation.navigate('Calendar')} />
            <ButtonSample text='Dings'></ButtonSample>
            <ButtonSample text="☎d" onClick={() => window.location.href='./compoments/CalendarFirebase.js'} />
                <ButtonSample text="📆" onClick={() => navigation.navigate('CalendarFirebase')} />
            <ButtonSample text='🎭'></ButtonSample>
            <ButtonSample text='Test'></ButtonSample>
            <ButtonSample text='Kings'></ButtonSample>
                </Grid>
        </View>
    );
}

export default function App() {
    useEffect(() => {
        // Heartbeat URL
        const url = "https://ping.checklyhq.com/f1ece931-1be8-44bf-b861-bb4e203a336d";

        // A GET request to the Heartbeat
        fetch(url, {
            method: 'GET',
            mode: 'no-cors',
        })
            .then(() => {
                // Log confirmation every time the Heartbeat URL is pinged.
                console.log('Heartbeat pinged successfully');
            })
            .catch(error => {
                // Log any errors if they occur.
                console.error("Error pinging Heartbeat:", error);
            });
    }, []);
    return (
        <ChakraBaseProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="CalendarFirebase" component={calendarFirebase} />
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