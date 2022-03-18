import React from "react";
// import { FiClipboard, FiDollarSign, FiUser } from "react-icons/fi";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { Logo } from "@choc-ui/logo";
import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
  AiOutlineSearch,
  AiFillBell,
} from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
// import { IoLanguageOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";

export default function App() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  let history = useHistory();

  return (
    <Box shadow="md">
      <chakra.header
        bg={bg}
        borderColor="gray.600"
        borderBottomWidth={1}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack spacing={4} display="flex" alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                  Log in
                </Button>
                <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                  Dashboardvdff
                </Button>
                <Button
                  w="full"
                  variant="solid"
                  colorScheme="brand"
                  leftIcon={<AiOutlineInbox />}
                >
                  Inbox
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  leftIcon={<BsFillCameraVideoFill />}
                >
                  Videos
                </Button>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Logo />
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl">Agventure</chakra.h1>
          </HStack>
          <HStack spacing={3} display="flex" alignItems="center">
            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
              <Button
                variant="ghost"
                leftIcon={<AiFillHome />}
                size="sm"
                onClick={() => history.push("Signin")}
              >
                Login
              </Button>
              <Button variant="ghost" leftIcon={<AiFillHome />} size="sm">
                Dashboard
              </Button>
              <Button
                variant="solid"
                colorScheme="brand"
                leftIcon={<AiOutlineInbox />}
                size="sm"
              >
                Need Help?
              </Button>
              {/* <Button
                variant="ghost"
                leftIcon={<BsFillCameraVideoFill />}
                size="sm"
              >
                Videos
              </Button> */}
              
              <div id="google_element" style={{marginTop:"7px"}}></div>
            </HStack>
            
            {/* <chakra.a
              p={3}
              color={useColorModeValue("gray.800", "inherit")}
              rounded="sm"
              _hover={{ color: useColorModeValue("gray.800", "gray.600") }}
            > */}
              {/* <IoLanguageOutline style={{ height: "25px", width: "25px" }} /> */}
              {/* Change Language */}
              {/* <VisuallyHidden>Notifications</VisuallyHidden>
            </chakra.a> */}

            <Menu>
              <MenuButton>
                <Avatar name="Prasannaa" src="https://bit.ly/broken-link" />
              </MenuButton>
              <MenuList>
                <MenuItem
                onClick={()=>{
                  window.sessionStorage.removeItem("token");
                  history.push("/")
                }}
                >Logout</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Flex>
      </chakra.header>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx={2}
        borderWidth={0}
        // overflowX="auto"
        overflow={"hidden"}
      >
        <Tabs defaultIndex={1} borderBottomColor="transparent">
          <TabList
            font-family="sans-serif"
            font-size="x-large"
            font-weight="400"
          >
            <Tab
              py={4}
              mr={8}
              _focus={{ boxShadow: "none" }}
              onClick={() => history.push("rent")}
            >
              Rent
            </Tab>
            <Tab
              py={4}
              mr={8}
              _focus={{ boxShadow: "none" }}
              onClick={() => history.push("buy")}
            >
              Hire
            </Tab>
            <Tab py={4} mr={8} _focus={{ boxShadow: "none" }}>
              Buy
            </Tab>
            <Tab py={4} mr={8} _focus={{ boxShadow: "none" }}>
              Sell
            </Tab>

            <Tab py={4} mr={8} _focus={{ boxShadow: "none" }}>
              <Menu>
                <MenuButton as={Button}>More</MenuButton>
                <MenuList>
                  <MenuItem minH="48px">About Us</MenuItem>
                  <MenuItem minH="40px">FAQ</MenuItem>
                  <MenuItem minH="40px">How Agventure Works!</MenuItem>
                  <MenuItem
                    minH="40px"
                    onClick={() => history.push("bookingPlaced")}
                  >
                    Booking Placed
                  </MenuItem>
                  <MenuItem
                    minH="40px"
                    onClick={() => history.push("bookingPlaced")}
                  >
                    Booking Status
                  </MenuItem>
                  <MenuItem minH="40px" onClick={() => history.push("")}>
                    Inbox
                  </MenuItem>
                </MenuList>
              </Menu>
            </Tab>
          </TabList>
        </Tabs>
        <Spacer />
        <HStack spacing={3} alignItems="center">
          <InputGroup display={{ base: "none", lg: "block" }} ml="auto">
            <InputLeftElement pointerEvents="none">
              <AiOutlineSearch />
            </InputLeftElement>
            {/* <Input type="tel" placeholder="Search..." /> */}
          </InputGroup>
        </HStack>
      </Flex>
    </Box>
  );
}
