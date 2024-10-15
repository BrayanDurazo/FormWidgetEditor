import express, { Request, Response } from "express";
import formWidgetRouter from './routes/formWidget.router'
import cors from 'cors';

const sqlite3 = require('sqlite3').verbose();
const app = express();

export const db = new sqlite3.Database('./formWidgetDB.db', (err: { message: any; }) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the formWidgetDB database.');
});

const createTableSql = `
    CREATE TABLE IF NOT EXISTS FormWidget (
        id INTEGER PRIMARY KEY AUTOINCREMENT,

        title_textContent TEXT NOT NULL,
        title_fontSize INTEGER NOT NULL,
        title_fontColor TEXT NOT NULL,
        title_alignment TEXT CHECK (title_alignment IN ('left', 'center', 'right')) NOT NULL,
        
        subTitle_textContent TEXT NOT NULL,
        subTitle_fontSize INTEGER NOT NULL,
        subTitle_fontColor TEXT NOT NULL,
        subTitle_alignment TEXT CHECK (subTitle_alignment IN ('left', 'center', 'right')) NOT NULL,
        
        submitButton_textContent TEXT NOT NULL,
        submitButton_backgroundColor TEXT NOT NULL,
        
        requiredFirstName BOOLEAN NOT NULL,
        requiredLastName BOOLEAN NOT NULL
    );`

db.run(createTableSql, (err: { message: string; }) => {
    if (err) {
        return console.error('Error creating table:', err.message);
    }
    console.log('Table created successfully');
});

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.json({ message: "Hello, TypeScript Express!" });
});
app.use('/formWidgets', formWidgetRouter)


export default app
