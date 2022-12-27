import React, { useRef } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Wrapper, Form, Label, Input, Textarea } from "./contactForm.styled";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ut5syhh",
        "template_ua2cv0e",
        form.current,
        "1LHBz8UiZPi2Hu2pP"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Wrapper>
      <Form ref={form} onSubmit={sendEmail}>
        <Label>Name</Label>
        <Input className="input-fields" type="text" name="user_name" />
        <Label>Email</Label>
        <Input className="input-fields" type="email" name="user_email" />
        <Label>Message</Label>
        <Textarea className="input-fields" name="message" />
        <Input className="btn" type="submit" value="Send" />
      </Form>
    </Wrapper>
  );
};

export default ContactForm;
