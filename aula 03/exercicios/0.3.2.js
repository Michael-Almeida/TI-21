const tarefas = [
  {
    titulo: 'Passear com o cachorro',
    concluida: false,
    dias: 10,
  },
  {
    titulo: 'Comprar leite',
    concluida: false,
    dias: 5,
  },
  {
    titulo: 'Lavar louça',
    concluida: true,
    dias: 60,
  },
];
//Enunciado 1
console.log('Tarefas concluídas:');
const tarefasConcluidas = tarefas.filter(({ concluida }) => concluida === true);
console.log(tarefasConcluidas);

//enunciado 2
const tarefasNaoConcluidas = tarefas.filter(
  ({ concluida }) => concluida === false
);
console.log('Tarefas não concluídas:');
console.log(tarefasNaoConcluidas);
