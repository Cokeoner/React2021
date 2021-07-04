import React from 'react';
import { shallow } from 'enzyme'
// import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import CounterApp from  "../CounterApp";

describe('Debe de mostrar el CounterApp', () => {
    let Wrapper;

    beforeEach(() => {
        Wrapper = shallow( <CounterApp />);
    })

    test('Valores por Defecto', () => {
        // const saludo = 'Hola soy goku';
       

        expect( Wrapper).toMatchSnapshot();
    });
    
    test('Debe de mostrar el valor 100', () => {
        
        const valors = '100';

        const Wrapper = shallow(
                <CounterApp 
                  value = { valors }
                />);
        const conteeValors = Wrapper.find('h2').text().trim();

        expect(conteeValors).toBe(valors);

    })
    
    test('Debe de incrementar el valor del boton +1', () => {
        
        Wrapper.find('button').at(0).simulate('click');
        const conteeValors = Wrapper.find('h2').text().trim();

        expect(conteeValors).toBe('11');

    })

    test('Debe de incrementar el valor del boton -1', () => {
        
        Wrapper.find('button').at(2).simulate('click');
        const conteeValors = Wrapper.find('h2').text().trim();

        expect(conteeValors).toBe('9');

    })

    test('Debe de incrementar el valor del boton default', () => {
        
        Wrapper.find('button').at(1).simulate('click');
        const conteeValors = Wrapper.find('h2').text().trim();

        expect(conteeValors).toBe('10');

    })


});
