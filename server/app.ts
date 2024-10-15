import express, { Request, Response } from "express";
import formWidgetRouter from './routes/formWidget.router'
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.json({ message: "Hello, TypeScript Express!" });
});
app.use('/formWidgets', formWidgetRouter)


export default app
