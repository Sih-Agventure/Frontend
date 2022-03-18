import React, { PureComponent } from 'react';
function AboutUs() {
  return ( 
    <h1>
      sf
    </h1>
   );
}

export default AboutUs;
// import React from "react";
// import { Button } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import { Wrap, WrapItem, Center } from "@chakra-ui/react";
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
// import Cpwe from "./Cpwe";
// import Cards from "../Components/Card";
// import { Flex, Spacer, Heading, Text } from "@chakra-ui/react";
// import SearchField from "react-search-field";
// import ReactPlayer from "react-player";
// import { useHistory } from "react-router-dom";

// function AboutUs() {
//   let history = useHistory();
//   return (
//     <>
//       <Flex flexDir="row">
//         <Flex width="60%" flexDir="column" mt="5%">
//           <Text
//             fontSize="6xl"
//             mt="2"
//             noOfLines={3}
//             lineHeight="1"
//             letter-spacing="0.5"
//             fontWeight="semibold"
//             textAlign="center"
//           >
//             Farm Real Estate Platform For Farmers and Landowners
//           </Text>
//           <Text
//             fontSize="3xl"
//             noOfLines={3}
//             lineHeight="1"
//             letter-spacing="0.5"
//             textAlign="center"
//             mt="5%"
//           >
//             Farm Real Estate Platform For Farmers and Landowners
//           </Text>
//           <Flex>
//             <Tabs isFitted w="100%" mt="5%" mx="10%">
//               <TabList mb="1em">
//                 <Tab>Find</Tab>
//                 <Tab>Rent</Tab>
//                 <Tab>Buy</Tab>
//                 <Tab>Sell</Tab>
//               </TabList>
//               <TabPanels>
//                 <TabPanel>
//                   <SearchField
//                     placeholder="Enter land, address or pincode"
//                     // onChange={onChange}
//                     searchText="Enter land, address or pincode"
//                     classNames="test-class"
//                   />
//                 </TabPanel>
//                 <TabPanel>
//                   <Button colorScheme="teal" size="md" 
//                   onClick={() => history.push("Signup")}
//                   >
//                     Create a Free Account
//                   </Button>
//                 </TabPanel>
//                 <TabPanel>
//                   <Button colorScheme="teal" size="md">
//                     View Equipments
//                   </Button>
//                 </TabPanel>
//                 <TabPanel>
//                   <Button colorScheme="teal" size="md">
//                     Sell Equipments
//                   </Button>
//                 </TabPanel>
//               </TabPanels>
//             </Tabs>
//           </Flex>
//         </Flex>
//         <Flex>
//           <ReactPlayer
//             style={{ marginTop: "10%" }}
//             url="https://www.youtube.com/watch?v=-uSmVB1czQQ"
//             width="600px"
//             height="500px"
//           />
//         </Flex>
//       </Flex>

//       <Flex flexDir="column" mt="15%" mb="15%">
//         <Text
//           fontSize="6xl"
//           mt="2"
//           noOfLines={3}
//           lineHeight="1"
//           letter-spacing="0.5"
//           fontWeight="semibold"
//           textAlign="center"
//         >
//           Agventure Made Simple
//         </Text>
//         <Text
//           fontSize="3xl"
//           noOfLines={3}
//           letter-spacing="1"
//           fontWeight="light"
//           textAlign="center"
//           w="50%"
//           m="auto"
//           mt="7"
//         >
//           Simplifying farm real estate and farm management for
//           landowners.Connecting farmers with more land and farm financing
//           options.
//         </Text>
//         <Flex flexDir="row" mr="5">
//           <Cards />
//           <Cards />
//           <Cards />
//           <Cards />
//         </Flex>
//       </Flex>

//       <Flex flexDir="column" mt="1%">
//         <Heading fontSize={50} textAlign="center">Recently Listed Equipments For Sale</Heading>
//         <Flex flexDir="row" mr="5" mb="10%">
//           <Cpwe />
//           <Cpwe />
//           <Cpwe />
//         </Flex>
//       </Flex>
//     </>
//   );
// }

// export default AboutUs;