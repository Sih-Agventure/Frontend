import { Step, Steps, useSteps } from "chakra-ui-steps";
import { FiClipboard, FiDollarSign, FiUser } from "react-icons/fi";
import { Formik } from "formik";
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
// const steps = [
//   { label: "Registration", icon: FiUser },
//   { label: "Verification", icon: FiClipboard },
//   { label: "Submit", icon: FiDollarSign },
// ]

import { register } from "../../redux/api/User/user";
import { useHistory } from "react-router-dom";

export const FRegistration = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  let history = useHistory();

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = (values) => {
    sleep(300).then(async() => {
      const res = await register(values)
      sessionStorage.setItem("token", res.data.token);
      history.push("/rent")
      window.alert(JSON.stringify(values, null, 2));
      nextStep();

    });
  };

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
  return (
    <Flex flexDir="column" width="100%">
      <Steps activeStep={activeStep} width="35%" mx="auto" my="7">
        <Step label={"registration"} icon={FiUser}>
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
                w="35%"
                p={6}
                m="10px auto"
                as="form"
                onSubmit={handleSubmit}
                boxShadow="3px 5px #dde9e0"
              >

                <InputControl name="email" label="Email" />
                <InputControl name="username" label="Username" />
            <InputControl name="password" label="Password" inputProps={{type:'password'}}/>
                <InputControl name="firstName" label="First Name" />
                <InputControl name="middleName" label="Middle Name" />
                <InputControl name="lastName" label="Last Name" />
                <InputControl name="Aadhar" label="Aadhar Number" />
                <TextareaControl name="Address" label="Address" />
                <InputControl name="Pincode" label="Pincode" />
                <ButtonGroup ml="50%" mt="7">
                <ResetButton mr="10" w="130px">Reset</ResetButton>
                  <SubmitButton w="130px">Next</SubmitButton>
                </ButtonGroup>
              </Box>
            )}
          </Formik>
        </Step>

        <Step label={"Verification"} icon={FiClipboard}>
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
                w="60%"
                p={6}
                m="10px auto"
                as="form"
                onSubmit={handleSubmit}
              >
                <flex >
                <InputControl name="Mobile" label="Mobile Number" />
                <Button>Send OTP</Button>
                <InputControl name="Otp" label="Enter OTP" />
                <Button>Verify</Button><br/>
                </flex>
                <InputControl name="EmailId" label="Email id" />
                <Button>Send OTP</Button><br/>
                <InputControl name="Otp" label="Enter OTP" />
                <Button>Verify</Button><br/>
                <ButtonGroup>
                  <SubmitButton>Submit</SubmitButton>
                  <ResetButton>Reset</ResetButton>
                </ButtonGroup>
              </Box>
            )}
          </Formik>
        </Step>
        <Step label={"Submit"} icon={FiUser}></Step>
      </Steps>
      {activeStep === 3 ? (
        <Flex px={4} py={4} width="100%" flexDirection="column">
          <Heading fontSize="xl" textAlign="center">
            Woohoo! All steps completed!
          </Heading>
          <Button mx="auto" mt={6} size="sm" onClick={reset}>
            Reset
          </Button>
        </Flex>
      ) :null}
    </Flex>
  );
};

export default FRegistration;
