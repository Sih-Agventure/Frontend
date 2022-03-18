import React,{useEffect,useState} from "react";
import Equipview from "../../Components/Cards/Equipview";
import Equipconf from "../../Components/Cards/Equipconf";
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
import { getEquipmentOffers } from "../../redux/api/User/user";
import jwt_decode from "jwt-decode";



export default function Confirm() {
  const [offers,setOffers] = useState([]) 

  useEffect(async() => {
    const user = jwt_decode(window.sessionStorage.getItem("token"))
    let res =await getEquipmentOffers(user.id)
    setOffers(res.data.offers)
    console.log(res.data.offers)
  }, []);
  return (
    
    <Flex flexDir="column" w="100%">  
        {offers.map((offer) => (
        <Equipconf props={offer}/>

        ))}

    </Flex>
  );
}
