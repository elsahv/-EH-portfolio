import {
  FormTitle,
  Form,
  FormStyles,
  Label,
  LabelName,
  Input,
} from "./contactForm.styled";

const ContactForm = () => {
  return (
    <>
      {/* <FormTitle>Contact Form</FormTitle> */}
      <Form>
        <FormStyles>
          <Label>
            <LabelName>Enter your name:</LabelName>
            <Input type="text" />
          </Label>
          <Label>
            <LabelName>Email</LabelName>

            <Input type="text" />
          </Label>
          <Label>
            <LabelName>Send Message</LabelName>

            <Input type="text" />
          </Label>
        </FormStyles>
      </Form>
    </>
  );
};

export default ContactForm;
