// Calendar.js
import React, { useState, useEffect } from "react";
import '/assets/calendar.css';
import database from './firebase'; // Assuming firebase.js is in the same directory


const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function Calendar() {
    const [visibleMonth, setVisibleMonth] = useState(null);

    useEffect(() => {
        // Fetch the currently visible month from Firebase
        const monthRef = database.ref('visibleMonth');
        monthRef.on('value', (snapshot) => {
            const monthValue = snapshot.val();
            setVisibleMonth(monthValue);
        });

        // Clean up the listener when the component unmounts
        return () => {
            monthRef.off();
        };
    }, []);
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
                            // Update Firebase with the selected month
                            database.ref('visibleMonth').set(index);
                        }}
                    />
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