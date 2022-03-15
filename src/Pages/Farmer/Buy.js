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
  Input
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
    <Flex flexDir="column" w="100%">  
      <Flex mt="5"  mx="30%">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} mr="5%" w="20%">
            Filter
          </MenuButton>
          <MenuList>
            <MenuItem>Equipment Name</MenuItem>
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
    </Flex>
  );
}
