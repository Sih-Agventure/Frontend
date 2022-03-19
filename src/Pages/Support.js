import { Heading } from "@chakra-ui/layout";
import React, { useState } from "react";
import Faq from "./Faq";

function Support() {
  const [faqs, setfaqs] = useState([
    {
      question: "Why Hiring rather than Buying ?",
      answer:
        "A very interesting query. In India, the utilisation rate of a costly equipment like tractor is very low, in the range of 20 - 30% for various reasons, considering that it can be run easily in three six-hour periods over a 24 hour period. Now, that is a lot of underutilised capacity. So, renting is a feasible option.",
      open: false,
    },
    {
      question: "Why Agventure ?",
      answer:
        "Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.",
      open: false,
    },
    {
      question: "What is CHC ?",
      answer:
        "Custom Hiring Centers/Farm Machinery banks and Hi-tech hubs have been established under the various Schemes like Sub –Mission on Agricultural Mechanization, Rashtriya Krishi Vikas Yojana and Crop Residue Management Schemes to provide agricultural machinery on a rental basis to the farmers, especially small and marginal ones who can't afford to buy the high-value machinery and equipment.",
      open: false,
    },
    {
      question: "How Agventure Works ?",
      answer:
        "Custom Hiring Centers/Farm Machinery banks and Hi-tech hubs have been established under the various Schemes like Sub –Mission on Agricultural Mechanization, Rashtriya Krishi Vikas Yojana and Crop Residue Management Schemes to provide agricultural machinery on a rental basis to the farmers, especially small and marginal ones who can't afford to buy the high-value machinery and equipment.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="App">
      <header className="FAQ">
        <Heading
          as="h1"
          fontWeight="500"
          fontSize={{
            base: "25px",
            sm: "30px",
            md: "30px",
            lg: "35px",
            xl: "35px",
          }}
          textAlign="center"
        >
          Frequently Asked Questions
        </Heading>
      </header>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <Faq faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default Support;