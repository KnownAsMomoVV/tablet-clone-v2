import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import ButtonSample from "./compoments/ButtonSample";
import { ChakraBaseProvider} from "@chakra-ui/react";
import Icon from '@mdi/react';
import { mdiCalendar, mdiWrenchClock, mdiMoonWaningCrescent, mdiWhiteBalanceSunny, mdiCalendarEdit } from '@mdi/js';
import { Grid } from '@chakra-ui/react';
import CalendarFirebase from "./compoments/CalendarFirebase";
import CardDetailScreen from "./compoments/CardDetailScreen";
import 'antd'
import {DarkModeProvider, useDarkMode} from "./contexts/DarkModeContext";
import { LanguageContext, LanguageProvider } from "./contexts/LanguageContext";  // Updated the import statement
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
    const { language, setLanguage } = useContext(LanguageContext);  // Added useContext to get the current language and function to set language
    const { Option } = Select;

    const iconOptions = [
        { label: '🇩🇪', value: 'en' }, // Updated value to 'de'
        { label: '🇬🇧', value: 'de' }, // Updated value to 'en'
    ];

    const handleChange = (value) => {
        console.log(`selected ${value}`);
        setLanguage(value);  // set the language based on the selected value
    };

    useEffect(() => {
        // Heartbeat URL
        const url = "https://ping.checklyhq.com/b48b087d-ae50-4438-b9a7-3d0c30a21b77";

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
                                value={language} // Set the value prop to the selected icon
                                style={{ width: 100, color: styles.selectItemColor }}
                                dropdownStyle={{ backgroundColor: isDarkMode ? '#282c34' : '#fff' }}
                                onChange={handleChange}
                                optionLabelProp="label"
                            >
                                {iconOptions.map((option, index) => (
                                    <Option key={index} value={option.value} label={option.label}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <span style={{ fontSize: '18px' }}>{option.label}</span>
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

const styles = StyleSheet.create({

});


export default function AppWrapper() {
    return (
        <ChakraBaseProvider>
            <DarkModeProvider>
                <LanguageProvider>
                    <App />
                </LanguageProvider>
            </DarkModeProvider>
        </ChakraBaseProvider>
    );
}