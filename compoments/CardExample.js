import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { TouchableOpacity } from "react-native";

export default function CardExample(props) {

    const handleNavigation = () => {
        props.navigation.navigate('CardDetailScreen', { card: props });
    }

    return (
        <TouchableOpacity onPress={handleNavigation}>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                p={5}
                boxShadow="lg"
                borderRadius="md"
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    borderRadius="md"
                    src={props.ImageURL}
                    alt='Caffe Latte'
                />
                <Stack spacing={4}>
                    <CardBody>
                        <Heading size='md'>{props.heading}</Heading>
                        <Text py='2'>
                            {props.text}
                        </Text>
                        <Text>
                            {props.date}
                        </Text>
                    </CardBody>
                </Stack>
            </Card>
        </TouchableOpacity>
    );
}
