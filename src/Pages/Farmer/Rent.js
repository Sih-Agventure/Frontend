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
import jwt_decode from "jwt-decode";
import { postEquipment } from "../../redux/api/User/user";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
// const steps = [
//   { label: "Registration", icon: FiUser },
//   { label: "Verification", icon: FiClipboard },
//   { label: "Submit", icon: FiDollarSign },
// ]


export const Rent = () => {
  const toast = useToast();
  let history = useHistory();
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async(values) => {
      const user = jwt_decode(window.sessionStorage.getItem("token"))
      values.user_id = user.id
      const res = await postEquipment(values)
      toast({
        title: 'Product Listed!!',
        description: "Your Product have been Listed.Keep on checking your inbox & Order Received",
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
      history.push("/") 
      // window.alert(JSON.stringify(values, null, 2));
      // nextStep();
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
    setA(data);
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
            <SelectControl
              style={{ marginTop: "10px" }}
              label="Equipement Name"
              name="equipment_name"
              selectProps={{ placeholder: "Select Equipment Name" }}
            >
              <option value="option1">Tractor</option>
              <option value="option2">Axe</option>
              <option value="option3">Sprinkler</option>
              <option value="option4">Spade</option>
              <option value="option5">Shears</option>
              <option value="option6">Fork</option>
              <option value="option7">WheelBarrow</option>

            </SelectControl>
            {/* ENter Specification Checkbox */}
            {/* <InputControl name="Specification" label="Enter Specification" /> */}
            <CheckboxContainer
              name="specification"
              label="Enter Specification"
              style={{ marginTop: "10px" }}
            >
              <CheckboxControl name="toppings" value="chicken">
                Size
              </CheckboxControl>
              <CheckboxControl name="toppings" value="ham">
                Capacity
              </CheckboxControl>
              <CheckboxControl name="toppings" value="mushrooms">
                Power
              </CheckboxControl>
              <CheckboxControl name="toppings" value="cheese">
                Other
              </CheckboxControl>
            </CheckboxContainer>
            <InputControl
              name=" hiring_cost"
              label="Enter Hiring Cost"
              style={{ marginTop: "10px" }}
            />
            {/* <InputControl name="Quantity" label="Aadhar Number" /> */}

            {/* Unit dropdown hourly/daily */}
            <SelectControl
              style={{ marginTop: "10px" }}
              label="Enter Unit"
              name="unit"
              selectProps={{ placeholder: "Select Unit" }}
            >
              <option value="hourly">Hourly</option>
              <option value="daily">Daily</option>
            </SelectControl>

            <InputControl
              style={{ marginTop: "10px" }}
              name="start_date"
              label="Start Date"
              inputProps={{ type: "date" }}
            />
            <InputControl
              style={{ marginTop: "10px", marginBottom: "10 px" }}
              name="end_date"
              label="End Date"
              inputProps={{ type: "date" }}
            />
            <RMIUploader
              isOpen={visible}
              hideModal={hideModal}
              onSelect={onSelect}
              onUpload={onUpload}
              onRemove={onRemove}
              dataSources={a}
            />
            <ButtonGroup ml="50%" mt="7">
              <ResetButton mr="10" w="100px">
                Reset
              </ResetButton>
              <SubmitButton w="130px" 
              
              >Submit</SubmitButton>
            </ButtonGroup>
          </Box>
        )}
      </Formik>
    </Flex>
  );
};

export default Rent;
