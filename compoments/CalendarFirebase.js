import React, { useState, useEffect, useContext } from "react";
import '/assets/calendar.css';
import { Grid, Box, Text } from '@chakra-ui/react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, off } from "firebase/database";
import { firebaseConfig } from "./firebaseconfig";
import CardExample from "./CardExample";
import {useDarkMode} from "../contexts/DarkModeContext";
import { Pagination } from 'antd';
import { LanguageContext } from '../contexts/LanguageContext';  // Adjust the path according to your folder structure


// Initialize Firebase with the given configuration
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase();
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function Calendar(props) {
    const { isDarkMode, toggleDarkMode, styles } = useDarkMode();
    const { language } = useContext(LanguageContext);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const [visibleMonth, setVisibleMonth] = useState(new Date().getMonth()); // Initialize to current month
    const [cards, setCards] = useState([]);
    const paginationStyles = {
        backgroundColor: styles.pagination.itemBackgroundColor,
        borderColor: styles.pagination.itemBorderColor,
        color: styles.pagination.itemTextColor,
    };

    useEffect(() => {
        if (visibleMonth !== null) {
            const currentMonthName = months[visibleMonth].toLowerCase();
            const cardRef = ref(db, `visibleMonth/cards/${currentMonthName}`);
            onValue(cardRef, (snapshot) => {
                const cardData = snapshot.val();
                console.log('Current Language:', language, '& Fetched Data:', cardData);  // Debugging line

                let processedData = [];

                if (cardData) {
                    if (language === '2') {  // English
                        processedData = cardData.en ? cardData.en.filter(card => card !== null && card !== undefined) : [];
                    } else {  // German
                        // Exclude the 'en' property and get the rest of the data
                        const { en, ...germanData } = cardData;
                        processedData = Object.values(germanData).filter(card => card !== null && card !== undefined);
                    }
                }

                console.log('Processed Data:', processedData);  // Debugging line
                setCards(processedData);
            });
            return () => off(cardRef);
        }
    }, [visibleMonth, language]);  // Added 'language' dependency here





    console.log('Current Language:', language);

    return (
        <div style={styles.outerDiv}>
            <Box className="calendar" style={styles.calendar} p={5}>
                <Text fontSize="2xl" mb={5} style={{ color: styles.textColor }}>Calendar</Text>

                {/* Month Slider */}
                <label
                    htmlFor="month-slider"
                    style={{ color: styles.textColor }}
                >
                    Select Month:
                </label>
                <div
                    style={{
                        backgroundColor: paginationStyles.itemBackgroundColor,
                        borderColor: paginationStyles.itemBorderColor,
                    }}
                >
                    <Pagination
                        simple
                        defaultCurrent={visibleMonth + 1}
                        total={12}
                        pageSize={1}
                        style={{
                            color: paginationStyles.itemTextColor
                        }}
                        onChange={(page) => setVisibleMonth(page - 1)}
                    />
                </div>
                <Text style={{ color: styles.textColor }}>{months[visibleMonth]}</Text>

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
                                coordinates={card.coordinates}
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

export default Calendar;
