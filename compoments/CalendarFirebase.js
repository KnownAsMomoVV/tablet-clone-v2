import React, { useState, useEffect } from "react";
import '/assets/calendar.css';
import { Grid, Box, Text } from '@chakra-ui/react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, off } from "firebase/database";
import { firebaseConfig } from "./firebaseconfig";
import CardExample from "./CardExample";
import {useDarkMode} from "../contexts/DarkModeContext";
import {Button} from "@chakra-ui/button";

// Initialize Firebase with the given configuration
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase();
const months = [
    // Array of month names used for display
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Main Calendar component that interacts with Firebase and renders the calendar and cards
function Calendar(props) {
    // dark mode is here
    const { isDarkMode, toggleDarkMode, styles } = useDarkMode();
    // dark mode is here
    // State variables
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const [visibleMonth, setVisibleMonth] = useState(null);
    const [cards, setCards] = useState([]);

    // Effect to fetch the current visible month from Firebase
    useEffect(() => {
        const monthRef = ref(db, 'visibleMonth/cards');
        onValue(monthRef, (snapshot) => {
            const monthData = snapshot.val();
            if (monthData) {
                const currentMonth = Object.keys(monthData)[0];
                const monthIndex = months.indexOf(currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1));
                setVisibleMonth(monthIndex);
            }
        });
        return () => off(monthRef);
    }, []);

    // Effect to fetch cards for the selected visible month from Firebase
    useEffect(() => {
        if (visibleMonth !== null) {
            const currentMonthName = months[visibleMonth].toLowerCase();
            const cardRef = ref(db, `visibleMonth/cards/${currentMonthName}`);
            onValue(cardRef, (snapshot) => {
                const cardData = snapshot.val();
                if (cardData && Array.isArray(cardData)) {
                    setCards(cardData.filter(card => card !== null));
                } else {
                    setCards([]);
                }
            });
            return () => off(cardRef);
        }
    }, [visibleMonth]);

    return (
        <div style={styles.outerDiv}>
        <Box className="calendar" style={styles.calendar} p={5}>
            <Text fontSize="2xl" mb={5}>Calendar</Text>
            {/* Render month grid */}
            <Grid templateColumns="repeat(3, 1fr)" gap={5}>
                {months.map((month, index) => (
                    <Month
                        key={index}
                        name={month}
                        isSelected={visibleMonth === index}
                        onSelect={() => setVisibleMonth(index)}
                    />
                ))}
            </Grid>
            {/* Render cards for selected month */}
            <Box mt={5}>
                <Grid templateColumns="repeat(3, 1fr)" gap={5}>
                    {cards.map((card, index) => (
                        <CardExample
                            key={index}
                            index={index}
                            text={card.description}
                            heading={card.name}
                            date={card.date}
                            ImageURL={card.pictureURL}
                            isSelected={selectedCardIndex === index}
                            onSelect={() => setSelectedCardIndex(index === selectedCardIndex ? null : index)}
                            navigation={props.navigation}
                        />
                    ))}
                </Grid>
            </Box>
        </Box>
        </div>
    );
}

// Month component to render individual month boxes
function Month({ name, isSelected, onSelect }) {
    const { isDarkMode, styles } = useDarkMode();

    return (
        <Box
            p={4}
            bg={isSelected ? styles.month.backgroundColor : 'gray.200'}
            borderRadius="md"
            textAlign="center"
            cursor="pointer"
            color={isSelected ? styles.month.color : 'black'}
            _hover={{ bg: isSelected ? 'blue.600' : 'gray.300' }}
            onClick={onSelect}
        >
            {name}
        </Box>
    );
}

export default Calendar;
