/* Crea una función que reciba por parámetro un array y
 cuando es un valor number lo sume 
 y de lo contrario 
cuente la longitud del string y lo sume. 
Puedes usar este array para probar tu función:*/

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];


const averageWord = (list) => {
    let acm = 0;
  
  list.forEach((element) => {
    
    // console.log(element);
    if(typeof element === 'number'){
        console.log(element);
        acm += element;
     }else {
        console.log(element.length);
        acm += element.lenght;
     }
    
});
   return acm;

}
const result = averageWord(mixedElements);
console.log(result);