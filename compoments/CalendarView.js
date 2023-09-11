import React, { useState } from "react";
import { StyleSheet, View } from 'react-native';
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

export default function CalendarView(props) {
    return (
        <View style={styles.container}>
                <Calendar></Calendar>
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