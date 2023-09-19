import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { TouchableOpacity } from "react-native";

export default function CardExample(props) {

    const handleNavigation = () => {
        props.navigation.navigate('CardDetailScreen', { card: props });
    }

    return (
        <TouchableOpacity onPress={handleNavigation}>
            <Card
                data-testid="card"
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                p={5}
                boxShadow="lg"
                borderRadius="md"
            >
                <Image
                    objectFit='cover'
                    w='100%'
                    h='100%'
                    borderRadius="md"
                    src={props.ImageURL}
                    alt='Das Event Könnte hier stehen'
                />
                <Stack spacing={4}>
                    <CardBody>
                    </CardBody>
                </Stack>
            </Card>
        </TouchableOpacity>
    );
}
