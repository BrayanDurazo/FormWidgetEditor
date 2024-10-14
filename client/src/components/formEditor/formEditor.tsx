import SidebarSettings from "../sidebarSettings/sidebarSettings";
import FormPreview from "../formPreview/formPreview";
import "./formEditor.css";


export interface TextElement {
  textContent: string;
  fontSize: number;
  fontColor: string;
  alignment: "left" | "center" | "right";
}

interface ButtonElement {
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

    return(
            <div className="form-editor">
                <div className="sidebar-settings">
                    <SidebarSettings formWidget={formWidget} updateFormWidget={updateFormWidget}/>
                </div>
                <div className="form-preview">
                    <FormPreview title={formWidget.title} subTitle={formWidget.subTitle} firstNameRequired={formWidget.requiredFirstName} lastNameRequired={formWidget.requiredLastName}></FormPreview>
                </div>
            </div>
        );
};

export default FormEditor;
