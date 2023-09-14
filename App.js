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
import CardDetailScreen from "./compoments/CardDetailScreen";
//let url = "https://ping.checklyhq.com/f1ece931-1be8-44bf-b861-bb4e203a336d"
//fetch(url).then(response => console.log(response))

import {Button} from "@chakra-ui/button";
function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(3, 1fr)" gap={6}>
            <ButtonSample text='🔜'></ButtonSample>
            <ButtonSample text='🔜'></ButtonSample>
            <ButtonSample text="🔜" onClick={() => navigation.navigate('Events')} />
            <ButtonSample text="🔜" onClick={() => navigation.navigate('Calendar')} />
            <ButtonSample text='🔜'></ButtonSample>
            <ButtonSample text="🔜" onClick={() => window.location.href='./compoments/CalendarFirebase.js'} />
                <ButtonSample text="📆" onClick={() => navigation.navigate('CalendarFirebase')} />
            <ButtonSample text='🔜'></ButtonSample>
            <ButtonSample text='🔜'></ButtonSample>
                </Grid>
        </View>
    );
}

export default function App() {
    useEffect(() => {
        // Heartbeat URL
        const url = "https://ping.checklyhq.com/f1ece931-1be8-44bf-b861-bb4e203a336d";

        const pingHeartbeat = () => {
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
        };
        // Ping immediately upon mount
        pingHeartbeat();
        // Set up an interval to ping every 30 seconds
        const intervalID = setInterval(pingHeartbeat, 30000);
        // Cleanup: clear the interval when the component is unmounted
        return () => clearInterval(intervalID);
    }, []);
    return (
        <ChakraBaseProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="CalendarFirebase" component={calendarFirebase} />
                <Stack.Screen name="Calendar" component={CalendarView} />
                <Stack.Screen name="CardDetailScreen" component={CardDetailScreen} />
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