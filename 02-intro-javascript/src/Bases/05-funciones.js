//Funciones en JS

//Este tipo de funciones es problable a que se planchen con alguna asignacion por lo que no es
//recomendable el uso de ellas 
function saludar(nombre){
  return `Hola, ${nombre}`;
}

//Por otro lado es mejor el uso de una constante para no planchar la informacion que ya tenemos 
const saludars = function(nombre){
  return `Hola, ${ nombre }`;
}


console.log(saludar);


//funcion para solo mas de un regreso
const saludar2 = (nombre) => {
    return `Hola, ${ nombre }`;
}

//funcion para solo un return 
const saludar3 = (nombre) => `Hola, ${ nombre }`;

//funcion para solo un return  y que no resiva argumentos
const saludar4 = () => `Hola Mundo`;

//FUNNCION QUE REGRESA MAS DE UN VALOR DENTRO DE UN RETURN
const getUser = () => {
    return{
        uid: 'ABC',
        username: 'ElPapi12'
    }
}

//FUNNCION QUE REGRESA MAS DE UN VALOR DENTRO DE UN RETURN EN UNA SOLA LINEA
const getUserS = () => ({
        uid: 'ABC',
        username: 'ElPapi122'
    });


//TAREA DE LA CLASE 

function getUsuarioActivo( nombre ) {
    return{
        uid: 'asaas',
        username: nombre
    }
}

const usuarioactivo = getUsuarioActivo('Fernando');
console.log(usuarioactivo);


//1.- TRASFORMAR A UNA FUNCION DE FLECHA
//2.- TIENE QUE RETORNAR UN OBJETO IMPLICITO
//3.- PRUEBAS

const getUsuarioActivo1 = ( nombre ) => ({
        uid: 'asaas',
        username: nombre
});

console.log(getUsuarioActivo1('juan'));