import { promises } from 'fs';
const { writeFile, readFile } = promises;

async function createGrade(insert) {
  const data = await readFile(global.fileName);
  const json = JSON.parse(data);

  const timestamp = new Date().toISOString();

  insert = { id: json.nextId++, ...insert, timestamp: timestamp };

  json.grades.push(insert);

  await writeFile(global.fileName, JSON.stringify(json));

  return insert;
}

export { createGrade };