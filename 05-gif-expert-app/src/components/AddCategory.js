import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( {setCategories}) => {

    

    const [inputValue, setinputValue] = useState('')

    const handleInputChanche = (e) => {
        setinputValue( e.target.value );
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(cats => [ ...cats, inputValue]);
            console.log('sdsdsd')
            setinputValue('');
        }

console.log('dsdsd')
        //console.log('submit hecho')
    }


    return (
        <form onSubmit={ handleSubmit }>

            <input 
                type = "Text"
                value = {inputValue}
                onChange={ (e) => handleInputChanche(e)}
            />

        </form>
    )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}
