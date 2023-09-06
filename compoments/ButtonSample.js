import React from "react";
import { Textarea } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { Button } from "@chakra-ui/button"

export default function ButtonSample(props) {
    return (
        // The size prop affects the height of the button
// It can still be overridden by passing a custom height
        <Button
            size='md'
            height='200px'
            width='300px'
            border='2px'
            borderColor='green.500'
            fontSize='90px'
        >
            {props.text}
        </Button>
    )
}