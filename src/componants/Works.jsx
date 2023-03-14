import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  ScaleFade,
  Text,
} from "@chakra-ui/react";
import React from "react";
import DummyImage from "../assets/dummy.jpg";

function Works({ title, backG, btnText }) {
  return (
    <>
      <Box bg={backG}>
        <Container maxW={"93%"} py={12}>
          <Flex
            justifyContent={"center"}
            flexDir="column"
            alignItems={"center"}
          >
            <Box>
              <Heading my={8}>{title}</Heading>
            </Box>
            <Flex gap={4} mt={4}>
              <Box w={400} p={2}>
                <Image src={DummyImage} mb={4} objectFit="contain" />
                <Text
                  fontSize={"xl"}
                  fontWeight={"bold"}
                  textTransform={"capitalize"}
                >
                  Lorem ipsum dolor sit amet.
                </Text>
              </Box>
              <Box w={400} p={2}>
                <Image src={DummyImage} mb={4} objectFit="contain" />
                <Text
                  fontSize={"xl"}
                  fontWeight={"bold"}
                  textTransform={"capitalize"}
                >
                  Lorem ipsum dolor sit amet.
                </Text>
              </Box>
              <Box w={400} p={2}>
                <Image src={DummyImage} mb={4} objectFit="contain" />
                <Text
                  fontSize={"xl"}
                  fontWeight={"bold"}
                  textTransform={"capitalize"}
                >
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Flex justifyContent={"center"} alignItems={"center"} mt={4}>
            <Button alignSelf={"center"} size="md" colorScheme="purple">
              {btnText}
            </Button>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default Works;
