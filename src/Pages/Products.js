import React, { useState } from "react";
import {
  Wrap,
  WrapItem,
  useBreakpointValue,
  Button,
  Text,
  Heading,
  Box,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  InputGroup,
  InputLeftAddon,
  useToast,
  Grid,
} from "@chakra-ui/react";
import axios from "axios";
import $ from "jquery";

const track = [];

function Products() {
  const [numg, setnumg] = useState("");
  const buttonSize = useBreakpointValue(["md", "lg"]);

  const [query, setquery] = useState("");
  const [n, setn] = useState("");
  const [ph, setph] = useState("");
  const [eid, seteid] = useState("");
  const [any, setany] = useState("");
  const toast = useToast();
  function Click(e) {
    if (e.target.style.color == "red") {
      e.target.style.color = "black";
      e.target.style.backgroundColor = "white";
      track.splice(track.indexOf(e.target.value), 1);
    } else if (e.target.style.color == "black") {
      e.target.style.color = "red";
      e.target.style.backgroundColor = "white";
      track.push(e.target.value);
    } else {
      track.push(e.target.value);
      e.target.style.color = "red";
      e.target.style.backgroundColor = "white";
    }
    console.log(track);
  }
  function getinfo() {
    var check = false;
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    var validno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var validlandline = /^\(?([0-9]{3})\)?[-. ]?([0-9]{4})$/;
    var landline =
      /^(?:\([2-9]\d{2}\)\ ?|[2-9]\d{2}(?:\-?|\ ?))[2-9]\d{2}[- ]?\d{4}$/;

    if (
      validno.test(ph) ||
      (validlandline.test(ph) && landline.test($("#stdg").val()))
    ) {
      check = false;
    } else {
      check = true;
    }
    if (n == "") {
      toast({
        title: "Invalid Name",
        description: "Enter a valid Name",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    } else if (check) {
      toast({
        title: "Invalid Contact",
        description: "Enter a valid contact number",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    } else if (!validRegex.test(eid)) {
      toast({
        title: "Invalid E-mail",
        description: "Enter a valid e-mail",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    } else {
      var testickleg = $("#stdg").val() + "-" + $("#phoneg").val();
      alert(testickleg);

      axios
        .post("http://localhost:8000/wel/", {
          name: n,
          detail: query,
          phone: ph,
          email: eid,
          anything: any,
          issues: track,
          location: ["Maharashtra", "Katra"],
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {});

      toast({
        title: "Details Submitted",
        description: "",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });

      document.getElementById("name").value = "";
      setn("");
      document.getElementById("phoneg").value = "";
      setph("");
      document.getElementById("email").value = "";
      seteid("");
      document.getElementById("dis").value = "";
      setany("");
    }
  }
  return (
    <div className="home">
      <Box
        className="Get_Help_Boogey"
        m={20}
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          fontSize={{
            base: "30px",
            sm: "35px",
            md: "40px",
            lg: "40px",
            xl: "50px",
          }}
          style={{ textAlign: "center" }}
          mb={30}
        >
          You seem to be lost! Need Some help?
        </Heading>
        <Text
          fontSize={{
            base: "15px",
            sm: "17px",
            md: "22px",
            lg: "22px",
            xl: "22px",
          }}
          style={{ textAlign: "center" }}
        >
          You can let us know what you are looking for by just selecting what
          you came here looking for from the options given below!!!
        </Text>
        <div
          style={{ marginTop: "4%", justifyContent: "center", width: "100%" }}
        >
          <Wrap justify="center" className="wrap">
            <WrapItem>
              <Button variant="outline" onClick={Click}>
                How Agventure Works
              </Button>
            </WrapItem>

            <WrapItem>
              <Button variant="outline" onClick={Click}>
                Pricing
              </Button>
            </WrapItem>

            <WrapItem>
              <Button variant="outline" onClick={Click}>
                Buying
              </Button>
            </WrapItem>

            <WrapItem>
              <Button variant="outline" onClick={Click}>
                Selling
              </Button>
            </WrapItem>

            <WrapItem>
              <Button variant="outline" onClick={Click}>
                Terms & Conditions
              </Button>
            </WrapItem>
          </Wrap>
        </div>
        <div style={{ marginTop: "100px" }}>
          <Text
            className="If_What"
            style={{ marginLeft: "120px", textAlign: "center" }}
            fontSize={{
              base: "15px",
              sm: "17px",
              md: "22px",
              lg: "22px",
              xl: "22px",
            }}
          >
            If what you were looking for is not included in the above options,
            You can let us know by typing it!
          </Text>
          <Input
            style={{ color: "black", overflow: "hidden" }}
            variant="flushed"
            placeholder="Enter The Problem You Are Facing Here"
            value={query}
            onChange={({ target }) => setquery(target.value)}
          />
        </div>
        <Heading
          style={{ textAlign: "center", marginTop: "50px" }}
          fontSize={{
            base: "30px",
            sm: "35px",
            md: "40px",
            lg: "40px",
            xl: "50px",
          }}
          mb={30}
        >
          Tell us a little about Yourself!
        </Heading>
        <FormControl style={{ paddingBottom: "20px" }} id="name" isRequired>
          <FormLabel mb={-30} pb={3}>
            Full Name
          </FormLabel>
          <Input
            value={n}
            onChange={({ target }) => setn(target.value)}
            placeholder="Full Name"
          />
        </FormControl>
        <FormControl style={{ paddingBottom: "20px" }} id="phone" isRequired>
          <FormLabel mb={-30} pb={10}>
            Your Phone Number
          </FormLabel>
          <InputGroup>
            <Input
              value={numg}
              id="stdg"
              onChange={({ target }) => setnumg(target.value)}
              width="100px"
              placeholder="STD"
            />
            <Input
              value={ph}
              id="phoneg"
              onChange={({ target }) => setph(target.value)}
              type="tel"
              placeholder="phone number"
            />
          </InputGroup>
        </FormControl>
        <FormControl style={{ paddingBottom: "20px" }} id="email" isRequired>
          <FormLabel mb={-30} pb={3}>
            Email Id
          </FormLabel>
          <Input
            value={eid}
            onChange={({ target }) => seteid(target.value)}
            placeholder="Email"
          />
        </FormControl>
        <FormControl style={{ paddingBottom: "20px" }} id="dis">
          <FormLabel mb={-0} pb={3}>
            Anything Else You Want To Tell Us?
          </FormLabel>
          <Textarea
            value={any}
            onChange={({ target }) => setany(target.value)}
            style={{
              paddingBottom: "50px",
              height: "100px",
              overflow: "hidden",
            }}
            maxLength="400"
            placeholder="Your Message"
          />
        </FormControl>
        <Button
          onClick={getinfo}
          style={{ marginLeft: "0px" }}
          m="24px 0 24px 0"
          backgroundColor="#58CD36"
          color="white"
          _hover={{
            border: "2px solid #58CD36",
            backgroundColor: "transparent",
            color: "#58CD36",
          }}
          size={buttonSize}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default Products;