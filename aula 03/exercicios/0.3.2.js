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

//enunciado 3
/* const concluidasMenosDe30Dias = tarefas.filter(function (tarefa) {
  if (tarefa.concluida === true && tarefa.dias <= 30) {
  }
  console.log(concluidasMenosDe30Dias);
}); */

const concluidasEMenos30Dias = tarefas.filter(
  ({ concluida, dias }) => concluida === true && dias < 30
);
console.log(concluidasEMenos30Dias);
