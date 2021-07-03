

//Arreglos en JS

//const arreglo = new Array( 100 );

//arreglo.push(1);

//console.log(arreglo);

//declarar arreglo 
//const arreglos = [];
//No es recomendable el pushe
//arreglos.push(1);

//console.log(arreglos);



//otra forma de declarar arreglos

const arreglo = [1,2,3,4];

let arreglo2 = [...arreglo, 5 ];

const arreglo3  = arreglo2.map( function(numero){
   return numero * 2;
} );
//arreglos3.push(5);

console.log( arreglo )

console.log( arreglo2 )

console.log( arreglo3 )