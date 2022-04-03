const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];


const averageWord = (list) => {
    let acc = 0;
  
  list.forEach((element) => {
     //console.log(element);
    if(typeof element === 'number'){
        console.log(element);
        acc += element;
     }else {
        console.log(element.length);
        acc += element.length;
     }
    
});
   return acc;

}
const result = averageWord(mixedElements);
console.log(result);