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
  Stack, Text
} from "@chakra-ui/react";
import ImageUploader from 'react-images-upload';
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
  const [pictures, setPictures] = useState([]);

  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async(values) => {
      const user = jwt_decode(window.sessionStorage.getItem("token"))
      const formData = new FormData();
      console.log(values)
      // values.user_id = user.id
      formData.append('user_id',user.id)
      formData.append('equipment_name',values.equipment_name)
      formData.append('start_date',values.start_date)
      formData.append('end_date',values.end_date)
      formData.append('productImage',pictures[0])
      // formData.append('',values.end_date)
      const res = await postEquipment(formData)
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
  // const [pictures, setPictures] = useState([]);
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
  const onDrop = (picture) => {
        setPictures(picture)
}
  return (
   <div>
      {window.sessionStorage.getItem('token') ? 
  <h1><Flex flexDir="column" width="100%">
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {({ handleSubmit, values, errors }) => (
      <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        w="60%"
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
          <option value="Tractor">Tractor</option>
          <option value="Axe">Axe</option>
          <option value="Sprinkler">Sprinkler</option>
          <option value="Spade">Spade</option>
          <option value="Shears">Shears</option>
          <option value="Fork">Fork</option>
          <option value="WheelBarrow">WheelBarrow</option>

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

          {/* Unit dropdown hourly/daily */}
          <SelectControl
            marginLeft={200}
            style={{ marginTop: "10px" }}
            width="60%"
            label="Enter Unit"
            name="unit"
            selectProps={{ placeholder: "Select Unit" }}
          >
            <option value="hourly">Hourly</option>
            <option value="daily">Daily</option>
          </SelectControl>
        {/* </Flex> */}
        <Flex flexDir="row">
          <InputControl
            width="60%"
            style={{ marginTop: "10px" }}
            name="start_date"
            label="Start Date"
            inputProps={{ type: "date" }}
          />
          <InputControl
            marginLeft={200}
            width="60%"
            style={{ marginTop: "10px", marginBottom: "10 px" }}
            name="end_date"
            label="End Date"
            inputProps={{ type: "date" }}
          />
        </Flex>
        <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={onDrop}
                imgExtension={['.jpg','.jpeg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        {/* <RMIUploader
          isOpen={visible}
          hideModal={hideModal}
          onSelect={onSelect}
          onUpload={onUpload}
          onRemove={onRemove}
          dataSources={a}
        /> */}
        <ButtonGroup ml="35%" mt="7">
          <ResetButton mr="10" w="100px">
            Reset
          </ResetButton>
          <SubmitButton
            w="100px"
            
          
          >
            Submit
          </SubmitButton>
        </ButtonGroup>
      </Box>
      </>
    )}
  </Formik>
</Flex></h1>:<div>
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
        </div>}
   </div>
  );
};

export default Rent;