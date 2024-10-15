import SidebarSettings from "../sidebarSettings/sidebarSettings";
import FormPreview from "../formPreview/formPreview";
import "./formEditor.css";
import { useState } from "react";


export interface TextElement {
  textContent: string;
  fontSize: number;
  fontColor: string;
  alignment: "left" | "center" | "right";
}

export interface ButtonElement {
  textContent: string;
  backgroundColor: string;
}

export interface FormWidget {
  id: number;
  title: TextElement;
  subTitle: TextElement;
  submitButton: ButtonElement;
  requiredFirstName: boolean;
  requiredLastName: boolean;
}

export interface FormEditorProps {
  formWidget: FormWidget
}

const FormEditor = (props: FormEditorProps) => {
    const {formWidget: initialFormWidget} = props
    const [formWidget, setFormWidget] = useState(initialFormWidget)

    const handleSaveData = ()=> {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formWidget)
        };
        fetch('http://localhost:3000/formWidgets/', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                alert("Form widget added succesfully");
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    return(
        <div className="form-editor">
            <div className="sidebar-settings">
                <SidebarSettings formWidget={formWidget} updateFormWidget={setFormWidget}/>
                <button className={"save-button"} onClick={handleSaveData}> Save </button>
            </div>
            <div className="form-preview">
                <FormPreview
                    title={formWidget.title}
                    subTitle={formWidget.subTitle}
                    firstNameRequired={formWidget.requiredFirstName}
                    lastNameRequired={formWidget.requiredLastName}
                    submitButton={formWidget.submitButton}>
                </FormPreview>
            </div>
            <div >
            </div>
        </div>
    );
};

export default FormEditor;
