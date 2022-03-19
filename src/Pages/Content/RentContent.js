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
function RentContent() {
  return ( 
        <div>
            <img alignContent='center'
            src="https://www.jfarmservices.in/img/MF-Tractor-Fleet.jpg"
            alt="First slide"
            width='auto'
            height='270'
            />

            <Flex width='120%' flexDir='column' justifyContent='center'>

            <Stack
            marginBottom={'10px'}>
            <Text 
             marginTop={'20px'} paddingLeft={'40px'} fontWeight={600} fontSize={'25'}>
              <b>BENIFITS OF RENTERS </b>
            </Text>
            </Stack>
            <hr></hr>

            <Stack
            marginLeft={50}
            marginTop={5}
            >

            <Flex flexDir='row' alignContent='center' pad>
                <Flex flexDir='column' width='40%' ml='3%'>
                    <Flex flexDir='row' height='60px' mr='4%' mt='1%' mb='0%'>
                        <span>
                            <img mt='1%'
                            src = 'https://www.jfarmservices.in/img/icons/feedback.png'
                            ></img>
                        </span>
                        <span>
                            <Text 
                            marginTop={'10px'} paddingLeft={'20px'} fontWeight={400} fontSize={'18'}>
                            Improve quality of services based on feedback from the JFarm Services platform
                            </Text>
                        </span>
                        <hr></hr>
                    </Flex>
                    <hr width='95%'></hr>
                    
                    <Flex flexDir='row' height='60px'  mr='4%' mt='1%'>
                        <span>
                            <img mt='1%'
                            src = 'https://www.jfarmservices.in/img/icons/cropping-cycle.png'
                            ></img>
                        </span>
                        <span>
                            <Text 
                            marginTop={'10px'} paddingLeft={'20px'} fontWeight={400} fontSize={'18'}>
                            Maximize earning potential by serving more farmers through out the cropping cycle
                            </Text>
                        </span>
                        <hr></hr>
                    </Flex>
                    <hr width='95%'></hr>

                    <Flex flexDir='row' height='60px' mr='4%' mt='1%'>
                        <span>
                            <img mt='1%'
                            src = 'https://www.jfarmservices.in/img/icons/no-cost-specilised-equip.png'
                            ></img>
                        </span>
                        <span>
                            <Text 
                            marginTop={'10px'} paddingLeft={'20px'} fontWeight={400} fontSize={'18'}>
                            Communicate availability to new and specialized equipment farmers at no cost
                            </Text>
                        </span>
                        <hr></hr>
                    </Flex>
                    <hr width='95%'></hr>
                </Flex>
                <Flex flexDir='column' width='40%' ml='2%'>
                    
                    <Flex flexDir='row' height='70px' mr='15%' mt='1%'>
                    <span>
                        <img mt='1%'
                        src = 'https://www.jfarmservices.in/img/icons/agri-and-non-agri.png'
                        ></img>
                    </span>
                    <span>
                        <Text 
                        marginTop={'10px'} paddingLeft={'20px'} fontWeight={400} fontSize={'18'}>
                        Schedule rental operations for effective season and off-season planning for agricultural and non-agricultural requirement
                        </Text>
                    </span>
                    <hr></hr>
                    </Flex>
                    <hr width='85%'></hr>
                    <Flex flexDir='row' height='60px' mr='5%' mt='1%'>
                        <span>
                            <img mt='1%'
                            src = 'https://www.jfarmservices.in/img/icons/profit.png'
                            ></img>
                        </span>
                        <span>
                            <Text 
                            marginTop={'10px'} paddingLeft={'20px'} fontWeight={400} fontSize={'18'}>
                            Better asset utilization leading to higher business profitability

                            </Text>
                        </span>
                    
                        <hr></hr>
                    </Flex>
                    <hr width='85%'></hr>
                    <Flex flexDir='row' height='60px' mr='15%' mt='1%'>
                    <span>
                        <img mt='1%'
                        src = 'https://www.jfarmservices.in/img/icons/expertise-and-support.png'
                        ></img>
                    </span>
                    <span>
                        <Text 
                        marginTop={'10px'} paddingLeft={'20px'} fontWeight={400} fontSize={'18'}>
                        Benefit from expertise and support of Agventure.
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

export default RentContent;