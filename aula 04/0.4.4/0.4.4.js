const arquivos = [
  {
    id: 1,
    nome: 'Meu Trabalho v1',
    excluido: false,
  },
  {
    id: 2,
    nome: 'Meu Trabalho v2',
    excluido: false,
  },
  {
    id: 3,
    nome: 'Meu Trabalho v3',
    excluido: false,
  },
  {
    id: 4,
    nome: 'Meu Trabalho v4',
    excluido: true,
  },
];

arquivos.forEach((arquivo) => {
  if (arquivo.arquivos === true) {
    arquivo.apresentacao = `Dr(a) ${arquivo.nome} ${arquivo.sobrenome}`;
  } else if (arquivo.genero === 'masculino') {
    arquivo.apresentacao = `Dr. ${arquivo.nome} ${arquivo.sobrenome}`;
  } else {
    arquivo.apresentacao = `Dr(e) ${arquivo.nome} ${arquivo.sobrenome}`;
  }
  console.log(arquivo.apresentacao);
});
