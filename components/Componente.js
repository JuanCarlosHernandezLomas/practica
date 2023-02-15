import { Box, Heading, AspectRatio, Image, Text, Center } from "native-base";
import { Component } from "react";

export default function Componente  ()  {
  return <Box  alignItems="center" borderColor="blue.400" >
  <Box  rounded="lg" overflow="hidden"borderColor="red.400"  borderWidth="1">
                < Box position="absolute"    borderColor="violet.400"> 

            <     AspectRatio w="20" ratio={{
      base: 8 / 8,
      md: 2 / 10
    }}height={{
      base: 150,
      md: 50
    }}>
                  <Image  rounded="lg" resizeMode="cover" source={{
    uri: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                   }} alt="Picture of a Flower" />
              </AspectRatio>
              <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            PHOTOS
          </Center> 
          </Box>
          <Heading size="md" ml="180" color={"violet.400"}>
            The Garden City
          </Heading>
          <Text  fontSize="xs" _light={{
          color: "violet.400"
        }} _dark={{
          color: "violet.400"
        }} fontWeight="500" ml="150" mt="-1">
            The Silicon Valley of India.
          </Text>
        <Text fontWeight="500" ml="150" color={"violet.400"}>
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>
            <Text   ml="150"color="coolGray.600" _dark={{
            color: "warmGray.200"
          }} fontWeight="400">
              6 mins ago
            </Text>
          
  </Box>
  
  
      </Box> 
};
