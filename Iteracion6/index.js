// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
// en caso que existan los elimina para retornar un array sin los elementos duplicados

const food = [
  'sushi',//no
  'pizza',/////////////////////si
  'burger',//no
  'potatoe',//no
  'pasta',////////////////////si
  'ice-cream',//no
  'pizza',////////////////duplicada
  'chicken',//no
  'onion rings',//no
  'pasta',///////////////duplicada
  'soda'//no
];


console.log([... new Set(food)]);
// const removeDuplicates = (list) =>{
// let res = [];
// //console.log(list);
// list.forEach(element => {
//   // let alreadyExist = false;
//   //console.log(element);
//   res.forEach(item => {
//     if(item === element){
//       alreadyExist = true;
//     }
    
//   });
//   if(alreadyExist === false){
    
//     res.push(element);
//   }
  
  
// });
// return res;
// }

// const resul =removeDuplicates(food);
// console.log(resul);
