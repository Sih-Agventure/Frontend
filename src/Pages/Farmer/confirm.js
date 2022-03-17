import React from "react";
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

export default function confirm() {
  return (
    
    <Flex flexDir="column" w="100%">  
    
        <Equipconf />
        <Equipconf />

    </Flex>
  );
}
