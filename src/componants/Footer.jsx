import { Box, Flex, HStack, Text, Tooltip } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        gap={6}
        my={10}
      >
        <Box>
          <Flex gap={4} fontWeight={500}>
            <Text label="Facebook">About Us |</Text>
            <Text label="Twitter">Licensing |</Text>
            <Text label="Instagram">Contact Us</Text>
          </Flex>
        </Box>
        <Flex gap={1}>
          <Text fontWeight={500}>
            Copyright © 2023, All Rights Reserved by{" "}
          </Text>
          <Text color={"purple.500"}>Taiuun.</Text>
        </Flex>
        <HStack spacing="24px" display={{ base: "none", md: "block" }}>
          <Tooltip label="Facebook" placement="left-end">
            <span class="bt-icon">
              <i class="bi bi-facebook"></i>
            </span>
          </Tooltip>
          <Tooltip label="Twitter" placement="bottom-end">
            <span class="bt-icon">
              <i class="bi bi-twitter"></i>
            </span>
          </Tooltip>
          <Tooltip label="Instagram" placement="bottom-end">
            <span class="bt-icon">
              <i class="bi bi-instagram"></i>
            </span>
          </Tooltip>

          <Tooltip label="Github" placement="right-end">
            <span class="bt-icon">
              <i class="bi bi-github"></i>
            </span>
          </Tooltip>
        </HStack>
      </Flex>
    </>
  );
}

export default Footer;
