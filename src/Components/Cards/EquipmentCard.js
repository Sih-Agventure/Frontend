import { useState } from "react";
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Input,
} from "@chakra-ui/react";
import "./card.css";
import { Icon } from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";
import { BiBookmark } from "react-icons/bi";
import moment from "moment";
import { uploadOffer } from "../../redux/api/User/user";
import jwt_decode from "jwt-decode";
import Chat from "../Chat";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
export default function EquipmentCard(props) {
  const toast = useToast();
  const { isOpen: isO, onOpen: onO, onClose: onC } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  let history = useHistory();
  console.log(props);
  return (
    <Flex mt={5} mr={5} className="card">
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "540px" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={`http://127.0.0.1:5000/${props.props.productImage?.replace(
              "uploads\\",
              ""
            )}`}
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Flex flexDir="row" alignItems="center" mb="3">
            <Heading fontSize={"3xl"} fontFamily={"body"} mr="15">
              {props.props.equipment_name}
            </Heading>
            <Icon as={BiBookmark} />
          </Flex>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            <span style={{ fontWeight: "bold" }}>Start Date :</span>{" "}
            {moment(props.props.start_date).format("DD/MM/YYYY")}
          </Text>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            <span style={{ fontWeight: "bold" }}> End Date : </span>
            {moment(props.props.end_date).format("DD/MM/YYYY")}
          </Text>
          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              <span style={{ fontWeight: "bold" }}> Address :</span> Kalyan ,
              Thane
            </Badge>
            {/* <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                Thane,
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                Maharashtra
              </Badge> */}
          </Stack>
          <Text fontWeight={800} fontSize={"xl"}>
            ₹ 2,000 / {props.props.unit === "daily" ? "day" : "hr"}
          </Text>
          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
              onClick={()=>onO()}
            >
              Message
            </Button>
            <Button
              onClick={onOpen}
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Buy
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader textAlign={"center"}>Place your Order</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text fontSize={25}>Start Date</Text>
                  <Input
                    placeholder="Basic usage"
                    type="date"
                    onChange={(e) => {
                      setStartDate(e.target.value);
                    }}
                  />

                  <Text fontSize={25}>End Date</Text>
                  <Input
                    placeholder="Basic usage"
                    type="date"
                    onChange={(e) => {
                      setEndDate(e.target.value);
                    }}
                  />
                  <Text fontSize={25}>Price</Text>
                  <Input
                    id="price"
                    placeholder="Price"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />

                  {/* <Text fontSize={25}>
        Total Price = {parseInt(name) * (endDate - startDate)}
      </Text> */}
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button
                    variant="ghost"
                    type="submit"
                    // onClick={() => {
                    //   console.log({
                    //     price: name,
                    //     startDate,
                    //     endDate,
                    //   });
                    // }}
                    onClick={async () => {
                      toast({
                        title: "Booking Requested!",
                        description: "Your offer has been Received",
                        status: "success",
                        duration: 4000,
                        isClosable: true,
                      });
                      const user = jwt_decode(
                        window.sessionStorage.getItem("token")
                      );

                      const res = await uploadOffer({
                        equipment_id: props.props.equipment_id,
                        buyer_id: user.id,
                        price: name,
                        start_date: startDate,
                        end_date: endDate,
                        equipment_name: props.props.equipment_name,
                        unit: props.props.unit,
                        original_start_date: props.props.start_date,
                        original_end_date: props.props.end_date,
                      });
                      // history.push("/")
                    }}
                  >
                    Book Now
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            
            <Modal isOpen={isO} onClose={onC}  size={'full'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Chat />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onC}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
            
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
}
