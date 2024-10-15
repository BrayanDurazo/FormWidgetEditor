import {Router, Request, Response } from "express";
import formWidgets from "../data/formWidgetData";
import { getNewFormWidgetId } from "../controller/formWidgetController";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
    try{
        const data = await new Promise(resolve => setTimeout(() => resolve(formWidgets), 500));
        res.status(200).send(data);
    }catch(error){
        res.status(500).send({ message: 'Something went wrong' });
    }
});

router.post("/", (req: Request, res: Response) => {
    const newFormWidget = {
        id: getNewFormWidgetId(),
        title: {
            textContent: req.body.title.textContent,
            fontSize: req.body.title.fontSize,
            fontColor: req.body.title.fontColor,
            alignment: req.body.title.alignment,
        },
        subTitle: {
            textContent: req.body.subTitle.textContent,
            fontSize: req.body.subTitle.fontSize,
            fontColor: req.body.subTitle.fontColor,
            alignment: req.body.subTitle.alignment,
        },
        submitButton: {
            textContent: req.body.submitButton.textContent,
            backgroundColor: req.body.submitButton.backgroundColor,
        },
        requiredFirstName: req.body.requiredFirstName,
        requiredLastName: req.body.requiredLastName,
    }
    formWidgets.push(newFormWidget)
    res.status(201).json(newFormWidget);
    return;
});

router.put('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const formWidget = formWidgets.find((formWidget) => formWidget.id === id);
    if (!formWidget) {
        res.status(404).send({ error: "Form widget not found" });
        return;
    }
    formWidget.title.textContent = req.body.title.textContent || formWidget.title.textContent
    formWidget.title.fontSize = req.body.title.fontSize || formWidget.title.fontSize
    formWidget.title.fontColor = req.body.title.fontColor || formWidget.title.fontColor
    formWidget.title.alignment = req.body.title.alignment || formWidget.title.alignment
    formWidget.subTitle.textContent = req.body.subTitle.textContent || formWidget.subTitle.textContent
    formWidget.subTitle.fontSize = req.body.subTitle.fontSize || formWidget.subTitle.fontSize
    formWidget.subTitle.fontColor = req.body.subTitle.fontColor || formWidget.subTitle.fontColor
    formWidget.subTitle.alignment = req.body.subTitle.alignment || formWidget.subTitle.alignment
    formWidget.submitButton.textContent = req.body.submitButton.textContent || formWidget.submitButton.textContent
    formWidget.submitButton.backgroundColor = req.body.submitButton.backgroundColor || formWidget.submitButton.backgroundColor
    formWidget.requiredFirstName = req.body.requiredFirstName || formWidget.requiredFirstName
    formWidget.requiredLastName = req.body.requiredLastName || formWidget.requiredLastName

    res.json(formWidget);
});
  
router.delete("/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const index = formWidgets.findIndex((formWidget) => formWidget.id === id);
    if (index === -1) {
        res.status(404).json({ error: "Form widget not found" });
        return;
    }
    formWidgets.splice(index, 1);
    res.status(204).send();
});

export default router;
