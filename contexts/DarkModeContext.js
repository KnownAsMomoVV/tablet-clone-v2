import React, { createContext, useState, useContext } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
    return useContext(DarkModeContext);
};

export const lightStyles = {
    textColor: '#333', // Text color for light mode
    calendar: {
        backgroundColor: '#f4f4f8',
        // ... other styles specific to light mode
    },
    lightContainer: {
        backgroundColor: '#f4f4f8',
        // ... other light mode styles
    },
    lightHeaderText: {
        color: '#333',
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
    },
    imageContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoContainer: {
        flex: 2,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#e0e0e0', // slightly darker background for the info container in light mode
    },
    cardInfoContainer: {
        flexDirection: 'row',
        marginBottom: 12,
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        backgroundColor: '#fff', // white background for card info in light mode
    },
    cardInfoText: {
        fontSize: 18,
        color: '#333', // dark gray for text in light theme
        marginLeft: 6,
    },
    cardInfoLabel: {
        fontSize: 20,
        fontWeight: '600',
        color: '#555', // slightly lighter gray for labels in light theme
    },
    // ... other component styles for light mode
};

export const darkStyles = {
    textColor: '#fff', // Text color for dark mode
    darkContainer: {
        backgroundColor: '#282c34',
        // ... other dark mode styles
    },
    darkHeaderText: {
        color: '#fff',
    },
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
    },
    imageContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoContainer: {
        flex: 2,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#333', // slightly lighter background for the info container in dark mode
    },
    cardInfoContainer: {
        flexDirection: 'row',
        marginBottom: 12,
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        backgroundColor: '#444', // even darker background for card info in dark mode
    },
    cardInfoText: {
        fontSize: 18,
        color: '#ddd', // light gray for text in dark theme
        marginLeft: 6,
    },
    cardInfoLabel: {
        fontSize: 20,
        fontWeight: '600',
        color: '#bbb', // slightly lighter gray for labels in dark theme
    },

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