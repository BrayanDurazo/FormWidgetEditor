import { Router, Request, Response } from 'express';
import { flattenFormWidget } from '../controller/formWidgetController';
import { db } from '../app';
const router = Router();

router.get('/', async (req: Request, res: Response) => {
  db.all('SELECT * FROM FormWidget', (err: { message: any }, rows: any) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal server error');
    } else {
      res.send(rows);
    }
  });
});

router.post('/', (req: Request, res: Response) => {
  const newFormWidget = {
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
  };
  const flatFormWidget = flattenFormWidget(newFormWidget);
  const sql = `
    INSERT INTO FormWidget (
        title_textContent, title_fontSize, title_fontColor, title_alignment,
        subTitle_textContent, subTitle_fontSize, subTitle_fontColor, subTitle_alignment,
        submitButton_textContent, submitButton_backgroundColor,
        requiredFirstName, requiredLastName
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

  const values = [
    flatFormWidget.title_textContent,
    flatFormWidget.title_fontSize,
    flatFormWidget.title_fontColor,
    flatFormWidget.title_alignment,
    flatFormWidget.subTitle_textContent,
    flatFormWidget.subTitle_fontSize,
    flatFormWidget.subTitle_fontColor,
    flatFormWidget.subTitle_alignment,
    flatFormWidget.submitButton_textContent,
    flatFormWidget.submitButton_backgroundColor,
    flatFormWidget.requiredFirstName,
    flatFormWidget.requiredLastName,
  ];

  db.run(sql, values, function (err: { message: any }) {
    if (err) {
      return console.error(err.message);
    }
    // @ts-ignore comment
    console.log(`Row inserted with rowId ${this.lastID}`);
  });

  res.status(201).json(newFormWidget);
  return;
});

export default router;
