import React from "react";
import { createRoot }  from "react-dom/client";
import CounterApp from "./CounterApp";
//import PrimeraApp from "./PrimeraApp";


const root = createRoot(document.getElementById('root'));

root.render( <CounterApp value={10} /> );

