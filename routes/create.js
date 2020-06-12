import express from 'express';
import { createGrade } from '../controllers/createController.js';
import { avg, sum } from '../libs/calculations.js';
import { promises } from 'fs';

const { writeFile, readFile } = promises;

const router = express.Router();

//question 1
router.post('/insert', async (req, res) => {
  try {
    let insert = req.body;
    res.send(await createGrade(insert));
  } catch (err) {
    res.status(400).send({ error: err.message });
  }

});

//question 2
router.put('/update', async (req, res) => {
  try {
    let update = req.body;
    res.send(await updateGrade(update));
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

//question 3
router.delete('/exclude/:id', async (req, res) => {
  try {
    const json = JSON.parse(await readFile(global.fileName));
    let tempGrades = json.grades.filter(grades => {
      const id = grades.id;
      return id !== parseInt(req.params.id);
    });
    json.grades = tempGrades;
    await writeFile(global.fileName, JSON.stringify(json));
    res.send('ID successfully deleted.').end();
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

//question 4
router.get('/find/:id', async (req, res) => {
  try {
    const json = JSON.parse(await readFile(global.fileName));
    let grade = json.grades.find(grades => {
      const id = grades.id;
      return id === parseInt(req.params.id);
    });
    if (grade) {
      res.send(grade);
    } else {
      res.send('ID not found!');
    }
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

//question 5
router.get('/totalSum/:student/:subject', async (req, res) => {
  try {
    let json = JSON.parse(await readFile(global.fileName));
    let grade = json.grades.filter(grades => {
      const student = grades.student;
      const subject = grades.subject;
      return student === req.params.student && subject === req.params.subject
    });
    grade = grade.map(grades => {
      return grades.value;
    })
    res.send({ value: sum(grade) });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

//question 6
router.get('/avg/:subject/:type', async (req, res) => {
  try {
    let json = JSON.parse(await readFile(global.fileName));
    let grade = json.grades.filter(grades => {
      const subject = grades.subject;
      const type = grades.type;
      return subject === req.params.subject && type === req.params.type
    });
    grade = grade.map(grades => {
      return grades.value;
    })
    res.send({ value: avg(grade) });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

export default router;