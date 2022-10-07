const arquivos = [
  {
    nome: 'Filmes',
    arquivos: [
      {
        nome: 'Comedia',
        arquivos: [
          {
            nome: 'Mr. Bean',
          },
          {
            nome: '2021',
            arquivos: [
              {
                nome: 'Nice Guy',
              },
            ],
          },
        ],
      },
      {
        nome: 'Harry Potter Ordem da Fênix',
      },
    ],
  },
];

const novoArray = arquivos.filter((arquivo) => {
  console.log(arquivo.nome);
});

listarArquivos = (_arquivo) => {
  if (arquivos == null) {
    console.log('vazio');
  }
};
