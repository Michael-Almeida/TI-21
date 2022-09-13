const anos = ['2012', '2010', '2020', '2022', '2035', '2045'];
const anoBusca = 2022;

function retornaAnoMenorQueBusca(anos, anoBusca) {
  console.log(`Os anos anteriores ao ano ${anoBusca} são:`);
  for (let i = 0; i < anos.length; i++) {
    if (anos[i] < anoBusca) {
      console.log(anos[i]);
    }
  }
}

retornaAnoMenorQueBusca(anos, 2022);

retornoAnoMaiorQueBusca = (anos, anoBusca) => {
  console.log(`Os anos anteriores ao ano ${anoBusca} são:`);
  for (let i = 0; i < anos.length; i++) {
    if (anos[i] >= anoBusca) {
      console.log(anos.length);
    }
  }
};
retornoAnoMaiorQueBusca(anos, 2035);
