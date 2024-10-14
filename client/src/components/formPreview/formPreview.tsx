import { useState } from "react";
import TextInput from "../textInput/textInput";
import EmailInput from "../emailInput/emailInput";
import "./formPreview.css";
import { ButtonElement, TextElement } from "../formEditor/formEditor";

interface FormPreviewProps {
  title: TextElement;
  subTitle: TextElement;
  firstNameRequired: boolean;
  lastNameRequired: boolean;
  submitButton: ButtonElement;
}

const FormPreview = (props: FormPreviewProps) => {
  // State for form inputs
  const { title, subTitle, firstNameRequired, lastNameRequired, submitButton } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="simple-form-container">
        <div className="title-alignment-container">
          <h1 className="form-title" style={{ fontSize: `${title.fontSize}px`, textAlign:`${title.alignment}`, color:`${title.fontColor}`}}>{title.textContent}</h1>
          <h1 className="form-subtitle" style={{ fontSize: `${subTitle.fontSize}px`, textAlign:`${subTitle.alignment}`, color:`${subTitle.fontColor}`}}>{subTitle.textContent}</h1>
        </div>
          <TextInput
            textValue={"First Name"}
            textContent={firstName}
            isRequired={firstNameRequired}
            setTextContent={setFirstName}
          />
          <TextInput
            textValue={"Last Name"}
            textContent={lastName}
            isRequired={lastNameRequired}
            setTextContent={setLastName}
          />
          <EmailInput email={email} setEmail={setEmail} />
        <button className="submit-button" style={{backgroundColor:`${submitButton.backgroundColor}`}}>{submitButton.textContent}</button>
      </div>
    </>
  );
};

export default FormPreview;
