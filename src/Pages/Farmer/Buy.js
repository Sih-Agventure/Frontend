import React,{useEffect,useState } from "react";
import EquipmentCard from "../../Components/Cards/EquipmentCard";
import {
  Flex,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Input,
  Stack, Text
} from "@chakra-ui/react";
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import SearchField from "react-search-field";
import { listEquipment } from "../../redux/api/User/user";

export default function Buy() {
  const [items,setItems] = useState([]);
  useEffect(async() => {
    const res = await listEquipment();
    setItems(res.data.data)
    console.log(res.data.data)
  }, []);
  return (
    
    
    <div>
      {window.sessionStorage.getItem('token') ?<Flex flexDir="column" w="100%">  
      <Flex mt="5"  mx="30%">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} mr="5%" w="20%">
            Filter
          </MenuButton>
          <MenuList>
            <MenuItem>Equipment Name 223</MenuItem>
            <MenuItem>Distance Range</MenuItem>
            <MenuItem>Price</MenuItem>
            <MenuItem>Start Date</MenuItem>
            <MenuItem>End Date</MenuItem>
            <MenuItem>Hourly / Daily</MenuItem>
          </MenuList>
        </Menu>
        <Input placeholder='Search by Equipment Name' w="75%" rightIcon={<Search2Icon/>} />
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" gap={3}>

        {items.map((item)=> (
        <EquipmentCard props={item}/>

        ))}
      </Grid>
    </Flex> :       <div>
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
        </div>}
    </div>
  );
}
