import heroes, {owners} from '../data/heroes';


//Codigo muy largo de funcion que llama informacion de un array 

const getHeroeByID = (id) => {
    return heroes.find( ( heroes ) => {
        if ( heroes.id === id){
            return true;
        }else{
            return false;
        }
    });
}

//console.log(getHeroeByID(2));

//Codigocorto muy largo de funcion que llama informacion de un array 

const getHeroeByIDc = (id) => {
    return heroes.find(heroes => heroes.id === id)
}
//
//console.log(getHeroeByIDc(2));

//Codigo muy corto muy largo de funcion que llama informacion de un array 
// EL METODO FIND SOLO REGRESA UN SOLO VALOR 
export const getHeroeByIDmc = (id) => heroes.find(heroes => heroes.id === id);

//console.log(getHeroeByIDmc(2));

////////////////////////////////////////////////////////////////

// EL METODO FILTER REGRESA MAS DE 1 VALOR 
export const getHeroeByOwner = (owner) => heroes.filter(heroes => heroes.owner === owner);


//console.log(getHeroeByOwner('DC'));


/////////////////////////////////////////////////////////////////////////////
                //MULTIPLES EXPORTACIONES Y EXPORTACIONES POR DEFECTO

