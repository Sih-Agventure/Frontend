import React from "react";
import Equipview from "../../Components/Cards/Equipview";
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

export default function Buy() {
  return (
    
    <Flex flexDir="column" w="100%">  
      <Grid templateColumns="repeat(3, 1fr)" gap={3}>
        <Equipview />

      </Grid>
    </Flex>
  );
}
