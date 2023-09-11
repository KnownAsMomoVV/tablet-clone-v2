import React, { useState, useEffect } from "react";
import '/assets/calendar.css';
import { Grid } from '@chakra-ui/react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, off } from "firebase/database";
import { firebaseConfig } from "./firebaseconfig";
import { ChakraBaseProvider } from "@chakra-ui/react";
import CardExample from "./CardExample";
import { Button } from "@chakra-ui/button";
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase();

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function Calendar() {
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

    return (
        <div className="calendar">
            <h1>Calendar</h1>
            <div className="months-grid">
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
            </div>
            <div className="cards">
                {cards.map((card, index) => (
                    <div key={index} className="card">
                        <ChakraBaseProvider>
                            <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(3, 1fr)" gap={6}>
                                <CardExample text={card.description} heading={card.name} date={card.date} ></CardExample>
                                {/* ... [other CardExample components, if needed] */}
                            </Grid>
                        </ChakraBaseProvider>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Month({ name, isSelected, onSelect }) {
    return (
        <div className={`month-box ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
            {name}
        </div>
    );
}

export default Calendar;
