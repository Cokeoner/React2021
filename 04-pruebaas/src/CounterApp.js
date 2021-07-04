import React, { useState } from 'react'

import PropTypes from 'prop-types'

const CounterApp = ( { value = 10 } ) => {

    const [counter, setCounter ] = useState( value );
  
    // function setCounter() => {

    // };


    //handeAdd
    const handeAdd = (e) => { 
        setCounter(counter + 1);
        // setCounter((c) => c + 1);
    } 

    const handeReset = (e) => setCounter(value); 


    return(
            <div>
                <h1>Counter</h1>
                <h2> { counter } </h2>
                <button onClick={ handeAdd }> +1 </button>
                <button onClick={ handeReset }> Reset </button>
                <button onClick={ (e) =>{ setCounter(counter - 1)} }> -1 </button>
            </div>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number
}


export default CounterApp;


 