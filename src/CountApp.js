import PropTypes from 'prop-types'
import { useState } from 'react';

const CounterApp = ({value = 0}) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => setCounter(counter + 1)
    const handleSustract = () =>  setCounter(counter - 1)
    const handleReset = () =>   setCounter(value)

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>Aumentar</button>
            <button onClick={handleSustract}>Disminuir</button>
            <button onClick={handleReset}>Restaurar</button>
        </>
    ); 
};

CounterApp.prototype = {
    value: PropTypes.number
}

export default CounterApp;