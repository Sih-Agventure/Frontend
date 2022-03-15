import {
  FormControl,
  FormLabel,
  Checkbox,
  Stack,
  Link,
  Text,
} from '@chakra-ui/react';
import {
  CheckboxContainer,
  CheckboxControl,
  CheckboxSingleControl,
  InputControl,
  NumberInputControl,
  PercentComplete,
  RadioGroupControl,
  ResetButton,
  SelectControl,
  SliderControl,
  SubmitButton,
  SwitchControl,
  TextareaControl,
} from "formik-chakra-ui";
import * as Yup from "yup";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  Tabs,
  TabList,
  Tab,
  Spacer,
  Heading,
  ButtonGroup,
  Radio,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
// import * as Yup from "yup";


import { login } from '../redux/api/User/user'; 
export default function Signin() {
  let history = useHistory();

  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    Aadhar:"",
    Address:"",
    Pincode:"",
    Mobile:"",
    EmailId:"",
  };
  const validationSchema = Yup.object({
    email:Yup.string().email()
    // firstName: Yup.string().required(),
    // lastName: Yup.string().required(),
    // Aadhar:"Yup.string().required()",
    // Address:"Yup.string().required()",
    // Pincode:"Yup.number().required()",
    // Mobile:"Yup.number()",
    // EmailId:"Yup.string()",
  });
  const onSubmit = async(values) => {
   
      const res = await login(values)
      sessionStorage.setItem("token", res.data.token);
      history.push("/rent")
      window.alert(JSON.stringify(values, null, 2));
      nextStep();

  };
  return (
    <Flex
      // minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
        w="100%"
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          // p={8}
          >
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ handleSubmit, values, errors }) => (
              <Box
                borderWidth="1px"
                rounded="lg"
                shadow="1px 1px 3px rgba(0,0,0,0.3)"
                // w="35%"
                p={6}
                // m="10px auto"
                as="form"
                onSubmit={handleSubmit}
                boxShadow="3px 5px #dde9e0"
              >

                <InputControl name="email" label="Email" />
                <InputControl name="username" label="Username" />
            <InputControl name="password" label="Password" inputProps={{type:'password'}}/>
                
                <ButtonGroup d="flex" justifyContent={"flex-end"} mt="7">
                {/* <ResetButton mr="10" w="130px">Reset</ResetButton> */}
                <ResetButton mr="2" >Reset</ResetButton>
                  <SubmitButton >Login</SubmitButton>
                </ButtonGroup>
              </Box>
            )}
          </Formik>
        </Box>
      </Stack>
    </Flex>
  );
}