import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";
import '@testing-library/jest-dom';

describe('Describbe la clase AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambbiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('No debe de postear la informacion con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).not.toHaveBeenCalled();
    });


});