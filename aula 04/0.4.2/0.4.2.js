const alunos = [
  {
    nome: 'Mathias',
    notas: [
      { cadeira: 'DW2', nota: 10 },
      { cadeira: 'BD2', nota: 7 },
    ],
  },
  {
    nome: 'Luiza',
    notas: [
      { cadeira: 'DW2', nota: 8 },
      { cadeira: 'BD2', nota: 8 },
    ],
  },
  {
    nome: 'Pedro',
    notas: [
      { cadeira: 'DW2', nota: 10 },
      { cadeira: 'BD2', nota: 10 },
    ],
  },
];

const mediaAlunos = alunos.map((aluno) => {
  const notas = aluno.notas;
  //reduce
  const somaTotal = notas.reduce((acumulador, elemento) => {
    const nota = elemento.nota;
    return acumulador + nota;
  }, 0);
  //continuação map
  const mediaGeral = somaTotal / notas.length;
  aluno.mediaGeral = mediaGeral;
  return aluno;
});

console.log(mediaAlunos);
