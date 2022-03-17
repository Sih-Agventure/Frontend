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

  import useCollapse from 'react-collapsed';

  export default function Equipconf() {
    return (
      <Center>
      <Flex mt={5} mr={5}>
        <Stack
        
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '50%', md: '800px' }}
          height={{ sm: '500px', md: '15rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2x1'}
          marginLeft={50}
          >
          <Flex flex={15} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                'https://images.unsplash.com/photo-1564868480822-32f714a0e763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhY3RvcnxlbnwwfHwwfHw%3D&w=1000&q=80' 
              }
            />
          </Flex>
          <Stack
            flex={25}
            flexDirection="column"
            justifyContent="center"
            p={1}
            pt={2}>

            <Heading textAlign={'center'} color={'red'} fontSize={'20'} fontFamily={'body'}>
              <b>Rohit Karalkar</b>
            </Heading>

            <Text textAlign={'center'} fontWeight={600} fontSize={'15'}>
               <b>Equipment Name : </b>Tractor
            </Text>

            <Text textAlign={'center'} fontWeight={600} fontSize={'15'}>
              <b>Product ID:  </b> 9137772979
            </Text>

            <Text textAlign={'center'} fontWeight={600} fontSize={'15'}>
               <b>Offer Price : </b>₹ 2,000 / hr
            </Text>

            <Text fontWeight={600} fontSize={'15'}
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              
              <b>Date Required :</b> 14/03/2021 - 17/03/2022
            </Text>

            <Text fontWeight={600} fontSize={'15'}
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              
              <b>Location :</b> Kalyan
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
                fontSize={'18'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}>
                Accept
              </Button>
              <Button
                flex={1}
                fontSize={'18'}
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
                Reject
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
      </Center>
    );
  }
