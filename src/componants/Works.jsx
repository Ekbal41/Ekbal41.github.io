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
      <Box bg={backG} py={8}>
        <Container maxW={"93%"} py={12}>
          <Flex
            justifyContent={"center"}
            flexDir="column"
            alignItems={"center"}
          >
            <Box>
              <Heading my={8}>{title}</Heading>
            </Box>
            <Flex gap={4} mt={4} flexDir={{base:"column", md:"row"}}>
              <Box w={{base:"100%",md:400}} p={{base:0, md:2}} my={6}>
                <Image src={DummyImage} mb={4} objectFit="contain" />
                <Text
                  fontSize={"xl"}
                  fontWeight={"bold"}
                  textTransform={"capitalize"}
                >
                  Lorem ipsum dolor sit amet.
                </Text>
              </Box>
              <Box w={{base:"100%",md:400}} p={{base:0, md:2}}my={6}>
                <Image src={DummyImage} mb={4} objectFit="contain" />
                <Text
                  fontSize={"xl"}
                  fontWeight={"bold"}
                  textTransform={"capitalize"}
                >
                  Lorem ipsum dolor sit amet.
                </Text>
              </Box>
              <Box w={{base:"100%",md:400}} p={{base:0, md:2}}my={6}>
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
            <Button alignSelf={"center"} size="md" colorScheme="blue">
              {btnText}
            </Button>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default Works;
