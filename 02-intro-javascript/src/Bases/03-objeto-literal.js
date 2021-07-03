
  const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
         ciudad: 'New York',
         zip: 33323442,
         lat: 232.323,
         lng: 32.232,
    }
  };

 // console.table({
 //     persona
 //   });

 
 
 //copia las refernecias de persona 1 a persona 2
 //const persona2 = persona;
 //persona2.nombre = 'peter';
 

 const persona2 = { ...persona };
 persona2.nombre = 'peter';
 
 console.log( persona );
 console.log(persona2);