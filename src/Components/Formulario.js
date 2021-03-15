import React, {useState} from 'react';
import Error from '../Components/Error';
import PropTypes from 'prop-types';

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {
    
    //state para el error
    const [error, guardarError] = useState(false);

    // extraer ciudad y pais
    const {ciudad, pais} = busqueda;

    //funcion que coloca los elementos en el state
    
    const handleChange = e => {
        //actualizarBusqueda
        guardarBusqueda({
        ...busqueda,
        [e.target.name] : e.target.value
        });
    }

    //cuando el usuario da submit al form
    const handleSubmit = e =>{
        e.preventDefault();
        //Validar
        if(ciudad.trim() ==='' || pais.trim() ==='' ){
            guardarError(true);                    
            return;  
        }
        guardarError(false);
        guardarConsultar(true);    
    }

    
    return (  
        
        <form
            onSubmit={handleSubmit}
        >   
            {error?<Error mensaje="Debe llenar todos los campos"/>:null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad:</label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                  <option value="">-- Seleccione un país --</option>
                  <option value="USA">-- Estados Unidos --</option>
                  <option value="CR">-- Costa Rica --</option>
                  <option value="MX">-- México --</option>
                  <option value="AR">-- Argentina --</option>
                  <option value="CO">-- Colombia --</option>
                  <option value="ES">-- España --</option>
                  <option value="PE">-- Perú --</option>
                </select>    
                <label htmlFor="pais">País:</label>
            </div>
            <div className="input-field col s12">
                <button                    
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block green accent-4 col s12"
                >
                Buscar Clima
                </button>
            </div>
        </form>
    );
}

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    guardarBusqueda: PropTypes.func.isRequired,
    guardarConsultar: PropTypes.func.isRequired
}

export default Formulario;


                