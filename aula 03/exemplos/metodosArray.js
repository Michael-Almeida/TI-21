const array = [1100, 12, 3345, 4, 10, 11];

const objetos = ['bola', 'café', 'sabão', 'melancia'];

/*
exemplo 1
console.log(array);
array.forEach(function (array) {
  console.log(array);
});
 */

/* 
exemplo 2
const callback = function (array) {
  console.log(array);
};
array.forEach(callback); */

/*
exemplo com arrow Function
array.forEach((array) => console.log(array));
 */

//forEach
array.forEach((array) => {
  if (array > 10) {
    console.log(array);
  }
});
/* 
//filter: retorna um novo array
//const novoArray = objetos.filter((array) => array >= 12);
const novoArray = objetos.filter(function(array){
  if(array<=30){console.log(array)}
})
 */
//rever filter

//some() pelo menos algum
