const conferencias = [
  {
    nome: 'BrazilJS',
    publico: 20_000,
  },
  {
    nome: 'JSConf UE',
    publico: 10_000,
  },
  {
    nome: 'TDC',
    publico: 3_000,
  },
  {
    nome: 'React Conf 2022',
    publico: 10_000,
  },
];

conferencias.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
});
console.log(conferencias);
