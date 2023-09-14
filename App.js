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
    const [isDarkMode, setIsDarkMode] = useState(false); // State to manage dark mode

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const currentTheme = isDarkMode ? darkTheme : lightTheme;
    return (
        <View style={currentTheme.container}>
            <Button onClick={toggleDarkMode}>
                {isDarkMode ? '☀️' : '🌙'}
            </Button>
            <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(3, 1fr)" gap={6}>
                <ButtonSample text="📆" onClick={() => navigation.navigate('CalendarFirebase')} />
            <ButtonSample text='🔜'></ButtonSample>
            <ButtonSample text='🔜'></ButtonSample>
            <ButtonSample text='🔜'></ButtonSample>
            <ButtonSample text='🔜'></ButtonSample>
                <ButtonSample text='🔜'></ButtonSample>
                <ButtonSample text='🔜'></ButtonSample>
            <ButtonSample text='🔜'></ButtonSample>
            <ButtonSample text='🔜'></ButtonSample>
                </Grid>
        </View>
    );
}
const lightTheme = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    // ... any other styles for light mode ...
});

const darkTheme = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282c34',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    // ... any other styles for dark mode ...
});

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
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerStyle: { backgroundColor: '#282c34' }, // Dark background
                        headerTintColor: '#fff', // White text
                        headerTitleStyle: { fontWeight: 'bold' }, // Bold text for header
                    }}
                >
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
        backgroundColor: '#f4f4f8', // A soft gray background
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20, // Consistent padding for better spacing
    },
});