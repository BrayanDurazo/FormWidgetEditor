import FontColorInput from "../fontColorInput/fontColorInput"
import FontSizeInput from "../fontSizeInput/fontSizeInput"
import { FormWidget } from "../formEditor/formEditor"
import SubmitButtonSettingInput from "../submitButtonSettingsInput/submitButtonSettingsInput"

import TextAlignmentInput from "../textAlignmentInput/textAlignmentInput"
import TextInput from "../textInput/textInput"
import ToggleButton from "../toggleRequiredInput/toggleRequiredInput"
import "./sidebarSettings.css"

interface SidebarSettingsProps {
  formWidget: FormWidget,
  updateFormWidget: (updatedFormWidget: FormWidget) => void
}


const SidebarSettings = (props: SidebarSettingsProps) => {
  const {formWidget, updateFormWidget} = props

  const setTitle = (updatedTitle: string) => {
    const updatedFormWidget: FormWidget = {
        ...formWidget,
        title: {
          ...formWidget.title,
          textContent: updatedTitle
        }
    }
    updateFormWidget(updatedFormWidget)
  }

  const setSubTitle = (updatedTitle: string) => {
    const updatedFormWidget: FormWidget = {
        ...formWidget,
        subTitle: {
          ...formWidget.subTitle,
          textContent: updatedTitle
        }
    }
    updateFormWidget(updatedFormWidget)
  }

  const setTitleFontSize = (updatedFontSize: number) => {
    const updatedFormWidget: FormWidget = {
        ...formWidget,
        title: {
          ...formWidget.title,
          fontSize: updatedFontSize
        }
    }
    updateFormWidget(updatedFormWidget)
  }

  const setSubTitleFontSize = (updatedFontSize: number) => {
    const updatedFormWidget: FormWidget = {
        ...formWidget,
        subTitle: {
          ...formWidget.subTitle,
          fontSize: updatedFontSize
        }
    }
    updateFormWidget(updatedFormWidget)
  }

  const setTitleAlignment = (updatedTitleAlignment: "left" | "center" | "right") => {
    const updatedFormWidget: FormWidget = {
        ...formWidget,
        title: {
          ...formWidget.title,
          alignment: updatedTitleAlignment
        }
    }
    updateFormWidget(updatedFormWidget)
  }

  const setSubTitleAlignment = (updatedSubTitleAlignment: "left" | "center" | "right") => {
    const updatedFormWidget: FormWidget = {
        ...formWidget,
        subTitle: {
          ...formWidget.subTitle,
          alignment: updatedSubTitleAlignment
        }
    }
    updateFormWidget(updatedFormWidget)
  }

  const setTitleFontColor = (updatedTitleFontColor: string) => {
    const updatedFormWidget: FormWidget = {
        ...formWidget,
        title: {
          ...formWidget.title,
          fontColor: updatedTitleFontColor
        }
    }
    updateFormWidget(updatedFormWidget)
  }

  const setSubTitleFontColor = (updatedSubTitleFontColor: string) => {
    const updatedFormWidget: FormWidget = {
        ...formWidget,
        subTitle: {
          ...formWidget.subTitle,
          fontColor: updatedSubTitleFontColor
        }
    }
    updateFormWidget(updatedFormWidget)
  }


  const setSubmitButtonText = (updatedButtonText: string) => {
    const updatedFormWidget: FormWidget = {
        ...formWidget,
        submitButton: {
          ...formWidget.submitButton,
          textContent: updatedButtonText
        }
    }
    updateFormWidget(updatedFormWidget)
  }

  const setSubmitButtonBackgroundColor = (updatedBackgroundColor: string) => {
    const updatedFormWidget: FormWidget = {
        ...formWidget,
        submitButton: {
          ...formWidget.submitButton,
          backgroundColor: updatedBackgroundColor
        }
    }
    updateFormWidget(updatedFormWidget)
  }

  const setFirstNameRequired = (updatedRequired: boolean) => {
  const updatedFormWidget: FormWidget = {
      ...formWidget,
      requiredFirstName: updatedRequired
    }
    updateFormWidget(updatedFormWidget)
  }

  const setLastNameRequired = (updatedRequired: boolean) => {
  const updatedFormWidget: FormWidget = {
      ...formWidget,
      requiredLastName: updatedRequired
    }
    updateFormWidget(updatedFormWidget)
  }

    return (
      <div className="sidebar-container">
        <div className="title-settings-container">
          <TextInput
            textValue={"Title"}
            textContent={formWidget.title.textContent}
            setTextContent={setTitle}
          />
          <FontSizeInput fontSize={formWidget.title.fontSize} setFontSize={setTitleFontSize}/>
          <TextAlignmentInput textValue={"title"} alignment={formWidget.title.alignment} setAlignment={setTitleAlignment}></TextAlignmentInput>
          <FontColorInput textValue={"title"} fontColor={formWidget.title.fontColor} setFontColor={setTitleFontColor}></FontColorInput>
        </div>
        <div className="title-settings-container">
          <TextInput
            textValue={"Subtitle"}
            textContent={formWidget.subTitle.textContent}
            setTextContent={setSubTitle}
          />
          <FontSizeInput fontSize={formWidget.subTitle.fontSize} setFontSize={setSubTitleFontSize}/>
          <TextAlignmentInput textValue={"subtitle"} alignment={formWidget.subTitle.alignment} setAlignment={setSubTitleAlignment}></TextAlignmentInput>
          <FontColorInput textValue={"subtitle"} fontColor={formWidget.subTitle.fontColor} setFontColor={setSubTitleFontColor}></FontColorInput>
        </div>
        <SubmitButtonSettingInput
          buttonText={formWidget.submitButton.textContent}
          setButtonTex={setSubmitButtonText}
          backgroundColor={formWidget.submitButton.backgroundColor}
          setBackgroundColor={setSubmitButtonBackgroundColor}>
        </SubmitButtonSettingInput>
        <div className="required-settings-container">
          <label>First name required: </label>
          <ToggleButton
            required={formWidget.requiredFirstName}
            setRequired={setFirstNameRequired}>    
          </ToggleButton>
        </div>
        <div className="required-settings-container">
          <label>Last name required: </label>
          <ToggleButton
            required={formWidget.requiredLastName}
            setRequired={setLastNameRequired}>
          </ToggleButton>
        </div>
      </div>
    )
}

export default SidebarSettings
