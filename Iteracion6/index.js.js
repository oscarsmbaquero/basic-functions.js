// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
// en caso que existan los elimina para retornar un array sin los elementos duplicados

const food = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
 for (let i = 0; i < array.length; i++) {
     const element = array[i];
     
 }console.log();
 

    let result = food.filter((item,index)=>{
      return food.indexOf(item) === index;
    })
    console.log(result);

