import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {



    const [inputValue, setinputValue] = useState('')

    const handleInputChanche = (e) => {
        setinputValue(e.target.value);

        console.log('HandleInputChange llamado');
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit', inputValue)
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);

            setinputValue('');
        }

        console.log('dsdsd')
        //console.log('submit hecho')
    }


    return (
        <form onSubmit={handleSubmit}>
            <p> {inputValue} </p>
            <input
                type="Text"
                value={inputValue}
                onChange={(e) => handleInputChanche(e)}
            />

        </form>
    )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}
