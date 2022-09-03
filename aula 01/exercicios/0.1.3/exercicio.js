const anos = ['2012', '2010', '2020', '2022', '2035', '2045'];
const anoBusca = 2022;

function retornaAno(anos, anoBusca) {
  for (let i = anos; i <= anos.length; i++) {
    if (anos <= anoBusca) {
      console.log(anos[i]);
    }
  }
}
retornaAno(anos, anoBusca);
