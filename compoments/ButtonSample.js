import React from "react";
import Icon from '@mdi/react';
import { Button } from "@chakra-ui/button";

export default function ButtonSample(props) {
    return (
        <Button
            size='md'
            height='200px'
            width='300px'
            border='2px'
            borderColor='green.500'
            backgroundColor='green.500'
            fontSize='90px'
            onClick={props.onClick}
        >
            <Icon path={props.icon}
                  size={3}
                  color="black" />
        </Button>
    )
}
