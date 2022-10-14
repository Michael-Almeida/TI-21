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

let flat = [];

const extraiArquivo = (_arquivos) => {
  _arquivos.forEach((arquivo) => {
    if (!arquivo.arquivos) {
      flat.push(arquivo);
      return;
    }
    extraiArquivo(arquivo.arquivos);
  });
};
extraiArquivo(arquivos);
console.log(flat);
