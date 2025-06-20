import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  Center,
  useColorModeValue,
  useSteps,
  Progress,
} from "@chakra-ui/react";

// Only your new experience entry
const steps = [
  {
    title: "Full Stack Developer - MERN",
    duration: "20th May 2025 - 20th Aug 2025",
    companyName: "Unified Mentor",
    description:
      "Designed and developed a fully functional website using the latest technologies such as Next.js and React.js. Worked independently to create engaging web content and reusable components. Contributed to the development of the website and helped to improve the performance of the website",
  },
  {
    title: "Front-End Developer - Django",
    duration: "1st Sep 2024 - 1st Dec 2024",
    companyName: "Open Source Project",
    description:
      "Developed and maintained user interfaces using Django and React.js. Collaborated with backend developers to integrate RESTful APIs and ensured responsive design with Tailwind CSS. Enhanced SEO and accessibility for better user engagement.",
  },
];

const Experience = () => {
  const { activeStep } = useSteps({
    index: steps.length,
    count: steps.length,
  });

  const max = steps.length;
  const progressPercent = (activeStep / max) * 100;

  return (
    <Box
      p={4}
      id="experience"
      textAlign="center"
      style={{ overflow: "hidden" }}
    >
      <Center py={4}>
        <Text
          textTransform="uppercase"
          color="blue.400"
          fontWeight={600}
          fontSize="sm"
          bg={useColorModeValue("blue.50", "blue.900")}
          p={2}
          alignSelf="flex-start"
          rounded="md"
        >
          My Experience
        </Text>
      </Center>

      <Center>
        <Box width={{ base: "100%", md: "80%", lg: "50%" }}>
          <Stepper
            activeStep={0}
            lineWidth={3}
            steps={steps.length}
            orientation="vertical"
            index={activeStep}
          >
            {steps.map((step, index) => (
              <Step mt={2} m={15} key={index}>
                <StepIndicator>
                  <StepStatus complete={<StepIcon />} />
                </StepIndicator>

                <Box
                  p={4}
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  borderRadius="10px"
                  overflow="hidden"
                  scrollMarginY={10}
                >
                  <StepTitle fontSize="18px" fontWeight="bold">
                    {step.title}
                  </StepTitle>
                  <StepDescription fontWeight="bold" fontSize="0.8em">
                    {step.duration}
                  </StepDescription>
                  <StepDescription fontWeight="bold">
                    {step.companyName}
                  </StepDescription>
                  <StepDescription>{step.description}</StepDescription>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </Box>
      </Center>

      <Progress
        value={progressPercent}
        position="absolute"
        height="3px"
        width="full"
        top="10px"
        zIndex={-1}
      />
    </Box>
  );
};
export default Experience;
