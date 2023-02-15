import React from "react"
import { Button, Center, VStack } from "native-base"

export default function Stack(){
    return <Center w="100%"  h ="100%" bg={"pink.300"}>
        <VStack space={2} alignContent={ {
            base: "center",
            md: "flex-start"
        } }>
            <Button colorScheme="primary"
            onPress={()=>(console.log("hello"))}>
                nuevo
            </Button>
            <Button colorScheme="primary"
            onPress={()=>(console.log("nuevo"))}>
                hello
            </Button>

        </VStack>
    </Center>

};