/*Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
  Puedes usar este array para probar tu función:*/

  const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

const result = (param) =>{

  let counter ={ };

  for( let i =0; i < param.length; i++ ){
    const element = counterWords[i];
    //console.log(element);
    
   if (param[i] in counter){

     counter[param[i]]++;
   }else{

     counter[param[i]] = 1;
   }
  }
  //return console.log(counter);

}

result(counterWords);