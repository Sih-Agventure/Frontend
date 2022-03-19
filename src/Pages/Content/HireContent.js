import React, { PureComponent } from 'react';

import {FaHeart} from 'react-icons/fa'
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
import Carousel from 'react-bootstrap/Carousel'
function HireContent() {
  return ( 
        <div>
            <img alignContent='center'
            src="https://www.jfarmservices.in/img/Eicher-Tractor-Implement-hire.jpg"
            alt="First slide"
            width='auto'
            height='270'
            />

            <Flex width='120%' flexDir='column' justifyContent='center'>

            <Stack
            marginBottom={'10px'}>
            <Text 
             marginTop={'20px'} paddingLeft={'40px'} fontWeight={600} fontSize={'25'}>
              <b>BENIFITS TO FARMERS </b>
            </Text>
            </Stack>
            <hr></hr>

            <Stack
            marginLeft={50}
            marginTop={5}
            >

            <Flex flexDir='row' alignContent='center' pad>
                <Flex flexDir='column' width='40%' ml='3%'>
                    <Flex flexDir='row' height='50%' mr='5%' mt='1%'>
                        <span>
                            <img mt='1%'
                            src = 'https://www.jfarmservices.in/img/icon/avoid-capital-investment.png'
                            ></img>
                        </span>
                        <span>
                            <Text 
                            marginTop={'10px'} paddingLeft={'20px'} fontWeight={400} fontSize={'18'}>
                            Ideal alternative to avoid capital investment in farm machinery

                            </Text>
                        </span>
                    
                        <hr></hr>
                    </Flex>
                    <hr width='95%'></hr>
                    <Flex flexDir='row' height='50%'  mr='5%' mt='1%'>
                        <span>
                            <img mt='1%'
                            src = 'https://www.jfarmservices.in/img/icon/quality.png'
                            ></img>
                        </span>
                        <span>
                            <Text 
                            marginTop={'10px'} paddingLeft={'20px'} fontWeight={400} fontSize={'18'}>
                            Access to high quality services with mechanized equipment for all farming needs
                            </Text>
                        </span>
                        <hr></hr>
                    </Flex>
                    <hr width='95%'></hr>
                    <Flex flexDir='row' height='50%' mr='5%' mt='1%'>
                        <span>
                            <img mt='1%'
                            src = 'https://www.jfarmservices.in/img/icon/increase-productivity.png'
                            ></img>
                        </span>
                        <span>
                            <Text 
                            marginTop={'10px'} paddingLeft={'20px'} fontWeight={400} fontSize={'18'}>
                            Reduce input costs and increase productivity
                            </Text>
                        </span>
                        <hr></hr>
                    </Flex>
                    <hr width='95%'></hr>
                    <Flex flexDir='row' height='100px' mr='5%' mt='1%' mb='0.5%'>
                        <span>
                            <img mt='1%'
                            src = 'https://www.jfarmservices.in/img/icon/nearby.png'
                            ></img>
                        </span>
                        <span>
                            <Text 
                            marginTop={'10px'} paddingLeft={'20px'} fontWeight={400} fontSize={'18'}>
                            Identify and hire necessary implements for requirements ranging from land preparation to harvest / post–harvest
                            </Text>
                        </span>
                        <hr></hr>
                    </Flex>
                    <hr width='95%'></hr>
                </Flex>
                <Flex flexDir='column' width='40%' ml='2%'>
                    <Flex flexDir='row' height='50%' mr='15%' mt='1%'>
                        <span>
                            <img mt='1%'
                            src = 'https://www.jfarmservices.in/img/icon/wide-range.png'
                            ></img>
                        </span>
                        <span>
                            <Text 
                            marginTop={'10px'} paddingLeft={'20px'} fontWeight={400} fontSize={'18'}>
                            Choose from a wide range of specialized equipment for each application
                            </Text>
                        </span>
                        <hr></hr>
                    </Flex>
                    <hr width='85%'></hr>
                    <Flex flexDir='row' height='50%' mr='15%' mt='1%'>
                    <span>
                        <img mt='1%'
                        src = 'https://www.jfarmservices.in/img/icon/increase-productivity.png'
                        ></img>
                    </span>
                    <span>
                        <Text 
                        marginTop={'10px'} paddingLeft={'20px'} fontWeight={400} fontSize={'18'}>
                        Reduce input costs and increase productivity
                        </Text>
                    </span>
                    <hr></hr>
                    </Flex>
                    <hr width='85%'></hr>
                    <Flex flexDir='row' height='50%' mr='15%' mt='1%'>
                        <span>
                            <img mt='1%'
                            src = 'https://www.jfarmservices.in/img/icon/operators.png'
                            ></img>
                        </span>
                        <span>
                            <Text 
                            marginTop={'10px'} paddingLeft={'20px'} fontWeight={400} fontSize={'18'}>
                            Get farming needs serviced by high quality operators
                            </Text>
                        </span>
                        <hr></hr>
                    </Flex>
                    <hr width='85%'></hr>
                    <Flex flexDir='row' height='100px' mr='15%' mt='1%' mb='0.5%'>
                    <span>
                        <img mt='1%'
                        src = 'https://www.jfarmservices.in/img/icon/tafe-tamoto.png'
                        ></img>
                    </span>
                    <span>
                        <Text 
                        marginTop={'10px'} paddingLeft={'20px'} fontWeight={400} fontSize={'18'}>
                        Specialized implements best suited for your crops, soil type and weather confirmations in your area
                        </Text>
                    </span>
                    <hr></hr>
                    </Flex>
                    <hr width='85%'></hr>

                </Flex>
            </Flex>  
                
            </Stack>
            
            </Flex>
        </div>
   );
}

export default HireContent;