import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";
import $ from "jquery";



const colors = {
  brand: {
    50: "#ecefff",
    100: "#cbceeb",
    200: "#a9aed6",
    300: "#888ec5",
    400: "#666db3",
    500: "#4d5499",
    600: "#3c4178",
    700: "#2a2f57",
    800: "#181c37",
    900: "#080819",
  },
};
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors,
  config,
  components: {
    Steps,
  },
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  rootElement
);

// function scrollWaypointInit(items, trigger) {
//   items.each(function () {
//     var element = $(this),
//       osAnimationClass = element.data("animation"),
//       osAnimationDelay = element.attr("data-animation-delay");

//     element.css({
//       "-webkit-animation-delay": osAnimationDelay,
//       "-moz-animation-delay": osAnimationDelay,
//       "animation-delay": osAnimationDelay,
//     });

//     var trigger = trigger ? trigger : element;

//     trigger.waypoint(
//       function () {
//         element.addClass("animated").addClass(osAnimationClass);
//       },
//       {
//         // triggerOnce: true,
//         offset: "80%",
//       }
//     );
//   });
// }

// //Call the init

// $(document).ready(function () {
//   scrollWaypointInit($(".animateMe"));
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
