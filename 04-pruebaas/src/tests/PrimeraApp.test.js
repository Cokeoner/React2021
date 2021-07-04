import React from 'react';
import { shallow } from 'enzyme'
// import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import PrimeraApp from  "../PrimeraApp";

describe('Pruebbas PrimeraApp', () => {
    
    // test('Debe de mostrar el mensaje "Hola soy goku"', () => {  
    //     const saludo = 'Hola soy goku';
    //     const {getByText} = render(<PrimeraApp saludo= { saludo }/>);
    //     expect( getByText(saludo)).toBeInTheDocument();
    // });

    test('Debe mostrar <PrimeraApp /> correctamente', () => {
       
        const saludo = 'Hola soy goku';
        const Wrapper = shallow( <PrimeraApp saludo= { saludo }/>)

        expect( Wrapper).toMatchSnapshot();

    });
    
    test('Dee de mostrar el susbstitulo enviado por props', () => {
        
        const saludo = 'Hola soy goku';
        const subtitulo = 'Soy un Subtitulo';
        const Wrapper = shallow( 
                <PrimeraApp 
                        saludo= { saludo }
                        subtitulo ={ subtitulo} 
                
                />)

        const TextoParrado = Wrapper.find('p').text();

        expect( TextoParrado).toBe(subtitulo);

    })
    
    

});