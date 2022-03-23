/*Completa la función que tomando un array de strings como argumento devuelva el más largo, 
        en caso de que dos strings tenga la misma longitud deberá devolver el primero.*/

        const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain Me.'];
        
        function findLongestWord(list) {
        let largeWord = list[0];
        // console.log(largeWord);
         console.log(largeWord.length);
             for (let i = 0; i < avengers.length; i++){
                if(list[i].length>largeWord.length ){
                    largeWord = list[i];
                }
                 
             }return console.log(largeWord);


        }
        
        findLongestWord(avengers);