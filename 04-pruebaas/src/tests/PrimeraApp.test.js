import { render } from "@testing-library/react";
import PrimeraApp from  "../PrimeraApp";
import React from 'react';

describe('Pruebbas PrimeraApp', () => {
    
    test('Debe de mostrar el mensaje "Hola soy goku"', () => {
        
        const saludo = 'Hola soy goku';
        
        const {getByText} = render(<PrimeraApp saludo= { saludo }/>);

        expect( getByText(saludo)).toBeInTheDocument();

    });
    

});