import React, { useState, useEffect } from "react";
import { Heading, Spinner, Center, Text, Box } from "@chakra-ui/react";
import Layout from "../components/Layout";

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

export async function getServerSideProps(context) {
  await delay(2000);
  return {
    props: {}, // will be passed to the page component as props
  };
}

const About = () => {
  return (
    <Layout>
      <Box>
        <Heading>About</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Box>
    </Layout>
  );
};

export default About;
