import React, { PureComponent } from "react";
import { Flex, Spacer, Heading, Text, Link } from "@chakra-ui/react";
import Tractor from "../../Assets/Tractor.jpg";

function AboutUs() {
  return (
    <>
      {/* <flex flexDir="Column" justifyContent> */}

      <Flex flexDir="row">
        <img src={Tractor} width="50%" height="70%" />
        <Flex width="60%" flexDir="column" mt="2%">
          <Text
            fontSize="6xl"
            mt="2"
            noOfLines={3}
            lineHeight="1"
            letter-spacing="0.5"
            fontWeight="semibold"
            textAlign="center"
            overflow={"none"}
          >
            About Agventure!!
          </Text>
          <Text
            fontSize="3xl"
            noOfLines={3}
            lineHeight="1"
            letter-spacing="0.5"
            textAlign="center"
            mt="4%"
          >
            Equipment Rental Service for Farmers.
          </Text>
          <Text
            fontSize="2xl"
            mt="4"
            lineHeight="1"
            letter-spacing="0.5"
            // fontWeight="semibold"
            textAlign="left"
            mr="5%"
            ml="5%"
          >
            <p>
              Agventure is an initiative by MSDE- Ministry of Skill Development
              and Entrepreneurship, to increase easy access to farm
              mechanization solutions through rental of tractors and farm
              equipment for small and large farms. Small and marginal farmers,
              who hold more than 80% of the land holdings in India may not be
              able to afford ownership of tractors or implements. Agventure
              bridges this gap by connecting these farmers with tractor and
              equipment owners through its Farmer-2-Farmer and CHC-2-Farmer platform.
            </p>
            <br />
            <p>
              Farmers can explore and book nearbyequipment through:
              <br />
              Agventure-mobile-app
              <br />
              <Link color={"blue.400"}>Agventure mobile app</Link>
              <br /> <br />
              Toll free helpline:
              <br />
              <Link color={"blue.400"}> 1800-4-200-100 / 1800-208-4242</Link>
              <br /> <br />
              This free app connects tractor owners and Custom Hiring Centres
              (CHCs) operated by tractors and equipment owners directly to
              farmers seeking farm mechanization solutions, thereby facilitating
              a fair and transparent rental process while focusing on quality,
              dependability and timely delivery. Agventure offers the farmers
              and renters a wide range of prospects for hiring and renting of
              farm equipment and connects them directly to negotiate and fulfil
              their respective requirement.
            </p>
            <br />
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

export default AboutUs;
