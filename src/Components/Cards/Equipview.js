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

  export default function Equipview() {
    return (
      <Center>
      <Flex mt={5} mr={5}>
        <Stack
        
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '1700px' }}
          height={{ sm: '600px', md: '35rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2x1'}
          padding={4}>
          <Flex flex={20} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                'https://images.unsplash.com/photo-1564868480822-32f714a0e763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhY3RvcnxlbnwwfHwwfHw%3D&w=1000&q=80' 
              }
            />
          </Flex>
          <Stack
            flex={20}
            flexDirection="column"
            justifyContent="center"
            p={1}
            pt={2}>

            <Text padding={'10px'} fontWeight={600} fontSize={'22'}>
              <b>PRODUCT DETAILS : </b>
            </Text>

            <Heading textAlign={'center'} boxShadow= {'5px, green'} color={'red'} fontSize={'25'} fontFamily={'body'}>
              <b>Equipment Name : </b>Tractor
            </Heading>

            <Text textAlign={'center'} fontWeight={600} fontSize={'20'}>
              <b>Farmer :  </b> Rohit Karalkar
            </Text>
            <Text textAlign={'center'} fontWeight={600} fontSize={'xl'}>
               <b>Rental Price : </b>₹ 2,000 / hr
            </Text>

            <Text fontWeight={600} fontSize={'xl'}
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              
              <b>Start Date :</b> 14/03/2021
            </Text>

            <Text fontWeight={600} fontSize={'xl'}
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              
              <b>End Date :</b> 17/03/2021
            </Text>

            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={2}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'600'}
                fontSize={'15'}>
                Kalyan
              </Badge>
              <Badge
                px={2}
                py={2}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'600'}
                fontSize={'15'}>
                Thane
              </Badge>
              <Badge
                px={2}
                py={2}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'600'}
                fontSize={'15'}>
                Maharashtra
              </Badge>
            </Stack>
            {/* <Collapsible/> */}
            <Text padding={'10px'} fontWeight={600} fontSize={'20'}>
               You can Negotiate with them , 
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
                Via Message
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
                <a href="tel:+91 9137772979">Make a Call</a>
              </Button>
            </Stack>
            <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={3}
            justifyContent={'space-between'}
            alignItems={'center'}>
              
            <Button textAlign={'center'}
                flex={3}
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
                Make an Offer
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
      </Center>
    );
  }

// function Collapsible() {
//   const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
//   return (
//     <div className="collapsible">
//         <div className="header" {...getToggleProps()}>
//             {isExpanded ? <b>Collapse</b> : <b>Some Other Details</b>}
//         </div>
//         <div {...getCollapseProps()} padding={'10px, 5px, 5px, 5px'}>
//             <div className="content">
//                 <ol>
//                   <li><b>Hi</b></li>
//                   <li><b>Hello</b></li>
//                   <li><b>How are You ?</b></li>
//                 </ol>
//             </div>
//         </div>
//     </div>
//     );
//   }