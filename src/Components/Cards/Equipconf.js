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
    Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  } from '@chakra-ui/react';
  import BookingReceivedTable from "../Tables/BookingReceivedTable"
  import { useHistory } from "react-router-dom";

  import useCollapse from 'react-collapsed';

  export default function Equipconf(props) {
    let history = useHistory();

     
    return (
      <Center>
      <Flex mt={5} mr={5}>
        <Stack
        
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '50%', md: '1000px' }}
          height={{ sm: '500px', md: '15rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2x1'}
          marginLeft={50}
          >
          <Flex flex={15} >
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

            <Flex justifyContent={"space-between"}>
            <Heading  color={'blue.400'} fontWeight={"bold"} fontSize={'30'} fontFamily={'body '} >
            {props.props.equipment_name}
            </Heading>
            <Heading  mr={5} mt={2} fontWeight={"light"} fontSize={'30'} fontFamily={'body '} >
            ₹ 9877
            </Heading>
            </Flex>
            {/* <Text  fontWeight={600} fontSize={'15'}>
               <b>Equipment Name : </b>Tractor
            </Text> */}

            <Flex justifyContent={"space-between"}>
            <Text  fontWeight={600} fontSize={'15'}>
              <b>ID :  </b> {props.props.equipment_id}
            </Text>
            <Tag
      borderRadius='full'
      variant='solid'
      colorScheme='green'
      mr={4}
    >
      <TagLabel  >{props.props.offers.length} {props.props.offers.length > 1 ? "offers" :"offer" }</TagLabel>
    </Tag>
            </Flex>             

            <Text  fontWeight={600} fontSize={'15'}>
               <b>Offer Price : </b>₹ 2,000 / {props.props.unit}
            </Text>

            <Text fontWeight={600} fontSize={'15'}
              
              color={useColorModeValue('gray.700', 'gray.400')}
              ><b>Start Date :</b> {props.props.original_start_date}
            </Text>
            <Text fontWeight={600} fontSize={'15'}
              
              color={useColorModeValue('gray.700', 'gray.400')}
              >
              
              <b>End Date :</b> {props.props.original_end_date}
            </Text>

            <Text fontWeight={600} fontSize={'15'}
              
              color={useColorModeValue('gray.700', 'gray.400')}
              >
              
              
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
                }}
                onClick={()=> history.push(`/Equipconf/${props.props.equipment_id}`)}>
                View Offers
              </Button>
              <Button
                flex={1}
                fontSize={'18'}
                rounded={'full'}
                bg={'red.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'red.500',
                }}
                _focus={{
                  bg: 'red.500',
                }}>
                Delete Order
              </Button>
            </Stack>
          </Stack>  
        </Stack>  
      </Flex>
      </Center>
    );
  }
