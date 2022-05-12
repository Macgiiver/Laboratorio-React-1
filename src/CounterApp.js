import * as React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const CounterApp = ({ value = 10 }) => {

    const [counter, setCounter] = React.useState(10);


    if (!value) {
        throw new Error('The value is null, is requierd')
    }

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleReset = () => {
        setCounter(value);
    }

    const handleRemove = () => {
        setCounter(counter -1);
    }

    return (
        <React.Fragment>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleRemove}>-1</button>
        </React.Fragment>
    );
}

CounterApp.prototype = {
    value: PropTypes.number.isRequired
}

export default CounterApp;

//rafcp "creates a funcional component"