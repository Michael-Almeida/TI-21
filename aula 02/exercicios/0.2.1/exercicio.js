const serie1 = Object.freeze({
  titulo: 'Peaky Blinders',
  temporadas: 6,
  ano: 2006,
  cidade: 'Bermingham',
  personagens: [
    {
      nome: 'Tomas Shelbi',
      idade: 42,
    },
    {
      nome: 'Arthur Shelbi',
      idade: 37,
    },
    {
      nome: 'Ada Shelbi',
      idade: 28,
    },
  ],
});

const serie2 = {
  titulo: 'La casa de papel',
  temporadas: 4,
  ano: 2019,
  cidade: 'Berlim',
  personagens: [
    {
      nome: 'Tokio',
      genero: 'mulher',
    },
    {
      nome: 'Berlim',
      genero: 'Homem',
    },
    {
      nome: 'Nairobi',
      genero: 'Mulher',
    },
  ],
};

const serie3 = {
  nome: 'Gotham',
  temporadas: 3,
  ano: 2014,
  cidade: 'Gotham city',
  personagens: [
    {
      nome: 'Coringa',
      arma: false,
      vilao: true,
    },
    {
      nome: 'Batman',
      arma: false,
      vilao: false,
    },
    {
      nome: 'Jim Gordon',
      arma: true,
      vilao: false,
    },
  ],
};
console.log(serie1);
const series = [serie1, serie2, serie3];
