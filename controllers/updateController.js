import { promises } from 'fs';
const { writeFile, readFile } = promises;

async function updateGrade(update) {
  const json = JSON.parse(await readFile(global.fileName));
  const oldIndex = json.grades.findIndex(grade => grade.id === grades.id);
  const timestamp = new Date().toISOString();

  update = { ...update, timestamp: timestamp };

  json.grades[oldIndex] = grades;

  await writeFile(global.fileName, JSON.stringify(json));

  return insert;
}

export { updateGrade };