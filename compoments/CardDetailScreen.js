// Imports
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image, Box } from '@chakra-ui/react';

// CardDetailScreen Component
function CardDetailScreen({ route }) {
    const { ImageURL, heading, text, date } = route.params.card;

    return (
        <View style={styles.container}>
            <CardImage src={ImageURL} />
            <View style={styles.infoContainer}>
                <CardInfo detail={heading} />
                <CardInfo detail={text} />
                <CardInfo detail={date} />
            </View>
        </View>
    );
}

// CardImage Component
function CardImage({ src }) {
    return (
        <Box style={styles.imageContainer}>
            <Image
                objectFit='contain'   // Change to 'contain' so image isn't clipped
                width="100%"          // Full width of its container
                height="100%"         // Full height of its container
                maxHeight="90%"
                borderRadius="md"
                src={src}
                alt='Caffe Latte'
            />
        </Box>
    );
}

// CardInfo Component
function CardInfo({ label, detail }) {
    return (
        <View style={styles.cardInfoContainer}>
            <Text style={styles.cardInfoLabel}>{label}</Text>
            <Text style={styles.cardInfoText}>{detail}</Text>
        </View>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 20,        // Small margin to the left of the image
    },
    imageContainer: {
        flex: 3,
        justifyContent: 'center',  // Center the image vertically
        alignItems: 'center',      // Center the image horizontally
    },
    infoContainer: {
        flex: 2,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    cardInfoContainer: {
        flexDirection: 'row',
        marginBottom: 12,
        alignItems: 'center',
        backgroundColor: '#f7f7f9',
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

});

// Export
export default CardDetailScreen;
