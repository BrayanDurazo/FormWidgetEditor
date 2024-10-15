import formWidgets from "../data/formWidgetData";

export const getNewFormWidgetId = () => {
    if (formWidgets.length <= 0) return 1;
    const lastBook = formWidgets.slice(-1);
    return lastBook[0].id + 1;
};
