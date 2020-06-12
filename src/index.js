import express from 'express';
import { promises } from 'fs';
import createRouter from '../routes/create.js';

const { writeFile, readFile } = promises;

global.fileName = './json/grades.json';

const app = express();
app.use(express.json());

app.use('/create', createRouter);

app.listen(3000, async () => {
  try {
    const initialJson = {
      nextId: 1,
      grades: []
    }

    await writeFile(global.fileName, JSON.stringify(initialJson), { flag: 'wx' });
  } catch (err) {
    console.log(err);
  }
});