import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from '@chakra-ui/react'
function CardDetailScreen({ route }) {
    const card = route.params.card;

    return (
        <View style={styles.container}>
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                borderRadius="md"
                src={card.ImageURL}
                alt='Caffe Latte'
            />
            <Text>Name: {card.heading}</Text>
            <Text>Description: {card.text}</Text>
            <Text>Date: {card.date}</Text>
            {/* You can display more card details as needed */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CardDetailScreen;
