import React from 'react';
import { shallow } from 'enzyme'
// import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import CounterApp from  "../CounterApp";

describe('Debe de mostrar el CounterApp', () => {

    test('Valores por Defecto', () => {
        // const saludo = 'Hola soy goku';
        const Wrapper = shallow( <CounterApp />)

        expect( Wrapper).toMatchSnapshot();
    });
    
    test('Debe de mostrar el valor 100', () => {
        
        const valors = '100';

        const wrapper = shallow(
                <CounterApp 
                  value = { valors }
                />);
        const conteeValors = wrapper.find('h2').text().trim();

        expect(conteeValors).toBe(valors);

    })
    
});
