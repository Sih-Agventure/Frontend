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
  } from '@chakra-ui/react';
  import "./card.css"
  import { Icon } from '@chakra-ui/react'
import { MdSettings } from 'react-icons/md'
import { BiBookmark } from "react-icons/bi";
  
  export default function EquipmentCard() {
    return (
      <Flex mt={5} mr={5}  className="card"
    
    >
        <Stack
        
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '540px' }}
          height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-m51uiOfYIKeUYJP2qNPDR8CX7pB4hKbNA&usqp=CAU'
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
           <Flex flexDir="row" alignItems="center" mb="3">
           <Heading fontSize={'3xl'} fontFamily={'body'} mr="15" >
              Tractor
            </Heading>
            <Icon as={ BiBookmark}  cursor="pointer"/>
           </Flex >
            <Text 
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              
              <span style={{fontWeight:"bold"}}>Start Date :</span> 14/03/2021
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              
              <span style={{fontWeight:"bold"}}> End Date : </span>17/03/2021
            </Text>
            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                 <span style={{fontWeight:"bold"}}> Address :</span> Kalyan , Thane
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
            <Text fontWeight={800} fontSize={'xl'} >
               ₹ 2,000 / hr
            </Text>
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}>
                Message
              </Button>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}>
                Buy
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    );
  }