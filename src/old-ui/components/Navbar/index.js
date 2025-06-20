import React, { useState, useEffect } from "react";
import { ReactNode } from "react";
import {
  Text,
  Badge,
  Box,
  HStack,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  AvatarBadge,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import { FaRegStar } from "react-icons/fa"; // removed extra mode icon

const Navbar = ({ handleToggleUI }) => {
  const { colorMode, toggleColorMode } = useColorMode("dark");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "contact"];
      let current = "hero";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY + 80 >= el.offsetTop) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Show current mode at the very top with two toggle buttons */}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          padding: "4px 0",
          background: "#87ceeb",
          color: "#232946",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        <Button
          size="sm"
          leftIcon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
          variant="outline"
          colorScheme="gray"
        >
          {colorMode === "dark" ? "Light" : "Dark"}
        </Button>
      </div>
      <Box bg="#87ceeb" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Link
              to="/"
              _hover={{
                textDecoration: "none",
              }}
            >
              <Box
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="2xl"
                fontWeight="extrabold"
                fontFamily="sans-serif"
              >
                Shruti Shitole
              </Box>
            </Link>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                px={2}
                py={1}
                rounded={"md"}
                href={"#hero"}
                bg={activeSection === "hero" ? "blue.100" : "transparent"}
                color={activeSection === "hero" ? "blue.700" : undefined}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.100"),
                }}
              >
                Home
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                href={"#about"}
                bg={activeSection === "about" ? "blue.100" : "transparent"}
                color={activeSection === "about" ? "blue.700" : undefined}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.100"),
                }}
              >
                About
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                href={"#experience"}
                bg={
                  activeSection === "experience" ? "blue.100" : "transparent"
                }
                color={
                  activeSection === "experience" ? "blue.700" : undefined
                }
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.100"),
                }}
              >
                Experience
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                href={"#projects"}
                bg={activeSection === "projects" ? "blue.100" : "transparent"}
                color={activeSection === "projects" ? "blue.700" : undefined}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.100"),
                }}
              >
                Projects
              </Link>
              <Link
                px={2}
                py={1}
                rounded={"md"}
                href={"#contact"}
                bg={activeSection === "contact" ? "blue.100" : "transparent"}
                color={activeSection === "contact" ? "blue.700" : undefined}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.100"),
                }}
              >
                Contact
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                {/* LinkedIn profile link and icon */}
                <a
                  href="https://www.linkedin.com/in/shruti-shitole-ab2a89269/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "inherit",
                    fontWeight: 500,
                    fontSize: "1rem",
                    gap: "8px",
                  }}
                >
                  {/* LinkedIn SVG icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="#0A66C2"
                    style={{ borderRadius: "4px", background: "#fff" }}
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                  </svg>
                  shruti-shitole
                </a>
              </div>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://github.com/settings/profile"}
                  >
                    <AvatarBadge
                      className="blink"
                      boxSize="1.15em"
                      bg="green.400"
                    />
                  </Avatar>
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://github.com/settings/profile"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <Box>
                      <Text fontWeight="bold">
                        Shruti Shitole
                        <br />
                        <Badge ml="1" colorScheme="green">
                          ACTIVE - Freelancer
                        </Badge>
                      </Text>
                      <Text fontSize="sm">Software Developer</Text>
                    </Box>
                  </Center>
                  <br />
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href="#"
                onClick={isOpen ? onClose : onOpen}
              >
                Home
              </Link>
              <Link
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href="#about"
                onClick={isOpen ? onClose : onOpen}
              >
                About
              </Link>
              <Link
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href="#projects"
                onClick={isOpen ? onClose : onOpen}
              >
                Projects
              </Link>
              {/* <Link
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href="blog"
                onClick={isOpen ? onClose : onOpen}
              >
                Blog
              </Link> */}
              <Link
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href="contact"
                onClick={isOpen ? onClose : onOpen}
              >
                Contact
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
