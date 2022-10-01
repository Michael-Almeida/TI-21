const filmes = [
  {
    nome: 'O Senhor do Aneis: A Sociedade do Anel',

    lancamento: 2002,
    diretores: ['Peter Jackson'],
    generos: ['Fantasia', 'Aventura'],
  },
  {
    nome: 'Harry Potter e a Pedra Filosofal',

    lancamento: 2001,
    diretores: ['Chris Columbus'],
    generos: ['Fantasia'],
  },
  {
    nome: 'Matrix',
    lancamento: 1999,
    diretores: ['Lana Wachowski', 'Lilly Wachowski'],
    generos: ['Ação', 'Ficção Cientifica'],
  },
];

filmes.forEach((filme, indice) => {
  filme.id = indice + 1;
  console.log(`${indice}- ${filme.nome}: ${filme.lancamento}`);
});

console.log(filmes);