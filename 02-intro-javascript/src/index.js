const activo = true;


//Modo normal de hacer un condicion

// let mensaje = '';

// if(activo){
//    mensaje = 'activo';
// }else{
//   mensaje = 'desactivado';
// }



//CONDICION TERNARIO 
  // ESTE CASO REGRESA VALIR EN TRUE Y FALSE 
  //Caso1
const mensaje = ( activo ) ? 'Activo' : 'Inactivo';
  // ESTE CASO MANDA UN NULL SI ES INCORRECTO
const mensaje2 = ( activo ) ? 'Activo' : null;
  //ESTE CASO SOLO REGRESA SI LA CONDICION CUMPLE
      //SE UTILIZA MUCHO SOLO ES IF SIN EL ELSE 
const mensaje3 = activo && 'Activo'

console.log('Este es el caso 1: ' + mensaje);
console.log('Este es el caso 2: ' + mensaje2);
console.log('Este es el caso 3: ' + mensaje3);