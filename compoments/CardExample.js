import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'
import { Button } from "@chakra-ui/button";
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
export default function CardExample(props) {
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
                src={props.url}
                alt='Caffe Latte'
                cursor="pointer" // Cursor changes to pointer on hover to indicate it's clickable
                onClick={() => {
                    // Handle the click event - for now, we'll just log a message
                    console.log("Image clicked!");
                }}
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
