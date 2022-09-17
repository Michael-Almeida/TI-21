const usuario = Object.freeze({
  dadosUsuario: [
    {
      nome: 'João',
      dataNascimento: '24/10/83',
      genero: 'M',
      nInscricao: 123456,
      filme: 'O massacre da serra elétrica',
    },
  ],
  avaliacoes: [
    {
      descricao: 'Não aprofunda os personagens',
      nota: 4,
      indicaria: 'Nao',
    },
    {
      descricao:
        'A história se arrasta e acaba ficando muito massante, mas é bem bacana os efeitos visuais ',
      nota: 8,
      indicaria: 'sim',
    },
    {
      descricao: 'Excelentes efeitos visuais, história bem amarrada',
      nota: 10,
      indicaria: 'sim',
    },
  ],
});
console.log(usuario);
//console.log(usuario.avaliacoes[0]);
