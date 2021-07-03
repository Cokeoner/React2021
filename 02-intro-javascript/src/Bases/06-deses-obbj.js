//Desestructuracion 
//Asignacion Desestructurante 

//metodo sin desestructuracion 

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

console.log ( persona.nombre );
console.log ( persona.edad );
console.log ( persona.clave );

//metodo con desestruracion

const { nombre, edad, clave } = persona;

console.log ( nombre);
console.log ( edad);
console.log ( clave);


// funcion para retornar 

const retornaPersona = ({nombre, edad, rango = 'Capitan'}) => {
    console.log(nombre, edad, rango)
}

retornaPersona( persona );

// funcion para retornar los valores especificos

const aContext = ({clave, rangonombre, edad, rango = 'Capitan'}) => {
    return {
        nombreClave: clave,
        anios: edad
    }
}


const {nombreClave,anios} = aContext( persona );



console.log(nombreClave, anios);


// funcion para retornar los valores especificos

const aaContext = ({clave, edad,  }) => {
    return {
        nombreClaves: clave,
        anioss: edad,
        latlong: {
            lat: 23232,
            log: 323
        }
    }
}


const {nombreClaves,anioss, latlong:{lat,log}} = aaContext( persona );



console.log(nombreClaves, anioss);
console.log(lat,log);