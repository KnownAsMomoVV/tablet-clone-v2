import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import CalendarEvent from "./CalendarEvent"; // Import your CalendarEvent component

export default function CardExample(props) {
    const [showEvent, setShowEvent] = useState(false);
    const [eventData, setEventData] = useState(null); // Add this line

    const handleNavigation = () => {
        if (showEvent) {
            setShowEvent(false);
        } else {
            setEventData(props); // Set the card data
            setShowEvent(true);
        }
    }

    if (showEvent) {
        return (
            <div onClick={() => setShowEvent(false)}>
            <CalendarEvent data={eventData} setShowEvent={setShowEvent} />;
            </div>
            )
    }

    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            p={5} // padding inside the card
            boxShadow="lg" // shadow for depth
            borderRadius="md" // rounded corners
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                borderRadius="md" // rounded corners for the image
                src={props.ImageURL}
                alt='Caffe Latte'
                cursor="pointer" // Cursor changes to pointer on hover to indicate it's clickable
                onClick={handleNavigation}
            />

            <Stack spacing={4}>  {/* Added spacing for content inside */}
                <CardBody>
                    <Heading size='md'> {props.heading} </Heading>
                    <Text py='2'>
                        {props.text}
                    </Text>
                    <Text>
                        {props.date}
                    </Text>
                </CardBody>
            </Stack>
        </Card>
    )
}
