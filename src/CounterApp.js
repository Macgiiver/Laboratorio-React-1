import * as React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const CounterApp = ({value}) =>{

    if(!value){
        throw new Error('The value is null, is requierd')
    }

    const handleAdd = (e) => {
        console.log(e);
    }

    return(
        <React.Fragment>
            <h1>CounterApp</h1>
            <h2>{value}</h2>
            <button onClick={handleAdd}>+1</button>
        </React.Fragment>
    );
}

CounterApp.prototype = {
    value: PropTypes.number.isRequired
}

export default CounterApp;

//rafcp "creates a funcional component"