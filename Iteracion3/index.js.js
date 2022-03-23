
/*Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.*/

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(array) {
    let resul = 0 ;
    
    for (let i = 0; i < array.length; i++) {

    resul += array[i];
      
    }
  return console.log(resul);
}
sumAll(numbers);

