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

/* const mediaGeral = alunos.map((nota) => {
  const somaNotas = (nota.notas += nota.notas);
  console.log(somaNotas);
}); */
const mediaGeral = alunos.reduce((acumulador, _nota) => {
  const resultado = _nota.notas[i].nota + acumulador;
  /*  _nota.notas[1].nota; */
  return resultado;
}, 0);
console.log(mediaGeral);
