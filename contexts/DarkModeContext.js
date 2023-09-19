import React, { createContext, useState, useContext } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
    return useContext(DarkModeContext);
};

export const lightStyles = {
    calendar: {
        backgroundColor: '#f4f4f8',
        // ... other styles specific to light mode
    },
    container: {
        flex: 1,
        backgroundColor: '#f4f4f8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    month: {
        backgroundColor: 'gray.200',
        color: 'black'
        // ... other styles specific to light mode for month
    },
    outerDiv: {
        backgroundColor: '#f4f4f8'
    }
    // ... other component styles for light mode
};

export const darkStyles = {
    container: {
        flex: 1,
        backgroundColor: '#282c34',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    calendar: {
        backgroundColor: '#282c34',
        // ... other styles specific to dark mode
    },
    month: {
        backgroundColor: 'blue.500',
        color: 'white'
        // ... other styles specific to dark mode for month
    },
    outerDiv: {
        backgroundColor: '#282c34' // or any other dark color you'd like
    }
    // ... other component styles for dark mode
};

export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const currentStyles = isDarkMode ? darkStyles : lightStyles;

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, styles: currentStyles }}>
            {children}
        </DarkModeContext.Provider>
    );
};
