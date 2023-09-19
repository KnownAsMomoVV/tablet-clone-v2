import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import ButtonSample from "./compoments/ButtonSample";
import { ChakraBaseProvider} from "@chakra-ui/react";
import Icon from '@mdi/react';
import { mdiCalendar, mdiWrenchClock, mdiMoonWaningCrescent, mdiWhiteBalanceSunny } from '@mdi/js';
import { Grid, Box } from '@chakra-ui/react';
import CalendarView from "./compoments/CalendarView";
import calendarFirebase from "./compoments/CalendarFirebase";
import CardDetailScreen from "./compoments/CardDetailScreen";
//dark mode
import {DarkModeProvider} from "./contexts/DarkModeContext";
import {useDarkMode} from './contexts/DarkModeContext';
const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
    const { isDarkMode, toggleDarkMode, styles } = useDarkMode();

    return (
        <View style={styles.container}>
            <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(3, 1fr)" gap={6}>
                <ButtonSample icon={mdiCalendar} onClick={() => navigation.navigate('CalendarFirebase')} />
                <ButtonSample icon={mdiWrenchClock} />
                <ButtonSample icon={mdiWrenchClock} />
                <ButtonSample icon={mdiWrenchClock} />
                <ButtonSample icon={mdiWrenchClock} />
                <ButtonSample icon={mdiWrenchClock} />
                <ButtonSample icon={mdiWrenchClock} />
                <ButtonSample icon={mdiWrenchClock} />
                <ButtonSample icon={mdiWrenchClock} />
            </Grid>
        </View>
    );
}

function App() {
    const { isDarkMode, toggleDarkMode, styles } = useDarkMode();

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
                    console.log('Heartbeat pinged successfully');
                })
                .catch(error => {
                    console.error("Error pinging Heartbeat:", error);
                });
        };
        pingHeartbeat();
        const intervalID = setInterval(pingHeartbeat, 30000);
        return () => clearInterval(intervalID);
    }, []);
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={({navigation}) => ({
                    headerStyle: {backgroundColor: '#282c34'},
                    headerTintColor: '#fff',
                    headerTitleStyle: {fontWeight: 'bold'},
                    headerRight: () => (
                        <Icon onClick={() => {
                            toggleDarkMode()
                        }}
                              color='white' size={2} style={{paddingRight: '1em', cursor: 'pointer'}}
                              path={ isDarkMode ? mdiWhiteBalanceSunny : mdiMoonWaningCrescent }
                        />
                    )
                })}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="CalendarFirebase" component={calendarFirebase} />
                <Stack.Screen name="Calendar" component={CalendarView} />
                <Stack.Screen name="CardDetailScreen" component={CardDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default function AppWrapper() {
    return (
        <ChakraBaseProvider>
            <DarkModeProvider>
                <App />
            </DarkModeProvider>
        </ChakraBaseProvider>
    );
}