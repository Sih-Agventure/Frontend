import React from 'react'
import  { Button,Heading,Text } from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import { Wrap, WrapItem ,Center} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Cpwe from './Cpwe' 

function Home() {
  return (
    <>
    <div>Home Page</div>
    <Link to="/signin"><Button>Signin</Button></Link>
    <Heading>Farm Real Estate Platform For Farmers and Landowners</Heading>
    <Text>Find farm plat maps. Access farm real estate data and get real insights on land value.</Text>

    <Tabs>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>
<Cpwe/>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>

    <Heading>Farmland Made Simple</Heading>
    <Text>Simplifying farm real estate and farm management for landowners.
Connecting farmers with more land and farm financing options.</Text>

    <Wrap>
  <WrapItem>
    <Center w='180px' h='80px' bg='red.200'>
      Box 1
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='180px' h='80px' bg='green.200'>
      Box 2
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='180px' h='80px' bg='tomato'>
      Box 3
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='180px' h='80px' bg='blue.200'>
      Box 4
    </Center>
  </WrapItem>
</Wrap>

<Heading>Recently Listed Farms For Sale</Heading>
<Cpwe/>
<Cpwe/>
    </>
  )
}

export default Home