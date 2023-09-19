import React from "react";
import { Textarea } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function Buttons(props) {
    return (
        <Buttons
            size='md'
            height='200px'
            width='250px'
            border='2px'
            borderColor='blue.500'
            px={20}
            fontSize='100px'
        >
            📆
        </Buttons>
    )
}