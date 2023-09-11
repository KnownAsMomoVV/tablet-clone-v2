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
import React, { useState } from "react";

export default function Events(props) {
    return (
        <View style={styles.container}>
            <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(3, 1fr)" gap={6}>
        <ButtonSample></ButtonSample>
            </Grid>
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