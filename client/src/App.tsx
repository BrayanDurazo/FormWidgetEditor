import FormEditor, { FormWidget } from "./components/formEditor/formEditor";

const defaultFormWidget: FormWidget = {
    id: 0,
    title: {
      textContent: "",
      fontSize: 8,
      fontColor: "#000000",
      alignment: "center",
    },
    subTitle: {
      textContent: "",
      fontSize: 8,
      fontColor: "#000000",
      alignment: "center",
    },
    submitButton: {
      textContent: "",
      backgroundColor: "#000000",
    },
    requiredFirstName: true,
    requiredLastName: true,
};

const App = () => {

  return (
    <div>
      <FormEditor formWidget={defaultFormWidget}></FormEditor>
    </div>
  );
};

export default App;
