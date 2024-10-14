import FontColorInput from "../fontColorInput/fontColorInput"
import FontSizeInput from "../fontSizeInput/fontSizeInput"
import { FormWidget } from "../formEditor/formEditor"
import TextAlignmentInput from "../textAlignmentInput/textAlignmentInput"
import TextInput from "../textInput/textInput"
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

    return (
      <div className="sidebar-container">
        <TextInput
          textValue={"Title"}
          textContent={formWidget.title.textContent}
          setTextContent={setTitle}
        />
        <FontSizeInput fontSize={formWidget.title.fontSize} setFontSize={setTitleFontSize}/>
        <TextAlignmentInput textValue={"title"} alignment={formWidget.title.alignment} setAlignment={setTitleAlignment}></TextAlignmentInput>
        <FontColorInput textValue={"title"} fontColor={formWidget.title.fontColor} setFontColor={setTitleFontColor}></FontColorInput>
    
        <TextInput
          textValue={"Sub title"}
          textContent={formWidget.subTitle.textContent}
          setTextContent={setSubTitle}
        />
        <FontSizeInput fontSize={formWidget.subTitle.fontSize} setFontSize={setSubTitleFontSize}/>
        <TextAlignmentInput textValue={"sub title"} alignment={formWidget.subTitle.alignment} setAlignment={setSubTitleAlignment}></TextAlignmentInput>
        <FontColorInput textValue={"sub title"} fontColor={formWidget.subTitle.fontColor} setFontColor={setSubTitleFontColor}></FontColorInput>
      </div>
    )
}

export default SidebarSettings
