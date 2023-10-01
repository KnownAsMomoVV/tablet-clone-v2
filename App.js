import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import ButtonSample from "./compoments/ButtonSample";
import { ChakraBaseProvider} from "@chakra-ui/react";
import Icon from '@mdi/react';
import { mdiCalendar, mdiWrenchClock, mdiMoonWaningCrescent, mdiWhiteBalanceSunny, mdiCalendarEdit } from '@mdi/js';
import { Grid } from '@chakra-ui/react';
import calendarFirebase from "./compoments/CalendarFirebase";
import CalendarFirebase from "./compoments/CalendarFirebase";
import CardDetailScreen from "./compoments/CardDetailScreen";
//dark mode
import 'antd'
import {DarkModeProvider} from "./contexts/DarkModeContext";
import {useDarkMode} from './contexts/DarkModeContext';
import { Select } from 'antd';
import EventManager from "./compoments/EventManager";
const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
    const { isDarkMode, toggleDarkMode, styles } = useDarkMode();

    return (
        <View style={styles.container}>
            <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(3, 1fr)" gap={6}>
                <ButtonSample icon={mdiCalendar} onClick={() => navigation.navigate('CalendarFirebase')} />
                <ButtonSample icon={mdiCalendarEdit} onClick={() => navigation.navigate('EventManager')} />
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
    const { Option } = Select;
    const iconOptions = [
        { label: 'Icon1', value: 'icon1', icon: mdiMoonWaningCrescent },  // replace with actual icons
        { label: 'Icon2', value: 'icon2', icon: mdiWhiteBalanceSunny },   // replace with actual icons
    ];
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

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
                screenOptions={({ navigation }) => ({
                    headerStyle: { backgroundColor: '#282c34' },
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerRight: () => (
                        <div style={{ display: 'flex', alignItems: 'center', paddingRight: '1em' }}>
                            <Icon onClick={() => { toggleDarkMode() }}
                                  color='white' size={1} style={{ marginRight: '1em', cursor: 'pointer' }}
                                  path={isDarkMode ? mdiWhiteBalanceSunny : mdiMoonWaningCrescent}
                            />
                            <Select
                                key={isDarkMode ? 'dark' : 'light'} // Added here
                                defaultValue="icon1"
                                style={{ width: 200, color: styles.selectItemColor }}
                                dropdownStyle={{ backgroundColor: isDarkMode ? '#282c34' : '#fff' }}
                                onChange={handleChange}
                                optionLabelProp="label"
                            >
                                {iconOptions.map((option, index) => (
                                    <Option key={index} value={option.value} label={(
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Icon path={option.icon} size={1} color={styles.selectItemColor} />
                                            <span style={{ color: styles.selectItemColor, marginLeft: '8px' }}>{option.label}</span>
                                        </div>
                                    )}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Icon path={option.icon} size={1} color={styles.selectItemColor} />
                                            <span style={{ color: styles.selectItemColor, marginLeft: '8px' }}>{option.label}</span>
                                        </div>
                                    </Option>
                                ))}
                            </Select>
                        </div>
                    ),
                })}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="CalendarFirebase" component={CalendarFirebase} />
                <Stack.Screen name="CardDetailScreen" component={CardDetailScreen} />
                <Stack.Screen name="EventManager" component={EventManager} />
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