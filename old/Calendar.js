// Calendar.js
import React, { useState } from "react";
import '/assets/calendar.css';
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function Calendar() {
    const [selectedMonth, setSelectedMonth] = useState(null);

    return (
        <div className="calendar">
            <h1>Calendar</h1>
            <div className="months-grid">
                {months.map((month, index) => (
                    <Month key={index} name={month} onSelect={() => setSelectedMonth(index)} />
                ))}
            </div>
        </div>
    );
}

function Month({ name, onSelect }) {
    return (
        <div className="month-box" onClick={onSelect}>
            {name}
        </div>
    );
}


export default Calendar;
