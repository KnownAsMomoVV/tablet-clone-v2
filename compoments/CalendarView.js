import React, { useState } from "react";
import { StyleSheet, View } from 'react-native';
import Calendar from "../old/Calendar";

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