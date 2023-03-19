import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Slide,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import Pimg from "../assets/pimg.png";

function Works({ title, desc, _bg, data }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box px={{ base: 0, md: 20 }} bg={_bg} color={colorMode === "light" ? "" : "gray.200"}>
        <Container
         maxW={"8xl"}
          paddingTop={6}
          paddingBottom={24}
        >
          <Box my={12} mx={{base:6,md:0}}>
            <Heading>{title}</Heading>
            <Text fontSize={"2xl"}>{desc}</Text>
          </Box>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            gap={6}
            marginLeft={{base:4,md:0}}
          >
            {
              //if data show data
              data &&
                data.map((item) => (
                  <GridItem w="100%">
                    <Box
                      sx={{
                        transition: "all 0.2s ease-in-out",
                      }}
                      w={"98%"}
                      p={6}
                      borderRadius={12}
                      border="4px"
                      borderColor={
                        colorMode === "light" ? "gray.200" : "#282a2d"
                      }
                      bg={colorMode === "light" ? "white" : "#17181b"}
                      _hover={{ transform: "scale(1.05)" }}
                    >
                      <Image borderRadius={4} objectFit={"fill"} src={item.image} h={330} w={"100%"} alt="Dan Abramov" />
                      <Text
                        fontWeight={"bold"}
                        fontSize={"3xl"}
                        my={2}
                        textTransform={"capitalize"}
                      >
                        {item.name}
                      </Text>
                      <Text fontSize={"xl"}>
                      {item.desc}
                      </Text>
                    </Box>
                  </GridItem>
                ))
            }
            {/* <GridItem w="100%">
              <Box
                sx={{
                  transition: "all 0.2s ease-in-out",
                }}
                w={"98%"}
                p={6}
                borderRadius={12}
                border="4px"
                borderColor={colorMode === "light" ? "gray.200" : "#282a2d"}
                bg={colorMode === "light" ? "white" : "#17181b"}
                _hover={{ transform: "scale(1.05)" }}
              >
                <Image borderRadius={12} src={Pimg} alt="Dan Abramov" />
                <Text
                  fontWeight={"bold"}
                  fontSize={"3xl"}
                  my={2}
                  textTransform={"capitalize"}
                >
                  Lorem ipsum dolor sit amet.
                </Text>
                <Text fontSize={"xl"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                  elit. Dicta laudantium rem tenetur accusantium recusandae
                  obcaecati possimus hic! Voluptate, impedit.
                </Text>
              </Box>
            </GridItem> */}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Works;