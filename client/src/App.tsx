import { useState } from "react";
import FormEditor, { FormWidget } from "./components/formEditor/formEditor";

const initFormWidget: FormWidget = {
    id: 1,
    title: {
      textContent: "Example title",
      fontSize: 18,
      fontColor: "#FFA500",
      alignment: "center",
    },
    subTitle: {
      textContent: "this is a subtitle",
      fontSize: 12,
      fontColor: "#008000",
      alignment: "left",
    },
    submitButton: {
      textContent: "Submit",
      backgroundColor: "#00008B",
    },
    requiredFirstName: true,
    requiredLastName: true,
};

const App = () => {
  const [formWidget, setFormWidget] = useState(initFormWidget)

  return (
    <div>
      <FormEditor formWidget={formWidget} updateFormWidget={setFormWidget}></FormEditor>
    </div>
  );
};

export default App;
