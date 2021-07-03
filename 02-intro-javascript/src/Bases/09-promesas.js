///////////////////////////////// PROMESAS 
import  { getHeroeByIDmc } from './Bases/08-imp-exp';
import heroes from './data/heroes';

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        const heroes = getHeroeByIDmc(2);
//        //console.log(heroes);
//        resolve(heroes);
//     }, 2000);
// });


// promesa.then((valor) => {
//     console.log(valor)
// })
// .catch( err => console.warn(err));

const getHeroeByIdAsync = (id) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
       const heroes = getHeroeByIDmc(id);
       //console.log(heroes);
       if(heroes === undefined){
        reject("El Heroe no existe");
       }else{
        resolve(heroes);
       }
    }, 2000);
}); 
}

getHeroeByIdAsync(2)
    .then(console.log)
    .catch( console.warn);