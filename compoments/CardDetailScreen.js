import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image, Box } from '@chakra-ui/react';
import {useDarkMode} from "../contexts/DarkModeContext";
import MapView from "./MapView"
import '../assets/Map.css'
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

function CardDetailScreen({ route }) {
    const { language } = useContext(LanguageContext); // access the current language
    const { ImageURL, heading, text, date, coordinates } = route.params.card;
    const { isDarkMode, toggleDarkMode, styles: themeStyles } = useDarkMode();

    return (
        <View style={themeStyles.container}>
            <div style={styles.imageContainer}>
            <CardImage src={ImageURL} />
            </div>
            <View style={styles.infoContainer}>
                <CardInfo detail={heading} />
                <CardInfo detail={text} />
                <CardInfo detail={date} />
            </View>
            <MapView detail={coordinates} />
        </View>
    );
}

function CardImage({ src }) {
    const { isDarkMode, toggleDarkMode, styles: themeStyles } = useDarkMode();
    return (
        <Box style={themeStyles.imageContainer}>
            <Image
                objectFit='contain'
                // center the image
                justifyItems='center'
                width="30rem"
                height="50%"
                maxHeight="90%"
                borderRadius="md"
                src={src}
                alt='Caffe Latte'
            />
        </Box>
    );
}

function CardInfo({ label, detail }) {
    const { styles } = useDarkMode();
    const { isDarkMode, toggleDarkMode, styles: themeStyles } = useDarkMode();
    return (
        <View style={themeStyles.cardInfoContainer}>
            <Text style={styles.cardInfoLabel}>{label}</Text>
            <Text style={styles.cardInfoText}>{detail}</Text>
        </View>
    );
}

// Google Maps API

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 20,
    },
    imageContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoContainer: {
        flex: 2,
        justifyContent: 'left',
        paddingHorizontal: 20,
        maxWidth: 600,
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
    },
    cardInfoText: {
        fontSize: 18,
        color: '#333',
        marginLeft: 6,
    },
    cardInfoLabel: {
        fontSize: 20,
        fontWeight: '600',
        color: '#555',
    },
    cardInfoCoordinates: {
        display: 'none'
    }
});


export default CardDetailScreen;
