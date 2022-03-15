import { Step, Steps, useSteps } from "chakra-ui-steps";
import { FiClipboard, FiDollarSign, FiUser } from "react-icons/fi";
import { Formik } from "formik";
import { useState } from "react";
import { RMIUploader } from "react-multiple-image-uploader";

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

export const Rent = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = (values) => {
    sleep(300).then(() => {
      window.alert(JSON.stringify(values, null, 2));
      nextStep();
    });
  };

  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    Aadhar: "",
    Address: "",
    Pincode: "",
    Mobile: "",
    EmailId: "",
  };
  const validationSchema = Yup.object({
    // firstName: Yup.string().required(),
    // lastName: Yup.string().required(),
    // Aadhar:"Yup.string().required()",
    // Address:"Yup.string().required()",
    // Pincode:"Yup.number().required()",
    // Mobile:"Yup.number()",
    // EmailId:"Yup.string()",
  });
  const [visible, setVisible] = useState(false);
  const [a, setA] = useState([]);
  const handleSetVisible = () => {
    setVisible(true);
  };
  const hideModal = () => {
    setVisible(false);
  };
  const onUpload = (data) => {
    setA(data)
    console.log("Upload files", data);
  };
  const onSelect = (data) => {
    console.log("Select files", data);
  };
  const onRemove = (id) => {
    console.log("Remove image id", id);
  };
  return (
    <Flex flexDir="column" width="100%">
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
            <InputControl name="Implementname" label="Select Implement Name" />
            <InputControl name="Specification" label="Enter Specification" />
            <InputControl name=" Hiringcost" label="Enter Hiring Cost" />
            {/* <InputControl name="Quantity" label="Aadhar Number" /> */}
            <InputControl name="unit" label="Unit" />
            
            <InputControl name="DueDate" label="Due Date" />
            <RMIUploader
              isOpen={visible}
              hideModal={hideModal}
              onSelect={onSelect}
              onUpload={onUpload}
              onRemove={onRemove}
              dataSources={a}
            />
            <ButtonGroup ml="50%" mt="7">
              <ResetButton mr="10" w="130px">
                Reset
              </ResetButton>
              <SubmitButton w="130px">Next</SubmitButton>
            </ButtonGroup>
          </Box>
        )}
      </Formik>
    </Flex>
  );
};

export default Rent;
