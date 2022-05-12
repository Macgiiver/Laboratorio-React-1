import * as React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const PrimeraApp = ({saludo, caption}) => {

   if(!saludo){
       throw new Error('the saludo is required')
   }

    return (
        <React.Fragment>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo,null ,3)}</pre> */}
            <p>{caption}</p>
        </React.Fragment>
    );
}

PrimeraApp.prototype = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps ={
    caption: 'I am a caption'
}

export default PrimeraApp;