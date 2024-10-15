export interface FormWidgetModel {
  id?: number;
  title: {
    textContent: string;
    fontSize: number;
    fontColor: string;
    alignment: "left" | "center" | "right";
  };
  subTitle: {
    textContent: string;
    fontSize: number;
    fontColor: string;
    alignment: "left" | "center" | "right";
  };
  submitButton: {
    textContent: string;
    backgroundColor: string;
  };
  requiredFirstName: boolean;
  requiredLastName: boolean;
}
