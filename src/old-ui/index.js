import React from "react";
import { ChakraProvider, Divider, Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import TestimonialMain from "./components/Testimonials";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import MainProject from "./components/MainProject";

const OldUI = ({ handleToggleUI }) => {
  return (
    <ChakraProvider>
      <AppContent handleToggleUI={handleToggleUI} />
    </ChakraProvider>
  );
};

function AppContent({ handleToggleUI }) {
  // useColorModeValue is now called inside ChakraProvider context
  const bg = useColorModeValue(
    "#e3f2fd", // sky blue for light mode
    "radial-gradient(circle at 60% 40%, #232946 70%, #a3bffa 90%, #232946 100%)"
  );
  const color = useColorModeValue("#232946", "#fff");

  return (
    <Box
      minHeight="100vh"
      bg={bg}
      color={color}
      transition="background 0.3s"
    >
      <Navbar handleToggleUI={handleToggleUI} />
      <Hero />
      <About />
      <Divider />
      <MainProject />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      {/* <Blog /> */}
      <Divider />
      <TestimonialMain />
      <Divider />
      <Contact />
      <Footer />
      <div style={{ textAlign: "center", margin: "24px 0", fontWeight: "bold", fontSize: "1.1rem", color }}>
        Made by Shruti Shitole
      </div>
    </Box>
  );
}

export default OldUI;
