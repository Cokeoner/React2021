
   //CLASE NUMERO 50
    // test('Debe de ser true', () => {

    // const isActive = true;

    // if(isActive){
    //     throw new Error('No esta activo') 
    // }

    // })


    //CLASE NUMERO 51
describe('Pruebas en el archivo demo.test.js', () => {


    test('Debe de ser iguales los strings', () => {    

        //1. Inicializacion 
        const mensaje = 'Hola Mundo';

        //2. estimulo
        const mensaje2 = `Hola Mundo`

        //3. Observar elk comportamiento 
        expect(mensaje).toBe(mensaje2); // es igual a ===
    })


});


