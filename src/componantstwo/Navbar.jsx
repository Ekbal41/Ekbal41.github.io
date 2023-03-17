import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Flex,
  Stack,
  Text,
  Box,
  useColorMode,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
  Tooltip,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { RiCommandFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { PalletCtx } from "../context/PalletCotext";
import useSound from "use-sound";
import beep from "../assets/beep.mp3";
import ping from "../assets/ping.mp3";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { open, setOpen } = useContext(PalletCtx);
  const [beepPlay] = useSound(beep, { volume: 0.5 });
  const [pingPlay] = useSound(ping, { volume: 0.5 });
  const toggleCmdK = () => {
    setOpen(!open);
    beepPlay();
  };
  const colorModeHandler = () => {
    toggleColorMode();
    pingPlay();
  };

  return (
    <>
      <Box
        position="sticky"
        top="0"
        zIndex={10}
        bg={colorMode === "light" ? "white" : "#17181b"}
        color={colorMode === "light" ? "" : "gray.200"}
      >
        <Container maxW={"90%"}>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            py={8}
            as="nav"
          >
            <Text fontWeight={"bold"} fontSize={20}>
              Asif Ekbal
            </Text>
            <Stack direction="row" spacing={4} align="center">
              <Tooltip label="Command Palette">
                <IconButton
                  className="modebtn"
                  as={Button}
                  colorScheme="gray.50"
                  borderRadius={24}
                  variant="ghost"
                  onClick={toggleCmdK}
                  aria-label="command pallet"
                  icon={<RiCommandFill />}
                />
              </Tooltip>
              <Tooltip label="Color Mode">
                <IconButton
                  className="modebtn"
                  as={Button}
                  colorScheme="gray.50"
                  borderRadius={24}
                  variant="ghost"
                  onClick={colorModeHandler}
                  aria-label="Color Mode toggle"
                  icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                />
              </Tooltip>
              <Box>
                <Menu>
                  <Tooltip label="Profile">
                    <MenuButton
                      as={IconButton}
                      icon={<CgProfile />}
                      borderRadius={24}
                      colorScheme="gray"
                      variant="ghost"
                    ></MenuButton>
                  </Tooltip>
                  <MenuList>
                    <MenuGroup title="Profile">
                      <MenuItem>My Account</MenuItem>
                      <MenuItem>Payments </MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title="Help">
                      <MenuItem>Docs</MenuItem>
                      <MenuItem>FAQ</MenuItem>
                    </MenuGroup>
                  </MenuList>
                </Menu>
              </Box>
            </Stack>
          </Flex>
        </Container>
      </Box>
    </>
  );
}

export default Navbar;
