# Challenge Module 2 - IGTI Bootcamp Full Stack Developr

> API chamada "grades-control-api" para controlar notas de alunos em matérias de um curso.

API conta com endpoints para ciração, atualização, exclusão e consulta de notas, aqui chamadas de grades. As grades são salvas em um arquivo json, chamado grades.json. Arquivo previamente fornecido, portanto, endpoints atuam considerando os registros já existentes.

Uma grade possui os campos abaixo:

- id (int): identificador único da grade. Gerado automaticamente pela API e garantindo que não se repita.

- student (string): nome do aluno. Exemplo: “Thiago Gouvêa”.

- subject (string): nome da matéria. Exemplo: “Matemática”.

- type (string): nome da atividade. Exemplo: “Prova final”.

- value (float): nota da atividade. Exemplo: 10.

- timestamp (string): horário do lançamento. Exemplo: 2020-05-19T18:21:24.964Z.
