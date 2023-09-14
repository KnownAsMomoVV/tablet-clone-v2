import React, { useState, useEffect } from "react";
import '/assets/calendar.css';
import { Grid, Box } from '@chakra-ui/react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, off } from "firebase/database";
import { firebaseConfig } from "./firebaseconfig";
import CardExample from "./CardExample";
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase();
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
function Calendar(props) {
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const [visibleMonth, setVisibleMonth] = useState(null);
    const [cards, setCards] = useState([]);

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
        return () => {
            off(monthRef);
        };
    }, []);

    useEffect(() => {
        if (visibleMonth !== null) {
            const currentMonthName = months[visibleMonth].toLowerCase();
            const cardRef = ref(db, `visibleMonth/cards/${currentMonthName}`);
            onValue(cardRef, (snapshot) => {
                const cardData = snapshot.val();
                if (cardData && Array.isArray(cardData)) {
                    // Filter out any null or undefined values, then set the cards
                    setCards(cardData.filter(card => card !== null));
                } else {
                    setCards([]);
                }
            });
        }
        return () => {
            if (visibleMonth !== null) {
                const currentMonthName = months[visibleMonth].toLowerCase();
                const cardRef = ref(db, `visibleMonth/cards/${currentMonthName}`);
                off(cardRef);
            }
        };
    }, [visibleMonth]);
    console.log("Selected Card Index in Calendar:", selectedCardIndex);


    return (
        <Box className="calendar" p={5}>
            <Text fontSize="2xl" mb={5}>Calendar</Text>
            <Grid templateColumns="repeat(3, 1fr)" gap={5}>
                {months.map((month, index) => (
                    <Month
                        key={index}
                        name={month}
                        isSelected={visibleMonth === index}
                        onSelect={() => {
                            setVisibleMonth(index);
                        }}
                    />
                ))}
            </Grid>
            <Box mt={5}>
                <Grid templateColumns="repeat(3, 1fr)" gap={5}>
                    {cards.map((card, index) => {
                        const isThisCardSelected = selectedCardIndex === index;
                        console.log("Rendering Card:", index, "Is Selected:", isThisCardSelected);
                        return (
                            <CardExample
                                key={index}
                                index={index}
                                text={card.description}
                                heading={card.name}
                                date={card.date}
                                ImageURL={card.pictureURL}
                                isSelected={isThisCardSelected}
                                onSelect={() => {
                                    const newIndex = index === selectedCardIndex ? null : index;
                                    setSelectedCardIndex(newIndex);
                                }}
                                navigation={props.navigation} // Pass down the navigation prop
                            />
                        );
                    })}
                </Grid>
            </Box>

        </Box>
    );
}

function Month({ name, isSelected, onSelect }) {
    return (
        <Box
            p={4}
            bg={isSelected ? 'blue.500' : 'gray.200'}
            borderRadius="md"
            textAlign="center"
            cursor="pointer"
            color={isSelected ? 'white' : 'black'}
            _hover={{ bg: isSelected ? 'blue.600' : 'gray.300' }}
            onClick={onSelect}
        >
            {name}
        </Box>
    );
}

export default Calendar;
