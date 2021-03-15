import React from 'react';
import PropTypes from 'prop-types';
const Clima = ({resultado}) => {

    const {name, main} = resultado;  
    if(!name) return null

    //Grados Kelvin - La API retorna la temperatura en grados Kelvin - Para pasar a grados C restamos 273.15
    const kelvin = 273.15; 
    return ( 
    <div className="card-panel black col s12">
        <div className="white-text">
            <h2>El clima de {name} es:</h2>
            <p className="temperatura">{parseFloat(main.temp-kelvin, 10).toFixed(2)}<span>&#8451;</span></p>
            <p>Temperatura max: {parseFloat(main.temp_max-kelvin, 10).toFixed(2)}<span>&#8451;</span></p>
            <p>Temperatura min: {parseFloat(main.temp_min-kelvin, 10).toFixed(2)}<span>&#8451;</span></p>
        </div>
    </div> );
}
 

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
  }
export default Clima;