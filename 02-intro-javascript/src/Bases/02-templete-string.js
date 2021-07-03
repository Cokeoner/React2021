//templete string ( tecla trabajo AltGr + tecla ]}``)

const nombre = 'Miguel';
const apellido = 'Martinez';

//concatenacion normal
const NombreCompleto = nombre + ' ' + apellido;
//concatecion nueva 
const NombreCompletos =`${nombre } ${apellido} ${1+1}`;

console.log(NombreCompleto, NombreCompletos);


function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${ getSaludo( nombre ) }`);

