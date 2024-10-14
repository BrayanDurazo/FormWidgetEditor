import SidebarSettings from "../sidebarSettings/sidebarSettings";
import FormPreview from "../formPreview/formPreview";
import "./formEditor.css";


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
  formWidget: FormWidget;
  updateFormWidget: (updatedFormWidget: FormWidget) => void;
}

const FormEditor = (props: FormEditorProps) => {
    const { formWidget, updateFormWidget} = props

    const handleSaveData = ()=> {
        console.log("looking great")
    }

    return(
        <div className="form-editor">
            <div className="sidebar-settings">
                <SidebarSettings formWidget={formWidget} updateFormWidget={updateFormWidget}/>
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
