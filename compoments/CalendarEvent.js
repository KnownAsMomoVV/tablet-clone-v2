import React from "react";
import { StyleSheet, View } from 'react-native';
import { Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { Button } from "@chakra-ui/button"
import ButtonSample from "./ButtonSample";
import { Grid } from '@chakra-ui/react';
import Calendar from "./Calendar";

export default function CalendarEvent({ data }) { // Receive the card data as a prop
    return (
        <View style={styles.container}>
            {/* Display the detailed view of the card using the data prop */}
            <Text>{data.heading}</Text>
            <Text>Dings</Text>
            <Image src={data.ImageURL} alt='Caffe Latte' />
            <Text>{data.text}</Text>
            <Text>{data.date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
