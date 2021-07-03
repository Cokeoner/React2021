import { getImagen } from "../../base/11-async-await";

describe('Describe las Pruebas de 11-async-await.test', () => {

    test('Debe de retornar el Url de la imagen', async () => {
        
        const url = await getImagen();
        console.log(url);
         expect( url.includes('https://')).toBe(true);
        
    })
    

    
});