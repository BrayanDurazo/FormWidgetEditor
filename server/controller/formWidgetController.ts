import { FormWidgetModel } from "../model/formWidget";

export const flattenFormWidget = (widget: FormWidgetModel) => {
  return {
    title_textContent: widget.title.textContent,
    title_fontSize: widget.title.fontSize,
    title_fontColor: widget.title.fontColor,
    title_alignment: widget.title.alignment,
    subTitle_textContent: widget.subTitle.textContent,
    subTitle_fontSize: widget.subTitle.fontSize,
    subTitle_fontColor: widget.subTitle.fontColor,
    subTitle_alignment: widget.subTitle.alignment,
    submitButton_textContent: widget.submitButton.textContent,
    submitButton_backgroundColor: widget.submitButton.backgroundColor,
    requiredFirstName: widget.requiredFirstName ? 1 : 0,
    requiredLastName: widget.requiredLastName ? 1 : 0
  };
}
