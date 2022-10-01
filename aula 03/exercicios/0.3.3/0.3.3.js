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
    especialidades: ['obstetra', 'gineco'],
  },
];

/* medicos.forEach((medico) => {
  if (medico.genero === 'feminino') {
    medico.apresentacao = `Dr(a) ${medico.nome} ${medico.sobrenome}`;
  } else if (medico.genero === 'masculino') {
    medico.apresentacao = `Dr. ${medico.nome} ${medico.sobrenome}`;
  } else {
    medico.apresentacao = `Dr(e) ${medico.nome} ${medico.sobrenome}`;
  }
  console.log(medico.apresentacao);
}); */

// if else
/* const novoArray = medicos.map((medico) => {
  const { genero } = medico;
  const _medico = structuredClone(medico);
  if (genero === 'feminino') {
    _medico.apresentacao = `Dr(a) ${_medico.nome} ${_medico.sobrenome}`;
  } else if (genero === 'masculino') {
    _medico.apresentacao = `Dr. ${_medico.nome} ${_medico.sobrenome}`;
  } else {
    _medico.apresentacao = `Dr(e) ${_medico.nome} ${_medico.sobrenome}`;
  }
  return _medico;
});
console.log(novoArray);
console.log(medicos); */

medicos.forEach((medico) => {
  switch (medico.genero) {
    case 'feminino':
      medico.apresentacao = `Dr(a) ${medico.nome} ${medico.sobrenome}`;
      break;
    case 'masculino':
      medico.apresentacao = `Dr. ${medico.nome} ${medico.sobrenome}`;
      break;
    case 'nao-binario':
      medico.apresentacao = `Dr(e) ${medico.nome} ${medico.sobrenome}`;
      break;
  }
});

console.log(medicos);
