import React, { useState } from "react";
import { Box, Heading, Input, Textarea, Button, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.email) errs.email = "Email is required";
    if (!form.subject) errs.subject = "Subject is required";
    if (!form.message) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      // handle actual submission here
    }
  };

  return (
    <Box id="contact" py={10} px={6} maxW="2xl" mx="auto">
      <Heading as="h2" size="xl" mb={6}>Contact Me</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={errors.name} mb={4}>
          <FormLabel>Name</FormLabel>
          <Input name="name" value={form.name} onChange={handleChange} />
          <FormErrorMessage>{errors.name}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.email} mb={4}>
          <FormLabel>Email</FormLabel>
          <Input name="email" value={form.email} onChange={handleChange} />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.subject} mb={4}>
          <FormLabel>Subject</FormLabel>
          <Input name="subject" value={form.subject} onChange={handleChange} />
          <FormErrorMessage>{errors.subject}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.message} mb={4}>
          <FormLabel>Message</FormLabel>
          <Textarea name="message" value={form.message} onChange={handleChange} />
          <FormErrorMessage>{errors.message}</FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme="blue">Send</Button>
        {submitted && <Box mt={4} color="green.500">Thank you for your message!</Box>}
      </form>
    </Box>
  );
};

export default Contact;
