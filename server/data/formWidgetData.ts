import { FormWidgetModel } from "../model/formWidget";

let formWidgets: FormWidgetModel[] = [
    {
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
        backgroundColor: "#ff0000",
        },
        requiredFirstName: true,
        requiredLastName: true,
    }
];

export default formWidgets;
