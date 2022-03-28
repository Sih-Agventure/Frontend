import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Wrap, WrapItem, Center } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Cpwe from "./Cpwe";
import Cards from "../Components/Card";
import { Flex, Spacer, Heading, Text } from "@chakra-ui/react";
import SearchField from "react-search-field";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";
import { Image, Box } from "@chakra-ui/react";
import hero from "../Assets/hero.png";
import leaf from "../Assets/leaf.png";
import tractor from "../Assets/tractor_home.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  let history = useHistory();
  AOS.init({
    duration: 2500,
  });
  return (
    <>
      <img className="farmer_eq" src={hero} />

      <Flex flexDir="row">
        <Flex width="60%" flexDir="column" mt="5%">
          <Text
            fontSize="6xl"
            mt="2"
            noOfLines={3}
            lineHeight="1"
            letter-spacing="0.5"
            fontWeight="semibold"
            textAlign="center"
          >
            AGVENTURE
          </Text>
          <Text
            fontSize="3xl"
            noOfLines={3}
            lineHeight="1"
            letter-spacing="0.5"
            textAlign="center"
            mt="3%"
            overflow={"none"}
          >
            Equipment Rental Service for Farmers.
          </Text>
          <Flex>
            <Tabs isFitted w="100%" mt="5%" mx="10%">
              <TabList mb="1em">
                <Tab>Find</Tab>
                <Tab>Rent</Tab>
                <Tab>Buy</Tab>
                <Tab>Sell</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <SearchField
                    placeholder="Enter land, address or pincode"
                    // onChange={onChange}

                    classNames="test-class"
                  />
                </TabPanel>
                <TabPanel>
                  <Button
                    colorScheme="teal"
                    size="md"
                    onClick={() => history.push("Signup")}
                  >
                    Create a Free Account
                  </Button>
                </TabPanel>
                <TabPanel>
                  <Button colorScheme="teal" size="md">
                    View Equipments
                  </Button>
                </TabPanel>
                <TabPanel>
                  <Button colorScheme="teal" size="md">
                    Sell Equipments
                  </Button>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
          <Flex ml={10}>
            <Heading className="quote" fontSize="50px">
              <i>
                <Text fontSize="50px" fontWeight="light" ml={20} mt="10%">
                  &ldquo; If You Ate Today Thank A Farmer &#8221;
                </Text>
              </i>
            </Heading>
          </Flex>
        </Flex>
        {/* <Flex>
          <ReactPlayer
            style={{ marginTop: "10%" }}
            url="https://www.youtube.com/watch?v=-uSmVB1czQQ"
            width="600px"
            height="500px"
          />
        </Flex> */}
      </Flex>
      <img className="leaf" src={leaf} />

      <Flex flexDir="column" mt="15%" mb="1%">
        <Text
          fontSize="6xl"
          mt="5%"
          noOfLines={3}
          lineHeight="1"
          letter-spacing="0.5"
          fontWeight="semibold"
          textAlign="center"
          overflow={"none"}
        >
          Agventure Made Simple
        </Text>
        <Text
          fontSize="3xl"
          letter-spacing="1"
          fontWeight="light"
          textAlign="center"
          w="70%"
          m="auto"
          mt="7"
        >
          <p>
            A very interesting query. In India, the utilisation rate of an
            average farm tractor is very low maybe even in the range of 20 - 30%
            for various reasons, considering that it can be run easily in three
            six-hour periods over a 24 hour period. Now, that is a lot of
            underutilised capacity. So, the main question is, why are people
            still buying new Equipment and adding to the existing underutilised
            capacity? Is it because of some Government subsidy that has the
            possibility of being shared equally by various people including the
            beneficiary? Time to do an Ola or Uber on tractor & other Equipment
            used in the villages, it seems. The existing government machinery
            will not do it for it is not in their “private” interest. Some small
            units are helping this sharing but on a very small scale only ಥ_ಥ.
          </p>

          <Heading fontWeight={400} style={{ color: "#32CD32" }} mt="1%">
            Dont Worry. Agventure have Got Your Back
          </Heading>
        </Text>

        {/*    */}
      </Flex>
      <img className="tractor" src={tractor} data-aos="forward" />
      <Flex flexDir="column" mt="1%" data-aos="zoom">
        <Heading fontSize={50} textAlign="center">
          Recently Listed Equipments For Sale
        </Heading>
        <Flex flexDir="row" mt="1%" mr="0 " mb="1%">
          <Cards />
        </Flex>
      </Flex>
    </>
  );
}

export default Home;