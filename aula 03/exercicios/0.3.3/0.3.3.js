const medicos = [
  {
    nome: 'Leticia',
    sobrenome: 'Costa',
    genero: 'feminino',
  },
  {
    nome: 'Adimaldo',
    sobrenome: 'Pinto',
    genero: 'masculino',
  },
  {
    nome: 'Noah',
    sobrenome: 'Lutus',
    genero: 'nao-binario',
  },
];

const novoArray = medicos.map((medico) => {
  if (medico.genero === 'feminino') {
    medico.genero = `Dr(a) ${medico.nome} ${medico.sobrenome}`;
  } else if (medico.genero === 'masculino') {
    medico.genero = `Dr. ${medico.nome} ${medico.sobrenome}`;
  } else {
    medico.genero = `Dr(e) ${medico.nome} ${medico.sobrenome}`;
  }
  console.log(medico.genero);
});
