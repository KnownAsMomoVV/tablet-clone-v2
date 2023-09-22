// EventManager.js
import React, { useState, useEffect } from 'react';
import { Box, Text, Grid, Button, Input, Select } from '@chakra-ui/react';
import { getDatabase, ref, onValue, off, set, remove } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseconfig';  // Adjust this import to your file structure
import {useDarkMode} from "../contexts/DarkModeContext";
import '../assets/EventManager.css';

// Initialize Firebase with the given configuration
initializeApp(firebaseConfig);
const db = getDatabase();

const EventManager = () => {
    const { isDarkMode, toggleDarkMode, styles } = useDarkMode(); // Use the hook
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({
        name: '',
        description: '',
        day: 1,  // Initialize with 1 or any default day you prefer
        pictureURL: ''
    });
    const [selectedMonth, setSelectedMonth] = useState('january');
    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

    useEffect(() => {
        const eventsRef = ref(db, `visibleMonth/cards/${selectedMonth}`);
        const handleValueChange = onValue(eventsRef, (snapshot) => {
            const data = snapshot.val();
            const eventList = [];
            for (let id in data) {
                eventList.push({ id, ...data[id] });
            }
            setEvents(eventList);
        });
        return () => off(eventsRef, handleValueChange);
    }, [selectedMonth]);

    const addEvent = () => {
        // Determine the next key
        let maxKey = 0;
        events.forEach(event => {
            maxKey = Math.max(maxKey, parseInt(event.id, 10));
        });
        const nextKey = maxKey + 1;

        // Form the complete date string
        const completeDate = new Date(new Date().getFullYear(), months.indexOf(selectedMonth), newEvent.day).toISOString();

        // Add new event with the next key
        const newEventRef = ref(db, `visibleMonth/cards/${selectedMonth}/${nextKey}`);
        set(newEventRef, {...newEvent, date: completeDate});

        setNewEvent({
            name: '',
            description: '',
            day: 1,
            pictureURL: ''
        });
    };


    const deleteEvent = (id) => {
        const eventRef = ref(db, `visibleMonth/cards/${selectedMonth}/${id}`);
        remove(eventRef);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEvent(prevState => ({ ...prevState, [name]: value }));
    };

    const lastDayOfMonth = new Date(new Date().getFullYear(), months.indexOf(selectedMonth) + 1, 0).getDate();


    return (
        <Box className="event-manager-container" style={styles.container}>
            <Text className="event-manager-title" style={{ color: styles.textColor }}>
                Event Manager
            </Text>
            <Select onChange={(e) => setSelectedMonth(e.target.value)} value={selectedMonth}>
                {months.map((month, index) => (
                    <option key={index} value={month}>{month.charAt(0).toUpperCase() + month.slice(1)}</option>
                ))}
            </Select>
            <Box mt={5} className="event-manager-form">
                <Input
                    type="text"
                    name="name"
                    value={newEvent.name}
                    onChange={handleChange}
                    placeholder="Event Name"
                    style={styles.input}
                />
                <Input
                    type="text"
                    name="description"
                    value={newEvent.description}
                    onChange={handleChange}
                    placeholder="Event Description"
                />
                <Select name="day" value={newEvent.day} onChange={handleChange}>
                    {Array.from({ length: lastDayOfMonth }, (_, i) => i + 1).map((day) => (
                        <option key={day} value={day}>
                            {day}
                        </option>
                    ))}
                </Select>
                <Input
                    type="text"
                    name="pictureURL"
                    value={newEvent.pictureURL}
                    onChange={handleChange}
                    placeholder="Event Picture URL"
                />
                <Button onClick={addEvent} style={styles.button}>Add Event</Button>
            </Box>
            <Grid templateColumns="repeat(3, 1fr)" gap={5} mt={5}>
                {events.map((event) => (
                    <Box key={event.id} className="event-card" style={styles.card}>
                        <Text>{event.name}</Text>
                        <Text>{event.description}</Text>
                        <Text>{new Date(event.date).toLocaleDateString()}</Text>
                        <img src={event.pictureURL} alt={event.name}/>
                        <Button className="event-card-button" onClick={() => deleteEvent(event.id)}>Delete</Button>
                    </Box>
                ))}
            </Grid>
        </Box>
    );
};

export default EventManager;
