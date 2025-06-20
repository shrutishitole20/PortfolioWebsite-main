import React from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import styled from "styled-components";

const projects = [
  {
    title: "Unified Mentor Website",
    description: "A fully functional MERN stack website for Unified Mentor.",
    image: "/images/unifiedmentor.png",
    source: "https://github.com/yourusername/unifiedmentor",
    visit: "https://unifiedmentor.com",
    tags: ["MERN", "Node.js", "Express", "MongoDB"],
    likeCount: 10,
  },
  {
    title: "Open Source Django UI",
    description: "Front-end with Django and React.js for open source.",
    image: "/images/django_project.png",
    source: "https://github.com/yourusername/django-react-ui",
    visit: "https://django-react-ui.com",
    tags: ["Django", "React", "JavaScript"],
    likeCount: 5,
  },
  // Remove or comment out the "Unified Mentor Website" and "Open Source Django UI" projects if you want to add them later.
  // Example:
  // {
  //   title: "Unified Mentor Website",
  //   description: "A fully functional MERN stack website for Unified Mentor.",
  //   image: "/images/unifiedmentor.png",
  //   source: "https://github.com/yourusername/unifiedmentor",
  //   visit: "https://unifiedmentor.com",
  //   tags: ["MERN", "Node.js", "Express", "MongoDB"],
  //   likeCount: 10,
  // },
  // {
  //   title: "Open Source Django UI",
  //   description: "Front-end with Django and React.js for open source.",
  //   image: "/images/django_project.png",
  //   source: "https://github.com/yourusername/django-react-ui",
  //   visit: "https://django-react-ui.com",
  //   tags: ["Django", "React", "JavaScript"],
  //   likeCount: 5,
  // },
  // ...other existing projects...
];

const Projects = () => {
  const TagList = styled.ul`
    display: flex;
    padding-left: 10px;
  `;
  const Tag = styled.li`
    padding-left: 12px;
    letter-spacing: 0.1rem;
    list-style: none;
    font-size: 0.7rem;
  `;
  const TitleContent = styled.div`
    text-align: center;
    padding: 0.7rem 10px 0 0.7rem;
    margin: 0 15px 0 15px;
    padding-right: 50%;
    width: 100%;
  `;
  const Hr = styled.hr`
    width: 75px;
    height: 4px;
    margin: 20px auto;
    border: 0;
    background: #ff0080;
  `;

  return (
    <>
      <Divider />

      <Center id="projects" py={4}>
        <Text
          textTransform={"uppercase"}
          color={"blue.400"}
          fontWeight={600}
          fontSize={"sm"}
          bg={useColorModeValue("blue.50", "blue.900")}
          p={2}
          alignSelf={"flex-start"}
          rounded={"md"}
        >
          My Projects
        </Text>
      </Center>
      <Center py={2}>
        <Heading style={{ paddingLeft: 30 }}>
          <Text>Here are some of My Projects</Text>
        </Heading>
      </Center>
      <Hr />
      <section className="main" id="about">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {projects.map(
            ({
              title,
              description,
              image,
              tags,
              source,
              visit,
              likeCount,
            }) => (
              <Box
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p={4}
                bg="white"
                key={title}
              >
                <Image
                  src={image}
                  alt={title}
                  mb={4}
                  borderRadius="md"
                  style={{ width: "100%", objectFit: "contain" }}
                />
                <Heading as="h3" size="md" mb={2}>
                  {title}
                </Heading>
                <Text mb={2}>{description}</Text>
                <TitleContent sx={{ textAlign: "center" }}>
                  <strong>Stack</strong>
                </TitleContent>
                <TagList sx={{ textAlign: "center" }}>
                  {tags.map((tag, index) => (
                    <Text style={{ fontWeight: "600" }} key={index}>
                      <Tag>{tag}</Tag>
                    </Text>
                  ))}
                </TagList>
                <Flex
                  width={"100%"}
                  mt={"1rem"}
                  direction={"row"}
                  padding={1}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Button
                    flex={1}
                    fontSize={"sm"}
                    rounded={"full"}
                    _focus={{
                      bg: "gray.200",
                    }}
                    onClick={() => {
                      window.open(visit, "_blank");
                    }}
                  >
                    Visit
                  </Button>
                  <Button
                    flex={1}
                    fontSize={"sm"}
                    rounded={"full"}
                    bg={"black"}
                    color={"white"}
                    boxShadow={
                      "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                    }
                    _hover={{
                      bgGradient: "linear(to-r, #7928CA, #FF0080)",
                    }}
                    onClick={() => {
                      window.open(source, "_blank");
                    }}
                  >
                    {<BsGithub size="28px" />}
                  </Button>
                </Flex>
              </Box>
            )
          )}
        </SimpleGrid>
      </section>
    </>
  );
};

export default Projects;
