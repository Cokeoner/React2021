// Desestructuracion  de arreglos

const personajes = [ 'Goku','Vegeta','Trunks' ];
// para renombrar todo los datops y remplazarlos se aprieta la tecla f2
const [p1,p2,p3] = personajes;

console.log(p1);
console.log(p2);
console.log(p3);

// funcion que regresa un arreglo 

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [abc,num] = retornaArreglo();

console.log(abc,num);

// Tarea

const aState = (valor) => {
    return [valor, () => {
        console.log('Hola Mundo');
    }];
}

const arr = aState('coke');
console.log(arr);

arr[1]();

//tarea
//1./ el primer valor del arr se llamara nombre
//2./ el segundo valor set nombre 

const aaState = (valor) => {
    return [valor, () => {
        console.log('Hola Mundo');
    }];
}

const [ , setNombre] = aaState('coke');


setNombre();