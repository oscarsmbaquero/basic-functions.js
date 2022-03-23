/* Crea una función que reciba por parámetro un array y
 cuando es un valor number lo sume 
 y de lo contrario 
cuente la longitud del string y lo sume. 
Puedes usar este array para probar tu función:*/

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
const averageWord = (list) => {
    let acc = 0;
  
  list.forEach((element) => {
    
    // console.log(element);
    if(typeof element === 'number'){
        // console.log(element);
        acc += element;
    } else {

        acc += element.lenght;
        // console.log(element.length);
    }
 
});
 return acc;
}

const result = averageWord(mixedElements);
console.log(result);